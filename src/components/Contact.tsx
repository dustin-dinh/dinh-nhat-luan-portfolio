"use client";

import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { t } = useLanguage();
  const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`;
  const links = [
    { label: "Email", text: personalInfo.email, href: mailto },
    { label: "GitHub", text: t.contact.viewGithub, href: personalInfo.github },
    { label: "Facebook", text: t.contact.visitFacebook, href: personalInfo.facebook },
    { label: "Zalo", text: t.contact.chatZalo, href: personalInfo.zaloUrl },
  ];

  return (
    <section id="contact" className="section-y bg-ink text-paper">
      <div className="container-x">
        <SectionHeading index="04" tag={t.contact.sectionTag} title={t.contact.title} subtitle={t.contact.description} />

        <ul className="border-t border-paper/30">
          {links.map(({ label, text, href }) => (
            <li key={label} className="border-b border-paper/30">
              <a
                href={href}
                {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="group flex items-center justify-between gap-6 py-6 md:py-8"
              >
                <span className="min-w-0">
                  <span className="label block opacity-70">{label}</span>
                  <span
                    className={`mt-3 block break-all font-black leading-none tracking-[-0.045em] transition-colors duration-200 group-hover:text-accent ${
                      // the address is one long unbreakable word, so it gets a smaller size on phones
                      label === "Email" ? "text-lg sm:text-[clamp(1.5rem,3.5vw,3rem)]" : "text-[clamp(1.5rem,3.5vw,3rem)]"
                    }`}
                  >
                    {text}
                  </span>
                </span>
                <ArrowUpRight
                  className="h-7 w-7 shrink-0 transition-[color,transform] duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:h-10 md:w-10"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
