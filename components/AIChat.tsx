import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, ChevronDown, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { ACCENT_COLOR } from '../constants';

// Simple Markdown Renderer Component
const MarkdownRenderer: React.FC<{ content: string; isUser: boolean }> = ({ content, isUser }) => {
  // Helper to parse bold text (**text**)
  const parseBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className={isUser ? "text-white font-bold" : "text-white font-bold"}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const lines = content.split('\n');

  return (
    <div className="space-y-1">
      {lines.map((line, i) => {
        const trimmed = line.trim();
        
        // Handle Bullet points
        if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
           return (
             <div key={i} className="flex gap-2 ml-1">
               <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isUser ? 'bg-white' : `bg-[${ACCENT_COLOR}]`}`}></span>
               <span>{parseBold(trimmed.replace(/^[\*\-]\s/, ''))}</span>
             </div>
           );
        }
        
        // Handle empty lines
        if (!trimmed) return <div key={i} className="h-1"></div>;

        // Standard paragraph
        return <p key={i} className="min-h-[1.2em]">{parseBold(line)}</p>;
      })}
    </div>
  );
};

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm **Amal's AI Assistant**. Ask me anything about his GenAI projects or experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for context
    const historyForApi = messages.map(m => ({ role: m.role, text: m.text }));

    const responseText = await sendMessageToGemini(historyForApi, userMsg.text);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#131316]/95 backdrop-blur-xl border border-gray-800 shadow-2xl flex flex-col rounded-2xl overflow-hidden animate-float-in">
          
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gradient-to-r from-[#1a1a1a] to-[#0c0c0e]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D97757] rounded-full animate-pulse"></div>
              <span className="font-semibold text-white tracking-wide text-sm">Amal's Digital Twin</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-700">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-xl text-sm leading-relaxed shadow-lg ${
                  msg.role === 'user' 
                    ? `bg-[#D97757] text-white rounded-br-none` 
                    : 'bg-[#1f1f23] text-gray-200 border border-gray-700 rounded-bl-none'
                }`}>
                  <MarkdownRenderer content={msg.text} isUser={msg.role === 'user'} />
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-[#1f1f23] p-3 rounded-xl rounded-bl-none border border-gray-700 flex items-center gap-2 shadow-lg">
                    <Loader2 size={16} className="animate-spin text-[#D97757]" />
                    <span className="text-xs text-gray-500">Thinking...</span>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-800 bg-[#0c0c0e]">
            <div className="flex items-center gap-2 bg-[#1f1f23] border border-gray-700 rounded-full px-4 py-2 focus-within:border-[#D97757] transition-colors">
              <input 
                type="text" 
                className="bg-transparent flex-1 text-sm text-white outline-none placeholder-gray-600"
                placeholder="Ask about RAG, Python, or Experience..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className={`text-gray-400 hover:text-[#D97757] transition-colors ${isLoading ? 'opacity-50' : ''}`}
              >
                <Send size={16} />
              </button>
            </div>
            <div className="text-[10px] text-center mt-2 text-gray-600 font-mono">
              Powered by Gemini 2.5 Flash
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#D97757] text-white rounded-full shadow-lg hover:bg-[#c56649] transition-all hover:scale-110 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        
        {/* Ping effect when closed */}
        {!isOpen && (
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};