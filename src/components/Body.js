// src/components/Body.js
import React, { useState } from 'react';
import axios from 'axios';

function Body() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/analyze', { text });
      setResult(response.data);
    } catch (error) {
      console.error('Error analyzing text:', error);
    }
  };

  return (
    <div className="flex-grow p-6">
      <div className="text-center mt-16">
        <h1 className="text-6xl font-bold mb-4">
          Hello, <span className="text-red-500">Dev</span>.
        </h1>
        <h2 className="text-4xl mb-8">How can I help you today?</h2>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          Suggest beautiful places to see on an upcoming road trip
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          Briefly summarize this concept: urban planning
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          Brainstorm team bonding activities for our work retreat
        </div>
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          Tell me about React js and React native
        </div>
      </div>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a prompt here"
          className="w-1/2 p-2 rounded-full text-black"
        />
        <button
          type="submit"
          className="ml-4 p-2 bg-blue-500 hover:bg-blue-700 rounded-full text-white"
        >
          Submit
        </button>
      </form>
      {result && (
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Analysis Result</h2>
          <p><strong>Text:</strong> {result.text}</p>
          <p><strong>Sentiment Score:</strong> {result.sentiment_score}</p>
          <p><strong>Sentiment Magnitude:</strong> {result.sentiment_magnitude}</p>
        </div>
      )}
    </div>
  );
}

export default Body;
