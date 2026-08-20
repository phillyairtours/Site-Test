import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import zlib from "zlib";
import Papa from "papaparse";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

const DATA_PILOT_TS = path.join(ROOT_DIR, "data", "pilot.ts");
const PILOT_DATA_JS = path.join(ROOT_DIR, "pilot-data.js");
const LAYOUT_TSX = path.join(ROOT_DIR, "app", "layout.tsx");

/**
 * Extract text tokens from PDF Flate streams
 */
function extractPdfTokens(buf) {
  const str = buf.toString("binary");
  const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
  let match;
  const allTokens = [];
  while ((match = streamRegex.exec(str)) !== null) {
    try {
      const raw = Buffer.from(match[1], "binary");
      const decompressed = zlib.inflateSync(raw).toString("latin1");
      const tokenRegex = /\((.*?)\)\s*Tj|\[(.*?)\]\s*TJ/g;
      let tMatch;
      while ((tMatch = tokenRegex.exec(decompressed)) !== null) {
        if (tMatch[1] !== undefined) {
          allTokens.push(tMatch[1]);
        } else if (tMatch[2] !== undefined) {
          const inner = tMatch[2];
          const parts = inner.match(/\((.*?)\)/g) || [];
          allTokens.push(parts.map((p) => p.slice(1, -1)).join(""));
        }
      }
    } catch (e) {}
  }
  return allTokens;
}

/**
 * Find the latest ForeFlight export file (PDF or CSV) in the root directory
 */
function findLatestForeFlightFile(specifiedPath) {
  if (specifiedPath && fs.existsSync(specifiedPath)) {
    return specifiedPath;
  }

  const files = fs.readdirSync(ROOT_DIR);
  const candidates = [];

  for (const file of files) {
    const fullPath = path.join(ROOT_DIR, file);
    const stat = fs.statSync(fullPath);
    if (stat.isFile()) {
      const lower = file.toLowerCase();
      if (
        (lower.endsWith(".pdf") &&
          (lower.includes("flightexperience") ||
            lower.includes("foreflight") ||
            lower.includes("experience") ||
            lower.includes("logbook") ||
            file.startsWith("Flightexperience"))) ||
        (lower.endsWith(".csv") &&
          (lower.includes("foreflight") ||
            lower.includes("logbook") ||
            lower.includes("flight")))
      ) {
        candidates.push({ path: fullPath, file, mtime: stat.mtimeMs });
      }
    }
  }

  if (candidates.length === 0) {
    for (const file of files) {
      if (file.toLowerCase().endsWith(".pdf")) {
        const fullPath = path.join(ROOT_DIR, file);
        const stat = fs.statSync(fullPath);
        candidates.push({ path: fullPath, file, mtime: stat.mtimeMs });
      }
    }
  }

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((a, b) => b.mtime - a.mtime);
  return candidates[0].path;
}

/**
 * Parse ForeFlight PDF Experience Report
 */
function parseForeflightPDF(filePath) {
  const buf = fs.readFileSync(filePath);
  const tokens = extractPdfTokens(buf);

  const stats = {
    totalTime: 0,
    pic: 0,
    crossCountry: 0,
    dualGiven: 0,
    instrument: 0,
    actualInst: 0,
    simInst: 0,
    night: 0,
    tailwheel: 0,
    highPerformance: 0,
    complex: 0,
    retractGear: 0,
    taa: 0,
    multiEngine: 0,
    totalFlights: 0,
    totalLandings: 0,
    fleet: {},
  };

  // Find Totals row in tokens
  // Sequence after 'Totals':
  // [ 'Totals', '544 ßights', '747.4', '1091', '242', '1507', '647.4', '1.7', '253.4', '0.5', '71.4', '77.7', '0.0', '0', '286.1', '177.9' ]
  const totalsIdx = tokens.indexOf("Totals");
  if (totalsIdx !== -1) {
    const after = tokens.slice(totalsIdx + 1, totalsIdx + 20);
    for (let i = 0; i < after.length; i++) {
      if (after[i].includes("ights") || after[i].includes("flights")) {
        stats.totalFlights = parseInt(after[i].replace(/[^\d]/g, ""), 10) || 0;
        stats.totalTime = parseFloat(after[i + 1]) || 0;
        stats.totalLandings = parseInt(after[i + 4], 10) || 0;
        stats.pic = parseFloat(after[i + 5]) || 0;
        stats.crossCountry = parseFloat(after[i + 7]) || 0;
        stats.actualInst = parseFloat(after[i + 8]) || 0;
        stats.simInst = parseFloat(after[i + 9]) || 0;
        stats.instrument = parseFloat((stats.actualInst + stats.simInst).toFixed(1));
        stats.night = parseFloat(after[i + 10]) || 0;
        stats.dualGiven = parseFloat(after[i + 13]) || 0;
        break;
      }
    }
  }

  // Characteristics & Endorsements
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i];
    if (tok === "Complex" && tokens[i + 1]) {
      stats.complex = parseFloat(tokens[i + 1]) || stats.complex;
    } else if (tok === "High Performance" && tokens[i + 1]) {
      stats.highPerformance = parseFloat(tokens[i + 1]) || stats.highPerformance;
    } else if (tok === "Tailwheel" && tokens[i + 1]) {
      stats.tailwheel = parseFloat(tokens[i + 1]) || stats.tailwheel;
    } else if (tok === "Retractable Gear" && tokens[i + 1]) {
      stats.retractGear = parseFloat(tokens[i + 1]) || stats.retractGear;
    } else if (tok === "AMEL" && tokens[i + 1]) {
      stats.multiEngine = parseFloat(tokens[i + 1]) || stats.multiEngine;
    }
  }

  // Parse Fleet table rows
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] && (tokens[i].includes("ights") || tokens[i].includes("flight"))) {
      const model = tokens[i - 1];
      const hours = parseFloat(tokens[i + 1]);
      if (
        model &&
        !isNaN(hours) &&
        model !== "Totals" &&
        !model.includes("SIMULATOR") &&
        !model.includes("CHARACTERISTIC")
      ) {
        stats.fleet[model] = (stats.fleet[model] || 0) + hours;
      }
    }
  }

  return stats;
}

/**
 * Parse ForeFlight CSV Logbook Export
 */
function parseForeflightCSV(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const parsed = Papa.parse(content, { header: true, skipEmptyLines: true });
  const rows = parsed.data;

  const stats = {
    totalTime: 0,
    pic: 0,
    crossCountry: 0,
    dualGiven: 0,
    instrument: 0,
    night: 0,
    tailwheel: 0,
    highPerformance: 0,
    complex: 0,
    multiEngine: 0,
    fleet: {},
  };

  for (const row of rows) {
    const total = parseFloat(row["Total Time"] || row["TotalTime"] || 0) || 0;
    const pic = parseFloat(row["PIC"] || 0) || 0;
    const xc = parseFloat(row["Cross Country"] || row["CrossCountry"] || 0) || 0;
    const dualGiven =
      parseFloat(
        row["Dual Given"] ||
          row["DualGiven"] ||
          row["As Flight Instructor"] ||
          0
      ) || 0;
    const actualInst = parseFloat(row["Actual Instrument"] || 0) || 0;
    const simInst = parseFloat(row["Simulated Instrument"] || 0) || 0;
    const night = parseFloat(row["Night"] || 0) || 0;
    const type = row["Aircraft Type"] || row["TypeCode"] || "Other";

    stats.totalTime += total;
    stats.pic += pic;
    stats.crossCountry += xc;
    stats.dualGiven += dualGiven;
    stats.instrument += actualInst + simInst;
    stats.night += night;

    if (type) {
      stats.fleet[type] = (stats.fleet[type] || 0) + total;
    }
  }

  for (const key of Object.keys(stats)) {
    if (typeof stats[key] === "number") {
      stats[key] = parseFloat(stats[key].toFixed(1));
    }
  }

  return stats;
}

/**
 * Synchronize extracted stats with project files
 */
function applyStats(stats, sourceFile) {
  console.log("\n=======================================================");
  console.log("✈️  SYNCING FOREFLIGHT TELEMETRY TO WEBSITE");
  console.log(`📄 Source File: ${path.basename(sourceFile)}`);
  console.log("=======================================================");
  console.log(`• Total Flight Time : ${stats.totalTime.toFixed(1)} hrs`);
  console.log(`• Pilot in Command  : ${stats.pic.toFixed(1)} hrs`);
  console.log(`• Dual Given (CFI)  : ${stats.dualGiven.toFixed(1)} hrs`);
  console.log(`• Cross Country     : ${stats.crossCountry.toFixed(1)} hrs`);
  console.log(`• Instrument        : ${stats.instrument.toFixed(1)} hrs`);
  console.log(`• Night Time        : ${stats.night.toFixed(1)} hrs`);
  console.log(`• Tailwheel         : ${stats.tailwheel.toFixed(1)} hrs`);
  console.log(`• High Performance  : ${stats.highPerformance.toFixed(1)} hrs`);
  console.log(`• Complex Aircraft  : ${stats.complex.toFixed(1)} hrs`);
  console.log("-------------------------------------------------------");

  const totalFloor = Math.floor(stats.totalTime);

  // 1. Update data/pilot.ts
  if (fs.existsSync(DATA_PILOT_TS)) {
    let content = fs.readFileSync(DATA_PILOT_TS, "utf-8");

    content = content.replace(
      /with\s+\d+\+\s+total\s+flight\s+hours/g,
      `with ${totalFloor}+ total flight hours`
    );

    const flightHoursRegex = /flightHours:\s*\{[\s\S]*?\n\s*\},/;
    const newFlightHoursBlock = `flightHours: {
    totalTime: ${stats.totalTime.toFixed(1)},
    pic: ${stats.pic.toFixed(1)},
    crossCountry: ${stats.crossCountry.toFixed(1)},
    dualGiven: ${stats.dualGiven.toFixed(1)},
    instrument: ${stats.instrument.toFixed(1)},
    night: ${stats.night.toFixed(1)},
    tailwheel: ${stats.tailwheel.toFixed(1)},
    highPerformance: ${stats.highPerformance.toFixed(1)},
    complex: ${stats.complex.toFixed(1)},
    complexHighPerf: ${stats.highPerformance.toFixed(1)},
    safetyRecord: "100% Incident-Free Safety Record",
    medical: "Second Class Medical (Valid through Sept 2026)",
  },`;

    content = content.replace(flightHoursRegex, newFlightHoursBlock);

    if (stats.fleet["PIAT"] || stats.fleet["ALPHA TRAINER PIAT"]) {
      const piatHours = (
        (stats.fleet["PIAT"] || 0) + (stats.fleet["ALPHA TRAINER PIAT"] || 0)
      ).toFixed(1);
      content = content.replace(
        /\{ model: "Pipistrel Alpha Trainer \(PIAT\)", role: "[\d.]+ Hrs/g,
        `{ model: "Pipistrel Alpha Trainer (PIAT)", role: "${piatHours} Hrs`
      );
    }

    const pa28Total = Object.keys(stats.fleet)
      .filter((k) => k.toUpperCase().includes("PA28") || k.toUpperCase().includes("P28"))
      .reduce((sum, k) => sum + (stats.fleet[k] || 0), 0);

    if (pa28Total > 0) {
      content = content.replace(
        /\{ model: "Piper PA-28 Series \(Archer \/ Cherokee \/ Arrow\)", role: "[\d.]+ Hrs/g,
        `{ model: "Piper PA-28 Series (Archer / Cherokee / Arrow)", role: "${pa28Total.toFixed(1)} Hrs`
      );
    }

    fs.writeFileSync(DATA_PILOT_TS, content, "utf-8");
    console.log(`✅ Updated: data/pilot.ts`);
  }

  // 2. Update pilot-data.js
  if (fs.existsSync(PILOT_DATA_JS)) {
    let content = fs.readFileSync(PILOT_DATA_JS, "utf-8");

    content = content.replace(
      /with\s+\d+\+\s+Total\s+Flight\s+Hours/g,
      `with ${totalFloor}+ Total Flight Hours`
    );

    const jsFlightHoursRegex = /flightHours:\s*\{[\s\S]*?\n\s*\},/;
    const newJsFlightHours = `flightHours: {
    totalTime: ${stats.totalTime.toFixed(1)},        // Total Flight Hours
    pic: ${stats.pic.toFixed(1)},              // Pilot in Command (PIC)
    crossCountry: ${stats.crossCountry.toFixed(1)},     // Cross Country (XC)
    dualGiven: ${stats.dualGiven.toFixed(1)},        // Dual Instruction Given (CFI/CFIS)
    instrument: ${stats.instrument.toFixed(1)},        // Instrument Flight (Actual & Simulated)
    multiEngine: ${(stats.multiEngine || 9.2).toFixed(1)},        // Multi-Engine Time
    nightTime: ${stats.night.toFixed(1)},         // Night Flight Time
    tailwheelTime: ${stats.tailwheel.toFixed(1)},     // Tailwheel Time
    highPerformance: ${stats.highPerformance.toFixed(1)},   // High Performance Aircraft (>200HP) Time
    complexTime: ${stats.complex.toFixed(1)},       // Complex Aircraft (Retractable Gear / Prop) Time
    safetyRecord: "100%",    // Zero Incidents / Zero Violations
    lastBFRDate: "May 21, 2026 (Current)",
    medicalClass: "FAA Class 2 Medical (Valid through Sept 2026)",
  },`;

    content = content.replace(jsFlightHoursRegex, newJsFlightHours);
    fs.writeFileSync(PILOT_DATA_JS, content, "utf-8");
    console.log(`✅ Updated: pilot-data.js`);
  }

  // 3. Update app/layout.tsx
  if (fs.existsSync(LAYOUT_TSX)) {
    let content = fs.readFileSync(LAYOUT_TSX, "utf-8");
    content = content.replace(
      /\d+\+\s+total\s+flight\s+hours/g,
      `${totalFloor}+ total flight hours`
    );
    fs.writeFileSync(LAYOUT_TSX, content, "utf-8");
    console.log(`✅ Updated: app/layout.tsx`);
  }

  console.log("\n🚀 Website telemetry successfully synchronized with ForeFlight!");
  console.log("=======================================================\n");
}

/**
 * Main Execution
 */
function run() {
  const args = process.argv.slice(2);
  const isWatch = args.includes("--watch") || args.includes("-w");
  const specifiedFile = args.find((a) => !a.startsWith("-"));

  function processFile(targetPath) {
    if (!targetPath || !fs.existsSync(targetPath)) {
      console.error("❌ No ForeFlight PDF or CSV file found in the project directory.");
      return;
    }

    try {
      let stats;
      if (targetPath.toLowerCase().endsWith(".pdf")) {
        stats = parseForeflightPDF(targetPath);
      } else if (targetPath.toLowerCase().endsWith(".csv")) {
        stats = parseForeflightCSV(targetPath);
      } else {
        console.error("❌ Unsupported file format. Please provide a ForeFlight PDF or CSV.");
        return;
      }

      if (stats && stats.totalTime > 0) {
        applyStats(stats, targetPath);
      } else {
        console.warn("⚠️ Could not extract valid flight hours from:", path.basename(targetPath));
      }
    } catch (err) {
      console.error("❌ Error processing ForeFlight file:", err);
    }
  }

  const initialFile = findLatestForeFlightFile(specifiedFile);
  if (initialFile) {
    processFile(initialFile);
  } else {
    console.log("🔍 Waiting for a ForeFlight PDF or CSV file to be dropped into the folder...");
  }

  if (isWatch) {
    console.log("👀 Watching project directory for new ForeFlight exports...");
    let debounceTimer = null;

    fs.watch(ROOT_DIR, (eventType, filename) => {
      if (!filename) return;
      const lower = filename.toLowerCase();
      if (lower.endsWith(".pdf") || lower.endsWith(".csv")) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          console.log(`\n🔔 Detected new/modified file: ${filename}`);
          const target = path.join(ROOT_DIR, filename);
          if (fs.existsSync(target)) {
            processFile(target);
          }
        }, 600);
      }
    });
  }
}

run();
