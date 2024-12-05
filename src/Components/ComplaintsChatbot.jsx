import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";

const ComplaintChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today? 😊" },
  ]);
  const [userInput, setUserInput] = useState("");

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    // Add user's message to the chat
    setMessages([...messages, { sender: "user", text: userInput }]);

    // Bot reply logic
    setTimeout(() => {
      const reply = handleBotReply(userInput);
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 500);

    setUserInput("");
  };

  const handleBotReply = (message) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes("complaint")) {
      return "Sure! Please describe your complaint in detail.";
    }
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! How can I assist you today?";
    }
    return "Thank you for your message. Our team will review it shortly.";
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChatbot}
          className="bg-teal-600 p-4 rounded-full shadow-lg text-white hover:bg-teal-500 transition flex items-center justify-center"
          aria-label="Open Chatbot"
        >
          <AiOutlineMessage size={24} />
        </button>
      )}

      {/* Chatbox */}
      {isOpen && (
        <div className="bg-gray-800 w-72 h-96 rounded-lg shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-teal-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h2 className="text-sm font-bold">Customer Support</h2>
            <button onClick={toggleChatbot} className="text-white hover:text-gray-200">
              <AiOutlineClose size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow p-3 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${
                  msg.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <p
                  className={`inline-block px-3 py-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-teal-700 text-white"
                      : "bg-gray-900 text-teal-300"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className="p-3 border-t border-gray-700">
            <div className="flex items-center">
              <input
                type="text"
                className="flex-grow p-2 border rounded-lg outline-none focus:ring-2 focus:ring-teal-600 text-white bg-gray-800"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="ml-2 bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-500 transition"
                aria-label="Send Message"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComplaintChatbot;