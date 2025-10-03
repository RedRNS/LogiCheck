# LogiCheck Web Application - Complete Setup Guide

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Backend Setup](#backend-setup)
4. [Frontend Setup](#frontend-setup)
5. [Running the Application](#running-the-application)
6. [Testing the API](#testing-the-api)
7. [Common Issues](#common-issues)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **MongoDB** (optional for initial testing) - [Download here](https://www.mongodb.com/try/download/community)
- **Google Gemini API Key** - [Get one here](https://makersuite.google.com/app/apikey)
- **Code Editor** - VS Code recommended

Check your installations:
```bash
node --version
npm --version
```

---

## Project Structure

```
LogiCheck/
├── server/                 # Backend (Node.js + Express)
│   ├── config/
│   │   └── gemini.js      # AI configuration
│   ├── controllers/
│   │   ├── analyzeController.js
│   │   ├── dojoController.js
│   │   └── clinicController.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── analyze.js
│   │   ├── dojo.js
│   │   └── clinic.js
│   ├── .env               # Environment variables (YOU MUST CREATE THIS)
│   ├── .env.example       # Template
│   ├── index.js           # Server entry point
│   └── package.json
│
└── client/                # Frontend (React + Vite)
    ├── src/
    │   ├── api/
    │   │   └── api.js
    │   ├── components/
    │   │   ├── Layout.jsx
    │   │   ├── LoadingSpinner.jsx
    │   │   ├── Alert.jsx
    │   │   ├── FallacyCard.jsx
    │   │   └── ChatBubble.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── AnalyzerPage.jsx
    │   │   ├── DojoPage.jsx
    │   │   └── EssayClinicPage.jsx
    │   ├── styles/
    │   │   └── index.css
    │   ├── App.jsx
    │   └── main.jsx
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## Backend Setup

### Step 1: Navigate to Server Directory

```bash
cd server
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- express (web framework)
- cors (cross-origin resource sharing)
- dotenv (environment variables)
- mongoose (MongoDB ODM)
- @google/generative-ai (Gemini API)
- uuid (unique ID generation)
- nodemon (development hot-reload)

### Step 3: Create Environment File

```bash
# Windows PowerShell
Copy-Item .env.example .env

# Or manually create .env file with this content:
```

**.env file contents:**
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/logicheck
GEMINI_API_KEY=your_gemini_api_key_here
FRONTEND_URL=http://localhost:5173
```

### Step 4: Get Your Gemini API Key

1. Go to https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated key
5. Replace `your_gemini_api_key_here` in your `.env` file with the actual key

**Example:**
```env
GEMINI_API_KEY=AIzaSyDXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### Step 5: Start MongoDB (Optional)

If you have MongoDB installed:
```bash
mongod
```

If not, the server will still run but won't store user data.

### Step 6: Start the Backend Server

```bash
npm run dev
```

You should see:
```
🚀 LogiCheck server running on port 5000
📍 API available at http://localhost:5000/api
✅ MongoDB connected successfully
```

---

## Frontend Setup

### Step 1: Open New Terminal & Navigate to Client Directory

```bash
cd client
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install:
- react & react-dom
- react-router-dom (routing)
- axios (HTTP client)
- react-quill (rich text editor)
- lucide-react (icons)
- tailwindcss (styling)
- vite (build tool)

### Step 3: Start the Frontend Development Server

```bash
npm run dev
```

You should see:
```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

---

## Running the Application

### Quick Start (Both Servers)

**Terminal 1 (Backend):**
```bash
cd server
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```

### Access the Application

Open your browser and go to:
```
http://localhost:5173
```

You should see the LogiCheck homepage with three main features:
1. Core Analyzer
2. The Dojo
3. Essay Clinic

---

## Testing the API

### Test 1: Health Check

Open your browser or use curl:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "message": "LogiCheck API is running",
  "timestamp": "2025-10-03T..."
}
```

### Test 2: Analyze Text (using curl or Postman)

```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d "{\"text\": \"A famous celebrity says this product works, so it must be effective for everyone.\"}"
```

Expected response:
```json
{
  "mainClaim": "...",
  "assumptions": [...],
  "fallacies": [
    {
      "fallacyName": "Appeal to Authority",
      "quote": "...",
      "explanation": "..."
    }
  ],
  "socraticQuestion": "..."
}
```

### Test 3: Get Dojo Challenge

```bash
curl http://localhost:5000/api/dojo/sparring-challenge
```

### Test 4: Analyze Essay

```bash
curl -X POST http://localhost:5000/api/clinic/analyze-essay \
  -H "Content-Type: application/json" \
  -d "{\"essayText\": \"Your essay text here...\"}"
```

---

## Common Issues

### Issue 1: "Cannot find module" errors

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Issue 2: Port already in use

**Solution:**
```bash
# Change PORT in server/.env to different number
PORT=5001
```

### Issue 3: Gemini API errors

**Problem:** "Failed to get AI response"

**Solution:**
1. Verify your API key is correct in `.env`
2. Check you have Gemini API enabled
3. Ensure you have API quota remaining

### Issue 4: CORS errors

**Solution:**
The backend is already configured with CORS. If you still get errors, check that:
1. Backend is running on port 5000
2. Frontend is running on port 5173
3. FRONTEND_URL in `.env` matches your frontend URL

### Issue 5: MongoDB connection failed

**Solution:**
This is not critical for initial testing. The app will work without MongoDB. 
If you want to use MongoDB:
1. Install MongoDB locally
2. Start mongod service
3. Verify connection string in `.env`

### Issue 6: Tailwind CSS not working

**Solution:**
```bash
cd client
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## Next Steps

1. **Test Each Feature:**
   - Visit `/analyzer` and analyze some text
   - Visit `/dojo` and try the fallacy challenges
   - Visit `/essay-clinic` and analyze an essay

2. **Customize:**
   - Add more fallacy scenarios in `server/controllers/dojoController.js`
   - Customize the UI colors in `client/tailwind.config.js`
   - Add more feedback categories in the essay clinic

3. **Deploy:**
   - Backend: Heroku, Railway, Render
   - Frontend: Vercel, Netlify
   - Database: MongoDB Atlas

---

## Development Tips

### Backend Development
- Server auto-reloads with nodemon
- Check logs in terminal for errors
- Test API endpoints with Postman or curl

### Frontend Development
- Vite provides hot module replacement
- Check browser console for errors
- Use React DevTools for debugging

### Environment Variables
- Never commit `.env` files to Git
- Keep API keys secret
- Use different keys for development and production

---

## Support

For issues or questions:
1. Check the terminal logs for error messages
2. Review this setup guide
3. Check the API endpoint documentation in each controller file
4. Verify all dependencies are installed correctly

---

## Summary Checklist

- [ ] Node.js and npm installed
- [ ] Backend dependencies installed (`server/npm install`)
- [ ] Frontend dependencies installed (`client/npm install`)
- [ ] `.env` file created in server directory
- [ ] Gemini API key added to `.env`
- [ ] Backend server running on port 5000
- [ ] Frontend server running on port 5173
- [ ] Health check endpoint working
- [ ] Application accessible at http://localhost:5173

If all boxes are checked, you're ready to use LogiCheck! 🎉
