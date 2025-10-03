import { buildSocraticPrompt, callGeminiAPI } from '../config/gemini.js';

/**
 * Analyze an essay for argumentative quality
 * POST /api/clinic/analyze-essay
 */
export const analyzeEssay = async (req, res) => {
  try {
    const { essayText, apiKey } = req.body;

    // Validation
    if (!essayText || typeof essayText !== 'string' || essayText.trim().length === 0) {
      return res.status(400).json({
        error: {
          message: 'Please provide valid essay text to analyze',
          status: 400
        }
      });
    }

    if (essayText.length > 20000) {
      return res.status(400).json({
        error: {
          message: 'Essay is too long. Please limit to 20,000 characters.',
          status: 400
        }
      });
    }

    // Check if API key is provided (either from request or env)
    if (!apiKey && !process.env.GEMINI_API_KEY) {
      return res.status(401).json({
        error: {
          message: 'API key required. Please configure your Gemini API key in Settings.',
          status: 401
        }
      });
    }

    // Build the essay analysis prompt
    const prompt = buildSocraticPrompt(essayText, 'essay');

    // Call Gemini API with user's API key
    const aiResponse = await callGeminiAPI(prompt, apiKey);

    // Validate and structure the response
    const response = {
      annotations: Array.isArray(aiResponse.annotations) ? aiResponse.annotations : []
    };

    // Ensure each annotation has the correct structure
    response.annotations = response.annotations.map(annotation => ({
      targetText: annotation.targetText || '',
      feedbackCategory: annotation.feedbackCategory || 'General',
      comment: annotation.comment || 'No feedback provided.'
    }));

    res.json(response);

  } catch (error) {
    console.error('Error in analyzeEssay:', error);
    res.status(500).json({
      error: {
        message: 'Failed to analyze essay. Please try again.',
        status: 500,
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }
    });
  }
};
