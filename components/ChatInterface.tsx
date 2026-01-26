
import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! Main hoon AceBot. Board Exams 2026 ki taiyari shuru karein? Poochiye kuch bhi!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    try {
      const response = await chatWithTutor(messages, userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: 'Bhai, check your internet! Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <div className="bg-slate-900/95 backdrop-blur-3xl w-[400px] md:w-[500px] h-[700px] rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] border border-white/5 flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-500">
          <div className="bg-slate-950 p-10 flex items-center justify-between text-white relative overflow-hidden border-b border-white/5">
            <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[50px]"></div>
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-3xl shadow-indigo-500/30">✨</div>
              <div>
                <span className="font-black text-xl block leading-none tracking-tight">AceBot AI</span>
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-400 mt-2 block">Premium Board Tutor</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors text-2xl">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-slate-950/20 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[85%] px-8 py-5 rounded-[2.5rem] text-[14px] font-bold tracking-tight leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-2xl shadow-indigo-500/10' 
                    : 'bg-slate-800 text-slate-200 border border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border-white/5 border px-8 py-4 rounded-full text-[10px] font-black text-indigo-400 uppercase tracking-widest animate-pulse">
                  AceBot is thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-8 border-t border-white/5 bg-slate-950/50 backdrop-blur-md flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask AceBot (Hinglish works!)"
              className="flex-1 px-8 py-5 bg-white/5 border border-white/5 rounded-full outline-none focus:ring-4 focus:ring-indigo-500/20 text-[14px] font-bold text-white shadow-inner"
            />
            <button 
              onClick={handleSend}
              className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-500 hover:scale-110 active:scale-90 transition-all shadow-3xl shadow-indigo-600/20"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-24 h-24 bg-indigo-600 text-white rounded-[3rem] shadow-[0_35px_70px_-15px_rgba(99,102,241,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-4 border-slate-950"
        >
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-950 animate-bounce"></div>
          <span className="text-4xl group-hover:rotate-12 transition-transform">✨</span>
        </button>
      )}
    </div>
  );
};

export default ChatInterface;
