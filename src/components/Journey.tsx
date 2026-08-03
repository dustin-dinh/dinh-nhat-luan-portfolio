"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GitCommit, CheckCircle2 } from "lucide-react";

export default function Journey() {
  const { t } = useLanguage();

  return (
    <section id="journey" className="border-t border-[#D3DAD9]/10 bg-[#44444E] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.journey.title}
          </h2>
        </div>

        <div className="relative border-l-2 border-[#A98A8A]/30 pl-6 sm:pl-8 space-y-10">
          {t.journey.steps.map((step, index) => (
            <div key={step.title} className="relative group">
              {/* Timeline marker node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border border-[#A98A8A] bg-[#37353E] text-[#A98A8A] transition-colors group-hover:bg-[#715A5A] group-hover:text-white">
                <GitCommit className="h-4 w-4" />
              </div>

              <div className="portfolio-card rounded-2xl border border-[#D3DAD9]/12 bg-[#37353E] p-6 shadow-xl transition-all group-hover:border-[#A98A8A]/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-[#A98A8A] uppercase tracking-wider">
                    {t.journey.phaseLabel} 0{index + 1} · {step.period}
                  </span>
                  <span className="rounded-md bg-[#44444E] px-2.5 py-0.5 text-xs font-semibold text-[#D3DAD9]">
                    {step.subtitle}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#D3DAD9]">{step.description}</p>

                <div className="mt-4 flex flex-wrap gap-2 pt-2 border-t border-[#D3DAD9]/10">
                  {step.highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#A98A8A]/30 bg-[#715A5A]/25 px-2.5 py-1 text-xs font-semibold text-[#E5D5D5]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#A98A8A]" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
