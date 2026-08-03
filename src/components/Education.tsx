"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle } from "lucide-react";

export default function Education() {
  const { t } = useLanguage();
  const edu = t.education.info;

  return (
    <section id="education" className="border-t border-[#D3DAD9]/10 bg-[#37353E] py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#A98A8A]/30 bg-[#715A5A]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5D5D5]">
            <GraduationCap className="h-3.5 w-3.5 text-[#A98A8A]" />
            {t.education.sectionTag}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.education.title}
          </h2>
          <p className="max-w-2xl text-base text-[#D3DAD9]">{t.education.subtitle}</p>
        </div>

        <div className="portfolio-card rounded-3xl border border-[#D3DAD9]/12 bg-[#44444E] p-6 shadow-2xl sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#D3DAD9]/10 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A98A8A]">
                {edu.degree} · {edu.major}
              </span>
              <h3 className="text-2xl font-extrabold text-white">{edu.school}</h3>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#AEB4B3]">
              <div className="flex items-center gap-1.5 rounded-lg bg-[#37353E] px-3 py-1.5 border border-[#D3DAD9]/10">
                <Calendar className="h-3.5 w-3.5 text-[#A98A8A]" />
                <span>{edu.period}</span>
              </div>
              <div className="flex items-center gap-1.5 rounded-lg bg-[#37353E] px-3 py-1.5 border border-[#D3DAD9]/10">
                <MapPin className="h-3.5 w-3.5 text-[#A98A8A]" />
                <span>{edu.location}</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-[#D3DAD9]">{edu.summary}</p>

          <div className="mt-8">
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">
              <BookOpen className="h-4 w-4 text-[#A98A8A]" />
              <span>Key Relevant Coursework & Focus Areas</span>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
              {edu.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 rounded-xl border border-[#D3DAD9]/10 bg-[#37353E] p-3 text-xs font-semibold text-[#D3DAD9] transition-colors hover:border-[#A98A8A]/50"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-[#A98A8A]" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
