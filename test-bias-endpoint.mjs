// Test script for bias feedback endpoint
// Node.js v18+ has built-in fetch

const testData = {
  challengeId: "test-123",
  articleAHighlights: [
    { category: "loaded", text: "catastrophe" },
    { category: "emotional", text: "devastating" },
    { category: "framing", text: "betrayal of future generations" }
  ],
  articleBHighlights: [
    { category: "loaded", text: "radical" },
    { category: "emotional", text: "alarmist" }
  ],
  topic: "Climate Change Policy"
};

async function testEndpoint() {
  try {
    const response = await fetch('http://localhost:5000/api/dojo/analyze-bias-highlights', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testData)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ Error:', error);
      return;
    }

    const data = await response.json();
    console.log('✅ Success! Feedback received:');
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('❌ Fetch error:', error.message);
  }
}

testEndpoint();
