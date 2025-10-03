# LogiCheck Lens - Browser Extension

Your conversational AI coach for sharpening logical reasoning in an era of mass information.

## 🚀 Setup Instructions

### 1. Get Your Google AI API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated API key

### 2. Configure the Extension

1. Open `background.js` in your code editor
2. Find this line near the top:
   ```javascript
   const GOOGLE_AI_API_KEY = "YOUR_GOOGLE_AI_API_KEY_HERE";
   ```
3. Replace `YOUR_GOOGLE_AI_API_KEY_HERE` with your actual API key
4. Save the file

### 3. Load the Extension in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the `LogiCheck` folder (this project directory)
6. The extension should now appear in your extensions list

### 4. Test the Extension

1. Open any webpage with text (e.g., Wikipedia, news article)
2. Highlight/select a paragraph or section of text
3. **Method 1**: Right-click and select **"Analyze with LogiCheck"**
4. **Method 2**: Press `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac)
5. A sidebar will appear from the right showing:
   - Loading animation while analyzing
   - Analysis results with main claim, assumptions, fallacies, and Socratic questions

## 📁 Project Structure

```
LogiCheck/
├── manifest.json          # Extension configuration
├── background.js          # Service worker (handles API calls)
├── content.js            # Content script (injects sidebar UI)
├── config.js             # Configuration file (API key)
├── src/
│   ├── App.js           # React component (for future use)
│   ├── App.css          # Styles (for future use)
│   └── index.js         # React entry point (for future use)
└── README.md            # This file
```

## 🎯 Features

- ✅ Context menu integration ("Analyze with LogiCheck")
- ✅ Keyboard shortcut (Ctrl+Shift+L / Cmd+Shift+L)
- ✅ AI-powered logical analysis using Google's Gemini 2.5 Pro model
- ✅ Beautiful, non-intrusive sidebar UI
- ✅ Identifies logical fallacies
- ✅ Extracts main claims and assumptions
- ✅ Provides Socratic questions for deeper thinking

## 🤖 AI Model Information

This extension uses **Google's Gemini 2.5 Pro** model for fast and efficient analysis. 

**Model**: `gemini-1.5-flash`
**API Version**: v1
**Endpoint**: `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent`

Alternative models you can use (edit `background.js`):
- `gemini-1.5-pro` - More powerful but slower
- `gemini-2.0-flash-exp` - Experimental latest version

## 🔧 Troubleshooting

**For detailed troubleshooting, see [TROUBLESHOOTING.md](TROUBLESHOOTING.md)**

### Extension doesn't appear
- Make sure Developer mode is enabled in `chrome://extensions/`
- Check that you selected the correct folder when loading unpacked

### Sidebar doesn't show when clicking "Analyze with LogiCheck"
- Check the browser console for errors (F12 → Console tab)
- Verify your API key is correctly set in `background.js`
- Make sure you have an active internet connection

### Analysis fails or shows error
- **Most Common**: Update model name to `gemini-1.5-flash` in `background.js`
- Verify your Google AI API key is valid
- Check if you have API quota remaining
- Try with a shorter text selection

### API Key Issues
- Make sure there are no extra spaces in the API key
- The key should be wrapped in quotes: `"your-api-key-here"`
- Visit Google AI Studio to verify your key is active

## 📝 Usage Tips

1. **Select meaningful text**: Choose paragraphs with clear arguments
2. **Wait for analysis**: The AI needs a few seconds to process
3. **Review carefully**: The AI provides guidance, but critical thinking is yours
4. **Try different texts**: News articles, opinion pieces, and academic texts work well

## 🔐 Privacy & Security

- All API calls go directly from your browser to Google AI
- No data is stored on external servers
- Selected text is only sent to Google AI for analysis
- Your API key is stored locally in the extension files

## 🛠️ Development

This extension is built with:
- **Manifest V3** (latest Chrome extension standard)
- **Vanilla JavaScript** (for content script)
- **Google Gemini AI** (for logical analysis)
- **React** (prepared for future UI enhancements)

## 📄 License

This project is part of the LogiCheck initiative for ISIF 2025.

---

**Need help?** Check the browser console for error messages or review the setup steps above.
