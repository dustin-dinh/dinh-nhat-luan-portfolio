import { personalInfo } from "@/data/portfolio";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
        <div className="flex items-center gap-1.5">
          <span>© {new Date().getFullYear()} {personalInfo.name}. Built with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>in Ho Chi Minh City.</span>
        </div>

        <p className="text-slate-500 text-center sm:text-right">
          Next.js, TypeScript & Tailwind CSS. Ready for Vercel.
        </p>

        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-slate-300 transition-colors shadow-xs"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  );
}
