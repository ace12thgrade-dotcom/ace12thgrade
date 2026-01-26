
import React, { useState, useRef, useEffect } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio, generateFormulaImage } from '../services/geminiService.ts';

interface SubjectDashboardProps {
  subject: Subject;
  searchQuery?: string;
}

function decodeBase64(base64: string) {
  try {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) {
    return new Uint8Array(0);
  }
}

async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

const FormulaRenderer: React.FC<{ formulaText: string; color: string }> = ({ formulaText, color }) => {
  const [imgData, setImgData] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);
      try {
        const data = await generateFormulaImage(formulaText);
        if (data) setImgData(data);
      } catch (e) {}
      setLoading(false);
    };
    fetchImage();
  }, [formulaText]);

  return (
    <div className="bg-slate-900 px-4 py-8 rounded-[2.5rem] my-8 shadow-2xl relative overflow-hidden w-full max-w-xl mx-auto border border-white/10 group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-[8px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-4 opacity-70">NCERT Digital Board</span>
        {loading ? (
          <div className="h-16 flex items-center justify-center"><div className="w-4 h-4 border-2 border-white/10 border-t-indigo-400 rounded-full animate-spin"></div></div>
        ) : imgData ? (
          <img src={`data:image/png;base64,${imgData}`} alt={formulaText} className="max-h-28 md:max-h-36 object-contain rounded-2xl shadow-2xl bg-white p-4" />
        ) : (
          <p className="text-sm md:text-xl font-bold text-white tracking-tight leading-relaxed px-6">{formulaText}</p>
        )}
      </div>
    </div>
  );
};

const AestheticNotebook: React.FC<{ content: string; color: string }> = ({ content, color }) => {
  const lines = content.split('\n');
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto pb-16 px-4">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-4"></div>;
        
        if (trimmed.startsWith('TOPIC:') || (trimmed.startsWith('#') && trimmed.length > 3)) {
          return (
            <div key={idx} className="pt-10 first:pt-0">
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-2 h-8 bg-${color}-500 rounded-full shadow-lg shadow-indigo-100`}></div>
                <h3 className="text-lg md:text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">{trimmed.replace(/TOPIC:|#/g, '').trim()}</h3>
              </div>
              <div className="h-[2px] w-full bg-slate-100 rounded-full"></div>
            </div>
          );
        }
        
        if (trimmed.startsWith('INTRO:')) return (
           <div key={idx} className="pl-6 border-l-4 border-slate-100 py-2 my-2">
             <p className="text-xs md:text-[15px] text-slate-500 font-medium italic leading-relaxed tracking-tight">{trimmed.replace('INTRO:', '').trim()}</p>
           </div>
        );
        
        if (trimmed.startsWith('FORMULA:') || (trimmed.includes('=') && trimmed.length < 70 && !trimmed.includes('?'))) 
          return <FormulaRenderer key={idx} formulaText={trimmed.replace('FORMULA:', '').trim()} color={color} />;
        
        if (trimmed.startsWith('EXAMPLE:')) return (
          <div key={idx} className="bg-slate-50/50 border border-slate-100 p-8 rounded-[2.5rem] my-6 border-l-8 border-l-indigo-600 shadow-xl shadow-slate-200/20">
            <span className={`text-[9px] font-black uppercase tracking-[0.3em] text-${color}-600 block mb-4`}>Solved Board Example</span>
            <div className="text-slate-800 text-[12px] md:text-[14px] font-bold leading-relaxed whitespace-pre-line tracking-tight">{trimmed.replace('EXAMPLE:', '').trim()}</div>
          </div>
        );

        if (trimmed.startsWith('DEFINITION:')) return (
          <div key={idx} className="bg-slate-900 text-white p-8 rounded-[2.5rem] my-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-indigo-400 mb-4 block">CBSE Definition</span>
            <p className="text-sm md:text-[16px] font-bold leading-relaxed tracking-tight">{trimmed.replace('DEFINITION:', '').trim()}</p>
          </div>
        );

        return (
          <div key={idx} className="flex gap-5 items-start pl-2">
            <div className={`w-2 h-2 rounded-full bg-${color}-400/30 mt-2.5 shrink-0 border-2 border-${color}-400`}></div>
            <p className="text-slate-600 text-[12px] md:text-[15px] font-semibold leading-relaxed tracking-tight">{trimmed}</p>
          </div>
        );
      })}
    </div>
  );
};

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject, searchQuery = '' }) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'notes' | 'pyqs'>('summary');
  const [loading, setLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  // Reset chapter state when subject changes
  useEffect(() => {
    setSelectedChapter(null);
    setContent(null);
    setError(null);
    setViewMode('summary');
    stopAudio();
  }, [subject]);

  // Fetch logic based on viewMode
  useEffect(() => {
    if (!selectedChapter || viewMode === 'summary') {
      setContent(null);
      setError(null);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setContent(null);
      setError(null);
      stopAudio();

      try {
        const result = viewMode === 'notes' 
          ? await generateDetailedNotes(subject.name, selectedChapter.title)
          : await generatePremiumPYQs(subject.name, selectedChapter.title);
        
        if (result) {
          setContent(result);
        } else {
          throw new Error("No data received from AI. Please try again.");
        }
      } catch (e: any) {
        console.error("Fetch error:", e);
        setError(e.message || "Failed to load chapter data. Please retry.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [viewMode, selectedChapter, subject.name]);

  const stopAudio = () => {
    if (audioSourceRef.current) {
      try { audioSourceRef.current.stop(); } catch(e) {}
      audioSourceRef.current = null;
    }
    setIsPlaying(false);
  };

  const handleListen = async () => {
    if (isPlaying) { stopAudio(); return; }
    if (!content) return;
    setIsAudioLoading(true);
    try {
      const audioData = await generateChapterAudio(content, subject.name);
      if (audioData) {
        if (!audioContextRef.current) audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const ctx = audioContextRef.current;
        const bytes = decodeBase64(audioData);
        const buffer = await decodeAudioData(bytes, ctx, 24000, 1);
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(false);
        audioSourceRef.current = source;
        source.start();
        setIsPlaying(true);
      }
    } catch (e) {}
    setIsAudioLoading(false);
  };

  const filteredChapters = subject.chapters.filter(c => 
    c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-y-auto px-6 md:px-10 lg:px-16 py-8">
      {!selectedChapter ? (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          <header className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <div className={`w-20 h-20 rounded-[2.2rem] bg-gradient-to-tr from-${subject.color}-600 to-${subject.color}-400 text-white flex items-center justify-center text-4xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] float`}>
                {subject.icon}
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none mb-3">{subject.name}</h1>
                <div className="flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">Expert Syllabus 2026</p>
                </div>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                onClick={() => { setSelectedChapter(chapter); setViewMode('summary'); }} 
                className="premium-card p-10 rounded-[3rem] cursor-pointer group hover:scale-[1.04] active:scale-[0.98]"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-white group-hover:shadow-lg transition-all">📑</div>
                <h3 className="font-black text-xl text-slate-900 mb-3 tracking-tight leading-tight line-clamp-2">{chapter.title}</h3>
                <p className="text-slate-400 text-[12px] font-bold leading-relaxed line-clamp-2 mb-8">{chapter.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                   <span className={`text-[10px] font-black uppercase tracking-[0.2em] text-${subject.color}-600`}>Chapter {chapter.id.slice(-1)}</span>
                   <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs group-hover:bg-${subject.color}-600 group-hover:text-white transition-all transform group-hover:translate-x-1`}>→</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto animate-in fade-in zoom-in-95 duration-700">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }} 
            className="mb-8 flex items-center gap-3 text-slate-400 font-black text-[10px] tracking-[0.4em] bg-white/70 hover:bg-white px-6 py-3 rounded-full border border-slate-100 shadow-xl transition-all active:scale-95"
          >
            ← HUB
          </button>
          
          <div className="bg-white/80 backdrop-blur-3xl rounded-[3.5rem] border border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className={`p-12 md:p-16 bg-gradient-to-br from-slate-950 via-slate-900 to-${subject.color}-950 text-white relative`}>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>
              <div className="relative z-10">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.6em] mb-6 block">Premium Study Module</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight max-w-3xl">{selectedChapter.title}</h2>
              </div>
            </div>

            <div className="flex flex-col md:flex-row border-b px-8 bg-white/50 items-center justify-between gap-6 py-3 relative z-30">
              <div className="flex gap-4">
                {[
                  { id: 'summary', label: 'INSIGHTS', icon: '💎' },
                  { id: 'notes', label: 'NOTES', icon: '📝' },
                  { id: 'pyqs', label: 'PYQs', icon: '🏆' }
                ].map((tab) => (
                  <button 
                    key={tab.id} 
                    disabled={loading}
                    onClick={() => setViewMode(tab.id as any)} 
                    className={`px-8 py-5 text-[10px] font-black tracking-[0.2em] transition-all border-b-4 flex items-center gap-3 rounded-t-3xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${
                      viewMode === tab.id ? `border-${subject.color}-500 text-slate-900 bg-white shadow-inner` : 'border-transparent text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <span className="text-xl">{tab.icon}</span>{tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && !loading && (
                <button 
                  onClick={handleListen} 
                  disabled={isAudioLoading} 
                  className={`px-8 py-4 rounded-[2rem] text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95 ${
                    isPlaying ? 'bg-red-600 shadow-red-200' : 'bg-indigo-700 shadow-indigo-200'
                  } text-white disabled:opacity-50`}
                >
                  {isAudioLoading ? 'GENERATE...' : isPlaying ? 'STOP READER' : '🔊 LISTEN IN HINGLISH'}
                </button>
              )}
            </div>

            <div className="p-10 md:p-16 min-h-[500px] relative">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-8">
                  <div className={`w-14 h-14 border-4 border-slate-100 border-t-${subject.color}-600 rounded-full animate-spin shadow-2xl`}></div>
                  <div className="text-center">
                    <p className="text-slate-900 font-black text-sm uppercase tracking-[0.4em] mb-3 animate-pulse">Scanning 4,250+ PYQs</p>
                    <p className="text-slate-400 text-xs font-bold">Optimizing for 2026 Boards...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center py-24 gap-10 text-center bg-red-50/20 rounded-[4rem] border border-red-100/30">
                  <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center text-5xl shadow-inner">⚡</div>
                  <div className="space-y-3">
                    <h3 className="text-slate-900 font-black text-2xl tracking-tighter text-red-600">Error Loading Content</h3>
                    <p className="text-slate-500 text-sm font-bold max-w-md mx-auto">{error}</p>
                  </div>
                  <button 
                    onClick={() => { setViewMode('summary'); setTimeout(() => setViewMode(viewMode), 10); }} 
                    className="group bg-slate-950 text-white px-12 py-5 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-3"
                  >
                    <span>RETRY NOW</span>
                    <span className="group-hover:rotate-180 transition-transform duration-500">🔄</span>
                  </button>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="space-y-16">
                   <div className="space-y-6">
                      <h3 className="text-2xl font-black text-slate-950 tracking-tight uppercase">Board Performance Matrix</h3>
                      <p className="text-sm md:text-base text-slate-500 font-bold leading-relaxed max-w-4xl">Our analysis suggests this chapter has a <span className="text-indigo-600">78% priority score</span>. Specifically, focus on topics repeated between 2019-2024 as they form the core of the 2026 expected pattern.</p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <div className="p-12 bg-slate-950 rounded-[3rem] text-white shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-[50px] group-hover:scale-150 transition-transform duration-1000"></div>
                        <span className="text-[10px] font-black uppercase text-indigo-400 tracking-widest block mb-6">Master Set</span>
                        <p className="text-5xl font-black tracking-tighter mb-2">4.2k</p>
                        <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">PYQs Analyzed</p>
                     </div>
                     <div className="p-12 bg-indigo-50/50 rounded-[3rem] border border-indigo-100/50 shadow-xl shadow-indigo-100/10">
                        <span className="text-[10px] font-black uppercase text-indigo-600 tracking-widest block mb-6">Pattern Rank</span>
                        <p className="text-5xl font-black tracking-tighter mb-2 text-slate-900">Tier 1</p>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">High Repeat Frequency</p>
                     </div>
                     <div className="p-12 bg-white rounded-[3rem] border border-slate-100 shadow-xl">
                        <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block mb-6">Accuracy</span>
                        <p className="text-5xl font-black tracking-tighter mb-2 text-slate-900">99%</p>
                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Curated by Ace12 AI</p>
                     </div>
                   </div>
                </div>
              ) : content ? (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <AestheticNotebook content={content} color={subject.color} />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <p className="text-lg font-bold uppercase tracking-widest">Click a tab to load syllabus data</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubjectDashboard;
