"use client";

import { useEffect } from "react";
import { X, AlertTriangle, Layers, Cpu, Database, Target, Award, Lightbulb, ExternalLink } from "lucide-react";
import { ProjectContent } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { GithubIcon } from "@/components/BrandIcons";

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

  if (!project) return null;

  const cs = project.caseStudy;

  return (
    <div
      className="case-study-backdrop fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black/75 p-4 sm:p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="case-study-panel relative w-full max-w-5xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl border border-[#D3DAD9]/20 bg-[#37353E] text-[#D3DAD9] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#D3DAD9]/10 bg-[#37353E]/95 px-6 py-5 backdrop-blur-md sm:px-8">
          <div>
            <span className="font-mono text-xs font-bold tracking-widest text-[#A98A8A]">
              /{project.id} · CASE STUDY
            </span>
            <h2 id="case-study-title" className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {project.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl border border-[#D3DAD9]/15 bg-[#44444E] p-2 text-[#D3DAD9] transition-colors hover:bg-[#715A5A] hover:text-white"
            aria-label={t.projects.closeCaseStudy}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-8 sm:p-8">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-[#A98A8A]/30 bg-[#44444E]/80 p-5 sm:grid-cols-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#AEB4B3]">
                  {m.label}
                </span>
                <p className="text-xl font-black text-white">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#715A5A] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#806767]"
              >
                <span>{t.projects.viewDemo}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[#D3DAD9]/20 bg-[#44444E] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:border-[#A98A8A]"
            >
              <GithubIcon className="h-4 w-4" />
              <span>{t.projects.viewGithub}</span>
            </a>
          </div>

          {/* Grid Layout of Case Study Sections */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Problem & Goal */}
            <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <Target className="h-5 w-5" />
                <h3 className="text-base font-bold text-white">Problem & Goal</h3>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Problem</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.problem}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Goal</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.goal}</p>
              </div>
            </div>

            {/* Role & Users */}
            <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <Layers className="h-5 w-5" />
                <h3 className="text-base font-bold text-white">Role & Target Users</h3>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">My Direct Role</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.role}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Target Users</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.users}</p>
              </div>
            </div>
          </div>

          {/* Solution & Architecture */}
          <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
            <div className="flex items-center gap-2 text-[#A98A8A]">
              <Cpu className="h-5 w-5" />
              <h3 className="text-base font-bold text-white">Solution & Architecture</h3>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Solution Overview</h4>
              <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.solution}</p>
            </div>
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">System Architecture & Flow</h4>
              <p className="mt-1 font-mono text-xs leading-relaxed text-[#E5D5D5] bg-[#37353E] p-3 rounded-xl border border-[#D3DAD9]/10">
                {cs.architecture}
              </p>
            </div>
          </div>

          {/* Data & Technical Challenges */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <Database className="h-5 w-5" />
                <h3 className="text-base font-bold text-white">Data Processing</h3>
              </div>
              <p className="text-sm leading-relaxed text-[#D3DAD9]">{cs.dataProcess}</p>
            </div>

            <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
                <h3 className="text-base font-bold text-white">Technical Challenges & Trade-offs</h3>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">Resource Constraint / Challenge</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.challenges}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Engineering Decision</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.decisions}</p>
              </div>
            </div>
          </div>

          {/* Results & Lessons */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-4 rounded-2xl border border-[#A98A8A]/30 bg-[#715A5A]/20 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <Award className="h-5 w-5" />
                <h3 className="text-base font-bold text-white">Results & Evaluation</h3>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Evaluation Strategy</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.evaluation}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Measurable Outcome</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#E5D5D5] font-semibold">{cs.results}</p>
              </div>
            </div>

            <div className="space-y-4 rounded-2xl border border-[#D3DAD9]/10 bg-[#44444E]/50 p-6">
              <div className="flex items-center gap-2 text-[#A98A8A]">
                <Lightbulb className="h-5 w-5" />
                <h3 className="text-base font-bold text-white">Lessons & Next Steps</h3>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Lessons Learned</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.lessonsLearned}</p>
              </div>
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#AEB4B3]">Next Iterations</h4>
                <p className="mt-1 text-sm leading-relaxed text-[#D3DAD9]">{cs.nextSteps}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-[#D3DAD9]/10 bg-[#37353E]/95 px-6 py-4 backdrop-blur-md sm:px-8">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-xl bg-[#715A5A] px-6 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#806767]"
          >
            <span>{t.projects.closeCaseStudy}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
