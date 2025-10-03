# LogiCheck Lens - Browser Extension

Your conversational AI coach for sharpening logical reasoning in an era of mass information.

## 🚀 Setup Instructions

### 1. Install Dependencies

1. Make sure you have [Node.js](https://nodejs.org/) installed
2. Open terminal in the project directory
3. Run:
   ```bash
   npm install
   ```

### 2. Get Your Google AI API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated API key

### 3. Configure Environment Variables

1. In the project root, you'll find a file named `.env.example`
2. Create a copy of this file and rename it to `.env`:
   ```bash
   cp .env.example .env
   ```
   Or on Windows:
   ```bash
   copy .env.example .env
   ```
3. Open the `.env` file in your code editor
4. Replace the placeholder with your actual API key:
   ```
   GEMINI_API_KEY="your-actual-api-key-here"
   ```
5. Save the file

**⚠️ IMPORTANT SECURITY NOTE:**
- **NEVER** commit the `.env` file to version control
- The `.env` file is already listed in `.gitignore` to prevent accidental commits
- Only share `.env.example` with your team, not `.env`

### 4. Load the Extension in Chrome

1. Open Chrome browser
2. Navigate to `chrome://extensions/`
3. Enable **"Developer mode"** (toggle in the top-right corner)
4. Click **"Load unpacked"**
5. Select the `LogiCheck` folder (this project directory)
6. The extension should now appear in your extensions list

### 5. Test the Extension

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
├── config.js             # Configuration file (loads environment variables)
├── .env                  # Environment variables (API keys) - NOT committed
├── .env.example          # Template for environment variables
├── .gitignore            # Git ignore rules (includes .env)
├── package.json          # Node.js dependencies
├── node_modules/         # Installed packages
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
- Verify your API key is correctly set in the `.env` file
- Make sure you have an active internet connection
- Check the background service worker console for "Gemini API Key loaded: Successfully" message

### Analysis fails or shows error
- **Most Common**: Update model name to `gemini-1.5-flash` in `background.js`
- Verify your Google AI API key is valid and correctly set in `.env`
- Check if you have API quota remaining
- Try with a shorter text selection

### API Key Issues
- Make sure the `.env` file exists in the project root
- Verify there are no extra spaces in the API key
- The key should be wrapped in quotes: `GEMINI_API_KEY="your-api-key-here"`
- Visit Google AI Studio to verify your key is active
- Check the terminal/console for the message "Gemini API Key loaded: Successfully"

## 📝 Usage Tips

1. **Select meaningful text**: Choose paragraphs with clear arguments
2. **Wait for analysis**: The AI needs a few seconds to process
3. **Review carefully**: The AI provides guidance, but critical thinking is yours
4. **Try different texts**: News articles, opinion pieces, and academic texts work well

## 🔐 Privacy & Security

- All API calls go directly from your browser to Google AI
- No data is stored on external servers
- Selected text is only sent to Google AI for analysis
- Your API key is stored securely in the `.env` file (never committed to Git)
- The `.env` file is automatically excluded from version control via `.gitignore`
- Environment variables are loaded using the `dotenv` package for secure configuration management

## 🛠️ Development

This extension is built with:
- **Manifest V3** (latest Chrome extension standard)
- **Vanilla JavaScript** (for content script)
- **Google Gemini AI** (for logical analysis)
- **Node.js & dotenv** (for secure environment variable management)
- **React** (prepared for future UI enhancements)

## 📄 License

This project is part of the LogiCheck initiative for ISIF 2025.

---

**Need help?** Check the browser console for error messages or review the setup steps above.
