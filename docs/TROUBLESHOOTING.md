# LogiCheck Lens - Troubleshooting Guide

## 🔧 Common Issues and Solutions

---

### ❌ Issue: "API Error: models/gemini-pro is not found for API version v1beta"

**Error Message**:
```
Analysis Failed
API Error: models/gemini-pro is not found for API version v1beta, 
or is not supported for generateContent. Call ListModels to see 
the list of available models and their supported methods.
```

**Cause**: 
- The model name or API endpoint version is outdated
- Google has deprecated `gemini-pro` in favor of newer models

**Solution** ✅:
The extension has been updated to use `gemini-1.5-flash` with API v1. Make sure your `background.js` has:

```javascript
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GOOGLE_AI_API_KEY}`;
```

**Available Models** (as of October 2025):
- `gemini-1.5-flash` - Fast, efficient (Recommended)
- `gemini-1.5-pro` - More powerful, slower
- `gemini-2.0-flash-exp` - Experimental latest version

---

### ❌ Issue: Sidebar doesn't appear when clicking "Analyze with LogiCheck"

**Possible Causes**:
1. API key not configured
2. Network connection issue
3. Content script not injected properly

**Solutions**:
1. Open browser console (F12) and check for errors
2. Verify API key in `background.js`
3. Reload the extension: `chrome://extensions/` → Reload
4. Refresh the webpage you're testing on

---

### ❌ Issue: "Please try again or check your API key configuration"

**Possible Causes**:
1. Invalid or expired API key
2. API quota exceeded
3. Network/firewall blocking API requests

**Solutions**:
1. **Verify API Key**:
   - Go to https://aistudio.google.com/app/apikey
   - Check if your key is active
   - Copy and paste carefully (no extra spaces)

2. **Check API Quota**:
   - Visit https://aistudio.google.com/
   - Check your usage and limits
   - Wait if quota is exceeded, or upgrade plan

3. **Test API Key** (in browser console):
   ```javascript
   // Open console (F12) and run:
   fetch('https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=YOUR_API_KEY', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({
       contents: [{ parts: [{ text: 'Hello' }] }]
     })
   }).then(r => r.json()).then(console.log);
   ```

---

### ❌ Issue: Loading spinner never stops

**Possible Causes**:
1. Very long text causing slow processing
2. Network timeout
3. API server issue

**Solutions**:
1. Try with shorter text selections
2. Check network connection
3. Wait 30 seconds and try again
4. Check browser console for error messages

---

### ❌ Issue: Extension not visible in Chrome

**Solutions**:
1. Go to `chrome://extensions/`
2. Enable **"Developer mode"** (toggle top-right)
3. Click **"Load unpacked"**
4. Select the LogiCheck folder
5. Check for any error messages in red

---

### ❌ Issue: Context menu "Analyze with LogiCheck" doesn't appear

**Solutions**:
1. Make sure you have selected/highlighted text first
2. Right-click directly on the selected text
3. Reload the extension
4. Restart Chrome browser

---

### ❌ Issue: Keyboard shortcut (Ctrl+Shift+L) doesn't work

**Possible Causes**:
1. Shortcut conflict with another extension or system shortcut
2. Extension not loaded properly

**Solutions**:
1. Go to `chrome://extensions/shortcuts`
2. Find "LogiCheck Lens"
3. Check if the shortcut is assigned
4. Change to a different key combination if needed
5. Try using context menu instead as a workaround

---

### ❌ Issue: JSON Parsing Error

**Error Message**: "The AI response was not in valid JSON format"

**Cause**: AI model returned text outside JSON structure

**Solutions**:
1. This is usually temporary - try again
2. Try with different/simpler text
3. The code has fallback regex extraction to handle this

---

### ❌ Issue: CORS or Network Error

**Error Message**: "Failed to fetch" or "CORS error"

**Cause**: Browser blocking API request

**Solutions**:
1. Check `manifest.json` has correct `host_permissions`:
   ```json
   "host_permissions": [
     "https://generativelanguage.googleapis.com/*"
   ]
   ```
2. Reload the extension
3. Make sure not using extension in incognito without allowing it

---

## 🔍 Debug Mode

To see detailed logs:

1. Open browser console (F12)
2. Go to Console tab
3. Select text and trigger analysis
4. Look for:
   - `"LogiCheck content script loaded"` - Content script working
   - `"Analyzing text: ..."` - Text captured
   - `"Received text to analyze: ..."` - Background received
   - Any error messages in red

---

## 📞 Getting Help

If issues persist:

1. **Check Console Logs**:
   - Press F12 → Console tab
   - Copy any error messages
   - Take screenshot

2. **Verify Setup**:
   - API key is correct
   - Extension is loaded
   - Developer mode enabled
   - Webpage is reloaded

3. **Test Basic Functionality**:
   - Can you select text?
   - Does context menu appear?
   - Does sidebar container exist? (Check Elements tab)

4. **Check API Status**:
   - Visit https://status.cloud.google.com/
   - Check if Google AI services are operational

---

## 🔄 Quick Reset

If nothing works, try a complete reset:

1. Remove extension from Chrome
2. Close and restart Chrome
3. Re-load the extension
4. Verify API key one more time
5. Test on a simple webpage (Wikipedia)

---

## 📊 Common Error Codes

| Error Code | Meaning | Solution |
|------------|---------|----------|
| 400 | Bad Request | Check prompt format, verify request body |
| 401 | Unauthorized | Invalid API key |
| 403 | Forbidden | API key lacks permissions or quota exceeded |
| 404 | Not Found | Wrong model name or endpoint |
| 429 | Too Many Requests | Rate limit exceeded, wait and retry |
| 500 | Server Error | Google AI server issue, retry later |

---

**Last Updated**: October 3, 2025  
**Extension Version**: 1.0.0  

For the latest updates, check the README.md file.
