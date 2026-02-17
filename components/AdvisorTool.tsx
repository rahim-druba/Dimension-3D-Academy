
import React, { useState } from 'react';
import { getCareerAdvice } from '../services/geminiService';
import { AdvisorResponse } from '../types';

const AdvisorTool: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [experience, setExperience] = useState('Beginner');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AdvisorResponse | null>(null);

  const handleConsult = async () => {
    if (!interest) return;
    setLoading(true);
    try {
      const advice = await getCareerAdvice(interest, experience);
      setResult(advice);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-24 bg-slate-900/20 relative border-y border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold heading-font mb-4">AI Career Path Advisor</h2>
          <p className="text-slate-400">Not sure where to start? Tell us your vision, and our AI will map your journey.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-slate-950 border border-slate-800/50 p-8 rounded-3xl shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">What do you want to create?</label>
              <textarea 
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                placeholder="e.g., I want to create cinematic worlds for RPG games or high-end architectural walkthroughs..."
                className="w-full h-32 bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Current Experience</label>
              <select 
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500/50"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced Professional</option>
              </select>
            </div>

            <button 
              onClick={handleConsult}
              disabled={loading || !interest}
              className="w-full py-4 bg-sky-500 text-slate-950 font-bold rounded-xl hover:bg-sky-400 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : 'Get AI Recommendation'}
            </button>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-6 relative min-h-[300px] flex items-center justify-center">
            {result ? (
              <div className="w-full space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div>
                  <h4 className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-1">Recommended Career Path</h4>
                  <p className="text-2xl font-bold heading-font">{result.careerPath}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Essential Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {result.toolsToLearn.map((tool, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-800 rounded text-[10px] text-slate-300 font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Topics to Master</h4>
                    <ul className="text-[10px] text-slate-400 list-disc list-inside">
                      {result.suggestedCourses.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Why this fits</h4>
                  <p className="text-xs text-slate-400 leading-relaxed italic">"{result.reasoning}"</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="text-slate-500" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-6.364l-.707-.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <p className="text-slate-500 text-sm">Consult our AI to visualize <br /> your future in 3D.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvisorTool;
