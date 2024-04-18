// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="">
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        {/* Uncomment the below line to render Chat component */}
      </main>
    </div>
  );
}

export default App;
