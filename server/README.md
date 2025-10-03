# LogiCheck Backend Server

This is the backend API server for the LogiCheck web application.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the server directory:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/logicheck
GEMINI_API_KEY=your_actual_gemini_api_key_here
FRONTEND_URL=http://localhost:5173
```

### 3. Get a Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to your `.env` file

### 4. Start MongoDB (Optional for initial testing)

If you have MongoDB installed locally:

```bash
mongod
```

The server will continue to run even without MongoDB for testing purposes.

### 5. Run the Server

Development mode (with auto-reload):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Health Check
- **GET** `/api/health` - Check if the server is running

### Text Analysis
- **POST** `/api/analyze` - Analyze text for fallacies and reasoning
  - Body: `{ "text": "your text here" }`

### Dojo (Gamified Practice)
- **GET** `/api/dojo/sparring-challenge` - Get a random fallacy identification challenge
- **POST** `/api/dojo/verify-answer` - Verify user's answer
  - Body: `{ "challengeId": "uuid", "userAnswer": "Ad Hominem", "scenario": "..." }`

### Essay Clinic
- **POST** `/api/clinic/analyze-essay` - Analyze essay for argumentative quality
  - Body: `{ "essayText": "your essay here" }`

## Project Structure

```
server/
├── config/
│   └── gemini.js          # Gemini AI configuration and prompt architecture
├── controllers/
│   ├── analyzeController.js   # Text analysis logic
│   ├── dojoController.js      # Dojo game logic
│   └── clinicController.js    # Essay clinic logic
├── models/
│   └── User.js            # MongoDB user schema
├── routes/
│   ├── analyze.js         # Analysis routes
│   ├── dojo.js           # Dojo routes
│   └── clinic.js         # Clinic routes
├── .env                   # Environment variables (create this)
├── .env.example          # Environment template
├── index.js              # Main server entry point
└── package.json          # Dependencies
```

## The Socratic Prompt Architecture

The backend implements a three-layered prompt system when communicating with Gemini AI:

1. **Persona Layer**: Defines LogiCheck's character as an analytical, neutral coach
2. **Analysis Layer**: Specifies the exact JSON structure required
3. **Dialogue Layer**: Generates Socratic questions for deeper reflection

This architecture is implemented in `config/gemini.js`.
