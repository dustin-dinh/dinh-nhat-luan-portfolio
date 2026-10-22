"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const mailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(t.contact.emailSubject)}`;

  return (
    <section id="hero" className="flex flex-col pb-16 pt-28 md:pb-20 lg:min-h-svh lg:justify-end">
      <div className="container-x">
        <div className="hero-copy">
          <p className="flex items-center gap-3 text-base font-semibold md:text-lg">
            <span className="h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden="true" />
            {t.hero.availabilityLabel}
          </p>
          <h1 className="type-giant mt-8 text-balance">
            {t.navigation.brand}
            <span className="text-accent">.</span>
          </h1>
        </div>

        <div className="mt-12 grid gap-10 border-t-2 border-ink pt-8 md:mt-16 lg:grid-cols-12">
          <div className="hero-copy lg:col-span-7">
            <p className="text-sm font-bold uppercase tracking-[0.15em]">{t.hero.title}</p>
            <p className="mt-6 text-xl font-semibold leading-snug tracking-tight md:text-3xl">
              {t.hero.heroIntro}
            </p>
            <p className="mt-6 text-sm text-muted md:text-base">{t.hero.subIntro}</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#projects" className="btn-solid">
                {t.hero.viewProjectsBtn}
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                {t.hero.githubBtn}
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href={mailto} className="link-arrow">
                {t.hero.emailBtn}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hero-portrait lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-4/5 w-full max-w-[200px] overflow-hidden bg-ink sm:max-w-xs lg:ml-auto">
              <Image
                src="/profile.jpg"
                alt="Portrait of Dinh Nhat Luan"
                fill
                preload
                quality={75}
                sizes="320px"
                className="object-cover object-top grayscale transition-[filter] duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
