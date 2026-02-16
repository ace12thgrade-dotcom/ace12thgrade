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
        // Clear previous content to avoid stacking
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
        // Using https: explicitly for better security/loading
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
    const timeoutId = setTimeout(loadAd, 500);

    return () => {
      clearTimeout(timeoutId);
      // Optional: don't clear innerHTML on unmount if you want the ad to stay visible during fast navigation
      // but usually for ads, clearing is safer to prevent script conflicts.
      if (adContainer) adContainer.innerHTML = '';
      scriptExecutedRef.current = false;
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="flex items-center gap-2 opacity-50">
        <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
        <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.3em] select-none">Sponsored Content</span>
        <div className="w-1 h-1 bg-indigo-500 rounded-full"></div>
      </div>
      
      <div 
        ref={containerRef} 
        className="w-[160px] h-[300px] bg-slate-900/10 backdrop-blur-sm border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl relative min-h-[300px] z-10"
      >
        {/* Fallback/Placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="w-12 h-12 rounded-full border-2 border-indigo-500/20 border-t-indigo-500/80 animate-spin mb-4"></div>
          <span className="text-[9px] text-slate-700 font-bold uppercase tracking-widest">
            Loading Board<br/>Resources...
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;