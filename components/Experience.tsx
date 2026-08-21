import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative bg-aerospace-900/60 border-y border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-sm font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-400/40 mb-3 shadow-sm">
            Career History
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Work Experience & Flight Leadership
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Professional track record overseeing flight school operations, standardized syllabus delivery, instructor checks, and fleet airworthiness management.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="flex flex-col gap-8 max-w-4xl">
          {PILOT_DATA.experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel relative overflow-hidden transition-all duration-300 hover:border-cyan-400/60 border border-cyan-500/20 shadow-xl"
            >
              {/* Top Row: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-5 mb-5">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5 mt-1.5 text-base sm:text-lg font-bold text-amber-300">
                    <Briefcase className="w-5 h-5 text-amber-400" />
                    <span>{exp.company}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-cyan-200 font-semibold">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-sm font-mono text-slate-200 gap-1.5">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 border border-white/20 text-cyan-200 font-bold">
                    <Calendar className="w-4 h-4 text-cyan-300" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200 font-medium">
                    <MapPin className="w-4 h-4 text-amber-300" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullets */}
              <ul className="flex flex-col gap-3.5">
                {exp.highlights.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3.5 text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                    <ChevronRight className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
