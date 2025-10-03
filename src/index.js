// LogiCheck Lens - React Entry Point
// Handles rendering the App component

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This will be called by the content script to mount the React app
const renderSidebar = (containerId) => {
  const container = document.getElementById(containerId);
  if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
};

export { renderSidebar };
