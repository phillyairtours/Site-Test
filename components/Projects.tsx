import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { FolderGit2, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-28 relative bg-aerospace-900/40 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-sm font-bold uppercase tracking-widest text-emerald-200 bg-emerald-500/20 px-3.5 py-1.5 rounded-full border border-emerald-400/40 mb-3 shadow-sm">
            Featured Aviation Programs
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Projects & Operational Initiatives
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Standardized flight training curricula, safety management implementations, and operations workflows developed and directed by Arthur Paley.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILOT_DATA.projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/60 hover:-translate-y-1 border border-cyan-500/20 shadow-xl bg-aerospace-900/90"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 flex items-center justify-center">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase px-3 py-1 rounded-md bg-white/10 text-cyan-200 border border-white/20">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h3>
                <div className="text-sm sm:text-base font-mono font-bold text-amber-300 mb-4">{project.subtitle}</div>

                <p className="text-base sm:text-lg text-slate-100 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {project.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.link && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-cyan-200 hover:text-cyan-100 transition-colors"
                  >
                    <span>{project.linkText || "View Project"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
