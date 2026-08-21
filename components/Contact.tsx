"use client";

import React, { useState } from "react";
import { PILOT_DATA } from "@/data/pilot";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Globe,
  Send,
  CheckCircle2,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Corporate Flight Department / Part 135",
    airport: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`[Flight Inquiry] ${formData.inquiryType} - from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Arthur,\n\n` +
      `Inquiry Type: ${formData.inquiryType}\n` +
      `Target Airport / Location: ${formData.airport || 'N/A'}\n` +
      `Contact Name: ${formData.name}\n` +
      `Contact Email: ${formData.email}\n\n` +
      `Message Details:\n${formData.message}\n\n` +
      `Sent via arthurpaleypilot portfolio`
    );

    // Open user's default email client pre-filled
    window.location.href = `mailto:${PILOT_DATA.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-sm font-bold uppercase tracking-widest text-cyan-200 bg-cyan-500/20 px-3.5 py-1.5 rounded-full border border-cyan-400/40 mb-3 shadow-sm">
            Direct Communication
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm">
            Contact Arthur Paley
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
            Inquire regarding corporate flight positions, Part 135 on-demand charter operations, ferry flights, or advanced flight instruction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <a
              href={`mailto:${PILOT_DATA.email}`}
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-cyan-400/60 hover:-translate-y-0.5 border border-cyan-500/20 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-cyan-300 font-bold uppercase">Direct Email</div>
                <div className="text-lg sm:text-xl font-bold text-white">{PILOT_DATA.email}</div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${PILOT_DATA.phoneRaw}`}
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-amber-400/60 hover:-translate-y-0.5 border border-amber-500/20 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-amber-300 font-bold uppercase">Direct Phone</div>
                <div className="text-lg sm:text-xl font-bold text-white">{PILOT_DATA.phone}</div>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href={PILOT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-sky-400/60 hover:-translate-y-0.5 border border-sky-500/20 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-sky-300 font-bold uppercase">LinkedIn Profile</div>
                <div className="text-lg sm:text-xl font-bold text-white">arthurpaleypilot</div>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={PILOT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-white/40 hover:-translate-y-0.5 border border-white/10 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 text-slate-100 flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-slate-300 font-bold uppercase">GitHub Project</div>
                <div className="text-lg sm:text-xl font-bold text-white">phillyairtours/Pilot-Website</div>
              </div>
            </a>

            {/* Flight School Website */}
            <a
              href={PILOT_DATA.website}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-emerald-400/60 hover:-translate-y-0.5 border border-emerald-500/20 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-emerald-300 font-bold uppercase">Flight Academy</div>
                <div className="text-lg sm:text-xl font-bold text-white">www.pafosfly.com</div>
              </div>
            </a>

            {/* Philadelphia Air Tours Website */}
            <a
              href="https://www.phillyairtours.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 rounded-2xl glass-panel flex items-center gap-4 transition-all duration-200 hover:border-purple-400/60 hover:-translate-y-0.5 border border-purple-500/20 bg-aerospace-900/90 shadow-md"
            >
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 border border-purple-400/40 text-purple-300 flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs sm:text-sm font-mono text-purple-300 font-bold uppercase">Philadelphia Air Tours</div>
                <div className="text-lg sm:text-xl font-bold text-white">www.phillyairtours.com</div>
              </div>
            </a>

            {/* Base Location Info */}
            <div className="p-4 sm:p-5 rounded-xl bg-aerospace-900/90 border border-cyan-500/30 text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-cyan-300 flex-shrink-0" />
              <span>Base Airport: KPNE (Northeast Philadelphia)</span>
            </div>
          </div>

          {/* Right Column: Flight Mission Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/20 shadow-xl bg-aerospace-900/90">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-amber-300" />
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Dispatch Flight Inquiry</h3>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold text-white">Inquiry Prepared</h4>
                  <p className="text-base text-slate-200">
                    Your default email application was prompted with your pre-formatted message addressed to Arthur Paley.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-sm font-mono font-bold text-cyan-200 underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-slate-100 mb-2 uppercase font-bold">
                        Your Name / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Flight Dept / Capt. Smith"
                        className="w-full px-4 py-3 rounded-xl bg-aerospace-950 border border-white/20 text-white placeholder-slate-400 text-base focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-slate-100 mb-2 uppercase font-bold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-aerospace-950 border border-white/20 text-white placeholder-slate-400 text-base focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-slate-100 mb-2 uppercase font-bold">
                        Inquiry Category
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-aerospace-950 border border-white/20 text-white text-base focus:outline-none focus:border-cyan-300 transition-all font-medium"
                      >
                        <option value="Corporate Flight Department / Part 135">Corporate Flight Dept / Part 135</option>
                        <option value="Contract Pilot / Ferry Flight">Contract Pilot / Ferry Flight</option>
                        <option value="Advanced Flight Training">Advanced Flight Training (PAFOS FLY)</option>
                        <option value="General Aviation Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-mono text-slate-100 mb-2 uppercase font-bold">
                        Target Airport / Base
                      </label>
                      <input
                        type="text"
                        value={formData.airport}
                        onChange={(e) => setFormData({ ...formData, airport: e.target.value })}
                        placeholder="e.g. KPNE, KTEB"
                        className="w-full px-4 py-3 rounded-xl bg-aerospace-950 border border-white/20 text-white placeholder-slate-400 text-base focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono text-slate-100 mb-2 uppercase font-bold">
                      Flight Mission Details / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the aircraft role, mission schedule, training goal, or position details..."
                      className="w-full px-4 py-3 rounded-xl bg-aerospace-950 border border-white/20 text-white placeholder-slate-400 text-base focus:outline-none focus:border-cyan-300 focus:ring-1 focus:ring-cyan-300 transition-all resize-none font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5"
                  >
                    <Send className="w-5 h-5" />
                    Transmit Flight Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
