"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 transition-all duration-200 shadow-xl flex flex-col justify-between group">
      <div className="space-y-6">
        {/* Header: Name & Category */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400">
              <Cpu className="w-3.5 h-3.5" />
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {project.name}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Key Verified Engineering Results (~4 main highlights) */}
        <div className="space-y-3 bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 sm:p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Key Verified Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable "More details" Section */}
        {project.allDetails && project.allDetails.length > 0 && (
          <div className="pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Hide full technical details" : `More details (${project.allDetails.length} items)`}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-slate-800 space-y-2 animate-in fade-in duration-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  All Verified Engineering Details
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                  {project.allDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800/60">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Technology Tags */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60 text-xs font-medium hover:border-slate-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-6 mt-6 border-t border-slate-800 flex flex-wrap items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 transition-all shadow-sm active:scale-[0.98]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View GitHub</span>
        </a>

        {project.demoUrl && project.demoUrl !== "#" ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-semibold transition-all active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/40 text-slate-500 border border-slate-800 text-xs font-medium cursor-not-allowed">
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo (Offline)</span>
          </span>
        )}
      </div>
    </article>
  );
}
