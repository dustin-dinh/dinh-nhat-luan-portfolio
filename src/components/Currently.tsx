"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Currently() {
  const { t } = useLanguage();

  return (
    <section id="currently" className="border-b border-[#D3DAD9]/10 bg-[#37353E] py-14">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-5 rounded-2xl border border-[#D3DAD9]/12 bg-[#44444E] p-6 shadow-xl shadow-black/10 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A98A8A]">
            <Sparkles className="h-4 w-4" />
            <span>{t.currently.title}</span>
          </div>

          <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-3">
            {t.currently.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-[#D3DAD9]/10 bg-[#37353E] p-4 transition-colors hover:border-[#A98A8A]/50"
              >
                <div className="mt-0.5 shrink-0 rounded-md bg-[#715A5A]/30 p-1 text-[#A98A8A]">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <p className="text-xs font-medium leading-relaxed text-[#D3DAD9] sm:text-sm">
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
