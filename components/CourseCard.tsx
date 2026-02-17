
import React from 'react';
import { Course } from '../types';
import type { ModelInfo } from '../utils/modelInfo';

interface CourseCardProps {
  course: Course;
  isSelected?: boolean;
  isExpanded?: boolean;
  onSelect?: () => void;
  onReadMore?: () => void;
  onView3D?: () => void;
  modelInfo?: ModelInfo | null;
  modelInfoLoading?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  course,
  isSelected = false,
  isExpanded = false,
  onSelect,
  onReadMore,
  onView3D,
  modelInfo,
  modelInfoLoading = false,
}) => {
  return (
    <div
      onClick={onSelect}
      className={[
        'group relative bg-slate-950/50 border border-white/5 rounded-xl overflow-hidden transition-all duration-500 glow-hover cursor-pointer',
        isSelected ? 'border-white/20' : 'hover:border-white/20',
      ].join(' ')}
    >
      {/* Expanded uses width to show details (NOT height). */}
      {isSelected && isExpanded ? (
        <>
          <div className="flex gap-6 p-6">
            {/* Keep image SAME size so it never stretches */}
            <div className="relative w-72 h-56 rounded-lg overflow-hidden shrink-0">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold text-slate-300 rounded uppercase tracking-widest">
                  {course.category}
                </span>
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold heading-font mb-2 tracking-tight text-white">
                {course.title}
              </h3>

              {/* Full text shown using the new width (no forced scroll) */}
              <p className="text-slate-400 text-xs leading-relaxed font-light tracking-wide mb-4">
                {course.description}
              </p>

              <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-md p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">3D Model Info</span>
                  {modelInfoLoading ? <span className="text-[10px] text-slate-500">Loading…</span> : null}
                </div>

                {modelInfo ? (
                  <div className="grid grid-cols-2 gap-3 text-[10px] text-slate-300">
                    <div><span className="text-slate-500">Area:</span> {modelInfo.area.toFixed(2)}</div>
                    <div><span className="text-slate-500">Vol:</span> {modelInfo.volumeApprox.toFixed(2)}</div>
                    <div><span className="text-slate-500">Vertices:</span> {modelInfo.vertices.toLocaleString()}</div>
                    <div><span className="text-slate-500">Faces:</span> {Math.floor(modelInfo.faces).toLocaleString()}</div>
                    <div><span className="text-slate-500">Meshes:</span> {modelInfo.meshes.toLocaleString()}</div>
                    <div><span className="text-slate-500">Materials:</span> {modelInfo.materials.toLocaleString()}</div>
                    <div className="col-span-2">
                      <span className="text-slate-500">Dims:</span>{' '}
                      W {modelInfo.dimensions.width.toFixed(2)} · H {modelInfo.dimensions.height.toFixed(2)} · D {modelInfo.dimensions.depth.toFixed(2)}
                    </div>
                  </div>
                ) : (
                  <div className="text-[10px] text-slate-500">Loading model information…</div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom actions (View 3D Model only once) */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onReadMore?.();
                  }}
                  className="px-4 py-2 rounded-lg bg-white text-slate-950 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all"
                >
                  Show less
                </button>

                {course.glbFilePath && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onView3D?.();
                    }}
                    className="px-4 py-2 rounded-lg bg-white text-slate-950 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all"
                  >
                    View 3D Model
                  </button>
                )}
              </div>

              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-slate-950 group-hover:border-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Normal (initial) card layout */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute top-4 right-4">
              <span className="px-2 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-[9px] font-bold text-slate-400 rounded uppercase tracking-widest">
                {course.category}
              </span>
            </div>
          </div>

          <div className="p-8">
            <h3 className="text-lg font-bold heading-font mb-3 tracking-tight group-hover:text-white transition-colors">
              {course.title}
            </h3>

            <p className="text-slate-500 text-xs mb-6 leading-relaxed font-light tracking-wide">
              {`${course.description.slice(0, 90)}${course.description.length > 90 ? '…' : ''}`}
            </p>

            <div className="flex items-center justify-between border-t border-white/5 pt-6">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onReadMore?.();
                  }}
                  className="px-4 py-2 rounded-lg bg-white text-slate-950 font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all"
                >
                  Read more
                </button>
              </div>

              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-slate-950 group-hover:border-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CourseCard;
