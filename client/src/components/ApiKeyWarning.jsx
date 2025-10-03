import { AlertCircle, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const ApiKeyWarning = () => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-md">
        <div className="flex items-start">
          <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">
              API Key Required
            </h3>
            <p className="text-yellow-700 mb-4">
              You need to configure your Gemini API key before using this feature.
              Your API key is stored locally in your browser and never uploaded to our servers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/settings"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Go to Settings
              </Link>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-yellow-700 border-2 border-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors"
              >
                Get API Key
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyWarning;
