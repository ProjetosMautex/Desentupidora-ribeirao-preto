import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3.5">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all ${
              isOpen
                ? 'bg-white border-blue-900/30 shadow-md'
                : 'bg-white/80 border-slate-200 hover:border-slate-300'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className="flex items-start gap-3 font-bold text-slate-900 text-base sm:text-lg">
                <HelpCircle className="w-5 h-5 text-amber-500 shrink-0 mt-1" />
                <span>{item.q}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-blue-900' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 pt-4">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
