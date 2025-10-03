# LogiCheck Lens - Browser Extension

Your conversational AI coach for sharpening logical reasoning in an era of mass information.

## 🚀 Quick Start Guide

### 1. Get Your Google AI API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Copy the generated API key (you'll need this in step 3)

### 2. Load the Extension in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the `extension` folder inside the LogiCheck project directory
6. The LogiCheck extension should now appear in your extensions list

### 3. Configure Your API Key

**IMPORTANT:** You must configure your API key before using the extension!

1. Right-click the LogiCheck extension icon in Chrome toolbar
2. Select **"Options"** from the menu
3. Paste your Gemini API key in the input field
4. Click **"Save API Key"**
5. (Optional) Click **"Test key"** to verify it works
   - ✅ Success: "Key test succeeded (valid and reachable)"
   - ❌ Error: Check your API key and try again

**🔐 Security Note:**
- Your API key is stored **locally** in your browser only
- It is **never uploaded** to any server
- Each user must configure their own API key

### 4. Start Using LogiCheckser Extension

Your conversational AI coach for sharpening logical reasoning in an era of mass information.

## 🚀 Quick Start Guide

### 1. Get Your Google AI API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Copy the generated API key (you'll need this in step 3)

### 2. Load the Extension in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the `extension` folder inside the LogiCheck project directory
6. The extension should now appear in your extensions list

### 4. Start Using LogiCheck

1. Open any webpage with text (e.g., Wikipedia, news article, blog)
2. Highlight/select a paragraph or section of text
3. Analyze the text using one of these methods:
   - **Method 1**: Right-click → **"Analyze with LogiCheck"**
   - **Method 2**: Keyboard shortcut: `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac)
4. A sidebar will appear from the right showing:
   - ⏳ Loading animation while analyzing (max 30 seconds)
   - 📊 Analysis results:
     - Main claim
     - Underlying assumptions
     - Logical fallacies (if any)
     - Socratic question for deeper thinking

## 📁 Project Structure

```
LogiCheck/
├── extension/                    # Chrome Extension Files
│   ├── manifest.json            # Extension configuration
│   ├── background.js            # Service worker (handles API calls)
│   ├── content.js               # Content script (injects sidebar UI)
│   ├── config.js                # Runtime API key loader
│   ├── options.html             # Options page for API key configuration
│   ├── options.js               # Options page logic
│   └── options.css              # Options page styling
├── docs/                         # Documentation
│   ├── ARCHITECTURE.md          # System architecture documentation
│   ├── IMPLEMENTATION_SUMMARY.md # Implementation details
│   └── TROUBLESHOOTING.md       # Troubleshooting guide
├── src/                          # React Source (future use)
│   ├── App.js                   # React component
│   ├── App.css                  # Styles
│   └── index.js                 # React entry point
├── .gitignore                    # Git ignore rules
├── package.json                  # Node.js dependencies
├── package-lock.json             # Dependency lock file
└── README.md                     # This file
```

## 🎯 Features

- ✅ Context menu integration ("Analyze with LogiCheck")
- ✅ Keyboard shortcut (Ctrl+Shift+L / Cmd+Shift+L)
- ✅ AI-powered logical analysis using Google's Gemini 2.5 Flash model
- ✅ Beautiful, non-intrusive sidebar UI
- ✅ Identifies logical fallacies with explanations
- ✅ Extracts main claims and underlying assumptions
- ✅ Provides Socratic questions for deeper critical thinking
- ✅ 30-second timeout protection (no infinite loading)
- ✅ User-friendly error messages in Indonesian
- ✅ Secure API key storage (local browser storage only)
- ✅ Easy API key configuration via Options page

## 🤖 AI Model Information

This extension uses **Google's Gemini 2.5 Flash** model for fast, efficient, and cost-effective analysis. 

**Current Model**: `gemini-2.5-flash`
**API Version**: `v1beta`
**Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`

**Why Gemini 2.5 Flash?**
- ⚡ Fast response time (typically 3-10 seconds)
- 💰 Best price-performance ratio
- 🎯 Optimized for thinking and reasoning tasks
- ✅ Free tier available with generous quota

**Other Available Models** (can be changed in `extension/background.js`):
- `gemini-2.5-pro` - State-of-the-art, more powerful (slower, more expensive)
- `gemini-2.5-flash-lite` - Fastest and most cost-efficient
- `gemini-1.5-flash` - Previous generation (still good)
- `gemini-1.5-pro` - Previous generation pro model

## 🔧 Troubleshooting

**For detailed troubleshooting, see [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)**

### Extension doesn't appear
- Make sure Developer mode is enabled in `chrome://extensions/`
- Make sure you selected the `extension` folder (not the root LogiCheck folder)
- Click the reload button on the extension if you made any changes

### "API key belum dikonfigurasi" error
- You haven't set your API key yet!
- Right-click extension icon → **Options**
- Paste your Gemini API key and click **Save**

### "API key tidak valid" error (401)
- Your API key is incorrect or expired
- Get a new API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
- Update it in extension Options

### "Request timeout" error
- API took too long to respond (>30 seconds)
- Try with a shorter text selection
- Check your internet connection
- Wait a moment and try again

### "Terlalu banyak request" error (429)
- You've hit the rate limit (free tier: ~15 requests/minute)
- Wait 1-2 minutes before trying again
- Consider upgrading your API quota if needed

### Sidebar doesn't show
- Make sure you selected text on the page first
- Check browser console (F12) for error messages
- Try reloading the webpage
- Verify extension is enabled in `chrome://extensions/`

### Analysis fails or shows error
- Check the error message in the sidebar (now in Indonesian with details)
- Click "Detail Error Teknis" dropdown for technical info
- Open browser console (F12) for more debugging info
- Verify your API key is valid using the "Test key" button in Options

## 📝 Usage Tips

1. **Select meaningful text**: Choose paragraphs with clear arguments or claims
2. **Optimal text length**: 50-500 words works best (too short = not enough context, too long = slower)
3. **Wait for analysis**: Typically takes 3-10 seconds, max 30 seconds
4. **Review carefully**: AI provides guidance, but **your** critical thinking is essential
5. **Try different texts**: News articles, opinion pieces, academic papers, and blog posts work well
6. **Use Socratic questions**: Let the AI's questions guide your deeper analysis

## 🔐 Privacy & Security

- ✅ All API calls go **directly** from your browser to Google AI
- ✅ **No intermediary servers** - no data stored anywhere except Google AI
- ✅ Selected text is **only** sent to Google AI for analysis
- ✅ Your API key is stored **securely in browser local storage** (`chrome.storage.local`)
- ✅ API key is **never uploaded** to any external server
- ✅ Each user must configure their own API key (not shared)
- ✅ No tracking, no analytics, no data collection
- ⚠️ Standard Google AI [privacy policy](https://ai.google.dev/gemini-api/terms) applies to API requests

## 🛠️ Development

This extension is built with:
- **Manifest V3** (latest Chrome extension standard)
- **Vanilla JavaScript** (lightweight, no framework dependencies)
- **Google Gemini 2.5 Flash AI** (for logical reasoning analysis)
- **Chrome Storage API** (secure local API key storage)
- **Chrome Extension APIs** (context menus, keyboard shortcuts, messaging)

**Recent Updates (October 2025):**
- ✅ Added Options page for easy API key configuration
- ✅ Implemented 30-second timeout protection
- ✅ Enhanced error handling with user-friendly messages (Indonesian)
- ✅ Removed .env dependency (user-configured API keys)
- ✅ Model updated to gemini-2.5-flash for better performance

## 📚 Documentation

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - System architecture and design
- [IMPLEMENTATION_SUMMARY.md](docs/IMPLEMENTATION_SUMMARY.md) - Implementation details
- [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md) - Detailed troubleshooting guide
- [SETUP_GUIDE.md](docs/SETUP_GUIDE.md) - Setup guide and quick start

## 📄 License

This project is part of the LogiCheck initiative for ISIF 2025.

---

**Need help?** Check the browser console for error messages or review the setup steps above.
