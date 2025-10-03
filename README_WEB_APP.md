# LogiCheck - Your AI Reasoning Coach

LogiCheck is a comprehensive web platform that functions as a conversational AI coach, designed to sharpen logical reasoning, identify fallacies and biases, and improve argumentation skills in an era of mass information and AI-generated content.

## 🎯 Project Overview

LogiCheck consists of three core features:

1. **Core Analyzer** - Analyze text for logical fallacies, hidden assumptions, and argument structure
2. **The Dojo** - Gamified practice environment for identifying fallacies and biases
3. **Essay Clinic** - AI-powered feedback on argumentative writing

## 🏗️ Architecture

This is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application:

- **Frontend**: React with Vite, Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **AI Engine**: Google Gemini 2.0 Flash

## 📁 Project Structure

```
LogiCheck/
├── client/          # React frontend
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   └── styles/
│   └── package.json
│
├── server/          # Node.js backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── package.json
│
├── extension/       # Browser extension (separate component)
└── docs/           # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (optional for initial testing)
- Google Gemini API key (get it from [Google AI Studio](https://aistudio.google.com/app/apikey))

### Installation

1. **Install all dependencies:**
```bash
npm run install:all
```

### Running the Application

1. **Start the backend server:**
```bash
npm run dev:server
```
The server will run on `http://localhost:5000`

2. **Start the frontend client:**
```bash
npm run dev:client
```
The app will run on `http://localhost:5173`

### First-Time Setup

When you first open the app:

1. Click on **Settings** in the navigation menu
2. Enter your Gemini API key
3. Click **Test Key** to verify it works
4. Click **Save API Key**
5. Start using the features!

**🔐 Security:** Your API key is stored **locally** in your browser's localStorage and is **never** sent to our servers. The key is sent directly from your browser to Google's Gemini API.

### Getting a Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in the Settings page

## 📚 API Endpoints

### Text Analysis
- `POST /api/analyze` - Analyze text for fallacies and reasoning

### Dojo
- `GET /api/dojo/sparring-challenge` - Get a fallacy identification challenge
- `POST /api/dojo/verify-answer` - Verify user's answer

### Essay Clinic
- `POST /api/clinic/analyze-essay` - Analyze essay for argumentative quality

## 🎨 Features

### Core Analyzer
- Two-panel interface for text input and analysis
- Identifies main claims, assumptions, and logical fallacies
- Socratic dialogue for deeper reflection
- Real-time AI feedback

### The Dojo
- **Fallacy Sparring**: Practice identifying 10 core fallacies
  - Ad Hominem, Straw Man, Hasty Generalization
  - Appeal to Authority, False Dichotomy, Slippery Slope
  - Red Herring, Bandwagon Appeal, Faulty Analogy
  - Post Hoc Ergo Propter Hoc
- Progress tracking and mastery levels
- Immediate feedback with explanations

### Essay Clinic
- Rich text editor for essay input
- AI analysis focused on argumentation
- Feedback categories:
  - Thesis Cohesion
  - Evidence-to-Claim Linkage
  - Logical Flow
  - Counterargument Engagement

## 🧠 The Socratic Prompt Architecture

LogiCheck uses a three-layered prompt system when communicating with the AI:

1. **Persona Layer**: Defines LogiCheck's character as an analytical, neutral coach
2. **Analysis Layer**: Specifies the exact JSON structure required
3. **Dialogue Layer**: Generates Socratic questions for reflection

This architecture ensures consistent, high-quality responses from the AI engine.

## 🛠️ Technologies Used

### Frontend
- React 18
- Vite
- React Router
- Tailwind CSS
- Axios
- React Quill
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Google Generative AI SDK
- CORS, dotenv

## 📖 Documentation

See the `/docs` folder for detailed documentation:
- Architecture overview
- Implementation guide
- Setup instructions
- Troubleshooting guide

## 👥 Target Users

- Students
- Academics
- Lifelong learners
- Anyone interested in improving critical thinking skills

## 🔒 Security

- All API keys stored securely on the backend
- No sensitive information exposed to the frontend
- CORS configuration for secure cross-origin requests

## 📝 License

This project is part of the ISIF 2025 competition.

## 🤝 Contributing

This is a competition project. For questions or suggestions, please contact the development team.

---

Built with ❤️ for ISIF 2025
