import { useState } from "react";
import axios from "axios";
import "../index.css";
import API from "../utils/api";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);

 const handleAsk = async () => {
    if (!question) return;

    const userMsg = { role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);
    const currentQuestion = question; 
    setQuestion(""); 

    try {
      const res = await API.post("/query", { question: currentQuestion });
      const botMsg = { role: "bot", text: res.data.answer };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMsg = { role: "bot", text: "Sorry, I couldn't process that request." };
      setMessages((prev) => [...prev, errorMsg]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="p-4 flex gap-2 border-t">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="flex-1 border p-2 rounded"
          placeholder="Ask something..."
        />
        <button
          onClick={handleAsk}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Ask
        </button>
      </div>
      <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.reload();
  }}
  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1"
>
  Logout
</button>
    </div>
  );
};

export default Chat;