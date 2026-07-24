import { projectsData } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import { FolderCode } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <FolderCode className="w-3.5 h-3.5" />
            Portfolio Highlights
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            Real-world applications focusing on information retrieval, backend APIs, and clean software architecture.
          </p>
        </div>

        <div className="space-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
