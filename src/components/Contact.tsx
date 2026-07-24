import { personalInfo } from "@/data/portfolio";
import { Mail, FileDown, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  const hasLinkedin = Boolean(personalInfo.linkedinUrl);

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Let&apos;s Connect & Work Together
          </h2>
          <p className="text-slate-600 text-base max-w-2xl">
            I am currently open to AI, Data, and Backend Internship opportunities. Whether you have a project idea, a job opportunity, or just want to chat about software engineering, I&apos;d love to hear from you!
          </p>
        </div>

        <div className={`grid grid-cols-1 ${hasLinkedin ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"} gap-6`}>
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-6 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</h3>
              <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate mt-0.5">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* GitHub card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-6 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 text-slate-700 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">GitHub Profile</h3>
              <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                dustin-dinh
              </p>
            </div>
          </a>

          {/* LinkedIn card (Rendered only if verified URL exists) */}
          {hasLinkedin && (
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-6 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md"
            >
              <div className="p-3 w-fit rounded-xl bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">LinkedIn Profile</h3>
                <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                  Dinh Nhat Luan
                </p>
              </div>
            </a>
          )}

          {/* Resume Download card */}
          <a
            href={personalInfo.resumePath}
            download
            className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-6 rounded-2xl transition-all group space-y-3 shadow-xs hover:shadow-md"
          >
            <div className="p-3 w-fit rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 group-hover:scale-110 transition-transform">
              <FileDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Curriculum Vitae</h3>
              <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-0.5">
                Download PDF Resume
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
