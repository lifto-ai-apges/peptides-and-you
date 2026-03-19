import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const ChatbotPlaceholder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! I am the Peptides and You AI advisor. How can I assist with your research today?', sender: 'bot' }
  ]);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass-panel w-[350px] sm:w-[400px] h-[500px] mb-4 flex flex-col overflow-hidden shadow-2xl border-white/10"
          >
            {/* Header */}
            <div className="bg-primary/20 p-5 flex justify-between items-center border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="bg-primary/30 p-2 rounded-lg">
                  <Bot size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold outfit-font">AI Research Assistant</h4>
                  <p className="text-[10px] text-primary uppercase font-bold tracking-widest px-1">Online</p>
                </div>
              </div>
              <button onClick={toggleChat} className="text-text-muted hover:text-text transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 bg-surface/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary/20 text-text border border-primary/20 rounded-tr-none' 
                      : 'bg-surface-bright text-text-muted border border-white/5 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-surface border-t border-white/5 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask about BPC-157, TB-500..." 
                className="flex-1 bg-surface-bright border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-primary/50 transition-all font-medium"
              />
              <button className="bg-primary p-2 rounded-xl text-white">
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleChat}
        className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </button>
    </div>
  );
};

export default ChatbotPlaceholder;
