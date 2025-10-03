# Project LogiCheck: AI Agent Development Instructions (Full Web Application)

## 1. Primary Directive & Core Mission

**AI Agent's Role:** Your primary role is to act as an expert **full-stack software engineer**. You are specialized in building scalable web applications using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** and integrating with external AI APIs. You will assist in writing, refactoring, and debugging the code for the entire LogiCheck platform.

**Single Source of Truth:** This document is your **immutable set of instructions**. Before executing ANY code modification, you MUST re-read and adhere strictly to the vision, architecture, features, and API contracts defined herein. The project's vision is fully encapsulated in this document, based on the extended abstract *"LogiCheck: Your Conversational Al Coach for Sharpening Logical Reasoning in an Era of Mass Information"*. All development must align with these instructions.

**Project Name:** LogiCheck 
**Core Mission:** To develop a comprehensive web platform that functions as a conversational AI coach, designed to sharpen users' logical reasoning, identify fallacies and biases, and improve their argumentation skills in an era of mass information and AI-generated content. 
**Primary User:** Students, academics, and lifelong learners.

---

## 2. High-Level Project Vision & Scope

LogiCheck is a cloud-native web application, NOT just a browser extension. The platform consists of three core, interconnected features accessible through a central website. The "LogiCheck Lens" browser extension serves as a companion tool that integrates this functionality directly into the user's browsing experience.

**Current Development Focus:** The **main web application**. This includes the user-facing frontend (React) and the supporting backend (Node.js/Express.js). The browser extension is a secondary component that will leverage the same backend APIs.

### The LogiCheck Ecosystem:
1.  **Core Analyzer:** The main text analysis tool. 
2.  **The "Dojo":** A gamified practice environment. 
3.  **The "Essay Clinic":** A tool for analyzing and improving a user's own writing. 
4.  **"LogiCheck Lens" Browser Extension:** A point-of-need tool for on-the-fly analysis on any webpage. 

---

## 3. Core Feature Specifications

### 3.1. The Core Analyzer & Socratic Dialogue
This is the heart of the platform.
* **UI:** A clean, two-panel interface. The left panel contains a text area for users to paste content. The right panel displays the analysis results. 
* **Functionality:** Upon submission, the backend API is called. The frontend then dynamically renders the structured report.
* **Analysis Report Structure:**
    * **Main Claim:** A concise, one-sentence summary of the text's argument. 
    * **Underlying Assumptions:** A bulleted list of unstated premises the author relies on. 
    * **Identified Logical Fallacies:** A list of cards. Each card must display the **quote**, the **fallacy name**, and a clear **explanation**. 
* **Socratic Dialogue:** Below the report, a chat interface appears, initiated by a single, AI-generated Socratic question designed to provoke critical evaluation of the argument's weakest point. 

### 3.2. The "Dojo": Gamified Practice Environment
A dedicated section of the website for interactive skill-building.
* **Feature 1: Fallacy Sparring** 
    * **Gameplay:** Users are presented with short, context-rich scenarios and must identify the correct logical fallacy from a multiple-choice list.
    * **Feedback:** The system provides immediate feedback and detailed explanations upon selection.
    * **Fallacy Database:** The system must be trained on and test users against these 10 fallacies:
        1.  Ad Hominem 
        2.  Straw Man 
        3.  Hasty Generalization 
        4.  Appeal to Authority 
        5.  False Dichotomy (False Dilemma) 
        6.  Slippery Slope 
        7.  Red Herring 
        8.  Bandwagon Appeal 
        9.  Faulty Analogy 
        10. Post Hoc Ergo Propter Hoc 
* **Feature 2: Bias Blindspot Challenge** 
    * **UI:** A side-by-side view presenting two articles on the same topic from sources with opposing biases. 
    * **Functionality:** Users are equipped with a highlighting tool to identify loaded language, emotional appeals, and biased framing in both texts. The goal is to compare how perspective shapes narrative. 

### 3.3. The "Essay Clinic": Argumentative Writing Coach
This feature shifts focus to the user's own work.
* **UI:** A dedicated page with a rich text editor (e.g., Quill.js, TinyMCE). Users paste their draft directly into this editor. **Do not use file uploads** to preserve formatting. 
* **Functionality:** The AI performs a deep analysis focused **exclusively on argumentation**, not grammar or style. 
* **Key Feedback Areas (The AI must analyze and comment on these):**
    1.  **Thesis Cohesion:** Does the essay consistently support the main thesis? 
    2.  **Evidence-to-Claim Linkage:** Is the evidence in each paragraph sufficient and directly relevant to its claim? 
    3.  **Logical Flow:** Are there logical gaps or contradictions between sections? 
    4.  **Counterargument Engagement:** Does the essay acknowledge and effectively refute potential counterarguments? 
* **Feedback Presentation:** The UI must display the user's essay with specific sections highlighted. Corresponding comment cards appear alongside, providing constructive, formative advice. 

---

## 4. Detailed Technical Architecture

### 4.1. Frontend (React.js)
* **Framework:** React.js (using Create React App or Vite).
* **Routing:** Use `react-router-dom` for navigation between pages.
* **State Management:** Use React Hooks (`useState`, `useEffect`, `useContext`). For more complex state, consider Zustand or Redux Toolkit.
* **Styling:** Use a modular approach like CSS Modules, Styled-Components, or a utility-first framework like Tailwind CSS to prevent style conflicts.
* **Proposed Directory Structure:**
    ```
    /src
    |-- /api             // Functions for making API calls to the backend
    |-- /assets          // Images, fonts, etc.
    |-- /components      // Reusable UI components (e.g., Button, Card, FallacyCard, ChatBubble)
    |-- /hooks           // Custom React hooks
    |-- /pages           // Top-level page components
    |   |-- HomePage.js
    |   |-- AnalyzerPage.js
    |   |-- DojoPage.js
    |   |-- EssayClinicPage.js
    |   |-- LoginPage.js
    |-- /styles
    |-- App.js
    |-- index.js
    ```

### 4.2. Backend (Node.js & Express.js)
* **Framework:** Node.js with Express.js.
* **API Design:** A RESTful API.
* **Responsibilities:**
    1.  Handle user requests from the frontend.
    2.  Interface securely with the external AI Engine (Gemini API). **API keys MUST NOT be exposed to the frontend.**
    3.  Manage database interactions (user data, Dojo content, etc.).
    4.  Implement the AI Prompt Architecture before sending requests to the AI Engine.

### 4.3. AI Engine: The Socratic Prompt Architecture (CRITICAL)
This is the "brain" of LogiCheck. The backend MUST wrap user text in this multi-layered prompt before sending it to the Gemini 2.0 Pro API. 

* **Layer 1: The Persona Layer** 
    * **Instruction:** `"You are LogiCheck, a conversational Al coach. Your purpose is to help users sharpen their logical reasoning. You are analytical, neutral, and encouraging. You do not give opinions or declare information 'true' or 'false.' Your entire focus is on the structure and quality of the argument."` 
* **Layer 2: The Analysis Layer** 
    * **Instruction:** `"Analyze the following text. Your output must be a JSON object with these exact keys: 'mainClaim' (a one-sentence summary of the author's central argument), 'assumptions' (a list of key unstated assumptions), and 'fallacies' (a list of objects, where each object has 'fallacyName', 'quote', and 'explanation'). If a key has no findings, return an empty list."` 
* **Layer 3: The Dialogue Layer** 
    * **Instruction:** `"Based on your analysis, generate one Socratic question that encourages the user to evaluate the argument's weakest point. The question should not contain the answer. Frame it to foster curiosity and further reflection."` 

---

## 5. Strict API Contracts

### 5.1. `POST /api/analyze`
* **Description:** The primary endpoint for the Core Analyzer.
* **Request Body:** `{ "text": "The user's submitted text..." }`
* **Success Response (200 OK):**
    ```json
    {
      "mainClaim": "A concise summary of the author's central argument.",
      "assumptions": [
        "An unstated assumption found in the text."
      ],
      "fallacies": [
        {
          "fallacyName": "Appeal to Authority",
          "quote": "A famous celebrity endorsed this product...",
          "explanation": "This relies on fame rather than evidence."
        }
      ],
      "socraticQuestion": "What kind of evidence would be needed to validate the claim made in paragraph two?"
    }
    ```
* **Graceful Handling:** If `assumptions` or `fallacies` are empty arrays (`[]`), the frontend must not render their corresponding UI sections or headings.

### 5.2. `GET /api/dojo/sparring-challenge`
* **Description:** Fetches a new question for the "Fallacy Sparring" game.
* **Success Response (200 OK):**
    ```json
    {
      "challengeId": "uuid-12345",
      "scenario": "A politician argues we shouldn't listen to a climate scientist's research because the scientist was once fined for littering.",
      "options": [
        "Straw Man",
        "Ad Hominem",
        "Hasty Generalization",
        "Red Herring"
      ],
      "correctAnswer": "Ad Hominem"
    }
    ```

### 5.3. `POST /api/clinic/analyze-essay`
* **Description:** Analyzes a user's essay draft from the Essay Clinic.
* **Request Body:** `{ "essayText": "The full text of the user's essay..." }`
* **Success Response (200 OK):**
    ```json
    {
      "annotations": [
        {
          "targetText": "The evidence presented in paragraph three...",
          "feedbackCategory": "Evidence-to-Claim Linkage",
          "comment": "This evidence does not sufficiently support your claim in this paragraph. Consider finding a more direct source."
        },
        {
          "targetText": "The transition between your second and third points...",
          "feedbackCategory": "Logical Flow",
          "comment": "There is a potential non sequitur here. How can you create a stronger logical bridge between these ideas?"
        }
      ]
    }
    ```

---

## 6. Coding Guidelines & Best Practices

1.  **Asynchronous First:** All API calls and external communications are asynchronous. Use `async/await` syntax for clean, readable code.
2.  **Robust Error Handling:** The UI must display clear, user-friendly error messages if an API call fails or the response is malformed. Implement proper `try...catch` blocks.
3.  **Security:** All API keys and sensitive logic MUST reside ONLY on the backend. Never expose them in the frontend React code.
4.  **Code Clarity & Modularity:** Write clean, well-commented code. Follow the proposed file structures and component breakdowns. Keep components small and focused on a single responsibility.
5.  **No Hardcoding:** All analytical data displayed (claims, fallacies, Dojo questions, essay feedback) must be populated dynamically from the API response. Do not hardcode any examples.