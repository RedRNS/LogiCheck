# LogiCheck - Web App & Browser Extension

LogiCheck is a combined web application and browser extension that serves as a conversational AI coach for sharpening logical reasoning, identifying fallacies and biases, and improving argumentative writing.

## Table of Contents
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Configure API Key (Web App)](#configure-api-key-web-app)
  - [Load the Chrome Extension](#load-the-chrome-extension)
- [Architecture & Project Structure](#architecture--project-structure)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [AI Model](#ai-model)
- [Troubleshooting](#troubleshooting)
- [Documentation](#documentation)

## 🚀 Quick Start

### Prerequisites
To get started with LogiCheck, ensure you have the following installed:
- **Node.js** (v18 or higher): Required to run the backend and frontend.
- **MongoDB** (optional): Needed for persistent storage of user data and analysis results.
- **Google Gemini API Key**: Obtain this from [Google AI Studio](https://aistudio.google.com/app/apikey) to enable AI-powered analysis.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RedRNS/LogiCheck.git
   cd LogiCheck
   ```
2. Install all dependencies for the root, server, and client:
   ```bash
   npm run install:all
   ```

### Running the Application
1. Start the backend server (Terminal 1):
   ```bash
   npm run dev:server
   ```
   - The backend will run on `http://localhost:5000`.
   - Check the terminal for any errors or logs.

2. Start the frontend client (Terminal 2):
   ```bash
   npm run dev:client
   ```
   - The frontend will be available at `http://localhost:5173`.

### Configure API Key (Web App)
1. Open the web app in your browser at `http://localhost:5173`.
2. Navigate to **Settings** in the navigation menu.
3. Paste your Gemini API key in the input field.
4. Click **Test Key** to verify the key is valid.
5. Click **Save** to store the key locally.

**Security Note:** The API key is stored securely in your browser's localStorage and is never sent to the server.

### Load the Chrome Extension
1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the `extension/` folder in this repository.
4. Configure the API key via the extension **Options** page:
   - Right-click the LogiCheck extension icon in the toolbar.
   - Select **Options**.
   - Paste your Gemini API key and click **Save API Key**.
   - (Optional) Click **Test Key** to verify the key.

## 🏗️ Architecture & Project Structure

LogiCheck is a full-stack application with the following structure:

```
LogiCheck/
├── client/          # React frontend (Vite + Tailwind)
│   ├── src/         # Source code for components, pages, and styles
│   ├── public/      # Static assets
│   └── package.json # Frontend dependencies and scripts
├── server/          # Node.js / Express backend
│   ├── routes/      # API route handlers
│   ├── models/      # MongoDB schemas
│   ├── controllers/ # Business logic for API endpoints
│   └── package.json # Backend dependencies and scripts
├── extension/       # Browser extension (Manifest V3)
│   ├── background.js # Service worker for API calls
│   ├── content.js    # Injects sidebar UI into web pages
│   ├── options.html  # Options page for API key configuration
│   └── manifest.json # Chrome extension configuration
├── docs/            # Documentation and troubleshooting guides
├── package.json     # Root scripts that orchestrate client/server
└── README.md        # This file
```

## 🔌 API Endpoints
The backend provides the following API endpoints:

### Text Analysis
- `POST /api/analyze`
  - **Description**: Analyze text for logical fallacies, hidden assumptions, and argument structure.
  - **Request Body**:
    ```json
    {
      "text": "Your input text here",
      "apiKey": "Your Gemini API key"
    }
    ```
  - **Response**:
    ```json
    {
      "claims": [...],
      "fallacies": [...],
      "questions": [...]
    }
    ```

### Dojo
- `GET /api/dojo/sparring-challenge`
  - **Description**: Retrieve a fallacy identification challenge.
- `POST /api/dojo/verify-answer`
  - **Description**: Verify the user's answer to a challenge.

### Essay Clinic
- `POST /api/clinic/analyze-essay`
  - **Description**: Analyze an essay for argumentative quality.
  - **Request Body**:
    ```json
    {
      "essay": "Your essay text here",
      "apiKey": "Your Gemini API key"
    }
    ```

## ✨ Features
LogiCheck offers the following features:

### Core Analyzer
- Two-panel interface for text input and analysis.
- Identifies main claims, assumptions, and logical fallacies.
- Provides Socratic questions for deeper reflection.

### The Dojo
- Gamified practice environment for identifying fallacies and biases.
- Tracks progress and mastery levels.
- Immediate feedback with explanations.

### Essay Clinic
- Rich text editor for essay input.
- AI analysis focused on argumentation quality.
- Feedback categories:
  - Thesis Cohesion
  - Evidence-to-Claim Linkage
  - Logical Flow
  - Counterargument Engagement

### Browser Extension
- Context menu integration: "Analyze with LogiCheck".
- Keyboard shortcut: `Ctrl+Shift+L` (Windows/Linux) or `Cmd+Shift+L` (Mac).
- Sidebar UI for analysis results.

## 🧠 AI Model
LogiCheck uses **Google Gemini 2.5 Flash** for fast and efficient analysis. Key details:
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`
- **Why Gemini 2.5 Flash?**
  - ⚡ Fast response time (3-10 seconds).
  - 💰 Cost-effective with a free tier available.
  - 🎯 Optimized for reasoning and critical thinking tasks.

## 🔧 Troubleshooting
If you encounter issues, try the following:

### Web App
- **Frontend not loading**: Ensure `npm run dev:client` is running and visit `http://localhost:5173`.
- **Backend errors**: Check the terminal running `npm run dev:server` for logs.

### Extension
- **Extension not appearing**: Ensure Developer mode is enabled in `chrome://extensions/` and reload the extension.
- **API key errors**: Re-check the key in the Options page and use **Test Key**.

For detailed troubleshooting, see `docs/TROUBLESHOOTING.md`.

## 📚 Documentation
Additional resources:
- [ARCHITECTURE.md](docs/ARCHITECTURE.md): System architecture and design.
- [IMPLEMENTATION_SUMMARY.md](docs/IMPLEMENTATION_SUMMARY.md): Implementation details.
- [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md): Troubleshooting guide.
- [SETUP_GUIDE.md](docs/SETUP_GUIDE.md): Setup instructions.

---

If any specific part still fails (web not loading, extension error, API issues), paste the terminal or browser console error here and I will help debug.
