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
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Commercial Pilot ASEL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-cyan-500/10 text-cyan-hud border border-cyan-500/30">
                <Compass className="w-3.5 h-3.5" />
                Instrument Rated
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-sky-500/10 text-sky-300 border border-sky-500/30">
                <Award className="w-3.5 h-3.5" />
                CFIS / AGI / IGI
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                <Plane className="w-3.5 h-3.5" />
                Ferry Pilot
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" />
                {PILOT_DATA.flightHours.totalTime}+ Total Hours
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex items-center gap-6 sm:gap-8">
              <img
                src="/profile-photo.jpg"
                alt="Arthur Paley"
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-cyan-500/30 shadow-xl shadow-cyan-900/40 flex-shrink-0"
              />
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  {PILOT_DATA.name}
                </h1>
                <p className="mt-3 text-lg sm:text-xl font-medium text-slate-300">
                  Chief Flight Instructor • Flight Operations Leader • Corporate Aviator
                </p>
              </div>
            </div>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              {PILOT_DATA.summary}
            </p>

            {/* Base Airports & Location Strip */}
            <div className="p-4 rounded-xl glass-panel flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-hud" />
                <span>{PILOT_DATA.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>KPNE</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Incident-Free Safety</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#skills"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all hover:-translate-y-0.5"
              >
                <Activity className="w-4 h-4" />
                Explore Flight Hours
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/40 text-amber-300 font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                View & Print CV
              </button>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5"
              >
                Direct Inquiry
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Glass Cockpit HUD Card */}
          <div className="lg:col-span-5">
            <div
              onMouseMove={handleHudMouseMove}
              onMouseLeave={handleHudMouseLeave}
              className="relative p-5 sm:p-6 rounded-2xl glass-panel border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/60 transition-all duration-200 cursor-crosshair group"
            >
              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-hud animate-ping" />
                  <span className="font-mono text-xs sm:text-sm font-black text-cyan-hud tracking-wider uppercase">
                    PRIMARY FLIGHT DISPLAY // PFD
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    AP ENG
                  </span>
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Artificial Horizon Frame - Extra Large Glass Display */}
              <div className="relative w-full h-72 sm:h-80 bg-slate-950 rounded-xl border-2 border-cyan-400/50 overflow-hidden flex items-center justify-center shadow-inner">
                
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
                    className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[10px] border-t-amber-400 transition-transform duration-75 ease-out drop-shadow-[0_0_6px_rgba(245,158,11,0.9)]"
                    style={{
                      transform: `rotate(${hudTilt.roll}deg)`,
                      transformOrigin: "center 70px",
                    }}
                  />
                  {/* Roll Arc Scale Indicators */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] font-mono font-extrabold text-cyan-200/90 pt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                    <span>-45°</span>
                    <span>-30°</span>
                    <span>-10°</span>
                    <span className="text-white font-black text-xs">▲ 0°</span>
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
                  <div className="flex flex-col items-center gap-3 sm:gap-4 font-mono font-black text-xs sm:text-sm text-cyan-100 drop-shadow-[0_0_8px_rgba(0,240,255,0.9)]">
                    {/* +20 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-10 sm:w-12 h-[2.5px] bg-cyan-200 border-b-2 border-cyan-400" />
                      <span className="px-1 bg-slate-950/60 rounded">+20°</span>
                      <span className="w-10 sm:w-12 h-[2.5px] bg-cyan-200 border-b-2 border-cyan-400" />
                    </div>
                    {/* +10 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-8 sm:w-10 h-[2.5px] bg-cyan-200 border-b-2 border-cyan-400" />
                      <span className="px-1 bg-slate-950/60 rounded">+10°</span>
                      <span className="w-8 sm:w-10 h-[2.5px] bg-cyan-200 border-b-2 border-cyan-400" />
                    </div>
                    {/* +05 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-5 sm:w-6 h-[2px] bg-cyan-300/80" />
                      <span className="text-[10px] text-cyan-300 px-1 bg-slate-950/60 rounded">+05°</span>
                      <span className="w-5 sm:w-6 h-[2px] bg-cyan-300/80" />
                    </div>
                    {/* 00 deg - Horizon Line (Super Visible) */}
                    <div className="flex items-center gap-2">
                      <span className="w-16 sm:w-20 h-[3.5px] bg-white shadow-[0_0_12px_#ffffff]" />
                      <span className="text-white font-black text-sm sm:text-base px-2 py-0.5 bg-slate-950/80 rounded border border-white/40 shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                        00° HORIZON
                      </span>
                      <span className="w-16 sm:w-20 h-[3.5px] bg-white shadow-[0_0_12px_#ffffff]" />
                    </div>
                    {/* -05 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-5 sm:w-6 h-[2px] bg-cyan-300/80 border-t border-dashed" />
                      <span className="text-[10px] text-cyan-300 px-1 bg-slate-950/60 rounded">-05°</span>
                      <span className="w-5 sm:w-6 h-[2px] bg-cyan-300/80 border-t border-dashed" />
                    </div>
                    {/* -10 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-8 sm:w-10 h-[2.5px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                      <span className="px-1 bg-slate-950/60 rounded">-10°</span>
                      <span className="w-8 sm:w-10 h-[2.5px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                    </div>
                    {/* -20 deg */}
                    <div className="flex items-center gap-2">
                      <span className="w-10 sm:w-12 h-[2.5px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                      <span className="px-1 bg-slate-950/60 rounded">-20°</span>
                      <span className="w-10 sm:w-12 h-[2.5px] bg-cyan-200 border-t-2 border-cyan-400 border-dashed" />
                    </div>
                  </div>
                </div>

                {/* Center Aircraft Flight Director Reticle */}
                <div className="absolute z-20 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center justify-between w-28 sm:w-32">
                    {/* Left Wing Bar */}
                    <div className="w-10 sm:w-12 h-2.5 bg-amber-400 border-2 border-slate-950 rounded-sm shadow-[0_0_12px_#f59e0b]" />
                    {/* Center Fuselage Pip */}
                    <div className="w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white shadow-[0_0_12px_#f59e0b]" />
                    {/* Right Wing Bar */}
                    <div className="w-10 sm:w-12 h-2.5 bg-amber-400 border-2 border-slate-950 rounded-sm shadow-[0_0_12px_#f59e0b]" />
                  </div>
                </div>

                {/* Airspeed / PIC Tape (Left Side Tape - Much Larger & Readable) */}
                <div className="absolute left-2 top-2 bottom-2 w-16 sm:w-20 bg-slate-950/95 backdrop-blur-md border-2 border-cyan-400/50 rounded-lg flex flex-col justify-between items-center py-1.5 z-20 shadow-xl font-mono">
                  <div className="w-full text-center pb-1 border-b border-cyan-500/30 bg-cyan-950/60">
                    <span className="text-[11px] sm:text-xs text-cyan-hud font-black tracking-wider block">
                      PIC
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">700</span>
                  
                  {/* Active Readout Box */}
                  <div className="w-[115%] bg-cyan-500 text-slate-950 font-black text-center py-1 rounded shadow-[0_0_14px_rgba(0,240,255,0.8)] border border-white">
                    <span className="text-sm sm:text-base font-extrabold tracking-tight block">
                      {PILOT_DATA.flightHours.pic}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-400">600</span>
                  <div className="w-full text-center pt-1 border-t border-cyan-500/30">
                    <span className="text-[10px] text-cyan-300 font-extrabold tracking-wider block">
                      HOURS
                    </span>
                  </div>
                </div>

                {/* Altitude / Cross-Country Tape (Right Side Tape - Much Larger & Readable) */}
                <div className="absolute right-2 top-2 bottom-2 w-16 sm:w-20 bg-slate-950/95 backdrop-blur-md border-2 border-cyan-400/50 rounded-lg flex flex-col justify-between items-center py-1.5 z-20 shadow-xl font-mono">
                  <div className="w-full text-center pb-1 border-b border-cyan-500/30 bg-cyan-950/60">
                    <span className="text-[11px] sm:text-xs text-cyan-hud font-black tracking-wider block">
                      XC
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">300</span>
                  
                  {/* Active Readout Box */}
                  <div className="w-[115%] bg-cyan-500 text-slate-950 font-black text-center py-1 rounded shadow-[0_0_14px_rgba(0,240,255,0.8)] border border-white">
                    <span className="text-sm sm:text-base font-extrabold tracking-tight block">
                      {PILOT_DATA.flightHours.crossCountry}
                    </span>
                  </div>

                  <span className="text-xs sm:text-sm font-bold text-slate-400">200</span>
                  <div className="w-full text-center pt-1 border-t border-cyan-500/30">
                    <span className="text-[10px] text-cyan-300 font-extrabold tracking-wider block">
                      HOURS
                    </span>
                  </div>
                </div>

                {/* Bottom Heading & Pitch/Roll Readout Tape */}
                <div className="absolute bottom-1.5 left-20 right-20 bg-slate-950/90 border border-cyan-500/40 rounded py-1 px-2 flex items-center justify-between text-[11px] font-mono font-black text-cyan-200 z-20">
                  <span className="text-amber-300">HDG 090°</span>
                  <span>P: {hudTilt.pitch >= 0 ? "+" : ""}{hudTilt.pitch.toFixed(1)}°</span>
                  <span>R: {hudTilt.roll >= 0 ? "+" : ""}{hudTilt.roll.toFixed(1)}°</span>
                  <span className="text-emerald-400 hidden sm:inline">ASEL</span>
                </div>
              </div>

              {/* Quick Metrics Bar Underneath HUD */}
              <div className="grid grid-cols-3 gap-2.5 mt-3 text-center">
                <div className="p-3 rounded-xl bg-aerospace-900/90 border border-amber-500/30">
                  <div className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Total Time
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono mt-0.5">
                    {PILOT_DATA.flightHours.totalTime}+
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-aerospace-900/90 border border-cyan-500/30">
                  <div className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider">
                    PIC Hours
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-cyan-hud font-mono mt-0.5">
                    {PILOT_DATA.flightHours.pic}+
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-aerospace-900/90 border border-emerald-500/30">
                  <div className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider">
                    Dual Given
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono mt-0.5">
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
