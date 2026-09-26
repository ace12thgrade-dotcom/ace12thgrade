import React, { useState, useRef, useEffect } from 'react';
import Markdown from 'react-markdown';
import { Send, X, RotateCcw, Sparkles, HelpCircle, BookOpen, Compass, Zap } from 'lucide-react';
import { chatWithTutor } from '../services/geminiService.ts';
import { ChatMessage, Subject, Chapter } from '../types.ts';

const SUGGESTED_QUESTIONS = [
  { label: '📱 How to use Ace12', query: 'What features does Ace12 have and how do I use them to prepare for Class 12 Boards?' },
  { label: '⚡ Gauss Law Derivation', query: 'Explain Gauss\'s Law with step-by-step mathematical proof and CBSE exam tips.' },
  { label: '🧪 Organic Name Reactions', query: 'List the most important Named Reactions for CBSE Class 12 Chemistry with reagents.' },
  { label: '🎯 Where are PYQs & Notes?', query: 'Where can I find the 15-year CBSE PYQs and Formula Vaults in this app?' },
  { label: '➗ Calculus High-Yield Topics', query: 'What are the highest-weightage topics in Class 12 Mathematics calculus for board exams?' },
];

const INITIAL_MESSAGE: ChatMessage = {
  role: 'model',
  text: `**Namaste! I am AceBot**, your dedicated study mentor for **Ace12 - Class 12 CBSE Study Hub**.\n\nI have complete information about:\n- 🚀 **Ace12 App Features**: All 7 subjects, 5 chapter modes (Notes, Formula Vaults, 4250+ Solved PYQs, Books/PDFs, AI Audio Reader), mobile zoom controls, and navigation.\n- 📚 **CBSE Class 12 Curriculum**: Physics, Chemistry, Maths, Biology, Computer Science, English Core, and Physical Education with step-marking rubrics and NCERT insights.\n\nWhat can I help you learn or navigate today?`
};

interface ChatInterfaceProps {
  activeSubject?: Subject;
  selectedChapter?: Chapter | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ activeSubject, selectedChapter }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Dynamic contextual suggestions based on currently open chapter
  const currentSuggestions = selectedChapter ? [
    { label: '📖 Explain this topic', query: `Explain the core concepts and key laws of "${selectedChapter.title}" in Class 12 ${activeSubject?.name || 'CBSE'} in clear, exam-ready notes.` },
    { label: '⚡ Solve a numerical', query: `Provide a classic solved numerical problem from "${selectedChapter.title}" with given data, formula, substitution, and standard SI units.` },
    { label: '✍️ Give board-style answer', query: `Write a high-scoring 5-mark CBSE board-style answer for "${selectedChapter.title}" with step-by-step points and marking scheme.` },
    { label: '📝 Test me', query: `Ask me 3 board-level practice questions from "${selectedChapter.title}" to test my preparation.` },
  ] : SUGGESTED_QUESTIONS;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (customText?: string) => {
    const textToSend = (customText || input).trim();
    if (!textToSend || isLoading) return;
    
    setInput('');
    const nextMessages = [...messages, { role: 'user' as const, text: textToSend }];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      // Pass the previous history plus current user message
      const response = await chatWithTutor(messages, textToSend);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (e: any) {
      // Offline fallback: provide instant contextual academic guidance from offline syllabus
      let offlineFallback = `⚠️ **Offline Mentor Mode**: Live AI service is currently resting.\n\n`;
      if (selectedChapter) {
        offlineFallback += `You can access complete verified notes, derivations, and solved CBSE PYQs for **${selectedChapter.title}** directly in the chapter tabs:\n- **📖 Notes & Theory**: Stepwise proofs, NCERT definitions, and exam tips\n- **📑 Formula Vault**: Equations with SI units and when-to-apply criteria\n- **🎯 4-5 Solved PYQs**: 15-year past board questions with stepwise marking rubrics\n- **🎯 Test Yourself**: 3-question instant interactive quiz with retry & Mistake Book saving!`;
      } else {
        offlineFallback += `You can continue browsing all complete chapter notes, formula vaults, and verified CBSE PYQs directly in the subject tabs on the left. All core materials are 100% offline-ready!`;
      }

      setMessages(prev => [
        ...prev, 
        { 
          role: 'model', 
          text: offlineFallback
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([INITIAL_MESSAGE]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 lg:bottom-8 lg:right-8 z-50">
      {isOpen ? (
        <div className="bg-slate-950/95 backdrop-blur-2xl w-[92vw] sm:w-[460px] md:w-[500px] h-[82vh] max-h-[720px] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-amber-500/30 flex flex-col overflow-hidden animate-in zoom-in-95 fade-in duration-300 origin-bottom-right">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/40 p-4 sm:p-5 flex items-center justify-between text-white border-b border-amber-500/20 relative shrink-0">
            <div className="flex items-center gap-3 relative z-10 min-w-0">
              <div className="relative shrink-0">
                <img 
                  src="/logo.png" 
                  alt="Ace12 Logo" 
                  className="w-10 h-10 rounded-xl shadow-md border border-amber-500/40 object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base tracking-tight">AceBot AI</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                    CBSE 12
                  </span>
                </div>
                {selectedChapter ? (
                  <span className="text-[10px] font-bold text-amber-300/90 block mt-0.5 truncate max-w-[240px]">
                    Context: {selectedChapter.title}
                  </span>
                ) : (
                  <span className="text-[10px] font-semibold text-slate-400 block mt-0.5">
                    App Guide & Board Exam Mentor
                  </span>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5 relative z-20 shrink-0">
              <button 
                onClick={handleResetChat} 
                className="p-2 text-slate-400 hover:text-amber-300 transition-colors rounded-xl hover:bg-white/5 active:scale-95"
                title="Restart conversation"
                aria-label="Restart conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5 active:scale-95"
                title="Close chat"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Messages Stream */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-950/40 scroll-smooth">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                {m.role === 'model' && (
                  <img 
                    src="/logo.png" 
                    alt="AceBot" 
                    className="w-7 h-7 rounded-lg mr-2 mt-1 shrink-0 border border-amber-500/30 object-cover shadow-sm hidden sm:block"
                    referrerPolicy="no-referrer"
                  />
                )}
                
                <div className={`max-w-[92%] sm:max-w-[85%] px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-md ${
                  m.role === 'user' 
                    ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-tr-none font-medium' 
                    : 'bg-slate-900/90 text-slate-200 border border-slate-800/90 rounded-tl-none font-normal'
                }`}>
                  {m.role === 'user' ? (
                    <p className="whitespace-pre-wrap">{m.text}</p>
                  ) : (
                    <div className="prose prose-invert prose-xs max-w-none space-y-2 prose-p:my-1 prose-headings:my-2 prose-headings:font-bold prose-headings:text-amber-300 prose-ul:my-1 prose-ul:pl-4 prose-li:my-0.5 prose-code:text-amber-300 prose-code:bg-amber-950/40 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-strong:text-amber-200 prose-strong:font-bold">
                      <Markdown>{m.text}</Markdown>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2.5 rounded-2xl w-fit animate-pulse">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>AceBot is researching CBSE notes & syllabus...</span>
              </div>
            )}
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-950/80 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
            <span className="text-[10px] font-bold text-amber-500/80 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Zap className="w-3 h-3" /> Quick:
            </span>
            {currentSuggestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q.query)}
                disabled={isLoading}
                className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-900 hover:bg-amber-950/60 hover:text-amber-200 hover:border-amber-500/40 text-slate-300 border border-slate-800 transition-all shrink-0 active:scale-95 disabled:opacity-50"
              >
                {q.label}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <div className="p-3 sm:p-4 border-t border-slate-800/80 bg-slate-950 flex items-center gap-2 shrink-0">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder={selectedChapter ? `Ask about ${selectedChapter.title}...` : "Ask AceBot about Ace12 features, formulas, derivations, PYQs..."}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 focus:border-amber-500/50 rounded-xl outline-none text-xs sm:text-[13px] text-white placeholder:text-slate-500 transition-all"
            />
            <button 
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white rounded-xl flex items-center justify-center transition-all shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              title="Send message"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 bg-slate-950/95 hover:bg-slate-900 text-white pl-2 pr-4 py-2 rounded-2xl shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8)] border border-amber-500/40 hover:border-amber-500/70 transition-all hover:scale-105 active:scale-95"
          title="Open AceBot AI CBSE Tutor"
          aria-label="Open AceBot AI CBSE Tutor"
        >
          <div className="relative">
            <img 
              src="/logo.png" 
              alt="AceBot Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-amber-500/40 object-cover shadow-sm"
              referrerPolicy="no-referrer"
            />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-950 animate-pulse" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xs tracking-tight text-white">AceBot AI</span>
              <Sparkles className="w-3 h-3 text-amber-400" />
            </div>
            <span className="text-[10px] font-semibold text-amber-400/90 block leading-tight">
              {selectedChapter ? 'Context Active' : 'CBSE 12 Tutor & Guide'}
            </span>
          </div>
        </button>
      )}
    </div>
  );
};

export default ChatInterface;

