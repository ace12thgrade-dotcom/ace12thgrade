
import React, { useState, useRef, useEffect } from 'react';
import { Subject, Chapter } from '../types.ts';
import { generateDetailedNotes, generatePremiumPYQs, generateChapterAudio, generateFormulaImage } from '../services/geminiService.ts';

interface SubjectDashboardProps {
  subject: Subject;
}

// Audio decoding utilities
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
    console.error("Base64 decode error", e);
    return new Uint8Array(0);
  }
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
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
      const data = await generateFormulaImage(formulaText);
      if (data) setImgData(data);
      setLoading(false);
    };
    fetchImage();
  }, [formulaText]);

  return (
    <div className="bg-slate-900 px-3 py-4 md:py-6 rounded-2xl my-2 shadow-md relative overflow-hidden group border-b-2 border-indigo-600/30 w-full max-w-xl mx-auto">
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-[6px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-1 block opacity-80">NCERT View (AI)</span>
        
        {loading ? (
          <div className="h-16 flex items-center justify-center">
            <div className={`w-3 h-3 border-2 border-white/20 border-t-white rounded-full animate-spin`}></div>
          </div>
        ) : imgData ? (
          <img 
            src={`data:image/png;base64,${imgData}`} 
            alt={formulaText}
            className="max-h-24 md:max-h-32 object-contain rounded-lg shadow-sm bg-white p-2"
          />
        ) : (
          <p className="text-xs md:text-sm font-bold text-white tracking-wide leading-tight px-3">
            {formulaText}
          </p>
        )}
      </div>
    </div>
  );
};

const AestheticNotebook: React.FC<{ content: string; color: string }> = ({ content, color }) => {
  const lines = content.split('\n');
  
  return (
    <div className="space-y-2.5 md:space-y-3 max-w-4xl mx-auto pb-6 px-1">
      {lines.map((line, idx) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={idx} className="h-0.5"></div>;

        if (trimmed.startsWith('TOPIC:') || (trimmed.startsWith('#') && trimmed.length > 3)) {
          const title = trimmed.replace(/TOPIC:|#/g, '').trim();
          return (
            <div key={idx} className="pt-2 first:pt-0">
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-0.5 h-3.5 bg-${color}-500 rounded-full`}></div>
                <h3 className="text-xs md:text-sm font-black text-slate-800 tracking-tight leading-tight uppercase">
                  {title}
                </h3>
              </div>
              <div className={`h-[1px] w-full bg-slate-100`}></div>
            </div>
          );
        }

        if (trimmed.startsWith('INTRO:')) {
          return (
            <p key={idx} className="text-[9px] md:text-xs text-slate-500 leading-relaxed font-medium pl-3 border-l border-slate-200 italic">
              {trimmed.replace('INTRO:', '').trim()}
            </p>
          );
        }

        if (trimmed.startsWith('FORMULA:') || (trimmed.includes('=') && trimmed.length < 70 && !trimmed.includes('?'))) {
          const fText = trimmed.replace('FORMULA:', '').trim();
          return <FormulaRenderer key={idx} formulaText={fText} color={color} />;
        }

        if (trimmed.startsWith('EXAMPLE:')) {
          return (
            <div key={idx} className="bg-white border border-slate-100 p-2.5 md:p-3.5 rounded-xl my-1.5 shadow-sm relative group border-l-4 border-l-indigo-400">
              <div className="pl-1.5">
                <span className={`text-[6px] font-black uppercase tracking-[0.2em] text-${color}-600 mb-0.5 block`}>Solved Example</span>
                <div className="text-slate-800 text-[9px] md:text-xs leading-relaxed font-bold whitespace-pre-line">
                  {trimmed.replace('EXAMPLE:', '').trim()}
                </div>
              </div>
            </div>
          );
        }

        if (trimmed.startsWith('-') || trimmed.startsWith('*') || trimmed.startsWith('•')) {
          return (
            <div key={idx} className="flex gap-2 items-start ml-1.5">
              <div className={`w-1 h-1 rounded-full bg-${color}-400 mt-1 shrink-0`}></div>
              <p className="text-slate-600 leading-relaxed text-[9px] md:text-xs font-semibold">
                {trimmed.replace(/^[-*•]\s?/, '')}
              </p>
            </div>
          );
        }

        if (trimmed.startsWith('DEFINITION:') || trimmed.startsWith('TIP:')) {
          const isTip = trimmed.startsWith('TIP:');
          return (
            <div key={idx} className={`${isTip ? 'bg-amber-50 border-amber-100' : 'bg-blue-50 border-blue-100'} border p-2 md:p-3 rounded-lg my-1.5 flex gap-2.5 items-center`}>
              <div className="text-base">{isTip ? '💡' : '🎯'}</div>
              <div>
                <span className={`text-[6px] font-black uppercase tracking-widest ${isTip ? 'text-amber-600' : 'text-blue-600'} mb-0.5 block`}>
                  {isTip ? "EXAM TIP" : "DEFINITION"}
                </span>
                <p className={`${isTip ? 'text-amber-900' : 'text-blue-900'} font-bold text-[8px] md:text-xs leading-snug`}>
                  {trimmed.replace(/DEFINITION:|TIP:/i, '').trim()}
                </p>
              </div>
            </div>
          );
        }

        return (
          <p key={idx} className="text-slate-500 leading-relaxed text-[9px] md:text-xs font-medium pl-0.5">
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};

const SubjectDashboard: React.FC<SubjectDashboardProps> = ({ subject }) => {
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  const [viewMode, setViewMode] = useState<'summary' | 'notes' | 'pyqs'>('summary');
  const [loading, setLoading] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [content, setContent] = useState<string | null>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioSourceRef = useRef<AudioBufferSourceNode | null>(null);

  const stopAudio = () => {
    if (audioSourceRef.current) {
      try { audioSourceRef.current.stop(); } catch(e) {}
      audioSourceRef.current = null;
    }
    setIsPlaying(false);
  };

  const handleListen = async () => {
    if (isPlaying) {
      stopAudio();
      return;
    }

    if (!content) return;

    setIsAudioLoading(true);
    const audioData = await generateChapterAudio(content, subject.name);
    setIsAudioLoading(false);

    if (audioData) {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        
        const ctx = audioContextRef.current;
        const bytes = decodeBase64(audioData);
        if (bytes.length === 0) return;
        const buffer = await decodeAudioData(bytes, ctx, 24000, 1);
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => setIsPlaying(false);
        
        audioSourceRef.current = source;
        source.start();
        setIsPlaying(true);
      } catch (e) {
        console.error("Audio playback error", e);
        setIsPlaying(false);
      }
    }
  };

  const handleAction = async (mode: 'notes' | 'pyqs') => {
    if (!selectedChapter) return;
    stopAudio();
    setLoading(true);
    setViewMode(mode);
    const result = mode === 'notes' 
      ? await generateDetailedNotes(subject.name, selectedChapter.title)
      : await generatePremiumPYQs(subject.name, selectedChapter.title);
    setContent(result);
    setLoading(false);
  };

  return (
    <div className="flex-1 overflow-y-auto px-3 md:px-5 lg:px-8 py-3">
      {!selectedChapter ? (
        <div className="animate-in fade-in duration-300">
          <header className="mb-4 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-2 mb-1.5">
              <div className={`w-10 h-10 rounded-lg bg-${subject.color}-600 text-white flex items-center justify-center text-xl shadow-md`}>
                {subject.icon}
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter leading-tight">{subject.name}</h1>
                <p className="text-slate-400 font-bold uppercase text-[7px] tracking-[0.3em]">Board Expert Hub</p>
              </div>
            </div>
            <div className={`h-0.5 w-10 bg-${subject.color}-100 rounded-full mx-auto md:mx-0`}></div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3 px-1">
            {subject.chapters.map((chapter) => (
              <div 
                key={chapter.id}
                onClick={() => {
                  setSelectedChapter(chapter);
                  setViewMode('summary');
                  setContent(null);
                }}
                className="group premium-card p-3.5 md:p-5 rounded-xl cursor-pointer relative overflow-hidden active:scale-[0.98] transition-all bg-white"
              >
                <div className="relative z-10">
                  <div className="w-7 h-7 bg-slate-50 rounded-lg flex items-center justify-center text-base mb-2.5">📑</div>
                  <h3 className="font-black text-[13px] text-slate-800 mb-0.5 leading-tight line-clamp-1">{chapter.title}</h3>
                  <p className="text-slate-400 text-[8px] leading-relaxed font-medium mb-3 opacity-80 line-clamp-2">
                    {chapter.description || 'Verified Class 12 notes and PYQs.'}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`text-[6px] font-black text-${subject.color}-600 uppercase tracking-widest bg-${subject.color}-50 px-2 py-0.5 rounded transition-all`}>Open Module</span>
                    <span className="text-[6px] text-slate-300 font-black tracking-widest uppercase">{chapter.id}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="animate-in fade-in duration-300 max-w-4xl mx-auto">
          <button 
            onClick={() => { setSelectedChapter(null); stopAudio(); }}
            className="mb-3 flex items-center gap-1.5 text-slate-400 hover:text-slate-900 font-black text-[7px] tracking-[0.2em] bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm"
          >
            ← BACK
          </button>
          
          <div className="bg-white rounded-2xl border border-slate-50 shadow-sm overflow-hidden">
            <div className={`p-5 md:p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-${subject.color}-950 text-white relative`}>
               <div className="relative z-10">
                 <span className="text-[6px] font-black text-white/40 uppercase tracking-[0.4em] mb-1 block">Chapter Module</span>
                 <h2 className="text-xl md:text-3xl font-black tracking-tighter leading-tight">{selectedChapter.title}</h2>
               </div>
            </div>

            <div className="flex border-b px-2 md:px-4 bg-slate-50/20 sticky top-0 z-20 backdrop-blur-xl overflow-x-auto no-scrollbar items-center justify-between">
              <div className="flex">
                {[
                  { id: 'summary', label: 'Summary', icon: '💎' },
                  { id: 'notes', label: 'Study Notes', icon: '📝', action: () => handleAction('notes') },
                  { id: 'pyqs', label: 'Top PYQs', icon: '🏆', action: () => handleAction('pyqs') }
                ].map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => tab.id === 'summary' ? (setViewMode('summary'), setContent(null), stopAudio()) : tab.action!()}
                    className={`px-3 md:px-4 py-2.5 md:py-3.5 text-[8px] font-black transition-all border-b-2 flex items-center gap-1.5 whitespace-nowrap ${
                      viewMode === tab.id 
                        ? `border-${subject.color}-500 text-slate-900 bg-white` 
                        : 'border-transparent text-slate-400'
                    }`}
                  >
                    <span className="text-base">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
              
              {viewMode === 'notes' && content && (
                <button 
                  onClick={handleListen}
                  disabled={isAudioLoading}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[7px] font-black uppercase tracking-widest transition-all ${
                    isPlaying 
                      ? 'bg-red-500 text-white' 
                      : 'bg-indigo-600 text-white hover:bg-indigo-700'
                  } disabled:opacity-50`}
                >
                  {isAudioLoading ? '...' : isPlaying ? 'Stop' : '🔊 Hinglish Reader'}
                </button>
              )}
            </div>

            <div className="p-3.5 md:p-6 min-h-[350px]">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <div className={`w-6 h-6 border-2 border-slate-50 border-t-${subject.color}-600 rounded-full animate-spin`}></div>
                  <p className="text-slate-400 text-[7px] font-bold uppercase tracking-widest">Generating Materials...</p>
                </div>
              ) : viewMode === 'summary' ? (
                <div className="max-w-3xl space-y-4">
                   <div className="space-y-1">
                     <h3 className="text-sm font-black text-slate-900 tracking-tighter uppercase">High Yield Topics</h3>
                     <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed font-medium">
                        Focused analysis of the last 15 years (4,250+ questions analyzed), prioritizing 2020-2025 trends.
                     </p>
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                     <div className={`p-3 bg-${subject.color}-50 rounded-lg border border-${subject.color}-100`}>
                        <h4 className={`font-black text-${subject.color}-700 text-[6px] uppercase tracking-widest mb-0.5 block`}>Recent Pattern Weightage</h4>
                        <p className="text-slate-900 font-black text-xl">8-12 Marks</p>
                     </div>
                     <div className="p-3 bg-slate-900 text-white rounded-lg">
                        <h4 className="font-black text-indigo-400 text-[6px] uppercase tracking-widest mb-0.5 block">15-Year Master Set</h4>
                        <p className="font-black text-xl text-white">~25 Selected PYQs</p>
                     </div>
                   </div>
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <AestheticNotebook content={content || ''} color={subject.color} />
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
