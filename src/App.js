// LogiCheck Lens - Main React App Component
// Main container for the sidebar UI

import React from 'react';
import './App.css';

// Mock analysis data
const mockAnalysisData = {
  mainClaim: "The author argues that remote work is the future for all industries.",
  assumptions: [
    "Assumes all jobs can be done remotely.",
    "Assumes employees prefer working from home."
  ],
  fallacies: [
    {
      fallacyName: "Hasty Generalization",
      quote: "I saw one successful tech company go fully remote, so it proves every company should.",
      explanation: "Drawing a broad conclusion from a single, possibly unrepresentative, example."
    }
  ],
  socraticQuestion: "What evidence might challenge the idea that this model works for 'all' industries?"
};

function App() {
  const handleClose = () => {
    // Hide the sidebar by calling the global function
    if (window.logicheckHideSidebar) {
      window.logicheckHideSidebar();
    }
  };

  return (
    <div className="logicheck-sidebar">
      {/* Header with close button */}
      <div className="logicheck-header">
        <h2>LogiCheck Analysis</h2>
        <button className="logicheck-close-btn" onClick={handleClose}>
          ✕
        </button>
      </div>

      {/* Analysis content */}
      <div className="logicheck-content">
        {/* Main Claim Section */}
        <section className="logicheck-section">
          <h3>Main Claim</h3>
          <p className="main-claim">{mockAnalysisData.mainClaim}</p>
        </section>

        {/* Underlying Assumptions Section */}
        <section className="logicheck-section">
          <h3>Underlying Assumptions</h3>
          <ul className="assumptions-list">
            {mockAnalysisData.assumptions.map((assumption, index) => (
              <li key={index}>{assumption}</li>
            ))}
          </ul>
        </section>

        {/* Identified Logical Fallacies Section */}
        <section className="logicheck-section">
          <h3>Identified Logical Fallacies</h3>
          {mockAnalysisData.fallacies.map((fallacy, index) => (
            <div key={index} className="fallacy-card">
              <h4 className="fallacy-name">{fallacy.fallacyName}</h4>
              <blockquote className="fallacy-quote">"{fallacy.quote}"</blockquote>
              <p className="fallacy-explanation">{fallacy.explanation}</p>
            </div>
          ))}
        </section>

        {/* Socratic Dialogue Section */}
        <section className="logicheck-section">
          <h3>Socratic Question</h3>
          <p className="socratic-question">{mockAnalysisData.socraticQuestion}</p>
        </section>
      </div>
    </div>
  );
}

export default App;
