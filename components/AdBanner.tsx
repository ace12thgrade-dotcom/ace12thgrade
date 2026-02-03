
import React, { useEffect, useRef } from 'react';

const AdBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous content
    containerRef.current.innerHTML = '';

    // Set the global atOptions required by Adsterra
    (window as any).atOptions = {
      'key': '22f76c9da64add65e5b5d83a9e570782',
      'format': 'iframe',
      'height': 300,
      'width': 160,
      'params': {}
    };

    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://www.highperformanceformat.com/22f76c9da64add65e5b5d83a9e570782/invoke.js';
    script.async = true;
    
    containerRef.current.appendChild(script);

    return () => {
      // Cleanup global to avoid conflicts
      delete (window as any).atOptions;
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <span className="text-[8px] font-black text-slate-700 uppercase tracking-[0.4em]">Sponsored</span>
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-900/40 border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-indigo-500/5 animate-pulse"></div>
      </div>
    </div>
  );
};

export default AdBanner;
