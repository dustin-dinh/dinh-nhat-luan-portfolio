"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, Send } from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/BrandIcons";

export default function Contact() {
  const { t } = useLanguage();
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(t.contact.emailSubject)}`;
  const links = [
    { label: "Email", text: t.contact.sendEmail, href: gmailComposeUrl, icon: Mail },
    { label: "GitHub", text: t.contact.viewGithub, href: personalInfo.github, icon: GithubIcon },
    { label: "Facebook", text: t.contact.visitFacebook, href: personalInfo.facebook, icon: FacebookIcon },
    { label: "Zalo", text: t.contact.chatZalo, href: personalInfo.zaloUrl, icon: ZaloIcon },
  ];

  return (
    <section id="contact" className="bg-[#D3DAD9] py-20 text-[#37353E]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md border border-[#715A5A]/25 bg-[#715A5A]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#715A5A]">
            <Send className="h-3.5 w-3.5" />
            {t.contact.sectionTag}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#37353E] sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="max-w-2xl text-base text-[#44444E]">{t.contact.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {links.map(({ label, text, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card group flex flex-col justify-between gap-5 rounded-2xl border border-[#37353E]/15 bg-white/35 p-5 transition-all hover:border-[#715A5A] hover:bg-white/55"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#715A5A] text-white transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#715A5A]">{label}</h3>
                <p className="mt-1 text-xs font-bold text-[#37353E]">{text}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-[#37353E]/15 bg-white/30 p-4 text-center">
          <p className="text-xs font-medium text-[#44444E]">&ldquo;{t.contact.closingMsg}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
