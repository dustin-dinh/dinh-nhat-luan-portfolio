import { skillCategories } from "@/data/portfolio";
import { Brain, Code2, Server, Layout, Wrench } from "lucide-react";

const categoryIcons = [
  Brain,
  Code2,
  Server,
  Layout,
  Wrench
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            Technologies and concepts practiced through hands-on project implementations and coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4 shadow-xs hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-blue-600 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-blue-300 hover:text-blue-700 transition-colors shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
