"use client";

import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Compass, Code, HeartHandshake } from "lucide-react";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            {t.about.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Personal Bio Card */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-xs">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-blue-600" />
                <span>{t.about.whoIAmTitle}</span>
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {t.about.bio}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.about.coreInterestLabel}</span>
                <p className="text-sm font-semibold text-slate-800">{t.about.coreInterestValue}</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t.about.mindsetLabel}</span>
                <p className="text-sm font-semibold text-blue-600">{t.about.mindsetValue}</p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {/* Practical Mindset Card */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2 hover:border-slate-300 transition-colors shadow-xs">
              <div className="flex items-center gap-3 text-blue-600">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{t.about.practicalTitle}</h4>
                  <span className="text-xs text-slate-500">{t.about.practicalSubtitle}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {t.about.practicalDesc}
              </p>
            </div>

            {/* Academic & English Card */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2 hover:border-slate-300 transition-colors shadow-xs">
              <div className="flex items-center gap-3 text-emerald-600">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{t.about.academicTitle}</h4>
                  <span className="text-xs text-slate-500">{t.education.institution}</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-600 font-medium">{t.education.degree}</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {t.education.englishLevel}
                </span>
              </div>
            </div>

            {/* Collaboration & Values */}
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl space-y-2 hover:border-slate-300 transition-colors shadow-xs">
              <div className="flex items-center gap-3 text-blue-600">
                <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <HeartHandshake className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">{t.about.collaborationTitle}</h4>
                  <span className="text-xs text-slate-500">{t.about.collaborationSubtitle}</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {t.about.collaborationDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
