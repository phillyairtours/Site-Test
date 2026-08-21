export interface FlightHours {
  totalTime: number;
  pic: number;
  crossCountry: number;
  dualGiven: number;
  instrument: number;
  night: number;
  tailwheel: number;
  highPerformance: number;
  complex: number;
  complexHighPerf?: number;
  safetyRecord: string;
  medical: string;
}

export interface Certificate {
  title: string;
  category: string;
  authority: string;
  description: string;
  badge: string;
  highlight?: boolean;
}

export interface Endorsement {
  name: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  achievements: string[];
  link?: string;
  linkText?: string;
}

export interface PilotProfile {
  name: string;
  headline: string;
  summary: string;
  location: string;
  homeAirports: string[];
  email: string;
  phone: string;
  phoneRaw: string;
  website: string;
  linkedin: string;
  github: string;
  availability: string;
  flightHours: FlightHours;
  certificates: Certificate[];
  endorsements: Endorsement[];
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  skills: string[];
  languages: { name: string; level: string }[];
  fleet: { model: string; role: string }[];
}

export const PILOT_DATA: PilotProfile = {
  name: "Arthur Paley",
  headline: "Owner & Chief Instructor at PAFOS FLY | Commercial Pilot ASEL • Instrument Rated",
  summary:
    "Safety-driven commercial aviator and flight instructor with 747+ total flight hours. Proven background in flight operations management, standardized flight instruction, and disciplined aeronautical decision-making. Actively seeking long-term, stable opportunities in corporate flight departments, Part 135 charter operations, or specialized flight operations.",
  location: "Philadelphia, Pennsylvania, United States",
  homeAirports: ["KPNE (Northeast Philadelphia)"],
  email: "arthur@pafosfly.com",
  phone: "(917) 385-9680",
  phoneRaw: "9173859680",
  website: "https://www.pafosfly.com",
  linkedin: "https://www.linkedin.com/in/arthurpaleypilot",
  github: "https://github.com/phillyairtours/Pilot-Website",
  availability: "Available for Corporate, Part 135 Charter, Contract Operations & Advanced Flight Training",

  flightHours: {
    totalTime: 747.4,
    pic: 647.4,
    crossCountry: 253.4,
    dualGiven: 286.1,
    instrument: 71.9,
    night: 77.7,
    tailwheel: 17.7,
    highPerformance: 44.0,
    complex: 18.4,
    complexHighPerf: 44.0,
    safetyRecord: "100% Incident-Free Safety Record",
    medical: "Second Class Medical (Valid through Sept 2026)",
  },

  certificates: [
    {
      title: "Commercial Pilot",
      category: "Airplane Single Engine Land (ASEL)",
      authority: "Federal Aviation Administration (FAA)",
      description: "FAA certified for commercial operations.",
      badge: "Commercial ASEL",
      highlight: true,
    },
    {
      title: "Instrument Rating - Airplane",
      category: "IFR Precision Operations",
      authority: "FAA",
      description:
        "Proficient in IMC weather, instrument approaches (ILS, RNAV / GPS, LPV, VOR), and complex airspace navigation.",
      badge: "Instrument Rated",
      highlight: true,
    },
    {
      title: "Flight Instructor (CFI / CFIS)",
      category: "Airplane Single Engine Land (ASEL)",
      authority: "FAA",
      description:
        "FAA-certified flight instructor providing primary, transition, and advanced flight instruction, stall/spin awareness, and pilot safety mentoring.",
      badge: "FAA Flight Instructor",
      highlight: true,
    },
    {
      title: "Advanced Ground Instructor (AGI)",
      category: "Aeronautical Education",
      authority: "FAA",
      description:
        "Authorized to deliver comprehensive ground training curricula for Private, Commercial, and specialized aeronautical ratings.",
      badge: "FAA AGI",
    },
    {
      title: "Instrument Ground Instructor (IGI)",
      category: "Instrument Theory",
      authority: "FAA",
      description:
        "Specialized instruction in instrument charts, weather theory, IFR clearance procedures, and advanced avionics systems.",
      badge: "FAA IGI",
    },
    {
      title: "Restricted Radiotelephone Operator Permit",
      category: "International Communications",
      authority: "Federal Communications Commission (FCC)",
      description:
        "Authorized to operate and maintain aircraft radio stations for international and commercial flight operations.",
      badge: "FCC Permit",
    },
  ],

  endorsements: [
    {
      name: "Tailwheel Aircraft Endorsement",
      description: "Mastery of conventional gear, rudder authority, three-point and wheel landings, and demanding crosswind handling.",
    },
    {
      name: "High-Performance Aircraft Endorsement",
      description: "Trained and authorized for aircraft equipped with engines generating greater than 200 horsepower.",
    },
    {
      name: "Complex Aircraft Endorsement",
      description: "Proficient in retractable landing gear, flaps, and controllable-pitch constant-speed propeller management.",
    },
  ],

  experiences: [
    {
      role: "Founder",
      company: "Philadelphia Air Tours",
      period: "Present",
      location: "Philadelphia, PA",
      type: "Aviation Tours & Operations",
      highlights: [
        "Provider of FAA-approved airplane sightseeing tours.",
        "Ensure safe and proficient flight operations within the highly complex Philadelphia Class Bravo airspace.",
        "Deliver premium aerial experiences while adhering to strict safety and regulatory standards.",
      ],
    },
    {
      role: "Operations Manager & Chief Instructor",
      company: "DORANS AVIATION",
      period: "August 2024 – Present",
      location: "Greater Philadelphia Area",
      type: "Operations & Flight Leadership",
      highlights: [
        "Manage daily flight schedules, fleet operations, aircraft airworthiness tracking, and strict regulatory compliance.",
        "Lead standardized flight instructor training, safety evaluations, and ongoing pilot mentorship programs.",
        "Serve as head instructor and operations trainer, standardizing operational procedures and emergency readiness.",
      ],
    },
    {
      role: "Founder & Chief Flight Instructor",
      company: "PAFOS FLY Flight School",
      period: "2019 – Present",
      location: "Philadelphia, PA",
      type: "Aviation Academy Leadership",
      highlights: [
        "Founded and direct operations for a full-service flight training academy dedicated to safety, precision, and student mastery.",
        "Provide foundational, instrument, and advanced transition instruction tailored to each student's career or personal aviation goals.",
        "Maintain an impeccable safety record through strict standard operating procedures (SOPs) and risk mitigation culture.",
      ],
    },
  ],

  projects: [
    {
      title: "Technically Advanced Aircraft (TAA) Training & Operations",
      subtitle: "453+ Logged TAA Hours • Modern Glass Cockpit & Autopilot Mastery",
      category: "Modern Avionics & Safety",
      description:
        "An FAA-designated Technically Advanced Aircraft (TAA) features an integrated Primary Flight Display (PFD), Multi-Function Display (MFD), and a 2-axis coupled autopilot. TAA proficiency is crucial in modern aviation as it bridges manual stick-and-rudder piloting with high-efficiency automation management—dramatically reducing pilot workload during Single-Pilot IFR flights, maximizing situational awareness, and directly preparing aviators for modern corporate, Part 135, and airline flight decks.",
      achievements: [
        "Logged 453.1+ hours in TAA aircraft integrating Garmin G1000/G3X/Dynon glass avionics and coupled autopilots",
        "Instruct and standardize glass cockpit scan techniques, GPS approach management, and automation failure procedures",
        "Train pilots to prevent automation complacency through disciplined Single-Pilot Resource Management (SRM)",
      ],
    },
    {
      title: "Philadelphia Air Tours",
      subtitle: "FAA-Approved Airplane Sightseeing Tours",
      category: "Aviation Tours",
      description:
        "Founded and operate Philadelphia Air Tours, providing FAA-approved airplane sightseeing tours. Focused on delivering premium customer experiences while ensuring safe and proficient flight operations in the busy Philadelphia Class Bravo airspace.",
      achievements: [
        "Provide guided sightseeing tours complying with all FAA regulations",
        "Maintain absolute safety and proficiency within the complex Class B airspace environment",
      ],
      link: "https://www.phillyairtours.com",
      linkText: "Visit Philly Air Tours",
    },
    {
      title: "PAFOS FLY Flight Training Academy & Safety Syllabus",
      subtitle: "Standardized Flight School & Mentorship Program",
      category: "Aviation Education",
      description:
        "Architected and deployed a standardized flight training syllabus from the ground up for PAFOS FLY. Focuses on deep aeronautical decision-making, stick-and-rudder confidence, and structured student progression with a 100% incident-free safety record.",
      achievements: [
        "Structured comprehensive initial and advanced flight training modules",
        "Established strict pre-flight risk assessment and weather minimum protocols",
        "Mentored aspiring pilots from zero hours through solo flights and FAA practical exams",
      ],
      link: "https://www.pafosfly.com",
      linkText: "Visit PAFOS FLY",
    },
    {
      title: "Fleet Operations Management & Dispatch Standardization",
      subtitle: "Operational Discipline at Dorans Aviation",
      category: "Flight Operations",
      description:
        "Developed and executed operational workflows at Dorans Aviation covering fleet dispatch scheduling, maintenance coordination, instructor standardization checks, and real-time safety monitoring across daily flight activities.",
      achievements: [
        "Standardized instructor checkouts and student progress tracking metrics",
        "Enhanced aircraft dispatch reliability and maintenance tracking workflows",
        "Conducted recurrent safety seminars on crosswind handling and Single-Pilot Resource Management",
      ],
    },
    {
      title: "Stick-and-Rudder & Tailwheel Precision Training Curriculum",
      subtitle: "Advanced Aircraft Handling & Upset Prevention",
      category: "Specialized Training",
      description:
        "Curated a specialized training syllabus emphasizing rudder coordination, high crosswind handling, energy management, and tailwheel aircraft mastery to build exceptional manual flying instincts beyond basic automation.",
      achievements: [
        "Authored step-by-step crosswind landing and three-point touchdown standardization guide",
        "Trained pilots to transition seamlessly into complex, high-performance, and conventional gear aircraft",
      ],
    },
  ],

  skills: [
    "Safety-Driven Stick-and-Rudder Handling",
    "Aeronautical Decision Making (ADM)",
    "Single-Pilot Resource Management (SRM)",
    "Risk Mitigation & Weather Analysis",
    "Flight Standardization & Mentoring",
    "Standard Operating Procedures (SOPs)",
    "Crosswind & Adverse Weather Operations",
    "Tailwheel & Conventional Gear Mastery",
    "Fleet Operations & Airworthiness Tracking",
  ],

  languages: [
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Full Professional Fluency" },
    { name: "Ukrainian", level: "Full Professional Fluency" },
  ],

  fleet: [
    { model: "Pipistrel Alpha Trainer (PIAT & Alpha Trainer)", role: "398.0 Hrs • Modern Glass Primary & Advanced Training" },
    { model: "Piper PA-28 Series (Archer, Cherokee, Arrow PA-28R)", role: "124.7 Hrs • Complex & Commercial Operations" },
    { model: "Cessna 172 Skyhawk (C172)", role: "91.6 Hrs • IFR Precision & Cross-Country" },
    { model: "Cessna 150 / 150M / 150L", role: "49.9 Hrs • Foundational Flight Instruction" },
    { model: "Piper Saratoga PA-32-301FT", role: "34.8 Hrs • High-Performance 6-Seat Operations" },
    { model: "Flight Design GX / CTSW", role: "14.0 Hrs • Light Sport & Energy Management" },
    { model: "American Champion Citabria (7GCBC & 7GCAA)", role: "14.3 Hrs • Tailwheel & Aerobatics / Spin Recovery" },
    { model: "Beechcraft Baron BE55", role: "8.0 Hrs • Multi-Engine Land (AMEL) & High-Performance" },
    { model: "Cessna 170 (C170)", role: "3.0 Hrs • Conventional Gear / Tailwheel Operations" },
    { model: "CZAW SportCruiser", role: "2.4 Hrs • Glass Cockpit Light Sport" },
    { model: "Grumman American AA-1C Lynx", role: "1.7 Hrs • Precision Transition Handling" },
    { model: "Piper Aztec PA-27", role: "1.2 Hrs • Multi-Engine Twin Operations" },
    { model: "JMB VL3 Evolution", role: "0.6 Hrs • High-Performance Advanced TAA" },
    { model: "Piper PA-18 Super Cub", role: "0.4 Hrs • Bush / Short-Field Tailwheel Precision" },
    { model: "FAA-Approved Flight Simulator (PIAT FTD)", role: "2.2 Hrs • Instrument Procedures & Emergency Scenarios" },
  ],
};
