
import React, { useEffect, useRef } from 'react';

const AdBanner: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptExecutedRef = useRef(false);

  useEffect(() => {
    // Prevent double injection in React Strict Mode
    if (!containerRef.current || scriptExecutedRef.current) return;

    const adContainer = containerRef.current;
    
    const loadAd = () => {
      try {
        // Clear previous content
        adContainer.innerHTML = '';

        // Adsterra specific options
        const adKey = '22f76c9da64add65e5b5d83a9e570782';
        const atOptions = {
          'key': adKey,
          'format': 'iframe',
          'height': 300,
          'width': 160,
          'params': {}
        };

        // Set global options required by invoke.js
        (window as any).atOptions = atOptions;

        // Create the script element
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `https://www.highperformanceformat.com/${adKey}/invoke.js`;
        script.async = true;

        // Append to container
        adContainer.appendChild(script);
        scriptExecutedRef.current = true;
        
        console.debug('Adsterra banner script injected');
      } catch (e) {
        console.error('Adsterra banner initialization failed:', e);
      }
    };

    // Delay slightly to ensure layout is stable
    const timeoutId = setTimeout(loadAd, 800);

    return () => {
      clearTimeout(timeoutId);
      if (adContainer) adContainer.innerHTML = '';
      scriptExecutedRef.current = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 py-2 w-full">
      <div className="flex items-center gap-2 opacity-40">
        <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
        <span className="text-[7px] font-black text-slate-500 uppercase tracking-[0.3em] select-none">Sponsored</span>
        <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
      </div>
      
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-900/20 backdrop-blur-sm border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative min-h-[300px] z-10 mx-auto"
      >
        {/* Placeholder shown while script loads */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 pointer-events-none">
          <div className="w-8 h-8 rounded-full border-2 border-indigo-500/10 border-t-indigo-500/60 animate-spin mb-3"></div>
          <span className="text-[8px] text-slate-600 font-bold uppercase tracking-widest">
            Loading...
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
