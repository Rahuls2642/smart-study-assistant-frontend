import { useState, useEffect, useRef } from "react";
import API from "../utils/api";

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleAsk = async () => {
    if (!question.trim() || loading) return;

    const userMsg = { role: "user", text: question };
    setMessages((prev) => [...prev, userMsg]);

    const currentQuestion = question;
    setQuestion("");
    setLoading(true);

    try {
      const res = await API.post("/query", { question: currentQuestion });

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: res.data.answer },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#fafafa] text-gray-900">


      <header className="h-14 px-6 flex items-center justify-between border-b border-gray-100 bg-white">
        <h1 className="text-sm font-semibold tracking-tight">
          Study Assistant
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          className="text-sm text-gray-500 hover:text-gray-900 transition"
        >
          Logout
        </button>
      </header>


      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">

          {messages.length === 0 && (
            <div className="h-[50vh] flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Ask anything about your documents
              </h2>
              <p className="text-gray-500 text-sm">
                Upload a PDF and start asking questions
              </p>
            </div>
          )}

          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[75%] px-4 py-3 text-sm leading-relaxed rounded-2xl
                  ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-md"
                      : "bg-white border border-gray-200 text-gray-800 rounded-bl-md"
                  }
                `}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <p className="text-sm text-gray-400">Thinking...</p>
          )}

        </div>
      </div>

  
      <div className="border-t border-gray-100 bg-white px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">

          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAsk()}
            placeholder="Ask a question..."
            className="flex-1 px-4 py-3 rounded-full border border-gray-200 
            focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 
            text-sm"
          />

          <button
            onClick={handleAsk}
            disabled={loading || !question.trim()}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition
              ${
                loading || !question.trim()
                  ? "bg-gray-200 text-gray-400"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
};

export default Chat;