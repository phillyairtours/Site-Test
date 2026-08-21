import React from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  Clock,
  Award,
  ShieldCheck,
  CheckCircle,
  Plane,
  Layers,
  Sparkles,
} from "lucide-react";

export const Skills: React.FC = () => {
  const hoursList = [
    { label: "Total Flight Time", value: PILOT_DATA.flightHours.totalTime, featured: true, subtext: "Comprehensive logged flight hours across airspace classes" },
    { label: "Pilot in Command (PIC)", value: PILOT_DATA.flightHours.pic, subtext: "Sole manipulator of flight controls & final mission authority" },
    { label: "Dual Given (Instruction)", value: PILOT_DATA.flightHours.dualGiven, subtext: "Active student flight instruction & safety evaluations" },
    { label: "Cross Country (XC)", value: PILOT_DATA.flightHours.crossCountry, subtext: "Point-to-point cross-country navigational routes (>50 NM)" },
    { label: "Instrument (IFR)", value: PILOT_DATA.flightHours.instrument, subtext: "Actual IMC & simulated hood instrument procedures" },
    { label: "Night Operations", value: PILOT_DATA.flightHours.night, subtext: "Night VFR and IFR flights" },
    { label: "High Performance (>200HP)", value: PILOT_DATA.flightHours.highPerformance, subtext: "High-horsepower aircraft operations (PA-32 Saratoga & Baron BE55)" },
    { label: "Complex Aircraft", value: PILOT_DATA.flightHours.complex, subtext: "Retractable landing gear, flaps & constant-speed prop (Arrow & BE55)" },
    { label: "Tailwheel Aircraft", value: PILOT_DATA.flightHours.tailwheel, subtext: "Conventional-gear stick-and-rudder handling (Citabria & C170)" },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-sm font-bold uppercase tracking-widest text-cyan-200 bg-cyan-500/20 px-3.5 py-1.5 rounded-full border border-cyan-400/40 mb-3 shadow-sm">
            Aeronautical Telemetry
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Verified Flight Hours & FAA Ratings
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            A comprehensive breakdown of logged flight time, FAA commercial privileges, instructor certifications, and specialized tailwheel and high-performance endorsements.
          </p>
        </div>

        {/* Flight Hours Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {hoursList.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border border-cyan-500/20 ${
                item.featured
                  ? "sm:col-span-2 bg-gradient-to-br from-aerospace-900/95 to-amber-950/40 border-2 border-amber-400/60 shadow-xl shadow-amber-950/30"
                  : "bg-aerospace-900/80 hover:border-cyan-400/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      item.featured
                        ? "bg-amber-500/30 text-amber-300 border border-amber-400/60"
                        : "bg-cyan-500/20 text-cyan-200 border border-cyan-400/40"
                    }`}
                  >
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs sm:text-sm font-bold text-emerald-200 bg-emerald-500/20 px-2.5 py-1 rounded border border-emerald-400/40 uppercase tracking-wider">
                    Logbook Verified
                  </span>
                </div>

                <div className="flex items-baseline gap-2.5 mb-2.5">
                  <span
                    className={`font-mono font-extrabold tracking-tight ${
                      item.featured
                        ? "text-4xl sm:text-5xl text-amber-300 drop-shadow-md"
                        : "text-3xl sm:text-4xl text-white drop-shadow-sm"
                    }`}
                  >
                    {item.value}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-bold text-cyan-200">
                    HOURS
                  </span>
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl text-white mb-1.5">
                  {item.label}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                  {item.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates & Ratings Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-amber-300" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              FAA Certificates & Authorizations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILOT_DATA.certificates.map((cert, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl glass-panel flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/50 border border-cyan-500/20 ${
                  cert.highlight ? "border-cyan-400/60 bg-cyan-950/30 shadow-lg shadow-cyan-950/40" : "bg-aerospace-900/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="font-mono text-xs sm:text-sm font-black px-3 py-1 rounded-md bg-cyan-500/20 text-cyan-100 border border-cyan-400/50 uppercase">
                      {cert.badge}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-slate-200">{cert.authority}</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1.5">{cert.title}</h4>
                  <div className="text-sm sm:text-base font-mono font-bold text-amber-300 mb-3">{cert.category}</div>
                  <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">{cert.description}</p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-sm sm:text-base font-mono font-bold text-emerald-300">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-300" />
                    Active Privileges
                  </span>
                  <span className="text-slate-300">FAA Airman</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Endorsements & Fleet Familiarity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Endorsements Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-amber-500/30">
            <div className="flex items-center gap-3 mb-6 text-amber-300">
              <ShieldCheck className="w-6 h-6 text-amber-300" />
              <h3 className="text-2xl font-extrabold text-white">Specialized Endorsements</h3>
            </div>
            <div className="flex flex-col gap-4">
              {PILOT_DATA.endorsements.map((end, idx) => (
                <div key={idx} className="p-4 sm:p-5 rounded-xl bg-aerospace-900/90 border border-amber-500/20 flex gap-3.5 shadow-sm">
                  <Sparkles className="w-5 h-5 text-amber-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base sm:text-lg text-white mb-1">{end.name}</h4>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">{end.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Experience Panel */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30">
            <div className="flex items-center gap-3 mb-2 text-cyan-200">
              <Plane className="w-6 h-6 text-cyan-300" />
              <h3 className="text-2xl font-extrabold text-white">Aircraft Types & Fleet Experience</h3>
            </div>
            <p className="text-sm text-slate-200 mb-6 italic">
              * Note: High Performance time strictly derived from BE55 and PA32. Complex time strictly derived from BE55 and Arrow.
            </p>
            <div className="flex flex-col gap-3 max-h-[480px] overflow-y-auto pr-1">
              {PILOT_DATA.fleet.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-aerospace-900/90 border border-cyan-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm"
                >
                  <span className="font-bold text-base sm:text-lg text-white">{item.model}</span>
                  <span className="font-mono text-sm sm:text-base font-bold text-cyan-200 sm:text-right">{item.role}</span>
                </div>
              ))}
            </div>

            {/* Core Competency Chips */}
            <div className="mt-6 pt-5 border-t border-cyan-500/20">
              <div className="flex items-center gap-2 mb-3 text-sm font-mono font-bold uppercase text-slate-200">
                <Layers className="w-4 h-4 text-cyan-300" />
                Key Pilot Competencies
              </div>
              <div className="flex flex-wrap gap-2.5">
                {PILOT_DATA.skills.slice(0, 6).map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-sm sm:text-base font-semibold text-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
