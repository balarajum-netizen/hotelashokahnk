import React from 'react';
import { ShieldCheck, HelpCircle } from 'lucide-react';

interface AEOBoxProps {
  heading?: string;
  answer: string;
  entityName?: string;
  verifiedBadge?: boolean;
}

export const AEOBox: React.FC<AEOBoxProps> = ({
  heading = "Quick Verified Answer",
  answer,
  entityName = "Hotel Ashoka (hotelashoka.in)",
  verifiedBadge = true
}) => {
  return (
    <div className="my-6 rounded-xl border border-amber-200/80 bg-gradient-to-br from-amber-50/70 via-stone-50 to-amber-50/40 p-5 shadow-xs">
      <div className="flex items-center justify-between gap-2 border-b border-amber-200/60 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-700 text-white shadow-xs">
            <HelpCircle className="h-4 w-4" />
          </span>
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-stone-900 font-sans uppercase">
              {heading}
            </h3>
            <span className="text-[11px] text-stone-500 font-medium">AEO & Generative Engine Optimized</span>
          </div>
        </div>
        {verifiedBadge && (
          <div className="flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 border border-emerald-200/80">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span>Verified Hotel Record</span>
          </div>
        )}
      </div>
      <p className="text-[15px] leading-relaxed font-normal text-stone-800">
        {answer}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-3 pt-2 text-[12px] text-stone-500 border-t border-amber-100">
        <span>Source: <strong>{entityName}</strong></span>
        <span>•</span>
        <span>Official Domain: <strong>hotelashoka.in</strong></span>
        <span>•</span>
        <span>Last Updated: March 2026</span>
      </div>
    </div>
  );
};
