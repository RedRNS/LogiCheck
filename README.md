# LogiCheck Lens - Browser Extension & Web App

Your conversational AI coach for sharpening logical reasoning in an era of mass information.

## 🚀 Quick Start Guide

### For Web Application

#### 1. Install Dependencies

```bash
# Install all dependencies (root, server, and client)
npm run install:all
```

#### 2. Run the Application

Open 2 terminal windows:

```bash
# Terminal 1 - Start backend server
npm run dev:server

# Terminal 2 - Start frontend client
npm run dev:client
```

The web app will be available at `http://localhost:5173`

#### 3. Configure Your API Key (First Time)

1. Open the web app in your browser
2. Click **Settings** in the navigation menu
3. Get your Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
4. Paste the API key in the Settings page
5. Click **Test Key** to verify it works
6. Click **Save API Key**

**🔐 Security:** Your API key is stored **locally** in your browser's localStorage and is **never** sent to our servers. It goes directly from your browser to Google's Gemini API.

### For Chrome Extension

#### 1. Get Your Google AI API Key

1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
````markdown
# LogiCheck - Web App & Browser Extension

LogiCheck is a combined web application and browser extension that serves as a conversational AI coach for sharpening logical reasoning, identifying fallacies and biases, and improving argumentative writing.

This single README unifies documentation for both the web application (React + Vite frontend, Node.js backend) and the browser extension (Manifest V3).

## 🚀 Quick Start

Prerequisites:
- Node.js (v18+)
- (Optional) MongoDB for persistent storage
- A Google Gemini API key (get from https://aistudio.google.com/app/apikey)

1. Install all dependencies (root, server, client):
```bash
npm run install:all
```

2. Start the backend server (Terminal 1):
```bash
npm run dev:server
```

3. Start the frontend client (Terminal 2):
```bash
npm run dev:client
```

The web app will be available at `http://localhost:5173`. The backend API runs on `http://localhost:5000` by default.

### Configure API Key (Web App)
1. Open `http://localhost:5173`
2. Go to Settings → paste your Gemini API key → Test Key → Save

Security note: the API key is stored locally in browser localStorage and is NOT uploaded to any server.

### Load the Chrome Extension
1. Open `chrome://extensions/`
2. Enable Developer mode
3. Click "Load unpacked" and select the `extension/` folder in this repo
4. Configure the API key via the extension Options page

## 🏗️ Architecture & Project Structure

```
LogiCheck/
├── client/          # React frontend (Vite + Tailwind)
├── server/          # Node.js / Express backend
├── extension/       # Browser extension (Manifest V3)
├── docs/            # Documentation and troubleshooting
├── package.json     # Root scripts that orchestrate client/server
└── README.md        # This file
```

## 🔌 API Endpoints (backend)
- POST /api/analyze - Analyze text for fallacies and reasoning
- GET /api/dojo/sparring-challenge - Get a Dojo challenge
- POST /api/dojo/verify-answer - Verify user's Dojo answer
- POST /api/clinic/analyze-essay - Analyze an essay

## ✨ Features
- Core Analyzer: identify claims, assumptions, and logical fallacies
- The Dojo: gamified fallacy-identification practice
- Essay Clinic: AI feedback on argumentative writing
- Browser extension: context-menu analysis, sidebar UI, keyboard shortcut

## 🧠 AI Model
Uses Google Gemini (recommended: `gemini-2.5-flash`). API requests are proxied from the client to Gemini or directly from the extension depending on configuration.

## 🔧 Troubleshooting (common issues)
- If the web UI doesn't load: ensure `npm run dev:client` is running and open `http://localhost:5173`
- If backend errors occur: check `npm run dev:server` terminal for logs (server runs on port 5000)
- Extension not showing: load the `extension/` folder in `chrome://extensions/` with Developer mode on
- API key errors: re-check key in Settings/Options and use "Test Key"

For full troubleshooting details see `docs/TROUBLESHOOTING.md`.

## 📚 Documentation
- `docs/ARCHITECTURE.md`
- `docs/IMPLEMENTATION_SUMMARY.md`
- `docs/TROUBLESHOOTING.md`
- `docs/SETUP_GUIDE.md`

---

If any specific part still fails (web not loading, extension error, API issues), paste the terminal or browser console error here and I will help debug.

````
**API Version**: `v1beta`
