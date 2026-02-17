
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/40 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-10 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="group-hover:rotate-180 transition-transform duration-700">
            <path d="m21 8-9-4-9 4V16l9 4 9-4V8Z"/><path d="m3 8 9 4 9-4"/><path d="M12 12v8"/>
          </svg>
          <span className="text-sm font-bold tracking-[0.2em] heading-font uppercase">Dimension</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {['Curriculum', 'Showcase', 'Faculty', 'Advisor'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="relative group px-6 py-2 border border-slate-800 rounded-md text-[10px] font-bold uppercase tracking-widest text-slate-300 overflow-hidden transition-all hover:border-white hover:text-white">
          <span className="relative z-10">Apply</span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
          <span className="absolute inset-0 flex items-center justify-center text-slate-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">Apply</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
