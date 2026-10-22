"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/portfolio";

const languages: Language[] = ["en", "vi"];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex border-2 border-ink" role="group" aria-label="Language selection">
      {languages.map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          aria-pressed={language === lang}
          className={`h-10 w-11 cursor-pointer text-xs font-bold uppercase transition-colors duration-200 ${
            language === lang ? "bg-ink text-paper" : "hover:bg-accent"
          }`}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
