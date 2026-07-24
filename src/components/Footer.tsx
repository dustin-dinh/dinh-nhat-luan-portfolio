import { personalInfo } from "@/data/portfolio";
import { ArrowUp, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#080c13] border-t border-slate-800/80 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan-400" />
          <span>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </span>
        </div>

        <p className="text-slate-500 text-center sm:text-right">
          Built with Next.js, App Router, TypeScript, and Tailwind CSS.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-slate-700 transition-colors"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
