// Chat.js
import React, { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, { sender: "user", text: inputValue }]);
      setInputValue("");
      // Here you can add logic for AI response
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-end h-[87vh]">
      <div className="max-w-xl w-full p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2">Chat with AI Chatbot</h2>
          <p className="text-lg text-gray-700 mb-4">Ask me anything!</p>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-4 ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`bg-white rounded-lg p-4 max-w-xs ${
                  message.sender === "user" ? "ml-auto" : "mr-auto"
                }`}
              >
                <p className="text-gray-700">{message.text}</p>
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 flex items-center"
        >
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Message AI Chatbot..."
            className="w-full border rounded-md px-4 py-2 mr-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
