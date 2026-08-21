"use client";

import React, { useState } from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  ShieldCheck,
  Compass,
  FileText,
  MapPin,
  Clock,
  ArrowUpRight,
  Activity,
  Award,
  Plane,
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  // Interactive HUD tilt state
  const [hudTilt, setHudTilt] = useState({ pitch: 0, roll: 0 });

  const handleHudMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHudTilt({
      roll: (x / (rect.width / 2)) * 14,
      pitch: -(y / (rect.height / 2)) * 10,
    });
  };

  const handleHudMouseLeave = () => {
    setHudTilt({ pitch: 0, roll: 0 });
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Pilot Identity & Value Prop */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-amber-500/20 text-amber-200 border border-amber-400/50 shadow-sm shadow-amber-900/30">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                Commercial Pilot ASEL
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-100 border border-cyan-400/50 shadow-sm shadow-cyan-900/30">
                <Compass className="w-4 h-4 text-cyan-300" />
                Instrument Rated
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-sky-500/20 text-sky-100 border border-sky-400/50 shadow-sm shadow-sky-900/30">
                <Award className="w-4 h-4 text-sky-300" />
                CFIS / AGI / IGI
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-100 border border-indigo-400/50 shadow-sm shadow-indigo-900/30">
                <Plane className="w-4 h-4 text-indigo-300" />
                Ferry Pilot
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-100 border border-emerald-400/50 shadow-sm shadow-emerald-900/30">
                <Clock className="w-4 h-4 text-emerald-300" />
                {PILOT_DATA.flightHours.totalTime}+ Total Hours
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex items-center gap-6 sm:gap-8">
              <img
                src="/profile-photo.jpg"
                alt="Arthur Paley"
                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full border-4 border-cyan-400/60 shadow-2xl shadow-cyan-900/60 flex-shrink-0"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                  {PILOT_DATA.name}
                </h1>
                <p className="mt-3 text-xl sm:text-2xl font-bold text-cyan-200">
                  Chief Flight Instructor • Flight Operations Leader • Corporate Aviator
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-lg sm:text-xl text-slate-100 leading-relaxed max-w-2xl font-normal">
              {PILOT_DATA.summary}
            </p>

            {/* Base Airports & Location Strip */}
            <div className="p-4 sm:p-5 rounded-xl glass-panel flex flex-wrap items-center gap-y-3 gap-x-8 text-sm sm:text-base text-slate-100 font-semibold border border-cyan-500/30">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span>{PILOT_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-5 h-5 text-amber-300" />
                <span>KPNE</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span>100% Incident-Free Safety</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#skills"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-base shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:-translate-y-0.5"
              >
                <Activity className="w-5 h-5" />
                Explore Flight Hours
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border-2 border-amber-400/60 text-amber-200 font-bold text-base transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                View & Print CV
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-base transition-all hover:-translate-y-0.5"
              >
                Direct Inquiry
                <ArrowUpRight className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Glass Cockpit HUD Card */}
          <div className="lg:col-span-5">
            <div
              onMouseMove={handleHudMouseMove}
              onMouseLeave={handleHudMouseLeave}
              className="relative p-5 sm:p-6 rounded-2xl glass-panel border-2 border-cyan-400/60 shadow-2xl shadow-cyan-950/80 transition-all duration-200 cursor-crosshair group"
            >
              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-cyan-300 animate-ping" />
                  <span className="font-mono text-sm sm:text-base font-black text-cyan-200 tracking-wider uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">
                    PRIMARY FLIGHT DISPLAY // PFD
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded bg-emerald-500/30 text-emerald-200 border border-emerald-400/60 shadow-sm">
                    AP ENG
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-black px-2.5 py-1 rounded bg-amber-500/30 text-amber-200 border border-amber-400/60 shadow-sm">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Artificial Horizon Frame - Extra Large Glass Display */}
              <div className="relative w-full h-72 sm:h-80 bg-slate-950 rounded-xl border-2 border-cyan-400/60 overflow-hidden flex items-center justify-center shadow-inner">
                
                {/* Dynamic Horizon Ground/Sky Mesh */}
                <div
                  className="absolute w-[220%] h-[220%] transition-transform duration-75 ease-out pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, #0369a1 0%, #0284c7 49.5%, #ffffff 49.9%, #38bdf8 50.1%, #78350f 50.5%, #451a03 100%)",
                    transform: `translateY(${hudTilt.pitch * 4.2}px) rotate(${hudTilt.roll}deg)`,
                  }}
                />

                {/* Roll Angle Arc & Pointer (Top of Display) */}
                <div className="absolute top-2 left-0 right-0 flex flex-col items-center pointer-events-none z-20">
                  {/* Sky Pointer (Inverted Triangle) that rotates with bank */}
                  <div
                    className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-amber-400 transition-transform duration-75 ease-out drop-shadow-[0_0_8px_rgba(245,158,11,1)]"
                    style={{
                      transform: `rotate(${hudTilt.roll}deg)`,
                      transformOrigin: "center 70px",
                    }}
                  />
                  {/* Roll Arc Scale Indicators */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono font-black text-cyan-100 pt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                    <span>-45°</span>
                    <span>-30°</span>
                    <span>-10°</span>
                    <span className="text-white font-black text-sm sm:text-base">▲ 0°</span>
                    <span>+10°</span>
                    <span>+30°</span>
                    <span>+45°</span>
                  </div>
                </div>

                {/* Pitch Ladder Indicators - Large High-Visibility Scales */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none transition-transform duration-75 ease-out z-10"
                  style={{
                    transform: `translateY(${hudTilt.pitch * 4.2}px) rotate(${hudTilt.roll}deg)`,
                  }}
                >
                  <div className="flex flex-col items-center gap-3 sm:gap-4 font-mono font-black text-sm sm:text-base text-cyan-100 drop-shadow-[0_0_10px_rgba(0,240,255,1)]">
                    {/* +20 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-12 sm:w-14 h-[3px] bg-cyan-200 border-b-2 border-cyan-400" />
                      <span className="px-1.5 py-0.5 bg-slate-950/80 rounded font-black">+20°</span>
                      <span className="w-12 sm:w-14 h-[3px] bg-cyan-200 border-b-2 border-cyan-400" />
                    </div>
                    {/* +10 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 sm:w-12 h-[3px] bg-cyan-200 border-b-2 border-cyan-400" />
                      <span className="px-1.5 py-0.5 bg-slate-950/80 rounded font-black">+10°</span>
                      <span className="w-10 sm:w-12 h-[3px] bg-cyan-200 border-b-2 border-cyan-400" />
                    </div>
                    {/* +05 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 sm:w-8 h-[2.5px] bg-cyan-300" />
                      <span className="text-xs sm:text-sm text-cyan-200 px-1.5 py-0.5 bg-slate-950/80 rounded font-black">+05°</span>
                      <span className="w-6 sm:w-8 h-[2.5px] bg-cyan-300" />
                    </div>
                    {/* 00 deg - Horizon Line (Super Visible) */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-16 sm:w-20 h-[4px] bg-white shadow-[0_0_16px_#ffffff]" />
                      <span className="text-white font-black text-base sm:text-lg px-2.5 py-1 bg-slate-950/90 rounded border-2 border-white/60 shadow-[0_0_14px_rgba(255,255,255,0.9)]">
                        00° HORIZON
                      </span>
                      <span className="w-16 sm:w-20 h-[4px] bg-white shadow-[0_0_16px_#ffffff]" />
                    </div>
                    {/* -05 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 sm:w-8 h-[2.5px] bg-cyan-300 border-t border-dashed" />
                      <span className="text-xs sm:text-sm text-cyan-200 px-1.5 py-0.5 bg-slate-950/80 rounded font-black">-05°</span>
                      <span className="w-6 sm:w-8 h-[2.5px] bg-cyan-300 border-t border-dashed" />
                    </div>
                    {/* -10 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-10 sm:w-12 h-[3px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                      <span className="px-1.5 py-0.5 bg-slate-950/80 rounded font-black">-10°</span>
                      <span className="w-10 sm:w-12 h-[3px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                    </div>
                    {/* -20 deg */}
                    <div className="flex items-center gap-2.5">
                      <span className="w-12 sm:w-14 h-[3px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                      <span className="px-1.5 py-0.5 bg-slate-950/80 rounded font-black">-20°</span>
                      <span className="w-12 sm:w-14 h-[3px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                    </div>
                  </div>
                </div>

                {/* Center Aircraft Flight Director Reticle */}
                <div className="absolute z-20 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center justify-between w-28 sm:w-32">
                    {/* Left Wing Bar */}
                    <div className="w-10 sm:w-12 h-3 bg-amber-400 border-2 border-slate-950 rounded shadow-[0_0_14px_#f59e0b]" />
                    {/* Center Fuselage Pip */}
                    <div className="w-4 h-4 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_14px_#f59e0b]" />
                    {/* Right Wing Bar */}
                    <div className="w-10 sm:w-12 h-3 bg-amber-400 border-2 border-slate-950 rounded shadow-[0_0_14px_#f59e0b]" />
                  </div>
                </div>

                {/* Night Hours Tape (Left Side Tape - Night Flight Operations) */}
                <div className="absolute left-2 top-2 bottom-2 w-16 sm:w-20 bg-slate-950/95 backdrop-blur-md border-2 border-cyan-400/60 rounded-lg flex flex-col justify-between items-center py-2 z-20 shadow-2xl font-mono">
                  <div className="w-full text-center pb-1 border-b border-cyan-500/40 bg-cyan-950/70">
                    <span className="text-xs sm:text-sm text-cyan-200 font-black tracking-wider block">
                      NIGHT
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-300">100</span>
                  
                  {/* Active Readout Box */}
                  <div className="w-[115%] bg-cyan-400 text-slate-950 font-black text-center py-1.5 rounded shadow-[0_0_16px_rgba(0,240,255,0.9)] border-2 border-white">
                    <span className="text-base sm:text-lg font-black tracking-tight block">
                      {PILOT_DATA.flightHours.night}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-300">50</span>
                  <div className="w-full text-center pt-1 border-t border-cyan-500/40">
                    <span className="text-[11px] sm:text-xs text-cyan-200 font-extrabold tracking-wider block">
                      HOURS
                    </span>
                  </div>
                </div>

                {/* Altitude / Cross-Country Tape (Right Side Tape - Much Larger & Readable) */}
                <div className="absolute right-2 top-2 bottom-2 w-16 sm:w-20 bg-slate-950/95 backdrop-blur-md border-2 border-cyan-400/60 rounded-lg flex flex-col justify-between items-center py-2 z-20 shadow-2xl font-mono">
                  <div className="w-full text-center pb-1 border-b border-cyan-500/40 bg-cyan-950/70">
                    <span className="text-xs sm:text-sm text-cyan-200 font-black tracking-wider block">
                      XC
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-300">300</span>
                  
                  {/* Active Readout Box */}
                  <div className="w-[115%] bg-cyan-400 text-slate-950 font-black text-center py-1.5 rounded shadow-[0_0_16px_rgba(0,240,255,0.9)] border-2 border-white">
                    <span className="text-base sm:text-lg font-black tracking-tight block">
                      {PILOT_DATA.flightHours.crossCountry}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-300">200</span>
                  <div className="w-full text-center pt-1 border-t border-cyan-500/40">
                    <span className="text-[11px] sm:text-xs text-cyan-200 font-extrabold tracking-wider block">
                      HOURS
                    </span>
                  </div>
                </div>

                {/* Bottom Heading & Pitch/Roll Readout Tape */}
                <div className="absolute bottom-1.5 left-20 right-20 bg-slate-950/95 border-2 border-cyan-500/50 rounded py-1 px-2.5 flex items-center justify-between text-xs sm:text-sm font-mono font-black text-cyan-100 z-20 shadow-md">
                  <span className="text-amber-300">HDG 090°</span>
                  <span>P: {hudTilt.pitch >= 0 ? "+" : ""}{hudTilt.pitch.toFixed(1)}°</span>
                  <span>R: {hudTilt.roll >= 0 ? "+" : ""}{hudTilt.roll.toFixed(1)}°</span>
                  <span className="text-emerald-300 hidden sm:inline">ASEL</span>
                </div>
              </div>

              {/* Quick Metrics Bar Underneath HUD */}
              <div className="grid grid-cols-3 gap-3 mt-3.5 text-center">
                <div className="p-3.5 rounded-xl bg-aerospace-900/95 border border-amber-500/40 shadow-md">
                  <div className="text-xs sm:text-sm font-mono font-black text-slate-100 uppercase tracking-wider">
                    Total Time
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono mt-1 drop-shadow-sm">
                    {PILOT_DATA.flightHours.totalTime}+
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-aerospace-900/95 border border-cyan-500/40 shadow-md">
                  <div className="text-xs sm:text-sm font-mono font-black text-slate-100 uppercase tracking-wider">
                    PIC Hours
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-200 font-mono mt-1 drop-shadow-sm">
                    {PILOT_DATA.flightHours.pic}+
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-aerospace-900/95 border border-emerald-500/40 shadow-md">
                  <div className="text-xs sm:text-sm font-mono font-black text-slate-100 uppercase tracking-wider">
                    Dual Given
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono mt-1 drop-shadow-sm">
                    {PILOT_DATA.flightHours.dualGiven}+
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
