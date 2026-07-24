import { educationInfo } from "@/data/portfolio";
import { GraduationCap, BookOpen, Award, Calendar, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Education & Qualifications
          </h2>
        </div>

        {/* Clean Light Education Card */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {educationInfo.institution}
                </h3>
                <p className="text-base font-semibold text-blue-600">
                  {educationInfo.degree}
                </p>
                <p className="text-sm text-slate-500 font-medium">Major: {educationInfo.major}</p>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
                {educationInfo.period}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                {educationInfo.englishLevel}
              </span>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              Relevant Coursework
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {educationInfo.coursework.map((course) => (
                <div
                  key={course}
                  className="flex items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium hover:border-slate-300 transition-colors"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
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
