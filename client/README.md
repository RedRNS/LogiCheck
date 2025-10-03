# LogiCheck Frontend

This is the React frontend for the LogiCheck web application, built with Vite.

## Setup Instructions

### 1. Install Dependencies

```bash
cd client
npm install
```

### 2. Configure Environment Variables (Optional)

Create a `.env` file in the client directory if you need to customize the API URL:

```
VITE_API_URL=http://localhost:5000/api
```

By default, the app uses Vite's proxy configuration to connect to the backend.

### 3. Start the Development Server

```bash
npm run dev
```

The app will start on `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

## Project Structure

```
client/
├── src/
│   ├── api/              # API client functions
│   │   └── api.js
│   ├── components/       # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── Alert.jsx
│   │   ├── FallacyCard.jsx
│   │   └── ChatBubble.jsx
│   ├── pages/            # Page components
│   │   ├── HomePage.jsx
│   │   ├── AnalyzerPage.jsx
│   │   ├── DojoPage.jsx
│   │   └── EssayClinicPage.jsx
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.jsx           # Main app component with routing
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Features

### 1. Core Analyzer (`/analyzer`)
- Two-panel interface for text analysis
- Displays main claim, assumptions, and logical fallacies
- Interactive Socratic dialogue chat
- Real-time feedback from AI

### 2. The Dojo (`/dojo`)
- **Fallacy Sparring**: Identify fallacies in real-world scenarios
- Multiple-choice questions with immediate feedback
- Progress tracking and mastery levels
- 10 core fallacies tested

### 3. Essay Clinic (`/essay-clinic`)
- Rich text editor for essay input
- AI-powered argumentative analysis
- Categorized feedback on:
  - Thesis Cohesion
  - Evidence-to-Claim Linkage
  - Logical Flow
  - Counterargument Engagement

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client
- **React Quill** - Rich text editor
- **Lucide React** - Icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Notes

- The frontend communicates with the backend API running on port 5000
- All API calls are made through the `src/api/api.js` module
- Tailwind CSS is configured with custom color schemes for LogiCheck branding
- The app is fully responsive and works on mobile devices
