# 🚀 LogiCheck Setup Guide for New Users

Follow this step-by-step guide to get LogiCheck up and running!

## Step 1: Get a Gemini API Key (5 minutes)

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"** or **"Get API Key"**
4. Copy the key (it looks like: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXX`)
5. Keep it safe - you'll need it in Step 3

**Free Tier Limits:**
- 15 requests per minute
- 1,500 requests per day
- Perfect for personal use!

---

## Step 2: Install the Extension (2 minutes)

### Download the Extension

If you haven't already:
```bash
git clone https://github.com/RedRNS/LogiCheck.git
cd LogiCheck
```

### Load in Chrome

1. Open Chrome browser
2. Go to `chrome://extensions/`
3. Turn ON **"Developer mode"** (toggle in top-right)
4. Click **"Load unpacked"**
5. Navigate to and select the `extension` folder inside LogiCheck
6. You should see "LogiCheck Lens" appear in your extensions!

---

## Step 3: Configure Your API Key (1 minute)

**IMPORTANT:** This is required before you can use LogiCheck!

1. Find the LogiCheck icon in your Chrome toolbar (top-right)
2. **Right-click** the icon
3. Select **"Options"**
4. A new tab will open with the LogiCheck Options page
5. Paste your API key from Step 1 into the text field
6. Click **"Save API Key"**
7. (Optional) Click **"Test key"** to verify it works
   - ✅ Success: "Key test succeeded"
   - ❌ Error: Check your key and try again

---

## Step 4: Try It Out! (1 minute)

1. Go to any website with text (try [Wikipedia](https://wikipedia.org))
2. Select/highlight a paragraph
3. **Right-click** → Choose **"Analyze with LogiCheck"**
   - OR press `Ctrl+Shift+L` (Windows) / `Cmd+Shift+L` (Mac)
4. A sidebar will slide in from the right
5. Wait 3-10 seconds for AI analysis
6. Review the results:
   - Main Claim
   - Assumptions
   - Logical Fallacies
   - Socratic Question

---

## Troubleshooting

### ❌ "API key belum dikonfigurasi"
→ You forgot Step 3! Configure your API key in Options.

### ❌ "API key tidak valid" (401 error)
→ Your API key is wrong. Get a new one from [Google AI Studio](https://aistudio.google.com/app/apikey)

### ❌ "Request timeout"
→ Text might be too long, or internet connection slow. Try shorter text.

### ❌ Extension not showing
→ Make sure you loaded the `extension` folder (not the root folder)

### ❌ Sidebar not appearing
→ Did you select text first? Try reloading the webpage.

---

## Tips for Best Results

✅ **Select 50-500 words** - Not too short, not too long
✅ **Choose argumentative text** - Opinion pieces, editorials, debates
✅ **Wait patiently** - AI needs 3-10 seconds to analyze
✅ **Read the Socratic question** - It helps you think deeper!

---

## Security & Privacy

🔒 Your API key is stored **locally** in your browser only
🔒 Never shared with anyone
🔒 Each user must configure their own key
🔒 All requests go directly to Google AI (no intermediary)

---

## Need More Help?

- 📖 [README.md](../README.md) - Full documentation
- 🔧 [TROUBLESHOOTING.md](../docs/TROUBLESHOOTING.md) - Detailed troubleshooting
- 🚨 [QUICK_FIX.md](../QUICK_FIX.md) - Quick fixes

---

**Enjoy sharpening your critical thinking with LogiCheck! 🧠✨**
