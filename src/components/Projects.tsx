"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { FolderCode } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <FolderCode className="w-3.5 h-3.5" />
            {t.projects.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
