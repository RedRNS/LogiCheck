/**
 * Utility functions for API Key management
 */

const API_KEY_STORAGE_KEY = 'GEMINI_API_KEY';

/**
 * Get API key from localStorage
 * @returns {string|null} The stored API key or null
 */
export const getApiKey = () => {
  return localStorage.getItem(API_KEY_STORAGE_KEY);
};

/**
 * Save API key to localStorage
 * @param {string} apiKey - The API key to save
 */
export const saveApiKey = (apiKey) => {
  localStorage.setItem(API_KEY_STORAGE_KEY, apiKey);
};

/**
 * Remove API key from localStorage
 */
export const clearApiKey = () => {
  localStorage.removeItem(API_KEY_STORAGE_KEY);
};

/**
 * Check if API key exists
 * @returns {boolean} True if API key exists
 */
export const hasApiKey = () => {
  const key = getApiKey();
  return key !== null && key.trim().length > 0;
};

/**
 * Validate API key format (basic validation)
 * @param {string} key - The API key to validate
 * @returns {boolean} True if format looks valid
 */
export const validateApiKeyFormat = (key) => {
  if (!key) return false;
  // Basic validation: keys are usually alphanumeric with dashes/underscores and > 20 chars
  return /^[A-Za-z0-9\-_]{20,}$/.test(key.trim());
};
