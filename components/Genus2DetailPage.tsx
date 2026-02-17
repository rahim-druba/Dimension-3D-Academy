import React from 'react';
import { Link } from 'react-router-dom';

const Genus2DetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/#figures" className="text-amber-600 font-semibold text-sm hover:text-amber-700 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to figures
          </Link>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Detail</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold heading-font text-slate-900 mb-2">
          The Genus-2 Surface
        </h1>
        <p className="text-slate-500 text-lg mb-12">
          Double torus (bitorus) — geometry and topology for senior students.
        </p>

        <div className="space-y-12">
          {/* 1. Geometric Classification */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">1</span>
              Geometric Classification: The Genus-2 Surface
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              In geometry and topology, this figure is a <strong>double torus</strong> (or <strong>bitorus</strong>). 
              While a single donut shape has one hole, this figure has two. The number of &quot;holes&quot; in a surface is called its <strong>Genus</strong> (g).
            </p>
            <ul className="list-none space-y-2 text-slate-600">
              <li><strong>Genus (g):</strong> 2</li>
              <li><strong>Classification:</strong> A compact, orientable surface.</li>
            </ul>
          </section>

          {/* 2. Topological Properties */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">2</span>
              Topological Properties
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For senior students, the most important concept is the <strong>Euler Characteristic</strong> (χ). 
              This is a topological invariant that describes a surface&apos;s shape regardless of how it is bent or stretched.
            </p>
            <p className="text-slate-600 leading-relaxed mb-2">
              For any closed orientable surface:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-slate-800 mb-4">
              χ = 2 − 2g
            </div>
            <p className="text-slate-600 leading-relaxed mb-2">
              Since g = 2 for this figure:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-slate-800 mb-4">
              χ = 2 − 2(2) = −2
            </div>
            <p className="text-slate-600 leading-relaxed">
              <strong>Educational note:</strong> This value is significant because it relates the number of vertices (V), edges (E), and faces (F) of any polygon mesh used to create this shape: <span className="font-mono bg-slate-100 px-1 rounded">V − E + F = −2</span>.
            </p>
          </section>

          {/* 3. Surface Area and Volume */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">3</span>
              Surface Area and Volume (Calculus Perspective)
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To find the exact area and volume, we treat the object as a <strong>Surface of Revolution</strong>. 
              If you rotate a circle around an axis, you get a torus. A double torus is mathematically modeled as two such tori joined at a single point or along a shared boundary.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-slate-700 mb-2">Surface Area (A)</h3>
                <p className="text-slate-600 text-sm mb-2">
                  The area of a single torus is defined by the major radius (R) and the minor radius (r). For a double torus, we multiply the single torus formula by two:
                </p>
                <div className="bg-slate-50 rounded-lg p-4 font-mono text-slate-800">
                  A = 2 · (2πR)(2πr) = 8π²Rr
                </div>
              </div>
              <div>
                <h3 className="font-bold text-slate-700 mb-2">Volume (V)</h3>
                <p className="text-slate-600 text-sm mb-2">
                  Using Pappus&apos;s Centroid Theorem, the volume is the area of the circular cross-section (πr²) multiplied by the distance traveled by its center (2πR). For two joined tori:
                </p>
                <div className="bg-slate-50 rounded-lg p-4 font-mono text-slate-800">
                  V = 2 · (πr²)(2πR) = 4π²Rr²
                </div>
              </div>
            </div>
          </section>

          {/* 4. Summary Table */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">4</span>
              Summary Table for Students
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="text-left py-3 px-4 font-bold text-slate-700">Feature</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-700">Description</th>
                    <th className="text-left py-3 px-4 font-bold text-slate-700">Mathematical Expression</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-800">Betti Number</td>
                    <td className="py-3 px-4">Number of independent 1-dimensional holes</td>
                    <td className="py-3 px-4 font-mono">b₁ = 4</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-800">Gaussian Curvature</td>
                    <td className="py-3 px-4">The &quot;tightness&quot; of the curves</td>
                    <td className="py-3 px-4">Varies (Positive on outside, Negative on inside neck)</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-3 px-4 font-medium text-slate-800">Implicit Equation</td>
                    <td className="py-3 px-4">The algebraic definition</td>
                    <td className="py-3 px-4 font-mono text-xs">(x²+y²+z²+R²−r²)² = 4R²(x²+y²)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <Link to="/#figures" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
            Back to figures
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Genus2DetailPage;
