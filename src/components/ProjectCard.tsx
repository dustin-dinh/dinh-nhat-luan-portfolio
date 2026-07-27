"use client";

import { ArrowUpRight } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/BrandIcons";

export default function ProjectCard({ project }: { project: ProjectContent }) {
  const { t } = useLanguage();

  return (
    <article className="project-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-8">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex flex-1 flex-col">
        <div className="mb-6 flex items-start justify-between gap-4">
          <span className="font-mono text-xs font-bold tracking-widest text-blue-600">
            /{project.id}
          </span>
          <ArrowUpRight className="h-5 w-5 text-slate-300 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600" />
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-blue-700 sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
          {project.description}
        </p>

        <div className="mt-7 border-t border-slate-100 pt-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-400">
            {t.projects.techStack}
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={t.projects.techStack}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 transition-colors group-hover:border-blue-100 group-hover:bg-blue-50/70 group-hover:text-blue-700"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition-[transform,background-color] hover:bg-blue-700 active:scale-[0.98]"
      >
        <GithubIcon className="h-4 w-4" />
        {t.projects.viewGithub}
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}
