"use client";

import { useState } from "react";
import { Menu, X, FileDown, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.navigation.projects, href: "#projects" },
    { label: t.navigation.skills, href: "#skills" },
    { label: t.navigation.about, href: "#about" },
    { label: t.navigation.education, href: "#education" },
    { label: t.navigation.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 py-3 shadow-xs backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <a
          href="#hero"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-slate-900 hover:text-blue-600 transition-colors group"
        >
          <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover:bg-blue-100 transition-colors">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-semibold">
            {t.navigation.brand}<span className="text-blue-600">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 border border-slate-200/80 p-1 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Language Switcher */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-xs active:scale-[0.98]"
          >
            <FileDown className="w-4 h-4" />
            <span>{t.navigation.resume}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-enter md:hidden border-b border-slate-200 bg-white px-4 pb-6 pt-3 shadow-lg">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
            <LanguageSwitcher />
            <a
              href={personalInfo.resumePath}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-xs"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.navigation.resume}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
