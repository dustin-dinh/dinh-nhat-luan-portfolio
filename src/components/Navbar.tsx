"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileDown, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b0f17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white hover:text-cyan-400 transition-colors group"
        >
          <div className="p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
            <Code2 className="w-5 h-5" />
          </div>
          <span>
            {personalInfo.name} <span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumePath}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          >
            <FileDown className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800 transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1420]/95 border-b border-slate-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80">
            <a
              href={personalInfo.resumePath}
              download
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
