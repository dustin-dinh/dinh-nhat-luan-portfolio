"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/BrandIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
        
        {/* Left: Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>in HCMC.</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span className="text-slate-500">{t.lastUpdated}</span>
        </div>

        {/* Center: Social links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors shadow-2xs"
            aria-label="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors shadow-2xs"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md bg-white border border-slate-200 text-slate-600 hover:text-blue-500 transition-colors shadow-2xs"
            aria-label="Zalo"
          >
            <ZaloIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Back to top */}
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-2xs"
          aria-label="Back to top"
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
