"use client";

import { useState } from "react";
import { Project } from "@/data/portfolio";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Layers } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group">
      <div className="space-y-5">
        {/* Category & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
            <Layers className="w-3.5 h-3.5" />
            {project.category}
          </span>
        </div>

        {/* Project Name */}
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
          {project.name}
        </h3>

        {/* Short Human Description */}
        <p className="text-slate-600 text-base leading-relaxed">
          {project.description}
        </p>

        {/* Key Highlights (Clean List) */}
        <div className="space-y-3 bg-slate-50/80 border border-slate-200/80 rounded-xl p-4 sm:p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Key Highlights
          </h4>
          <ul className="space-y-2.5">
            {project.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expandable Technical Details */}
        {project.allDetails && project.allDetails.length > 0 && (
          <div className="pt-1">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors py-1 focus:outline-none"
              aria-expanded={isExpanded}
            >
              <span>{isExpanded ? "Hide detailed metrics" : `View all technical details (${project.allDetails.length} items)`}</span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isExpanded && (
              <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 animate-in fade-in duration-200">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Full Technical Specifications
                </h5>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-600">
                  {project.allDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-100/60 p-2.5 rounded-lg border border-slate-200/60">
                      <span className="text-blue-600 font-bold">•</span>
                      <span className="leading-snug">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Technology Tags */}
        <div className="space-y-2 pt-1">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-all active:scale-[0.98]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View GitHub</span>
        </a>

        {project.demoUrl && project.demoUrl !== "#" ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-semibold transition-all active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-100 text-slate-500 border border-slate-200 text-xs font-medium cursor-default">
            <ExternalLink className="w-4 h-4 opacity-50" />
            <span>Demo coming soon</span>
          </span>
        )}
      </div>
    </article>
  );
}
