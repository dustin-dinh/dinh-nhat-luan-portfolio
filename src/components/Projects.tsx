import { projectsData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { FolderCode } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0b0f17]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <FolderCode className="w-3.5 h-3.5" />
            Portfolio Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Real-world applications built with reproducible pipelines, robust schemas, and empirical evaluation.
          </p>
        </div>

        <div className="space-y-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
