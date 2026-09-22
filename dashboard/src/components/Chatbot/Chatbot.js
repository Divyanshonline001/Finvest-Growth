import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGeminiActive, setIsGeminiActive] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am your Kite AI Assistant. Ask me anything about stocks, portfolios, market indices, or investing strategies!",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "What is Nifty 50?",
    "How to place an order?",
    "Check my holdings",
    "F&O margin details",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:4000/chatbot/status", { withCredentials: true })
      .then((res) => {
        setIsGeminiActive(res.data.geminiActive);
      })
      .catch((err) => console.error("Error fetching chatbot API status:", err));
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async (textToSend) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    if (!textToSend) setInputText("");

    setIsTyping(true);

    try {
      const { data } = await axios.post(
        "http://localhost:4000/chatbot",
        { message: text },
        { withCredentials: true }
      );
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error("Chatbot request failed", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I am having trouble connecting to the financial network. Please try again later!",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chatbot-container">
      {/* Floating Action Button */}
      <button className="chatbot-trigger" onClick={toggleChat}>
        {isOpen ? (
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z" />
          </svg>
        )}
      </button>

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-title">
              <span className="online-dot"></span>
              <div>
                <h4>Kite AI Assistant</h4>
                <span className="chatbot-mode">
                  {isGeminiActive ? "🤖 Gemini AI Connected" : "💡 Local Knowledge Base"}
                </span>
              </div>
            </div>
            <button className="chatbot-close" onClick={toggleChat}>
              &times;
            </button>
          </div>

          {/* Messages list */}
          <div className="chatbot-messages">
            {!isGeminiActive && (
              <div className="chatbot-info-banner">
                Tip: Add your free <code>GEMINI_API_KEY</code> in <code>backend/.env</code> to unlock full generative AI capabilities!
              </div>
            )}
            {messages.map((msg, index) => (
              <div key={index} className={`chatbot-msg-row ${msg.sender}`}>
                <div className={`chatbot-bubble ${msg.sender}`}>{msg.text}</div>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-msg-row bot">
                <div className="chatbot-bubble bot">
                  <div className="typing-indicator">
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                    <span className="typing-dot"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestion Chips */}
          <div className="chatbot-suggestions">
            {suggestions.map((sug, idx) => (
              <button
                key={idx}
                className="chatbot-chip"
                onClick={() => handleSend(sug)}
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Input text box */}
          <div className="chatbot-input-container">
            <input
              type="text"
              className="chatbot-input"
              placeholder="Ask about finance & stock markets..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button className="chatbot-send" onClick={() => handleSend()}>
              <svg viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
