import { personalInfo } from "@/data/portfolio";
import { Mail, FileDown, FolderGit2, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-start space-y-6">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personalInfo.availabilityLabel}</span>
          </div>

          {/* Name & Title */}
          <div className="space-y-3 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none">
              {personalInfo.name}
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              {personalInfo.title}
            </p>
          </div>

          {/* Location badge */}
          <div className="flex items-center gap-1.5 text-sm text-slate-400">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>

          {/* Short Hero Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            {personalInfo.heroIntro}
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>View Projects</span>
            </a>

            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 text-sm font-semibold transition-all active:scale-[0.98]"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-sm font-medium transition-all"
              aria-label="Email Me"
            >
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-white" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
