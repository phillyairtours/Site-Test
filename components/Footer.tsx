import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import { Plane, Linkedin, Github, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-aerospace-950 border-t border-cyan-500/20 py-12 text-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
              <Plane className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg text-white">{PILOT_DATA.name}</div>
              <div className="text-xs sm:text-sm font-mono font-bold text-cyan-200">
                Commercial Pilot ASEL • CFIS • AGI/IGI
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm sm:text-base font-semibold text-slate-100">
            <a href="#overview" className="hover:text-cyan-200 transition-colors">Overview</a>
            {/* <a href="#about" className="hover:text-cyan-200 transition-colors">About</a> */}
            <a href="#experience" className="hover:text-cyan-200 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-200 transition-colors">Flight Hours</a>
            <a href="#projects" className="hover:text-cyan-200 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-200 transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PILOT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-slate-100 hover:text-white hover:border-cyan-300 hover:bg-cyan-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={PILOT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-slate-100 hover:text-white hover:border-cyan-300 hover:bg-cyan-500/20 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PILOT_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/10 border border-white/20 text-slate-100 hover:text-white hover:border-cyan-300 hover:bg-cyan-500/20 transition-all"
              aria-label="PAFOS FLY Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom text */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-200 font-mono text-xs sm:text-sm font-medium">
          <div>
            © {new Date().getFullYear()} Arthur Paley. All rights reserved.
          </div>
          <div>
            Base Airport: KPNE • Philadelphia, PA
          </div>
        </div>

      </div>
    </footer>
  );
};
