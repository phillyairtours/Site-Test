"use client";

import React from "react";

export const IfrChartOverlay: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none opacity-[0.27] transition-opacity duration-500">
      <svg
        className="w-full h-full object-cover"
        viewBox="-96 -54 2112 1188"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Compass Rose Radial Gradient */}
          <radialGradient id="vorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </radialGradient>

          {/* Grid pattern */}
          <pattern id="ifrGrid" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M 160 0 L 0 0 0 160" fill="none" stroke="#0284c7" strokeWidth="0.6" strokeOpacity="0.22" />
            <circle cx="80" cy="80" r="1.5" fill="#38bdf8" fillOpacity="0.4" />
          </pattern>
        </defs>

        {/* Coordinate Background Grid */}
        <rect width="100%" height="100%" fill="url(#ifrGrid)" />

        {/* ========================================================= */}
        {/* VOR 1: YARDLEY (ARD) VOR/DME 108.2 Ch 19 - North of KPNE */}
        {/* ========================================================= */}
        <g transform="translate(1320, 260)">
          {/* VOR Compass Rose Outer Circle */}
          <circle cx="0" cy="0" r="160" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" strokeDasharray="4 4" />
          <circle cx="0" cy="0" r="180" stroke="#0284c7" strokeWidth="0.8" strokeOpacity="0.35" />
          
          {/* VOR Center Hexagon with Glow */}
          <circle cx="0" cy="0" r="28" fill="url(#vorGlow)" />
          <polygon points="0,-16 14,-8 14,8 0,16 -14,8 -14,-8" stroke="#00f0ff" strokeWidth="2" fill="#0369a1" fillOpacity="0.3" />
          <circle cx="0" cy="0" r="3" fill="#ffffff" />
          
          {/* VOR 30-Degree Ticks & Degree Labels */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            const x1 = Math.cos(rad) * 160;
            const y1 = Math.sin(rad) * 160;
            const x2 = Math.cos(rad) * 175;
            const y2 = Math.sin(rad) * 175;
            const tx = Math.cos(rad) * 195;
            const ty = Math.sin(rad) * 195;
            return (
              <g key={deg}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.6" />
                <text
                  x={tx}
                  y={ty + 4}
                  fill="#7dd3fc"
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                  textAnchor="middle"
                  opacity="0.75"
                >
                  {deg.toString().padStart(3, "0")}°
                </text>
              </g>
            );
          })}

          {/* VOR Identification Box */}
          <g transform="translate(45, -55)">
            <rect x="0" y="0" width="130" height="42" rx="3" fill="#0b1329" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="8" y="16" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">YARDLEY</text>
            <text x="75" y="16" fill="#00f0ff" fontSize="12" fontFamily="monospace" fontWeight="bold">ARD</text>
            <text x="8" y="32" fill="#93c5fd" fontSize="10" fontFamily="monospace">108.2  Ch 19</text>
          </g>
        </g>

        {/* ========================================================= */}
        {/* VOR 2: MODENA (MXE) VOR 113.2 - West/Southwest Area       */}
        {/* ========================================================= */}
        <g transform="translate(280, 720)">
          <circle cx="0" cy="0" r="140" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="6 3" />
          <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" stroke="#00f0ff" strokeWidth="1.8" fill="#0369a1" fillOpacity="0.25" />
          <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
          
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
            const rad = ((deg - 90) * Math.PI) / 180;
            return (
              <line
                key={deg}
                x1={Math.cos(rad) * 140}
                y1={Math.sin(rad) * 140}
                x2={Math.cos(rad) * 152}
                y2={Math.sin(rad) * 152}
                stroke="#38bdf8"
                strokeWidth="1.2"
                strokeOpacity="0.5"
              />
            );
          })}

          <g transform="translate(-140, 25)">
            <rect x="0" y="0" width="120" height="38" rx="3" fill="#0b1329" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="1" />
            <text x="8" y="15" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">MODENA</text>
            <text x="68" y="15" fill="#00f0ff" fontSize="11" fontFamily="monospace" fontWeight="bold">MXE</text>
            <text x="8" y="30" fill="#93c5fd" fontSize="9.5" fontFamily="monospace">113.2  Ch 79</text>
          </g>
        </g>

        {/* ========================================================= */}
        {/* AIRWAYS (Victor Routes & GPS T-Routes with MEAs)           */}
        {/* ========================================================= */}

        {/* Airway V1: Northeast to Southwest route across Philadelphia */}
        <g>
          <line x1="180" y1="960" x2="1750" y2="120" stroke="#0284c7" strokeWidth="2.2" strokeOpacity="0.55" />
          {/* Airway Identifier Badge V1 */}
          <g transform="translate(980, 480)">
            <rect x="-24" y="-12" width="48" height="24" rx="3" fill="#082f49" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="0" y="5" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">V1</text>
          </g>
          {/* MEA Badge */}
          <g transform="translate(1120, 390)">
            <rect x="-22" y="-10" width="44" height="20" rx="2" fill="#0b1329" stroke="#0284c7" strokeWidth="0.8" />
            <text x="0" y="4" fill="#7dd3fc" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">2500</text>
          </g>
        </g>

        {/* Airway V276: West to East across KPNE */}
        <g>
          <line x1="80" y1="440" x2="1840" y2="460" stroke="#0284c7" strokeWidth="2" strokeOpacity="0.5" />
          <g transform="translate(680, 430)">
            <rect x="-30" y="-12" width="60" height="24" rx="3" fill="#082f49" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="0" y="5" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">V276</text>
          </g>
          <g transform="translate(540, 430)">
            <rect x="-22" y="-10" width="44" height="20" rx="2" fill="#0b1329" stroke="#0284c7" strokeWidth="0.8" />
            <text x="0" y="4" fill="#7dd3fc" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">3000</text>
          </g>
        </g>

        {/* Airway V157: North-South Coastal Route */}
        <g>
          <line x1="1100" y1="40" x2="940" y2="1040" stroke="#0284c7" strokeWidth="2" strokeOpacity="0.5" />
          <g transform="translate(1030, 320)">
            <rect x="-30" y="-12" width="60" height="24" rx="3" fill="#082f49" stroke="#38bdf8" strokeWidth="1.2" />
            <text x="0" y="5" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold" textAnchor="middle">V157</text>
          </g>
        </g>

        {/* GPS RNAV Route T295 */}
        <g>
          <line x1="300" y1="180" x2="1600" y2="920" stroke="#06b6d4" strokeWidth="1.5" strokeDasharray="8 4" strokeOpacity="0.45" />
          <g transform="translate(820, 500)">
            <polygon points="-28,-10 28,-10 34,0 28,10 -28,10 -34,0" fill="#083344" stroke="#22d3ee" strokeWidth="1" />
            <text x="0" y="4" fill="#a5f3fc" fontSize="10.5" fontFamily="monospace" fontWeight="bold" textAnchor="middle">T295</text>
          </g>
        </g>

        {/* ========================================================= */}
        {/* IFR REPORTING FIXES / COMPULSORY WAYPOINTS (Triangles)     */}
        {/* ========================================================= */}

        {/* FIX 1: MAZIE */}
        <g transform="translate(860, 440)">
          <polygon points="0,-12 11,8 -11,8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="16" y="4" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">MAZIE</text>
          <text x="16" y="16" fill="#7dd3fc" fontSize="9" fontFamily="monospace">N40°04.2 W75°01.8</text>
        </g>

        {/* FIX 2: BUNTS */}
        <g transform="translate(1180, 620)">
          <polygon points="0,-12 11,8 -11,8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="16" y="4" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">BUNTS</text>
          <text x="16" y="16" fill="#7dd3fc" fontSize="9" fontFamily="monospace">MEA 2000</text>
        </g>

        {/* FIX 3: PENNS */}
        <g transform="translate(1420, 450)">
          <polygon points="0,-12 11,8 -11,8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="16" y="4" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">PENNS</text>
        </g>

        {/* FIX 4: ZUNIK (Fly-over RNAV Waypoint - 4-point star) */}
        <g transform="translate(560, 280)">
          <polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#22d3ee" stroke="#67e8f9" strokeWidth="1" />
          <circle cx="0" cy="0" r="14" stroke="#22d3ee" strokeWidth="0.8" fill="none" />
          <text x="18" y="4" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">ZUNIK</text>
        </g>

        {/* FIX 5: HIKES */}
        <g transform="translate(420, 560)">
          <polygon points="0,-12 11,8 -11,8" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="16" y="4" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">HIKES</text>
        </g>

        {/* ========================================================= */}
        {/* AIRPORTS / RUNWAY CONFIGURATIONS                           */}
        {/* ========================================================= */}

        {/* KPNE - Northeast Philadelphia Airport (Home Base) */}
        <g transform="translate(940, 480)">
          {/* Airport Boundary Circle & Cross Runways */}
          <circle cx="0" cy="0" r="32" stroke="#00f0ff" strokeWidth="2" strokeDasharray="5 3" fill="#0369a1" fillOpacity="0.25" />
          {/* Runway 06/24 and 15/33 */}
          <line x1="-22" y1="12" x2="22" y2="-12" stroke="#ffffff" strokeWidth="3.5" />
          <line x1="-12" y1="-20" x2="12" y2="20" stroke="#ffffff" strokeWidth="3.5" />
          
          <g transform="translate(36, -20)">
            <rect x="0" y="0" width="155" height="48" rx="4" fill="#041d3b" fillOpacity="0.9" stroke="#00f0ff" strokeWidth="1.5" />
            <text x="8" y="16" fill="#00f0ff" fontSize="12" fontFamily="monospace" fontWeight="extrabold">KPNE // NORTHEAST PHL</text>
            <text x="8" y="30" fill="#ffffff" fontSize="10" fontFamily="monospace">120.9 • ATIS 127.25</text>
            <text x="8" y="43" fill="#38bdf8" fontSize="9.5" fontFamily="monospace">Elev 120' • Rwy 7000'</text>
          </g>
        </g>

        {/* KPHL - Philadelphia International Airport */}
        <g transform="translate(720, 680)">
          <circle cx="0" cy="0" r="28" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" fill="#0284c7" fillOpacity="0.15" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#ffffff" strokeWidth="3" />
          <line x1="-20" y1="-8" x2="20" y2="-8" stroke="#ffffff" strokeWidth="3" />
          <line x1="-10" y1="-18" x2="10" y2="18" stroke="#ffffff" strokeWidth="3" />
          
          <g transform="translate(34, -12)">
            <text x="0" y="10" fill="#ffffff" fontSize="11" fontFamily="monospace" fontWeight="bold">KPHL (CLASS B)</text>
            <text x="0" y="23" fill="#93c5fd" fontSize="9" fontFamily="monospace">118.5 • Elev 36'</text>
          </g>
        </g>

        {/* KTTN - Trenton Mercer Airport */}
        <g transform="translate(1420, 200)">
          <circle cx="0" cy="0" r="22" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="4 2" />
          <line x1="-14" y1="-14" x2="14" y2="14" stroke="#ffffff" strokeWidth="2.5" />
          <line x1="-14" y1="14" x2="14" y2="-14" stroke="#ffffff" strokeWidth="2.5" />
          <text x="28" y="4" fill="#ffffff" fontSize="10.5" fontFamily="monospace" fontWeight="bold">KTTN 213 L 60</text>
        </g>

        {/* ========================================================= */}
        {/* CLASS BRAVO AIRSPACE SECTORS & ALTITUDE SHELVES (Arcs)     */}
        {/* ========================================================= */}
        <g transform="translate(720, 680)">
          {/* Inner Core Surface to 7000 */}
          <circle cx="0" cy="0" r="110" stroke="#0284c7" strokeWidth="1.8" strokeOpacity="0.6" strokeDasharray="12 4" />
          <text x="75" y="-80" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">70 / SFC</text>

          {/* Intermediate Shelf 2000 to 7000 */}
          <circle cx="0" cy="0" r="220" stroke="#0284c7" strokeWidth="1.5" strokeOpacity="0.45" strokeDasharray="8 4" />
          <text x="160" y="-150" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">70 / 20</text>

          {/* Outer Shelf 3000 to 7000 */}
          <circle cx="0" cy="0" r="340" stroke="#0284c7" strokeWidth="1.2" strokeOpacity="0.35" strokeDasharray="6 4" />
          <text x="240" y="-230" fill="#38bdf8" fontSize="11" fontFamily="monospace" fontWeight="bold">70 / 30</text>
        </g>

        {/* ========================================================= */}
        {/* AIR TRAFFIC CONTROL FREQUENCY & SECTOR BOXES               */}
        {/* ========================================================= */}
        <g transform="translate(240, 160)">
          <rect x="0" y="0" width="165" height="42" rx="3" fill="#04162e" fillOpacity="0.8" stroke="#0284c7" strokeWidth="1" />
          <text x="10" y="16" fill="#f59e0b" fontSize="10.5" fontFamily="monospace" fontWeight="bold">PHILADELPHIA APP CON</text>
          <text x="10" y="32" fill="#e2e8f0" fontSize="10" fontFamily="monospace">124.35 • 128.4</text>
        </g>

        <g transform="translate(1540, 800)">
          <rect x="0" y="0" width="150" height="42" rx="3" fill="#04162e" fillOpacity="0.8" stroke="#0284c7" strokeWidth="1" />
          <text x="10" y="16" fill="#f59e0b" fontSize="10.5" fontFamily="monospace" fontWeight="bold">NEW YORK CENTER</text>
          <text x="10" y="32" fill="#e2e8f0" fontSize="10" fontFamily="monospace">128.3 • 307.2</text>
        </g>

        {/* ========================================================= */}
        {/* IFR HOLDING PATTERN (Racetrack Oval)                       */}
        {/* ========================================================= */}
        <g transform="translate(1360, 480)">
          <path
            d="M 0 0 C 40 0 60 30 60 60 C 60 90 40 120 0 120 L -60 120 C -100 120 -120 90 -120 60 C -120 30 -100 0 -60 0 Z"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1.5"
            strokeDasharray="5 3"
            strokeOpacity="0.6"
          />
          {/* Direction Arrow */}
          <polygon points="10,-4 18,0 10,4" fill="#f59e0b" />
          <text x="-50" y="65" fill="#fcd34d" fontSize="9.5" fontFamily="monospace" fontWeight="bold">1 MIN HOLD • 3000'</text>
        </g>

        {/* Navigational Mileage / Distance Ticks */}
        <g transform="translate(900, 1000)">
          <line x1="0" y1="0" x2="200" y2="0" stroke="#38bdf8" strokeWidth="2" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="#38bdf8" strokeWidth="2" />
          <line x1="100" y1="-4" x2="100" y2="4" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="200" y1="-6" x2="200" y2="6" stroke="#38bdf8" strokeWidth="2" />
          <text x="100" y="-10" fill="#7dd3fc" fontSize="9" fontFamily="monospace" textAnchor="middle">20 NM SCALE</text>
        </g>

      </svg>
    </div>
  );
};
