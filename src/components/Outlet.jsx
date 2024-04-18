import React from "react";
function Outlet() {
  return (
    <header className="bg-blue-500 text-white py-4 flex justify-between items-center px-4 overflow-hidden">
      <h1 className="text-2xl font-bold">AI Chatbot</h1>
      <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded transition duration-300 hover:bg-blue-600 hover:text-white hover:border-transparent">
        Sign Up
      </button>
    </header>
  );
}

export default Outlet;
