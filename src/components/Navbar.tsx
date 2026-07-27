"use client";

import { useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const navItems = [
    { label: t.navigation.projects, href: "#projects" },
    { label: t.navigation.skills, href: "#skills" },
    { label: t.navigation.about, href: "#about" },
    { label: t.navigation.photography, href: "#photography" },
    { label: t.navigation.contact, href: "#contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D3DAD9]/10 bg-[#37353E]/85 py-3 shadow-xs backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white transition-colors hover:text-[#A98A8A]"
        >
          <div className="rounded-lg border border-[#A98A8A]/35 bg-[#715A5A]/25 p-1.5 text-[#A98A8A] transition-colors group-hover:bg-[#715A5A]/40">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-semibold">
            {t.navigation.brand}<span className="text-[#A98A8A]">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#D3DAD9]/10 bg-[#44444E]/90 p-1 backdrop-blur-md md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-[#D3DAD9] transition-all hover:bg-[#715A5A]/35 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-[#D3DAD9]/15 p-2 text-[#D3DAD9] transition-colors hover:bg-[#44444E] hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-enter border-b border-[#D3DAD9]/10 bg-[#37353E] px-4 pb-6 pt-3 shadow-lg md:hidden">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-2.5 text-base font-medium text-[#D3DAD9] transition-colors hover:bg-[#44444E] hover:text-[#A98A8A]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end border-t border-[#D3DAD9]/10 pt-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
