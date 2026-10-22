"use client";

import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useLanguage();
  const edu = t.education.info;

  return (
    <section id="education" className="section-y">
      <div className="container-x">
        <SectionHeading index="03" tag={t.education.sectionTag} title={t.education.title} />

        <div className="grid gap-12 border-t-2 border-ink pt-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="label text-muted">
              {edu.degree} · {edu.major}
            </p>
            <h3 className="mt-4 text-[clamp(1.75rem,3.2vw,3rem)] font-black leading-[1.05] tracking-[-0.045em]">{edu.school}</h3>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-muted">{edu.summary}</p>
          </div>
          <div className="lg:col-span-3 lg:col-start-10">
            <p className="text-2xl font-black tracking-tight">{edu.period}</p>
            <p className="mt-2 text-lg">{edu.location}</p>
          </div>
        </div>

        <div className="mt-14">
          <h4 className="label">{edu.courseworkLabel}</h4>
          <ul className="mt-6 grid border-t border-ink sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
            {edu.coursework.map((course) => (
              <li key={course} className="border-b border-ink py-4 text-lg font-semibold">
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
