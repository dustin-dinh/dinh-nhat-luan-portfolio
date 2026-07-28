"use client";

import { ArrowUpRight, Globe2 } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/BrandIcons";

export default function ProjectCard({ project }: { project: ProjectContent }) {
  const { t } = useLanguage();

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D3DAD9]/12 bg-[#44444E] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-[#715A5A] hover:bg-[#4B4B56] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#715A5A] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex flex-1 flex-col">
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="font-mono text-xs font-bold tracking-widest text-[#A98A8A]">
            /{project.id}
          </span>
          <ArrowUpRight className="h-5 w-5 text-[#AEB4B3] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[#D3DAD9]">{project.description}</p>

        <div className="mt-7 border-t border-[#D3DAD9]/10 pt-5">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#AEB4B3]">
            {t.projects.techStack}
          </p>
          <ul className="flex flex-wrap gap-2" aria-label={t.projects.techStack}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#A98A8A]/35 bg-[#715A5A]/30 px-3 py-1 text-xs font-semibold text-[#E5D5D5]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#715A5A] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#806767]"
          >
            <Globe2 className="h-4 w-4" />
            {t.projects.viewDemo}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-[#D3DAD9]/20 bg-[#37353E] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#A98A8A] hover:text-[#E5D5D5]"
        >
          <GithubIcon className="h-4 w-4" />
          {t.projects.viewGithub}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}
