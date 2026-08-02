"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, FolderGit2, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[#37353E] bg-light-grid pb-20 pt-32 md:pb-28 md:pt-36"
    >
      {/* Soft background accents */}
      <div className="hero-orb absolute left-1/2 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-[#715A5A]/25 blur-3xl pointer-events-none" />
      <div className="hero-orb hero-orb-teal absolute right-10 top-28 h-80 w-80 rounded-full bg-[#D3DAD9]/8 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Area */}
          <div className="hero-copy lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#A98A8A]/40 bg-[#715A5A]/25 px-3.5 py-1.5 text-xs font-semibold text-[#E5D5D5] shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A98A8A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A98A8A]"></span>
              </span>
              <span>{t.hero.availabilityLabel}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#A98A8A]">
                {t.hero.title}
              </p>
            </div>

            {/* Location badge */}
            <div className="flex items-center gap-2 text-sm text-[#AEB4B3] font-medium">
              <MapPin className="w-4 h-4 text-[#A98A8A] shrink-0" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Value Statement Description & Bio */}
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-semibold text-white leading-snug max-w-2xl border-l-2 border-[#A98A8A] pl-3">
                &ldquo;{t.hero.heroIntro}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#D3DAD9] leading-relaxed max-w-2xl">
                {t.hero.subIntro}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View Projects CTA */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-[#715A5A] px-5 py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#806767] active:scale-[0.98]"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{t.hero.viewProjectsBtn}</span>
              </a>

              {/* GitHub Link */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D3DAD9]/40 bg-transparent px-4 py-3 text-sm font-medium text-[#D3DAD9] shadow-xs transition-all hover:border-[#A98A8A] hover:text-white"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.hero.githubBtn}</span>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-[#D3DAD9]/40 bg-transparent px-4 py-3 text-sm font-medium text-[#D3DAD9] shadow-xs transition-all hover:border-[#A98A8A] hover:text-white"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
                <span>{t.hero.emailBtn}</span>
              </a>
            </div>
          </div>

          {/* Real Personal Profile Image Frame */}
          <div className="hero-portrait lg:col-span-5 flex justify-center lg:justify-end">
            <div className="group relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-3xl border border-[#D3DAD9]/15 bg-[#44444E] shadow-2xl shadow-black/25">
              <Image
                src="/profile.jpg"
                alt="Portrait of Dinh Nhat Luan"
                fill
                preload
                quality={75}
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="320px"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
