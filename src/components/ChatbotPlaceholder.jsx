import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, CornerDownRight } from 'lucide-react';

const ChatbotPlaceholder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    { text: 'Hello! Welcome to Peptides & You. How can I help you find the right peptide today?', sender: 'bot' }
  ]);

  return (
    <div style={{position: 'fixed', bottom: 24, right: 24, zIndex: 200}}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            style={{
              width: 340, height: 480, marginBottom: 12,
              background: '#fff', borderRadius: 16,
              boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #D4AF37, #B8972F)', padding: '16px 18px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff',
            }}>
              <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
                <div style={{background: 'rgba(255,255,255,0.2)', padding: 7, borderRadius: 8}}>
                  <Bot size={20} />
                </div>
                <div>
                  <div className="outfit" style={{fontSize: 14, fontWeight: 700}}>Peptide Assistant</div>
                  <div style={{fontSize: 10, opacity: 0.8, fontWeight: 600, letterSpacing: '0.06em'}}>ONLINE</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{background: 'none', color: 'rgba(255,255,255,0.7)', padding: 4}}>
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div style={{flex: 1, padding: 16, overflowY: 'auto', background: '#FAFAFA', display: 'flex', flexDirection: 'column', gap: 14}}>
              {messages.map((msg, i) => (
                <div key={i} style={{display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start'}}>
                  <div style={{
                    maxWidth: '85%', padding: '10px 14px', borderRadius: 12,
                    fontSize: 13, lineHeight: 1.6,
                    ...(msg.sender === 'user'
                      ? { background: 'var(--primary)', color: '#fff', borderBottomRightRadius: 4 }
                      : { background: '#fff', color: 'var(--text-secondary)', border: '1px solid var(--border)', borderBottomLeftRadius: 4 }
                    ),
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, fontWeight: 600, color: 'var(--text-light)', marginTop: 4}}>
                <CornerDownRight size={10} /> Typical response: ~2s
              </div>
            </div>

            {/* Input */}
            <div style={{padding: 12, background: '#fff', borderTop: '1px solid var(--border)', display: 'flex', gap: 8}}>
              <input type="text" placeholder="Ask about our peptides..."
                style={{
                  flex: 1, background: '#F4F4F5', border: '1px solid var(--border)', borderRadius: 8,
                  padding: '9px 12px', fontSize: 13, outline: 'none', fontFamily: 'inherit', color: 'var(--text)',
                }} />
              <button style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8972F)', width: 38, height: 38, borderRadius: 8,
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 52, height: 52, borderRadius: '50%',
          background: 'linear-gradient(135deg, #D4AF37, #B8972F)', color: '#fff',
          boxShadow: '0 4px 16px rgba(184,151,47,0.35)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '3px solid #fff', transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
};

export default ChatbotPlaceholder;
