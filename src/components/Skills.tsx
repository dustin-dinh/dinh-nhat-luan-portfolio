"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Brain, Code2, Server, Layout, Wrench, Layers } from "lucide-react";

const categoryIcons = [Brain, Code2, Server, Layout, Wrench];
const highlightedSkills = new Set([
  "Hybrid retrieval",
  "Semantic search",
  "PySpark",
  "Data pipelines",
  "Apache Kafka",
]);

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-y border-[#D3DAD9]/10 bg-[#44444E] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#A98A8A]/30 bg-[#715A5A]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5D5D5]">
            <Layers className="h-3.5 w-3.5 text-[#A98A8A]" />
            {t.skills.sectionTag}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.skills.title}
          </h2>
          <p className="max-w-2xl text-base text-[#D3DAD9]">{t.skills.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.skills.categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            return (
              <div
                key={category.title}
                className="flex flex-col justify-between space-y-4 rounded-2xl border border-[#D3DAD9]/12 bg-[#37353E] p-6 shadow-lg shadow-black/10 transition-colors hover:border-[#A98A8A]/50"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-[#A98A8A]/30 bg-[#715A5A]/25 p-2.5 text-[#A98A8A]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.skills.map((skill) => {
                      const highlighted = highlightedSkills.has(skill);
                      return (
                        <span
                          key={skill}
                          className={
                            highlighted
                              ? "rounded-lg border border-[#A98A8A]/35 bg-[#715A5A]/30 px-3 py-1 text-xs font-semibold text-[#E5D5D5]"
                              : "rounded-lg border border-[#D3DAD9]/12 bg-[#44444E] px-3 py-1 text-xs font-medium text-[#D3DAD9]"
                          }
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {category.context && (
                  <div className="border-t border-[#D3DAD9]/10 pt-3">
                    <p className="text-[11px] font-medium italic text-[#AEB4B3]">
                      &bull; {category.context}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
