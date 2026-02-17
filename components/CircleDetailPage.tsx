import React from 'react';
import { Link } from 'react-router-dom';

const CircleDetailPage: React.FC = () => {
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
          The Circle
        </h1>
        <p className="text-slate-500 text-lg mb-12">
          A circle is the set of all points in a plane that are at a fixed distance (the radius) from a fixed point (the center).
        </p>

        <div className="space-y-12">
          {/* Definition */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">1</span>
              Definition
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A circle is the set of all points in a plane that are at a fixed distance, called the <strong>radius</strong>, from a fixed point, called the <strong>center</strong>.
            </p>
          </section>

          {/* Fundamental Properties */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">2</span>
              Fundamental Properties
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li><strong>Radius (r):</strong> The distance from the center to any point on the boundary.</li>
              <li><strong>Diameter (d):</strong> The longest distance across the circle, passing through the center (d = 2r).</li>
              <li><strong>Circumference (C):</strong> The linear distance around the edge of the circle (C = 2πr or C = πd).</li>
              <li><strong>Area (A):</strong> The total space contained within the boundary (A = πr²).</li>
            </ul>
          </section>

          {/* Key Geometric Concepts */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">3</span>
              Key Geometric Concepts
            </h2>
            <ul className="space-y-2 text-slate-600">
              <li><strong>Pi (π):</strong> An irrational constant representing the ratio of a circle&apos;s circumference to its diameter (≈ 3.14159).</li>
              <li><strong>Arc:</strong> A portion of the circumference.</li>
              <li><strong>Sector:</strong> A &quot;pie slice&quot; part of the circle bounded by two radii and an arc.</li>
              <li><strong>Chord:</strong> A line segment whose endpoints both lie on the circle.</li>
              <li><strong>Tangent:</strong> A straight line that touches the circle at exactly one point.</li>
            </ul>
          </section>

          {/* Equation in Coordinate Geometry */}
          <section className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-sm font-bold">4</span>
              Equation in Coordinate Geometry
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For a circle centered at point (h, k) with radius r, the standard form equation is:
            </p>
            <div className="bg-slate-50 rounded-lg p-4 font-mono text-slate-800 text-lg">
              (x − h)² + (y − k)² = r²
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

export default CircleDetailPage;
