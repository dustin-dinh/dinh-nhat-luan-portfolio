"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ArrowUpRight } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

interface CaseStudyModalProps {
  project: ProjectContent | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      const previousBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = previousBodyOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [project, onClose]);

  if (!project || typeof document === "undefined") return null;

  const cs = project.caseStudy;
  const labels = t.projects.caseStudy;
  const groups: { title: string; items: { label?: string; text: string; mono?: boolean }[] }[] = [
    { title: labels.problemGoal, items: [{ label: labels.problem, text: cs.problem }, { label: labels.goal, text: cs.goal }] },
    { title: labels.roleUsers, items: [{ label: labels.role, text: cs.role }, { label: labels.users, text: cs.users }] },
    {
      title: labels.solutionArchitecture,
      items: [
        { label: labels.solution, text: cs.solution },
        { label: labels.architecture, text: cs.architecture, mono: true },
      ],
    },
    { title: labels.dataProcessing, items: [{ text: cs.dataProcess }] },
    { title: labels.challenges, items: [{ label: labels.constraint, text: cs.challenges }, { label: labels.decision, text: cs.decisions }] },
    { title: labels.results, items: [{ label: labels.evaluation, text: cs.evaluation }, { label: labels.outcome, text: cs.results }] },
    { title: labels.lessons, items: [{ label: labels.lessonsLearned, text: cs.lessonsLearned }, { label: labels.nextSteps, text: cs.nextSteps }] },
  ];

  return createPortal(
    <div
      className="fade-in fixed inset-0 z-60 flex items-stretch justify-center bg-ink/70 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="case-study-panel relative w-full max-w-6xl overflow-y-auto bg-paper text-ink sm:border-2 sm:border-ink"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b-2 border-ink bg-paper px-5 py-6 sm:px-10">
          <div>
            <p className="label text-muted">
              /{project.id} · {labels.label}
            </p>
            <h2 id="case-study-title" className="mt-3 text-3xl font-black leading-none tracking-[-0.045em] sm:text-5xl">
              {project.name}
              <span className="text-accent">.</span>
            </h2>
          </div>
          <button autoFocus onClick={onClose} className="icon-btn" aria-label={t.projects.closeCaseStudy}>
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-14 px-5 py-12 sm:px-10">
          <dl className="grid gap-6 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="border-t-2 border-ink pt-3">
                <dt className="label text-muted">{m.label}</dt>
                <dd className="mt-2 text-3xl font-black tracking-tight">{m.value}</dd>
              </div>
            ))}
          </dl>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-solid">
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
            </div>
          )}

          <div className="border-t-2 border-ink">
            {project.features && (
              <section className="grid gap-6 border-b border-ink py-10 lg:grid-cols-12">
                <h3 className="text-2xl font-black tracking-tight lg:col-span-4">{t.projects.featuresLabel}</h3>
                <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-8">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-lg leading-relaxed">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {groups.map((group) => (
              <section key={group.title} className="grid gap-6 border-b border-ink py-10 lg:grid-cols-12">
                <h3 className="text-2xl font-black tracking-tight lg:col-span-4">{group.title}</h3>
                <div className="space-y-8 lg:col-span-8">
                  {group.items.map((item) => (
                    <div key={item.label ?? group.title}>
                      {item.label && <h4 className="label text-muted">{item.label}</h4>}
                      <p className={item.mono ? "mt-3 bg-ink p-4 font-mono text-sm leading-relaxed text-paper" : "mt-2 text-lg leading-relaxed"}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="flex justify-end border-t-2 border-ink px-5 py-6 sm:px-10">
          <button onClick={onClose} className="btn-solid">
            {t.projects.closeCaseStudy}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
