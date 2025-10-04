// Quick test script for bias-challenge endpoint
const testEndpoint = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/dojo/bias-challenge');
    const data = await response.json();
    console.log('✅ Success! Response:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
};

testEndpoint();
