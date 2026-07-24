"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 bg-slate-100/90 border border-slate-200 p-1 rounded-lg text-xs font-semibold"
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-1.5 pr-0.5 text-slate-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          language === "en"
            ? "bg-white text-blue-700 shadow-2xs font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        EN
      </button>
      <span className="text-slate-300">|</span>
      <button
        onClick={() => setLanguage("vi")}
        aria-pressed={language === "vi"}
        className={`px-2 py-1 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          language === "vi"
            ? "bg-white text-blue-700 shadow-2xs font-bold"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        VI
      </button>
    </div>
  );
}
