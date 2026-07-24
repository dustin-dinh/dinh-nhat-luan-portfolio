import { educationInfo } from "@/data/portfolio";
import { GraduationCap, BookOpen, Award, Calendar, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-[#0b0f17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Qualifications
          </h2>
        </div>

        {/* Clean Education Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {educationInfo.institution}
                </h3>
                <p className="text-base font-semibold text-cyan-400">
                  {educationInfo.degree}
                </p>
                <p className="text-sm text-slate-400">Major: {educationInfo.major}</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {educationInfo.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                {educationInfo.englishLevel}
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {educationInfo.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-sm font-medium hover:border-slate-700 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
