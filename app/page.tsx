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

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-aerospace-950 text-slate-100 relative selection:bg-cyan-500/30 selection:text-cyan-hud animate-gradient">
      {/* Background Plane */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden flex items-center justify-center opacity-15">
        <Plane className="w-64 h-64 text-slate-600 animate-plane-subtle" />
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
