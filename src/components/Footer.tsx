"use client";

import { ArrowUp } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-paper/30 bg-ink py-10 text-paper">
      <div className="container-x flex flex-col gap-8 text-sm lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-1 opacity-75">
          <p>
            © {new Date().getFullYear()} {t.navigation.brand}. {t.footer.builtWith}
          </p>
          <p>{t.lastUpdated}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "Facebook", href: personalInfo.facebook },
            { label: "Zalo", href: personalInfo.zaloUrl },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center font-bold uppercase tracking-widest decoration-accent decoration-2 underline-offset-8 hover:underline"
            >
              {label}
            </a>
          ))}
          <a href="#hero" className="inline-flex min-h-11 items-center gap-2 font-bold uppercase tracking-widest hover:text-accent">
            {t.footer.backToTop}
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
