import { personalInfo, educationInfo } from "@/data/portfolio";
import { GraduationCap, Languages, Terminal, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d121d] border-y border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Engineering Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-100 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Professional Overview</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Primary Stack</span>
                <p className="text-sm font-semibold text-slate-200">Python, FastAPI, SQL, React</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Specialization</span>
                <p className="text-sm font-semibold text-cyan-400">IR & Semantic Search</p>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {/* Education Summary Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Education</h4>
                  <span className="text-xs text-slate-400">{educationInfo.period}</span>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-300 pt-1">
                {educationInfo.institution}
              </p>
              <p className="text-xs text-slate-400">{educationInfo.degree}</p>
            </div>

            {/* Language Proficiency Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">English Proficiency</h4>
                  <span className="text-xs text-slate-400">Certifications</span>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-200 pt-1">
                {educationInfo.englishLevel}
              </p>
              <p className="text-xs text-slate-400">Capable of reading technical literature & API documentation</p>
            </div>

            {/* Methodology Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-2 hover:border-slate-700 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Engineering Approach</h4>
                  <span className="text-xs text-slate-400">Quality & Standards</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                Focus on offline evaluation, reproducible test suites, artifact versioning, clean RESTful contracts, and robust relational schemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
