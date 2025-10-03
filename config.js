// Root helper for Node scripts. Guard require() so this file can be opened
// safely in the browser (e.g., by VS Code or Chrome devtools) without throwing.
let CONFIG = { GOOGLE_AI_API_KEY: null };

if (typeof require === 'function' && typeof process !== 'undefined') {
  try {
    require('dotenv').config();
    // Log to verify API key is loaded (Node only)
    console.log('Gemini API Key loaded:', process.env.GEMINI_API_KEY ? 'Successfully' : 'Failed');
    CONFIG = { GOOGLE_AI_API_KEY: process.env.GEMINI_API_KEY };
  } catch (e) {
    // Not running in Node or dotenv missing
    console.warn('dotenv not loaded or not running in Node env');
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
