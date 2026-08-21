"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ResumeModal } from "@/components/ResumeModal";

import { Plane } from "lucide-react";
import { IfrChartOverlay } from "@/components/IfrChartOverlay";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a152e] via-[#050b18] to-[#02040a] text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-hud animate-gradient">
      {/* Radial Center Light Gradient Atmosphere */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-80"
        style={{
          background: "radial-gradient(ellipse 75% 60% at 50% 30%, rgba(26, 54, 93, 0.45) 0%, rgba(10, 22, 45, 0.25) 45%, transparent 75%)"
        }}
      />

      {/* Transparent Low Altitude IFR Chart Background Layer */}
      <IfrChartOverlay />

      {/* Background Plane - 30% Brighter & Vivid Aerospace Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden flex items-center justify-center opacity-85">
        <div className="relative flex items-center justify-center">
          {/* Glowing radar range rings */}
          <div className="absolute w-[520px] h-[520px] sm:w-[740px] sm:h-[740px] rounded-full border border-cyan-400/40 animate-pulse" />
          <div className="absolute w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] rounded-full border border-cyan-300/35" />
          <Plane className="w-80 h-80 sm:w-[500px] sm:h-[500px] text-cyan-200 drop-shadow-[0_0_65px_rgba(0,240,255,0.9)] animate-plane-subtle transform -rotate-45" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* 1. Intro Hero Section */}
      <Hero onOpenResume={() => setResumeOpen(true)} />

      {/* 2. Aviation Philosophy / About Me Section (Temporarily hidden - preserved for future use) */}
      {/* <About /> */}

      {/* 3. Work Experience Section */}
      <Experience />

      {/* 4. Skills & Flight Hours Section */}
      <Skills />

      {/* 5. Projects / Featured Aviation Work Section */}
      <Projects />

      {/* 6. Direct Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Printable Pilot Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </div>
    </main>
  );
}
