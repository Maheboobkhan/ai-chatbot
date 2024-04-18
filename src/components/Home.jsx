// Home.js
import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-[87vh]">
      <div className="max-w-xl w-full px-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-6">
          Welcome to AI Chatbot
        </h1>
        <p className="text-lg lg:text-xl text-gray-700 text-center mb-8">
          Your friendly AI Chatbot for all your questions!
        </p>
        <div className="flex justify-center">
          <Link to="chat">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Start Chatting
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
