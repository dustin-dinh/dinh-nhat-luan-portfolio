"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUp, Heart } from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/BrandIcons";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#D3DAD9]/10 bg-[#37353E] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 text-xs font-medium text-[#AEB4B3] sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {personalInfo.name}. Built with</span>
            <Heart className="h-3.5 w-3.5 fill-[#A98A8A] text-[#A98A8A]" />
            <span>in HCMC.</span>
          </div>
          <span className="hidden text-[#D3DAD9]/20 sm:inline">•</span>
          <span>{t.lastUpdated}</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { label: "GitHub", href: personalInfo.github, icon: GithubIcon },
            { label: "Facebook", href: personalInfo.facebook, icon: FacebookIcon },
            { label: "Zalo", href: personalInfo.zaloUrl, icon: ZaloIcon },
          ].map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#D3DAD9]/12 bg-[#44444E] p-1.5 text-[#D3DAD9] transition-colors hover:border-[#A98A8A] hover:text-[#A98A8A]"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 rounded-lg border border-[#D3DAD9]/12 bg-[#44444E] px-3 py-1.5 text-[#D3DAD9] transition-colors hover:border-[#A98A8A] hover:text-[#A98A8A]"
          aria-label="Back to top"
        >
          <span>{t.footer.backToTop}</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
