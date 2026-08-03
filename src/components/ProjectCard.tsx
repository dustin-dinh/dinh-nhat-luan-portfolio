"use client";

import { ArrowUpRight, Globe2, BookOpen, BarChart3 } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/BrandIcons";

interface ProjectCardProps {
  project: ProjectContent;
  onOpenCaseStudy: (project: ProjectContent) => void;
}

export default function ProjectCard({ project, onOpenCaseStudy }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article className="portfolio-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#D3DAD9]/12 bg-[#44444E] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.2)] transition-[transform,border-color,background-color] duration-300 hover:border-[#715A5A] hover:bg-[#4B4B56] sm:p-7">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#715A5A] transition-transform duration-500 group-hover:scale-x-100" />

      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-start justify-between gap-4">
          <span className="font-mono text-xs font-bold tracking-widest text-[#A98A8A]">
            /{project.id}
          </span>
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="flex items-center gap-1 text-xs font-bold text-[#A98A8A] transition-colors hover:text-white"
          >
            <span>{t.projects.viewCaseStudy}</span>
            <BookOpen className="h-4 w-4" />
          </button>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-[#D3DAD9]">{project.description}</p>

        {/* Measurable Metrics Row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-5 rounded-2xl border border-[#D3DAD9]/10 bg-[#37353E]/60 p-3.5">
            <div className="mb-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#A98A8A]">
              <BarChart3 className="h-3.5 w-3.5" />
              <span>Key Metrics & Evidence</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-xl bg-[#44444E] p-2">
                  <div className="text-[10px] text-[#AEB4B3] font-medium leading-tight">{m.label}</div>
                  <div className="mt-0.5 text-xs font-bold text-white truncate">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-5 border-t border-[#D3DAD9]/10 pt-4">
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#AEB4B3]">
            {t.projects.techStack}
          </p>
          <ul className="flex flex-wrap gap-1.5" aria-label={t.projects.techStack}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#A98A8A]/35 bg-[#715A5A]/30 px-2.5 py-0.5 text-xs font-semibold text-[#E5D5D5]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="inline-flex items-center gap-2 rounded-xl bg-[#715A5A] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#806767]"
        >
          <BookOpen className="h-4 w-4" />
          <span>{t.projects.viewCaseStudy}</span>
        </button>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#A98A8A]/50 bg-transparent px-3.5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#715A5A]"
          >
            <Globe2 className="h-4 w-4 text-[#A98A8A]" />
            <span>{t.projects.viewDemo}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-[#D3DAD9]/20 bg-[#37353E] px-3.5 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#A98A8A]"
        >
          <GithubIcon className="h-4 w-4 text-[#D3DAD9]" />
          <span>{t.projects.viewGithub}</span>
        </a>
      </div>
    </article>
  );
}
