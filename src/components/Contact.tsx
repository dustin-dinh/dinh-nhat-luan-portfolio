import { personalInfo } from "@/data/portfolio";
import { Mail, FileDown, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#0d121d] border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect & Collaboration
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Currently open to AI, Data, and Backend Internship opportunities. Feel free to reach out directly via email or check my GitHub repositories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group space-y-3"
          >
            <div className="p-3 w-fit rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400">Email Address</h3>
              <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
                {personalInfo.email}
              </p>
            </div>
          </a>

          {/* GitHub card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group space-y-3"
          >
            <div className="p-3 w-fit rounded-xl bg-slate-800 border border-slate-700 text-slate-300 group-hover:scale-110 transition-transform">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400">GitHub Profile</h3>
              <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                dustin-dinh
              </p>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href={personalInfo.linkedinPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group space-y-3"
          >
            <div className="p-3 w-fit rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
              <LinkedinIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400">LinkedIn Profile</h3>
              <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                Dinh Nhat Luan
              </p>
            </div>
          </a>

          {/* Resume Download card */}
          <a
            href={personalInfo.resumePath}
            download
            className="bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-2xl transition-all group space-y-3"
          >
            <div className="p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
              <FileDown className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-400">Curriculum Vitae</h3>
              <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                Download PDF Resume
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
