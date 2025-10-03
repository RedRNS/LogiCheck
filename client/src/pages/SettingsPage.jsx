import ApiKeySettings from '../components/ApiKeySettings';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Settings</h1>
          <p className="text-gray-600">Configure your LogiCheck experience</p>
        </div>
        
        <ApiKeySettings />
      </div>
    </div>
  );
};

export default SettingsPage;
