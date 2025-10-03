// Node-only config helper (for scripts). This file will be used by Node
// processes and is intentionally outside the extension runtime.

require('dotenv').config();
console.log('Node tools config loaded:', process.env.GEMINI_API_KEY ? 'Has key' : 'No key');

module.exports = {
  GOOGLE_AI_API_KEY: process.env.GEMINI_API_KEY || null
};
