"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Mail, FileDown, Send, Copy, Check } from "lucide-react";
import { GithubIcon, FacebookIcon, ZaloIcon } from "@/components/BrandIcons";

export default function Contact() {
  const { t } = useLanguage();
  const [copiedZalo, setCopiedZalo] = useState(false);

  const handleCopyZalo = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(personalInfo.zaloNumber);
    setCopiedZalo(true);
    setTimeout(() => setCopiedZalo(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            {t.contact.sectionTag}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-5 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.contact.emailLabel}</h3>
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-0.5">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* GitHub card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-5 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.contact.githubLabel}</h3>
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                dustin-dinh
              </p>
            </div>
          </a>

          {/* Facebook card */}
          <a
            href={personalInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.contact.facebookAria}
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-5 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-600 border border-blue-700 text-white group-hover:scale-110 transition-transform">
              <FacebookIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.contact.facebookLabel}</h3>
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                immayoungbigbois
              </p>
            </div>
          </a>

          {/* Zalo card with phone number and copy button */}
          <div className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-5 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between relative">
            <a
              href={personalInfo.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.contact.zaloAria}
              className="space-y-3 block"
            >
              <div className="p-3 w-fit rounded-xl bg-blue-500 border border-blue-600 text-white group-hover:scale-110 transition-transform">
                <ZaloIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.contact.zaloLabel}</h3>
                <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                  {personalInfo.zaloNumber}
                </p>
              </div>
            </a>
            <button
              onClick={handleCopyZalo}
              className="mt-2 w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg bg-white border border-slate-200 text-slate-600 text-[11px] font-semibold hover:bg-slate-100 hover:text-blue-600 transition-colors"
              title="Copy Zalo phone number"
            >
              {copiedZalo ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">{t.contact.copiedZaloNumber}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>{t.contact.copyZaloNumber}</span>
                </>
              )}
            </button>
          </div>

          {/* Resume Download card */}
          <a
            href={personalInfo.resumePath}
            download
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-5 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div className="p-3 w-fit rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 group-hover:scale-110 transition-transform">
              <FileDown className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">{t.contact.resumeLabel}</h3>
              <p className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                {t.contact.downloadResume}
              </p>
            </div>
          </a>
        </div>

        {/* Friendly closing note */}
        <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
          <p className="text-xs font-medium text-slate-600">
            &ldquo;{t.contact.closingMsg}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
