import { Trophy, TrendingUp, Lightbulb, CheckCircle, AlertCircle } from 'lucide-react';

/**
 * BiasFeedback Component
 * Displays feedback analysis for user's bias highlights
 */
const BiasFeedback = ({ feedback, onClose }) => {
  if (!feedback) return null;

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-50 border-green-500';
    if (score >= 60) return 'bg-blue-50 border-blue-500';
    if (score >= 40) return 'bg-yellow-50 border-yellow-500';
    return 'bg-orange-50 border-orange-500';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className={`p-6 border-b-4 ${getScoreBgColor(feedback.overallScore)}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Trophy className={`w-8 h-8 ${getScoreColor(feedback.overallScore)}`} />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Analysis Results</h2>
                <p className="text-sm text-gray-600">{feedback.performanceLevel} Level</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
            >
              ✕
            </button>
          </div>
          
          {/* Score Display */}
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-white">
                      Overall Score
                    </span>
                  </div>
                  <div className="text-right">
                    <span className={`text-3xl font-bold ${getScoreColor(feedback.overallScore)}`}>
                      {feedback.overallScore}
                    </span>
                    <span className="text-gray-500">/100</span>
                  </div>
                </div>
                <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-200">
                  <div
                    style={{ width: `${feedback.overallScore}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500 ${
                      feedback.overallScore >= 80 ? 'bg-green-500' :
                      feedback.overallScore >= 60 ? 'bg-blue-500' :
                      feedback.overallScore >= 40 ? 'bg-yellow-500' : 'bg-orange-500'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          
          <p className="mt-4 text-gray-700 font-medium">{feedback.message}</p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Category Breakdown */}
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-3 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span>Bias Categories Identified</span>
            </h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white p-3 rounded-lg text-center border-2 border-red-200">
                <div className="text-2xl font-bold text-red-600">{feedback.categoryBreakdown.loaded}</div>
                <div className="text-xs text-gray-600">Loaded Language</div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border-2 border-orange-200">
                <div className="text-2xl font-bold text-orange-600">{feedback.categoryBreakdown.emotional}</div>
                <div className="text-xs text-gray-600">Emotional Appeals</div>
              </div>
              <div className="bg-white p-3 rounded-lg text-center border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-600">{feedback.categoryBreakdown.framing}</div>
                <div className="text-xs text-gray-600">Biased Framing</div>
              </div>
            </div>
          </div>

          {/* Strengths */}
          {feedback.strengths.length > 0 && (
            <div className="bg-green-50 p-4 rounded-xl border-l-4 border-l-green-500">
              <h3 className="font-semibold mb-3 flex items-center space-x-2 text-green-900">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Strengths</span>
              </h3>
              <ul className="space-y-2">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Areas for Improvement */}
          {feedback.improvements.length > 0 && (
            <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-l-blue-500">
              <h3 className="font-semibold mb-3 flex items-center space-x-2 text-blue-900">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Areas for Improvement</span>
              </h3>
              <ul className="space-y-2">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                    <span className="text-blue-600 mt-0.5">→</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Insights */}
          {feedback.insights.length > 0 && (
            <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-l-purple-500">
              <h3 className="font-semibold mb-3 flex items-center space-x-2 text-purple-900">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <span>Key Insights</span>
              </h3>
              <ul className="space-y-2">
                {feedback.insights.map((insight, index) => (
                  <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                    <span className="text-purple-600 mt-0.5">💡</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 border-t">
          <button
            onClick={onClose}
            className="btn-primary w-full"
          >
            Continue Practicing
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiasFeedback;
