// LogiCheck Lens - Background Service Worker
// Handles context menu creation, keyboard shortcuts, and API communication

// Import runtime config helper (ES module compatible with service worker)
import { getApiKey } from './config.js';

// Initialize API key and endpoints lazily
let GOOGLE_AI_API_KEY = null;
let MODEL_ENDPOINTS = null;

async function ensureApiKeyLoaded() {
  if (!GOOGLE_AI_API_KEY) {
    GOOGLE_AI_API_KEY = await getApiKey();
    if (GOOGLE_AI_API_KEY) {
      MODEL_ENDPOINTS = [
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_AI_API_KEY}`
      ];
      console.log('Gemini API Key loaded at runtime:', 'Successfully');
    } else {
      console.warn('Gemini API Key not found in chrome.storage.local');
    }
  }
}

// Function to analyze text using Google AI (Gemini) with fallback
async function analyzeTextWithGoogleAI(selectedText) {
  let lastError = null;
  
  // Ensure API key and endpoints are loaded
  await ensureApiKeyLoaded();
  
  // Validate API key first
  if (!GOOGLE_AI_API_KEY) {
    return {
      success: false,
      error: 'API key tidak ditemukan. Silakan set GEMINI_API_KEY melalui extension options.'
    };
  }
  
  if (!MODEL_ENDPOINTS || MODEL_ENDPOINTS.length === 0) {
    return {
      success: false,
      error: 'Gemini API key belum dikonfigurasi. Silakan set API key melalui extension options.'
    };
  }

  // Try each model endpoint until one works
  for (let i = 0; i < MODEL_ENDPOINTS.length; i++) {
    try {
      console.log(`Trying model endpoint ${i + 1}/${MODEL_ENDPOINTS.length}...`);
      const result = await tryAnalyzeWithEndpoint(MODEL_ENDPOINTS[i], selectedText);
      console.log('✅ Analysis successful with endpoint:', MODEL_ENDPOINTS[i]);
      return result;
    } catch (error) {
      console.warn(`❌ Endpoint ${i + 1} failed:`, error.message);
      lastError = error;
      // Continue to next endpoint
    }
  }
  
  // If all endpoints failed, return error with detailed message
  return {
    success: false,
    error: lastError?.message || 'All model endpoints failed'
  };
}

// Helper function to try analysis with a specific endpoint
async function tryAnalyzeWithEndpoint(apiUrl, selectedText) {
  // Construct a direct, streamlined prompt
  const prompt = `
Analyze the following text for its logical structure. Your response MUST be a single, minified JSON object with the following keys: "mainClaim", "assumptions", "fallacies", "socraticQuestion".

- "mainClaim": A one-sentence summary of the author's central argument.
- "assumptions": A list of key unstated beliefs.
- "fallacies": A list of objects, where each object has "fallacyName", "quote", and "explanation".
- "socraticQuestion": A single, open-ended Socratic question based on the text's weakest point.

If a key has no findings, return an empty string or an empty list. Do not add any text outside of the JSON object.

Text to analyze: "${selectedText}"
`;

  // Prepare the request body
  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }]
  };

  // Create timeout controller
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  try {
    // Make the API call with timeout
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);

    // Check if the response is OK
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`;
      throw new Error(`API Error: ${errorMessage}`);
    }

    // Parse the response
    const data = await response.json();
    
    // Navigate the Gemini API's JSON structure
    const modelOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!modelOutput) {
      throw new Error('No valid response from the AI model');
    }

    // Parse the JSON output from the model
    // The model should return a JSON string, so we need to parse it
    let analysisResult;
    try {
      // Try to extract JSON from the response (in case there's extra text)
      const jsonMatch = modelOutput.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysisResult = JSON.parse(jsonMatch[0]);
      } else {
        analysisResult = JSON.parse(modelOutput);
      }
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', modelOutput);
      throw new Error('The AI response was not in valid JSON format');
    }

    // Validate the structure
    if (!analysisResult.mainClaim && !analysisResult.fallacies && !analysisResult.assumptions) {
      throw new Error('AI response missing required fields');
    }

    return {
      success: true,
      data: analysisResult
    };

  } catch (error) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - API took too long to respond (30s)');
    }
    throw error;
  }
}

// Create context menu item when extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "analyzeWithLogiCheck",
    title: "Analyze with LogiCheck",
    contexts: ["selection"]
  });
});

// Listen for context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "analyzeWithLogiCheck") {
    // Get the selected text
    const selectedText = info.selectionText;
    
    // First, tell content script to show loading state
    chrome.tabs.sendMessage(tab.id, {
      action: "showLoading",
      text: selectedText
    });

    // Analyze the text with Google AI
    const result = await analyzeTextWithGoogleAI(selectedText);

    // Send the result to content script
    chrome.tabs.sendMessage(tab.id, {
      action: "displayAnalysis",
      result: result
    });
  }
});

// Listen for keyboard shortcut commands
chrome.commands.onCommand.addListener((command) => {
  if (command === "analyze-text") {
    // Get the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        // Request selected text from content script
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "getSelectedText"
        });
      }
    });
  }
});

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "analyzeSelectedText") {
    const selectedText = request.text;
    
    // Analyze the text asynchronously
    analyzeTextWithGoogleAI(selectedText).then((result) => {
      // Send the result back to content script
      chrome.tabs.sendMessage(sender.tab.id, {
        action: "displayAnalysis",
        result: result
      });
      sendResponse({ status: "analysis complete" });
    }).catch((error) => {
      console.error('Error analyzing text:', error);
      chrome.tabs.sendMessage(sender.tab.id, {
        action: "displayAnalysis",
        result: {
          success: false,
          error: error.message
        }
      });
      sendResponse({ status: "analysis failed" });
    });
    
    return true; // Keep the message channel open for async response
  }
  return true;
});

// Support setting the API key at runtime (from an options page or dev console)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'setApiKey' && request.key) {
    try {
      if (chrome && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ GEMINI_API_KEY: request.key }, () => {
          // Reload key in memory
          GOOGLE_AI_API_KEY = request.key;
          MODEL_ENDPOINTS = [`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GOOGLE_AI_API_KEY}`];
          sendResponse({ status: 'ok' });
        });
        return true; // async
      }
    } catch (e) {
      console.error('Failed to set API key', e);
      sendResponse({ status: 'error', error: e.message });
    }
  }

  // Support clearing the key (allow empty string)
  if (request.action === 'setApiKey' && request.key === '') {
    try {
      chrome.storage.local.remove('GEMINI_API_KEY', () => {
        GOOGLE_AI_API_KEY = null;
        MODEL_ENDPOINTS = null;
        sendResponse({ status: 'ok' });
      });
      return true;
    } catch (e) {
      sendResponse({ status: 'error', error: e.message });
    }
  }

  return false;
});
