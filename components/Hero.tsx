
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
      {/* 3D Wireframe Cube Icon */}
      <div className="mb-12 opacity-80 animate-pulse transition-opacity hover:opacity-100 cursor-default">
        <svg 
          width="80" 
          height="80" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="0.75" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m21 8-9-4-9 4V16l9 4 9-4V8Z"/>
          <path d="m3 8 9 4 9-4"/>
          <path d="M12 12v8"/>
        </svg>
      </div>

      <div className="max-w-4xl relative z-10 w-full">
        <h1 className="text-6xl md:text-9xl font-bold heading-font tracking-tight leading-[0.95] mb-6 flex flex-col items-center">
          <span className="text-white drop-shadow-2xl">Dimension 3D</span>
          <span className="text-amber-400/90">Academy.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed max-w-lg mx-auto font-light tracking-wide">
          Crafting digital experiences with pixel-perfect precision and cinematic architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-3 bg-white text-slate-950 rounded-lg font-semibold text-sm transition-all hover:scale-105 active:scale-95">
            Explore Courses
            <div className="absolute inset-0 bg-white blur-xl opacity-0 group-hover:opacity-20 transition-opacity rounded-lg" />
          </button>
          <button className="px-8 py-3 bg-transparent border border-slate-800 text-slate-400 rounded-lg font-semibold text-sm hover:text-white hover:border-slate-600 transition-all">
            View Showcase
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
