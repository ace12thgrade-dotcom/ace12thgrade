
import React, { useState, useRef, useEffect } from 'react';
import { chatWithTutor } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste! I am AceBot. I have analyzed 4,250+ PYQs to help you top. What are we learning today?' }
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
      setMessages(prev => [...prev, { role: 'model', text: 'Bhai, lagta hai internet slow hai. Please try again!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isOpen ? (
        <div className="bg-white/90 backdrop-blur-3xl w-[380px] md:w-[450px] h-[600px] rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] border border-white flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-500">
          <div className="bg-slate-900 p-8 flex items-center justify-between text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-[40px]"></div>
            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-xl shadow-indigo-500/30">✨</div>
              <div>
                <span className="font-black text-lg block leading-none">AceBot AI</span>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-indigo-300 mt-1 block">Expert Tutor Mode</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors text-xl">✕</button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50/30 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-500`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-[2rem] text-[13px] font-bold tracking-tight leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none shadow-xl shadow-indigo-200' 
                    : 'bg-white text-slate-800 shadow-xl shadow-slate-200/50 border border-white rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/80 border-white border px-6 py-3 rounded-[2rem] text-[10px] font-black text-slate-400 uppercase tracking-widest animate-pulse shadow-sm">
                  AceBot is generating insights...
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-white/50 bg-white/40 backdrop-blur-md flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything (e.g. explain Nernst equation)"
              className="flex-1 px-6 py-4 bg-white rounded-[2rem] outline-none focus:ring-4 focus:ring-indigo-100 text-[13px] font-bold text-slate-800 shadow-inner"
            />
            <button 
              onClick={handleSend}
              className="w-14 h-14 bg-slate-900 text-white rounded-[1.8rem] flex items-center justify-center hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              ➔
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 bg-slate-900 text-white rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative border-4 border-white"
        >
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-white animate-bounce"></div>
          <span className="text-3xl group-hover:rotate-12 transition-transform">✨</span>
        </button>
      )}
    </div>
  );
};

export default ChatInterface;
