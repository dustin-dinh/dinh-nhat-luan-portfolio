"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.navigation.projects, href: "#projects" },
    { label: t.navigation.skills, href: "#skills" },
    { label: t.navigation.education, href: "#education" },
    { label: t.navigation.contact, href: "#contact" },
    { label: t.navigation.photography, href: "#photography" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#hero" className="text-base font-black tracking-tight">
          {t.navigation.brand}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-2 text-xs font-bold uppercase tracking-[0.15em] decoration-accent decoration-2 underline-offset-8 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fade-in fixed inset-x-0 bottom-0 top-16 flex flex-col justify-between overflow-y-auto bg-paper px-4 pb-10 pt-8 sm:px-8 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-ink py-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-8 md:hidden">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
