import { personalInfo } from "@/data/portfolio";
import { Mail, FileDown, FolderGit2, MapPin, UserCheck, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-light-grid bg-slate-50"
    >
      {/* Soft background accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-28 right-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span>{personalInfo.availabilityLabel}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-blue-600">
                {personalInfo.title}
              </p>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Natural warm introduction */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {personalInfo.heroIntro}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
              </a>

              {/* Secondary CTA */}
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold text-sm shadow-xs transition-all active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-blue-600" />
                <span>Download Resume</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-medium transition-all shadow-xs"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4 text-slate-700" />
                <span>GitHub</span>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-medium transition-all shadow-xs"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4 text-slate-700" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Profile Photo Placeholder Area */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl bg-gradient-to-b from-white to-slate-100 border-2 border-dashed border-slate-300 shadow-md flex flex-col items-center justify-center p-6 text-center group hover:border-blue-400 transition-colors">
              <div className="w-24 h-24 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4 shadow-xs">
                <UserCheck className="w-10 h-10" />
              </div>
              <h3 className="text-base font-bold text-slate-800">Dinh Nhat Luan</h3>
              <p className="text-xs font-semibold text-blue-600 mt-0.5">Information Systems Student</p>
              <div className="mt-4 pt-4 border-t border-slate-200/80 w-full space-y-1">
                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                  Profile Photo Area
                </span>
                <p className="text-xs text-slate-500 italic">
                  Ready for replacement
                </p>
              </div>
              {/* Subtle visual badge */}
              <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
