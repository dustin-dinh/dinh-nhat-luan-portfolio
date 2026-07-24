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
    <section id="skills" className="py-20 bg-[#0d121d] border-y border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Core technologies and concepts practiced through hands-on project implementations and academic coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 p-6 rounded-2xl transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium hover:border-cyan-500/40 hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
