"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const CaseStudyModal = dynamic(() => import("./CaseStudyModal"));

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const selectedProject = t.projects.items.find((project) => project.id === selectedProjectId) ?? null;

  return (
    <section id="projects" className="section-y">
      <div className="container-x">
        <SectionHeading index="01" tag={t.projects.sectionTag} title={t.projects.title} />

        <ol className="border-t-2 border-ink">
          {t.projects.items.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedProjectId(proj.id)}
            />
          ))}
        </ol>
      </div>

      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProjectId(null)}
        />
      )}
    </section>
  );
}
