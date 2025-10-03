# LogiCheck Lens - Architecture Documentation

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                         │
│  (Highlights text on webpage → Context Menu or Keyboard)         │
└─────────────────────────────┬───────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      CONTENT SCRIPT                              │
│                       (content.js)                               │
│                                                                  │
│  • Injects sidebar container into webpage                       │
│  • Captures selected text                                       │
│  • Shows loading/analysis/error states                          │
│  • Renders HTML with CSS styling                                │
└────────────┬────────────────────────────────┬───────────────────┘
             │                                │
             │ chrome.runtime.sendMessage     │ chrome.runtime.onMessage
             │                                │
             ▼                                ▼
┌─────────────────────────────────────────────────────────────────┐
│                    BACKGROUND SERVICE WORKER                     │
│                       (background.js)                            │
│                                                                  │
│  • Manages context menu creation                                │
│  • Handles keyboard shortcuts                                   │
│  • Orchestrates API communication                               │
│  • Processes AI responses                                       │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ HTTPS POST Request
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GOOGLE GEMINI API                             │
│         (generativelanguage.googleapis.com)                      │
│                                                                  │
│  Endpoint: /v1beta/models/gemini-pro:generateContent            │
│  • Receives prompt with selected text                           │
│  • Analyzes logical structure                                   │
│  • Returns JSON with analysis                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Data Flow Diagram

### Scenario 1: Context Menu Analysis

```
1. User Highlights Text
   └─→ Right-click → "Analyze with LogiCheck"

2. Chrome Context Menu Event
   └─→ background.js: chrome.contextMenus.onClicked
       └─→ Sends "showLoading" message to content.js
       └─→ content.js: Shows loading spinner in sidebar

3. Background Script Makes API Call
   └─→ analyzeTextWithGoogleAI(selectedText)
       └─→ Constructs prompt
       └─→ POST to Gemini API
       
4. Gemini API Processing
   └─→ Analyzes text structure
   └─→ Identifies fallacies, claims, assumptions
   └─→ Returns JSON response

5. Background Script Parses Response
   └─→ Extracts candidates[0].content.parts[0].text
   └─→ Parses JSON from model output
   └─→ Validates structure

6. Send Result to Content Script
   └─→ Sends "displayAnalysis" message
   └─→ content.js: Renders analysis in sidebar
   └─→ User sees results
```

### Scenario 2: Keyboard Shortcut Analysis

```
1. User Highlights Text
   └─→ Presses Ctrl+Shift+L (or Cmd+Shift+L on Mac)

2. Chrome Commands Event
   └─→ background.js: chrome.commands.onCommand
       └─→ Sends "getSelectedText" to content.js

3. Content Script Captures Selection
   └─→ window.getSelection().toString()
   └─→ Shows loading state
   └─→ Sends text back to background script

4. [Same as Scenario 1, steps 3-6]
```

---

## 🔧 Component Breakdown

### 1. Manifest.json
**Role**: Extension Configuration
```json
{
  "permissions": ["activeTab", "contextMenus", "storage"],
  "host_permissions": ["https://generativelanguage.googleapis.com/*"],
  "background": { "service_worker": "background.js" },
  "content_scripts": [{ "js": ["content.js"] }]
}
```

### 2. Background.js
**Role**: Orchestration & API Communication

**Key Functions**:
- `analyzeTextWithGoogleAI(text)` - Main API handler
- Context menu listener - Triggers analysis
- Keyboard command listener - Triggers analysis
- Message router - Coordinates with content script

**API Integration**:
```javascript
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

await fetch(GEMINI_API_URL, {
  method: 'POST',
  body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
});
```

### 3. Content.js
**Role**: UI Rendering & DOM Manipulation

**Key Functions**:
- `injectStyles()` - Adds CSS to page
- `createSidebarHTML(data)` - Generates analysis HTML
- `showLoadingState()` - Loading animation
- `showErrorState(error)` - Error display
- `showSidebar(data)` - Main analysis display

**DOM Structure**:
```html
<div id="logicheck-sidebar-root">
  <div class="logicheck-sidebar">
    <div class="logicheck-header">...</div>
    <div class="logicheck-content">
      <section class="logicheck-section">...</section>
    </div>
  </div>
</div>
```

---

## 🎨 UI Component Tree

```
#logicheck-sidebar-root (container)
│
└── .logicheck-sidebar
    │
    ├── .logicheck-header
    │   ├── <h2>LogiCheck Analysis</h2>
    │   └── <button class="logicheck-close-btn">✕</button>
    │
    └── .logicheck-content
        │
        ├── .logicheck-section (Main Claim)
        │   ├── <h3>Main Claim</h3>
        │   └── <p class="main-claim">...</p>
        │
        ├── .logicheck-section (Assumptions)
        │   ├── <h3>Underlying Assumptions</h3>
        │   └── <ul class="assumptions-list">
        │       └── <li>...</li>
        │
        ├── .logicheck-section (Fallacies)
        │   ├── <h3>Identified Logical Fallacies</h3>
        │   └── .fallacy-card[]
        │       ├── <h4 class="fallacy-name">...</h4>
        │       ├── <blockquote class="fallacy-quote">...</blockquote>
        │       └── <p class="fallacy-explanation">...</p>
        │
        └── .logicheck-section (Socratic Question)
            ├── <h3>Socratic Question</h3>
            └── <p class="socratic-question">...</p>
```

---

## 🔐 Security Architecture

### API Key Management
```
Development:
  API_KEY in background.js (hardcoded)
  ⚠️ Must be replaced by user
  ⚠️ Added to .gitignore

Production (Future):
  chrome.storage.local (encrypted)
  User enters via extension popup
  Never exposed in code
```

### Permissions Model
```
activeTab:
  ✅ Access current tab when user invokes extension
  ❌ No background access to tabs

contextMenus:
  ✅ Add "Analyze with LogiCheck" option
  
storage:
  ✅ Store user preferences (future)
  ✅ Cache analyses (future)

host_permissions:
  ✅ https://generativelanguage.googleapis.com/*
  ✅ Required for API calls only
```

---

## 📡 Message Passing Protocol

### Background → Content Messages

#### showLoading
```javascript
{
  action: "showLoading",
  text: "<selected text>"
}
```
**Purpose**: Tell content script to display loading state

#### displayAnalysis
```javascript
{
  action: "displayAnalysis",
  result: {
    success: true,
    data: { mainClaim, assumptions, fallacies, socraticQuestion }
  }
}
// OR
{
  action: "displayAnalysis",
  result: {
    success: false,
    error: "Error message"
  }
}
```
**Purpose**: Send analysis results or error to display

#### getSelectedText
```javascript
{
  action: "getSelectedText"
}
```
**Purpose**: Request currently selected text (for keyboard shortcut)

### Content → Background Messages

#### analyzeSelectedText
```javascript
{
  action: "analyzeSelectedText",
  text: "<selected text>"
}
```
**Purpose**: Send text to background for analysis

---

## 🎯 Error Handling Strategy

```
┌─────────────────────────┐
│   User Action           │
└───────┬─────────────────┘
        │
        ▼
┌─────────────────────────┐
│  Validation Layer       │
│  • Is text selected?    │
│  • Is text too long?    │
└───────┬─────────────────┘
        │
        ▼
┌─────────────────────────┐
│  Network Layer          │
│  • Connection available?│
│  • API reachable?       │
│  • HTTP status OK?      │
└───────┬─────────────────┘
        │
        ▼
┌─────────────────────────┐
│  API Response Layer     │
│  • Valid JSON?          │
│  • Expected structure?  │
│  • Required fields?     │
└───────┬─────────────────┘
        │
        ▼
┌─────────────────────────┐
│  UI Presentation        │
│  • Success → Show data  │
│  • Failure → Show error │
└─────────────────────────┘
```

**Error Types Handled**:
1. **No text selected** → User feedback
2. **Network failure** → "Check connection" message
3. **API error** → Display API error message
4. **Invalid JSON** → "AI response format error"
5. **Missing fields** → "Incomplete analysis"

---

## 🚀 Performance Considerations

### Optimization Strategies

1. **Lazy Loading**:
   - Sidebar container created once on page load
   - Styles injected once per page
   - React components ready but not used yet

2. **Efficient DOM Manipulation**:
   - Uses `innerHTML` for bulk updates
   - Minimal reflows/repaints
   - High z-index prevents layout thrashing

3. **API Efficiency**:
   - Single API call per analysis
   - No polling or webhooks
   - Direct HTTPS connection

4. **Memory Management**:
   - Service worker remains dormant until needed
   - Content script loads per page
   - No global event listeners

### Future Optimizations (Not Yet Implemented)

1. **Caching**: Store recent analyses in chrome.storage
2. **Debouncing**: Prevent rapid repeated analyses
3. **Text Chunking**: Handle very long selections
4. **Progressive Loading**: Stream results as they arrive

---

## 🧪 Testing Strategy

### Manual Testing Checklist

- [ ] Context menu appears when text is selected
- [ ] Context menu triggers analysis
- [ ] Keyboard shortcut works (Ctrl+Shift+L)
- [ ] Loading state displays
- [ ] Analysis results display correctly
- [ ] Error state shows on API failure
- [ ] Close button hides sidebar
- [ ] Works on different websites
- [ ] Doesn't interfere with page functionality
- [ ] Sidebar scrolls with long content

### Error Testing

- [ ] No API key → Error displayed
- [ ] Invalid API key → Error displayed
- [ ] Network offline → Error displayed
- [ ] Invalid response → Error displayed
- [ ] No text selected → No action or feedback

---

## 📈 Scaling Considerations

**Current Limits**:
- Google AI free tier quotas
- Single user, single browser
- No backend infrastructure

**Future Scaling**:
- Add backend server for API key management
- Implement user authentication
- Multi-model support (OpenAI, Claude, etc.)
- Team collaboration features
- Analytics and usage tracking

---

## 🔄 Development Workflow

```
1. Code Changes
   └─→ Edit background.js, content.js, or manifest.json

2. Reload Extension
   └─→ chrome://extensions/ → Reload button

3. Test on Webpage
   └─→ Open/refresh test page
   └─→ Select text
   └─→ Trigger analysis

4. Check Console
   └─→ F12 → Console tab
   └─→ Review logs/errors

5. Iterate
   └─→ Fix issues
   └─→ Return to step 1
```

---

**Document Version**: 1.0.0  
**Last Updated**: October 3, 2025  
**Maintained by**: LogiCheck Development Team
