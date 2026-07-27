"use client";

import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import { FolderCode } from "lucide-react";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="bg-[#37353E] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#A98A8A]/30 bg-[#715A5A]/25 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5D5D5]">
            <FolderCode className="h-3.5 w-3.5" />
            {t.projects.sectionTag}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-base text-[#D3DAD9]">{t.projects.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {t.projects.items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
