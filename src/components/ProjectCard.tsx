"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import FlowChart from "./FlowChart";

interface ProjectCardProps {
  index: number;
  project: ProjectContent;
  onOpenCaseStudy: (project: ProjectContent) => void;
}

export default function ProjectCard({ index, project, onOpenCaseStudy }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <li className="group grid gap-8 border-b-2 border-ink py-10 md:py-14 lg:grid-cols-12">
      <span className="label pt-3 lg:col-span-1">{String(index + 1).padStart(2, "0")}</span>

      <div className="lg:col-span-7">
        <p className="label text-muted">{project.badge}</p>
        <h3 className="mt-4 text-[clamp(1.75rem,3.2vw,3rem)] font-black leading-[0.98] tracking-[-0.045em] transition-colors duration-200 group-hover:text-accent">
          {project.name}
        </h3>
        <dl className="mt-6 max-w-2xl space-y-4">
          <div>
            <dt className="label text-muted">{t.projects.problemLabel}</dt>
            <dd className="mt-1.5 text-base leading-relaxed md:text-lg">{project.problem}</dd>
          </div>
          <div>
            <dt className="label text-muted">{t.projects.approachLabel}</dt>
            <dd className="mt-1.5 text-base leading-relaxed md:text-lg">{project.approach}</dd>
          </div>
        </dl>
      </div>

      <div className="lg:col-span-4">
        <p className="label text-muted">{t.projects.metricsLabel}</p>
        <dl className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {project.metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse border-t border-ink pt-3">
              <dt className="mt-1 text-sm text-muted">{m.label}</dt>
              <dd className="text-2xl font-black tracking-tight md:text-3xl">{m.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="lg:col-span-11 lg:col-start-2">
        <p className="label mb-3 text-muted">{t.projects.flowLabel}</p>
        <FlowChart steps={project.flow} label={`${project.name}: ${t.projects.flowLabel}`} />
        <p className="text-sm font-semibold leading-relaxed md:hidden">{project.flow.map((step) => step.label).join(" → ")}</p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 lg:col-span-11 lg:col-start-2">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <button onClick={() => onOpenCaseStudy(project)} className="btn-solid">
            {t.projects.viewCaseStudy}
            <ArrowRight className="h-4 w-4" />
          </button>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t.projects.viewDemo}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-arrow">
              {t.projects.viewGithub}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {!project.githubUrl && !project.liveUrl && <span className="label text-muted">{t.projects.internalRepo}</span>}
        </div>
        <p className="text-sm font-semibold">
          <span className="sr-only">{t.projects.techStack}: </span>
          {project.tags.join(" / ")}
        </p>
      </div>
    </li>
  );
}
