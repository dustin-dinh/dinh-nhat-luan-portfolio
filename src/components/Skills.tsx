"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

// The tools recruiters search for, each backed by a featured project.
const highlightedSkills = new Set(["YOLO (Ultralytics)", "ONNX Runtime", "InsightFace (SCRFD, ArcFace)", "Qdrant", "FastAPI"]);

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-y">
      <div className="container-x">
        <SectionHeading index="02" tag={t.skills.sectionTag} title={t.skills.title} subtitle={t.skills.subtitle} />

        <ol className="border-t-2 border-ink">
          {t.skills.categories.map((category, index) => (
            <li key={category.title} className="grid gap-6 border-b border-ink py-8 md:py-10 lg:grid-cols-12">
              <span className="label pt-2 lg:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl">{category.title}</h3>
                {category.context && <p className="mt-3 text-sm leading-relaxed text-muted">{category.context}</p>}
              </div>
              <ul className={`flex flex-wrap content-start gap-x-6 gap-y-3 text-lg font-medium md:text-xl lg:col-span-7 ${category.studied ? "text-muted" : ""}`}>
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className={highlightedSkills.has(skill) ? "font-bold underline decoration-accent decoration-4 underline-offset-8" : undefined}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
