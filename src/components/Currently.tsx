"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Currently() {
  const { t } = useLanguage();

  return (
    <section id="currently" className="py-12 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>{t.currently.title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
            {t.currently.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 transition-colors"
              >
                <div className="p-1 rounded-md bg-blue-50 text-blue-600 shrink-0 mt-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
