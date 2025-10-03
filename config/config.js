// Load environment variables from .env file
require('dotenv').config();

// Log to verify API key is loaded
console.log('Gemini API Key loaded:', process.env.GEMINI_API_KEY ? 'Successfully' : 'Failed');

const CONFIG = {
  GOOGLE_AI_API_KEY: process.env.GEMINI_API_KEY
};

module.exports = CONFIG;
