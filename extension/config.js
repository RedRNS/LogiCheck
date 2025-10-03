// Lightweight config helper for the extension runtime
// This file runs in the browser/service worker and must be a plain ES module.
// It exposes a small helper to read the Gemini API key from chrome.storage.local.

export async function getApiKey() {
  return new Promise((resolve) => {
    try {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.get(['GEMINI_API_KEY'], (result) => {
          resolve(result?.GEMINI_API_KEY || null);
        });
      } else {
        // If chrome.storage is not available (unlikely in a service worker), return null
        resolve(null);
      }
    } catch (e) {
      console.error('Error reading GEMINI_API_KEY from storage', e);
      resolve(null);
    }
  });
}
