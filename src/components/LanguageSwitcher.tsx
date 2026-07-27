"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-lg border border-[#D3DAD9]/15 bg-[#44444E] p-1 text-xs font-semibold"
      role="group"
      aria-label="Language selection"
    >
      <div className="pl-1.5 pr-0.5 text-[#AEB4B3]">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-2 py-1 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#A98A8A] ${
          language === "en"
            ? "bg-[#715A5A] text-white shadow-2xs font-bold"
            : "text-[#D3DAD9] hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="text-[#D3DAD9]/20">|</span>
      <button
        onClick={() => setLanguage("vi")}
        aria-pressed={language === "vi"}
        className={`px-2 py-1 rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-[#A98A8A] ${
          language === "vi"
            ? "bg-[#715A5A] text-white shadow-2xs font-bold"
            : "text-[#D3DAD9] hover:text-white"
        }`}
      >
        VI
      </button>
    </div>
  );
}
