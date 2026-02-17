import React from 'react';
import { Link } from 'react-router-dom';

export interface FigureCardData {
  id: string;
  title: string;
  description: string;
  detailPath: string;
  icon: React.ReactNode;
  glbFilePath?: string;
}

interface FigureCardProps {
  figure: FigureCardData;
  variant?: 'light' | 'dark';
  noRoundTop?: boolean;
}

const FigureCard: React.FC<FigureCardProps> = ({ figure, variant = 'light', noRoundTop = false }) => {
  const isPlaceholder = figure.detailPath === '#';
  const isDark = variant === 'dark';
  const viewerPath = figure.glbFilePath ? `/viewer/${encodeURIComponent(figure.glbFilePath)}` : null;

  const cardInner = (
      <div
        className={
          isDark
            ? 'group relative h-full overflow-hidden'
            : `group relative h-full border border-white/20 bg-[#0a183e] overflow-hidden transition-all duration-300 ease-out hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 ${noRoundTop ? 'rounded-b-xl border-t-0' : 'rounded-xl'}`
        }
      >
        {!isDark && (
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}

        <div className={isDark ? 'p-0 flex flex-col h-full justify-center items-center text-center' : 'p-4 flex flex-col h-full'}>
          {/* Light variant: "View 3D model" link instead of icon. Dark variant: keep icon. */}
          {isDark ? (
            <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-amber-400 [&_svg]:w-6 [&_svg]:h-6">
              {figure.icon}
            </div>
          ) : (
            <div className="mb-3">
              {viewerPath ? (
                <Link
                  to={viewerPath}
                  className="inline-flex items-center gap-1.5 font-semibold text-sm text-amber-300 hover:text-amber-200 transition-colors"
                >
                  View 3D model
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                  </svg>
                </Link>
              ) : (
                <span className="text-sm text-white/60">View 3D model</span>
              )}
            </div>
          )}

          <h3
            className={`font-bold heading-font tracking-tight transition-colors duration-300 ${
              isDark ? 'text-center' : ''
            } ${
              isDark ? 'text-sm text-white mb-1.5 group-hover:text-amber-50' : 'text-base text-white mb-1.5 group-hover:text-amber-50'
            }`}
          >
            {figure.title}
          </h3>

          <p
            className={`flex-1 transition-colors duration-300 line-clamp-2 min-h-0 ${
              isDark ? 'text-center' : ''
            } ${
              isDark ? 'text-xs leading-relaxed text-slate-300 group-hover:text-slate-200' : 'text-sm text-white/80 leading-relaxed group-hover:text-white/90'
            }`}
          >
            {figure.description}
          </p>

          {isPlaceholder ? (
            <span className="mt-3 inline-flex items-center gap-1.5 font-semibold text-sm text-white/60">
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </span>
          ) : (
            <Link
              to={figure.detailPath}
              className="mt-3 inline-flex items-center gap-1.5 font-semibold text-sm text-amber-300 hover:text-amber-200 transition-all duration-300 hover:gap-2"
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-0.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
  );

  if (isDark) return cardInner;
  return cardInner;
};

export default FigureCard;
