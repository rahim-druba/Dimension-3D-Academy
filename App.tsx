import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FigureCard from './components/FigureCard';
import Genus2DetailPage from './components/Genus2DetailPage';
import CircleDetailPage from './components/CircleDetailPage';
import TorusDetailPage from './components/TorusDetailPage';
import AdvisorTool from './components/AdvisorTool';
import ModelViewer from './components/ModelViewer';
import { COURSES, SHOWCASE, FIGURE_CARDS, FIGURE_BLOCK_IMAGES } from './constants';

const ViewerRoute: React.FC = () => {
  const { glbPath } = useParams<{ glbPath: string }>();
  if (!glbPath) return null;
  return <ModelViewer glbPath={decodeURIComponent(glbPath)} />;
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/viewer/:glbPath" element={<ViewerRoute />} />
      <Route path="/figure/genus-2-surface" element={<Genus2DetailPage />} />
      <Route path="/figure/circle" element={<CircleDetailPage />} />
      <Route path="/figure/torus" element={<TorusDetailPage />} />
      <Route path="/" element={
        <div className="min-h-screen selection:bg-white selection:text-slate-950">
          <Navbar />
          
          <main className="relative">
            <Hero />

        {/* Geometric Figures Section: figure first, then card below, same BG as site */}
        <section id="figures" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold heading-font tracking-tight mb-6">Geometric Figures.</h2>
            <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Explore surfaces and their mathematical properties: genus, Euler characteristic, area, and volume.
            </p>
          </div>

          {/* 3 figures (image only) + white cards below, disconnected, same width */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FIGURE_CARDS.map((figure, index) => (
              <div key={figure.id} className="flex flex-col w-full min-w-0 gap-4">
                {/* Figure: image only, no text */}
                <div className="group relative w-full aspect-[3/4] max-h-[420px] rounded-xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl">
                  <img
                    src={FIGURE_BLOCK_IMAGES[index] ?? COURSES[0].image}
                    alt={figure.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                </div>
                {/* White card below, same width, separate from figure */}
                <div className="w-full min-w-0">
                  <FigureCard figure={figure} variant="light" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Advisor Feature */}
        <AdvisorTool />

        {/* Student Showcase */}
        <section id="showcase" className="py-40 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500 mb-6 block">Artistry in Depth</span>
            <h2 className="text-4xl md:text-5xl font-bold heading-font tracking-tight mb-6">Student Showcase.</h2>
            <div className="w-12 h-px bg-slate-800" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SHOWCASE.map((work, idx) => (
              <div 
                key={work.id} 
                className={`group relative overflow-hidden rounded-xl bg-slate-900 aspect-video md:aspect-square ${idx === 0 ? 'lg:col-span-2 lg:aspect-auto' : ''}`}
              >
                <img 
                  src={work.image} 
                  alt={work.projectName} 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-sky-400 mb-2 block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">Masterwork</span>
                  <h4 className="text-white font-bold text-2xl heading-font mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{work.projectName}</h4>
                  <p className="text-slate-400 text-sm font-light translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">by {work.studentName}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* High-End CTA Section - dark style like rest of page */}
        <section className="py-40 relative overflow-hidden flex flex-col items-center text-center px-6">
          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.5em] text-slate-500 mb-10 block">Limited Enrollment</span>
            <h2 className="text-4xl md:text-6xl font-bold heading-font mb-12 tracking-tight leading-snug text-white">
              Crafting digital experiences with pixel-perfect
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-12 py-5 bg-white text-slate-950 rounded-xl font-bold text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                Apply for Enrollment
              </button>
              <button className="px-12 py-5 bg-transparent border border-white/30 text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:border-white/50 hover:bg-white/5 transition-all">
                Download Syllabus
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-10 border-t border-white/5 bg-slate-950/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                <path d="m21 8-9-4-9 4V16l9 4 9-4V8Z"/><path d="m3 8 9 4 9-4"/><path d="M12 12v8"/>
              </svg>
              <span className="text-sm font-bold tracking-[0.3em] heading-font uppercase">Dimension</span>
            </div>
            <p className="text-slate-500 text-xs font-light max-w-xs leading-relaxed">
              Leading the next generation of visual storytellers and technical artists worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-white mb-6">School</h5>
              <div className="flex flex-col gap-3 text-xs text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Courses</a>
                <a href="#" className="hover:text-white transition-colors">Faculty</a>
                <a href="#" className="hover:text-white transition-colors">Career</a>
              </div>
            </div>
            <div>
              <h5 className="text-[10px] font-extrabold uppercase tracking-widest text-white mb-6">Connect</h5>
              <div className="flex flex-col gap-3 text-xs text-slate-500">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Discord</a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            © 2024 Dimension 3D Academy
          </p>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
            Berlin / London / Tokyo
          </p>
        </div>
      </footer>
    </div>
      } />
    </Routes>
  );
};

export default App;
