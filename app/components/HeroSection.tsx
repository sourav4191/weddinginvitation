"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import CrackersAnimation from "./CrackersAnimation";

const DIYA_COUNT = 16;
const PETAL_COUNT = 20;

// ── Warli Wedding Scene Band ──────────────────────────────────────────────────
// Authentic Warli tribal art: white geometric figures on dark background
// Circle = head, inverted triangle = body, lines = arms/legs
function WarliBand() {
  const w = (stroke = "rgba(255,240,200,0.72)") => ({ stroke, strokeWidth: 1.6, fill: "none" });
  const wFill = (col = "rgba(255,240,200,0.15)") => ({ fill: col, stroke: "rgba(255,240,200,0.72)", strokeWidth: 1.6 });
  const dot = { fill: "rgba(255,240,200,0.72)" };

  // Helper: standard dancer figure at (cx, headY)
  // pose: "raise-left" | "raise-right" | "both-up" | "hands-out"
  const dancer = (cx: number, hy: number, pose: string, col?: string) => {
    const s = col ?? "rgba(255,240,200,0.72)";
    const c = { stroke: s, strokeWidth: 1.6, fill: "none" };
    const by = hy + 22; // triangle base y
    const poses: Record<string, [number, number, number, number][]> = {
      "raise-left":  [[-12, by - 11, -22, hy + 4], [12, by - 11, 22, by - 2]],
      "raise-right": [[-12, by - 11, -22, by - 2], [12, by - 11, 22, hy + 4]],
      "both-up":     [[-12, by - 11, -20, hy + 2], [12, by - 11, 20, hy + 2]],
      "hands-out":   [[-12, by - 11, -24, by - 8], [12, by - 11, 24, by - 8]],
    };
    const arms = poses[pose] ?? poses["hands-out"];
    return (
      <g key={`d-${cx}-${hy}`}>
        <circle cx={cx} cy={hy} r={6} {...c} />
        <polygon points={`${cx},${hy + 7} ${cx - 13},${by} ${cx + 13},${by}`} fill={`${s.replace("0.72", "0.1")}`} stroke={s} strokeWidth={1.6} />
        <line x1={cx - 7} y1={by} x2={cx - 10} y2={by + 16} {...c} />
        <line x1={cx + 7} y1={by} x2={cx + 10} y2={by + 16} {...c} />
        {arms.map(([x1, y1, x2, y2], i) => <line key={i} x1={cx + x1} y1={y1} x2={cx + x2} y2={y2} {...c} />)}
      </g>
    );
  };

  return (
    <div
      className="absolute left-0 right-0 pointer-events-none"
      style={{ bottom: "37vh", zIndex: 4 }}
    >
      <svg
        viewBox="0 0 1200 88"
        className="w-full h-auto"
        style={{ maxHeight: "9vh" }}
        preserveAspectRatio="xMidYMax meet"
      >
        {/* Subtle dark band */}
        <rect x="0" y="8" width="1200" height="72" fill="rgba(10,0,30,0.55)" />
        <line x1="0" y1="9" x2="1200" y2="9" stroke="rgba(255,153,51,0.35)" strokeWidth="0.8" />
        <line x1="0" y1="79" x2="1200" y2="79" stroke="rgba(255,153,51,0.35)" strokeWidth="0.8" />

        {/* ── LEFT: Coconut trees ── */}
        {/* Tree 1 */}
        <circle cx="52" cy="30" r="19" {...w()} />
        <line x1="52" y1="49" x2="52" y2="80" {...w()} />
        <line x1="52" y1="60" x2="40" y2="70" {...w()} />
        <line x1="52" y1="60" x2="64" y2="70" {...w()} />
        {/* Tree 2 */}
        <circle cx="106" cy="27" r="14" {...w()} />
        <line x1="106" y1="41" x2="106" y2="80" {...w()} />

        {/* ── LEFT: Dancers ── */}
        {dancer(170, 22, "raise-right")}
        {dancer(218, 20, "both-up")}
        {dancer(266, 24, "raise-left")}

        {/* Dhol player */}
        <g>
          <circle cx="322" cy="22" r="6" {...w()} />
          <polygon points="322,29 309,50 335,50" {...wFill()} />
          <line x1="309" y1="50" x2="305" y2="66" {...w()} />
          <line x1="335" y1="50" x2="339" y2="66" {...w()} />
          {/* Drum */}
          <rect x="338" y="34" width="20" height="10" rx="3" {...w()} />
          <line x1="309" y1="37" x2="338" y2="39" {...w()} />
          <line x1="335" y1="37" x2="345" y2="34" {...w()} />
        </g>

        {/* ── CENTER: Wedding Mandap ── */}
        {/* Arch */}
        <path d="M 410 80 L 410 38 Q 600 4 790 38 L 790 80" {...w("rgba(255,215,0,0.75)")} strokeWidth={2} />
        <path d="M 432 80 L 432 44 Q 600 16 768 44 L 768 80" {...w("rgba(255,215,0,0.35)")} strokeWidth={1} />
        {/* Mandap pillars */}
        <line x1="410" y1="38" x2="410" y2="80" stroke="rgba(255,215,0,0.7)" strokeWidth={2.5} />
        <line x1="790" y1="38" x2="790" y2="80" stroke="rgba(255,215,0,0.7)" strokeWidth={2.5} />
        {/* Flags */}
        <line x1="410" y1="38" x2="410" y2="8" stroke="rgba(255,215,0,0.5)" strokeWidth={1.5} />
        <polygon points="410,8 426,14 410,20" fill="rgba(255,153,51,0.75)" />
        <line x1="790" y1="38" x2="790" y2="8" stroke="rgba(255,215,0,0.5)" strokeWidth={1.5} />
        <polygon points="790,8 774,14 790,20" fill="rgba(255,153,51,0.75)" />
        {/* Center kalash */}
        <circle cx="600" cy="12" r="7" stroke="rgba(255,215,0,0.7)" strokeWidth={1.5} fill="none" />
        <line x1="600" y1="5" x2="600" y2="0" stroke="rgba(255,215,0,0.6)" strokeWidth={1.5} />
        {/* Torana/garland */}
        <path d="M 450 42 Q 470 35 490 42 Q 510 35 530 42 Q 550 35 570 42 Q 590 35 610 42 Q 630 35 650 42 Q 670 35 690 42 Q 710 35 730 42 Q 750 35 770 42"
          fill="none" stroke="rgba(100,200,100,0.55)" strokeWidth={1.5} />
        {[470, 510, 550, 590, 630, 670, 710, 750].map((x, i) => (
          <circle key={i} cx={x} cy={38} r={2} fill="rgba(255,215,0,0.65)" />
        ))}

        {/* ── GROOM ── */}
        <g>
          <circle cx="543" cy="36" r={7} stroke="rgba(255,215,0,0.88)" strokeWidth={1.8} fill="none" />
          <polygon points="543,43 529,68 557,68" fill="rgba(255,215,0,0.12)" stroke="rgba(255,215,0,0.88)" strokeWidth={1.8} />
          <line x1="529" y1="68" x2="524" y2="80" stroke="rgba(255,215,0,0.88)" strokeWidth={1.8} />
          <line x1="557" y1="68" x2="562" y2="80" stroke="rgba(255,215,0,0.88)" strokeWidth={1.8} />
          {/* Groom reaches to bride */}
          <line x1="557" y1="53" x2="580" y2="50" stroke="rgba(255,215,0,0.8)" strokeWidth={1.8} />
          <line x1="529" y1="53" x2="514" y2="58" stroke="rgba(255,215,0,0.8)" strokeWidth={1.8} />
        </g>

        {/* ── BRIDE ── (larger triangle = ghagra/saree) ── */}
        <g>
          <circle cx="657" cy="34" r={7} stroke="rgba(255,153,51,0.88)" strokeWidth={1.8} fill="none" />
          <polygon points="657,41 640,75 674,75" fill="rgba(255,153,51,0.2)" stroke="rgba(255,153,51,0.88)" strokeWidth={1.8} />
          <line x1="640" y1="75" x2="635" y2="80" stroke="rgba(255,153,51,0.88)" strokeWidth={1.8} />
          <line x1="674" y1="75" x2="679" y2="80" stroke="rgba(255,153,51,0.88)" strokeWidth={1.8} />
          <line x1="640" y1="52" x2="620" y2="50" stroke="rgba(255,153,51,0.8)" strokeWidth={1.8} />
          <line x1="674" y1="52" x2="692" y2="58" stroke="rgba(255,153,51,0.8)" strokeWidth={1.8} />
        </g>

        {/* Joined hands */}
        <line x1="580" y1="50" x2="620" y2="50" stroke="rgba(255,215,0,0.6)" strokeWidth={1.8} />

        {/* Sacred fire / agni kund */}
        <polygon points="600,70 592,80 608,80" fill="rgba(255,100,0,0.35)" stroke="rgba(255,153,51,0.7)" strokeWidth={1.5} />
        <polygon points="600,64 595,70 605,70" fill="rgba(255,215,0,0.45)" stroke="rgba(255,215,0,0.7)" strokeWidth={1} />

        {/* Priest */}
        <g>
          <circle cx="600" cy="46" r={5} stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} fill="none" />
          <polygon points="600,51 592,68 608,68" stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} fill="none" />
          <line x1="592" y1="68" x2="589" y2="78" stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} />
          <line x1="608" y1="68" x2="611" y2="78" stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} />
          <line x1="592" y1="58" x2="585" y2="54" stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} />
          <line x1="608" y1="58" x2="615" y2="54" stroke="rgba(255,240,200,0.6)" strokeWidth={1.4} />
        </g>

        {/* ── RIGHT: Dancers ── */}
        {dancer(858, 22, "raise-left")}
        {dancer(906, 20, "both-up")}
        {dancer(954, 24, "raise-right")}

        {/* ── RIGHT: Nagara/Shehnai player ── */}
        <g>
          <circle cx="1010" cy="22" r={6} {...w()} />
          <polygon points="1010,29 997,50 1023,50" {...wFill()} />
          <line x1="997" y1="50" x2="993" y2="66" {...w()} />
          <line x1="1023" y1="50" x2="1027" y2="66" {...w()} />
          {/* Shehnai instrument */}
          <line x1="997" y1="37" x2="980" y2="30" {...w()} />
          <path d="M 980 30 Q 974 28 972 32 Q 970 36 976 35 Z" fill="rgba(255,240,200,0.5)" stroke="rgba(255,240,200,0.72)" strokeWidth={1.2} />
        </g>

        {/* ── RIGHT: Peacock ── */}
        <g>
          {/* Body */}
          <ellipse cx="1080" cy="62" rx={12} ry={9} {...w()} />
          {/* Neck + head */}
          <line x1="1080" y1="53" x2="1082" y2="42" {...w()} />
          <circle cx="1082" cy="39" r={5} {...w()} />
          {/* Crest */}
          <line x1="1082" y1="34" x2="1080" y2="28" {...w()} />
          <circle cx="1080" cy="26" r={2} {...dot} />
          {/* Tail feathers */}
          <path d="M 1092 58 Q 1110 40 1114 20" {...w()} />
          <path d="M 1092 62 Q 1115 58 1125 44" {...w()} />
          <path d="M 1092 66 Q 1115 70 1122 60" {...w()} />
          <circle cx="1114" cy="20" r={3} {...w()} />
          <circle cx="1125" cy="44" r={3} {...w()} />
          <circle cx="1122" cy="60" r={3} {...w()} />
          {/* Legs */}
          <line x1="1074" y1="71" x2="1070" y2="80" {...w()} />
          <line x1="1086" y1="71" x2="1090" y2="80" {...w()} />
        </g>

        {/* ── RIGHT: Trees ── */}
        <circle cx="1162" cy="28" r={18} {...w()} />
        <line x1="1162" y1="46" x2="1162" y2="80" {...w()} />
        <line x1="1162" y1="58" x2="1150" y2="68" {...w()} />
        <line x1="1162" y1="58" x2="1174" y2="68" {...w()} />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const diyas = useMemo(
    () =>
      Array.from({ length: DIYA_COUNT }, (_, i) => ({
        id: i,
        xPct: (i * 73 + 30) % 100,
        driftPx: (i % 2 === 0 ? 1 : -1) * (14 + (i * 11) % 28),
        duration: 22 + (i * 5) % 14,
        delay: (i * 1.7) % 10,
        scale: 0.5 + (i % 6) * 0.09,
        initRotate: (i * 21) % 18 - 9,
        glowRadius: 8 + (i % 4) * 4,
        opacity: 0.65 + (i % 4) * 0.08,
      })),
    []
  );

  // Marigold petals — small orange/yellow ellipses floating up
  const petals = useMemo(
    () =>
      Array.from({ length: PETAL_COUNT }, (_, i) => ({
        id: i,
        xPct: (i * 47 + 8) % 100,
        duration: 18 + (i * 4) % 10,
        delay: (i * 0.8) % 9,
        size: 7 + (i % 5) * 3,
        color: i % 3 === 0 ? "#FF9933" : i % 3 === 1 ? "#FFD700" : "#FF6B35",
        rotate: (i * 37) % 360,
        drift: (i % 2 === 0 ? 1 : -1) * (10 + (i * 7) % 20),
      })),
    []
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 55 }, (_, i) => ({
        id: i,
        x: (i * 37 + 11) % 100,
        y: (i * 53 + 7) % 70,
        dur: 2.5 + (i * 0.6) % 3,
        delay: (i * 0.4) % 3.5,
        size: i % 4 === 0 ? 2.5 : i % 3 === 0 ? 1.5 : 1,
      })),
    []
  );

  const scrollToNext = () => {
    document.getElementById("invitation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(170deg, #060010 0%, #1A0035 25%, #2D0850 55%, #5A1080 80%, #7B2090 100%)" }}
    >
      {/* ── Fireworks / Crackers ── */}
      <CrackersAnimation />

      {/* ── Twinkling stars ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.06, 0.92, 0.06], scale: [0.5, 1.4, 0.5] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* ── Floating marigold petals ── */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 2 }}>
          {petals.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{
                width: p.size,
                height: p.size * 0.55,
                left: `${p.xPct}%`,
                background: p.color,
                opacity: 0.55,
                borderRadius: "50%",
              }}
              initial={{ y: dimensions.height + 30, rotate: p.rotate }}
              animate={{
                y: -(p.size + 40),
                x: [0, p.drift, p.drift * 0.3, p.drift * 0.9, 0],
                rotate: [p.rotate, p.rotate + 180, p.rotate + 360],
              }}
              transition={{
                y: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" },
                x: { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" },
                rotate: { duration: p.duration * 0.6, repeat: Infinity, delay: p.delay, ease: "linear" },
              }}
            />
          ))}
        </div>
      )}

      {/* ── Floating diyas / kandils ── */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 3 }}>
          {diyas.map((d) => (
            <motion.div
              key={d.id}
              className="absolute"
              style={{
                width: `${d.scale * 44}px`,
                height: `${d.scale * 58}px`,
                left: `${d.xPct}%`,
              }}
              initial={{ y: dimensions.height + 60, rotate: d.initRotate }}
              animate={{
                y: -(d.scale * 58 + 60),
                x: [0, d.driftPx, d.driftPx * 0.4, d.driftPx * 1.1, 0],
                rotate: [d.initRotate, -d.initRotate, d.initRotate * 0.5, -d.initRotate * 0.7, d.initRotate],
              }}
              transition={{
                y: { duration: d.duration, repeat: Infinity, delay: d.delay, ease: "linear" },
                x: { duration: d.duration, repeat: Infinity, delay: d.delay, ease: "easeInOut", times: [0, 0.3, 0.5, 0.75, 1] },
                rotate: { duration: d.duration * 0.55, repeat: Infinity, delay: d.delay, ease: "easeInOut", repeatType: "reverse" },
              }}
            >
              <svg
                viewBox="0 0 44 66"
                className="w-full h-full"
                style={{
                  filter: `drop-shadow(0 0 ${d.glowRadius}px rgba(255,153,51,0.95)) drop-shadow(0 0 ${d.glowRadius * 2}px rgba(255,215,0,0.45))`,
                  opacity: d.opacity,
                }}
              >
                <defs>
                  <radialGradient id={`dg${d.id}`} cx="40%" cy="28%" r="65%">
                    <stop offset="0%" stopColor="#FFF9C4" />
                    <stop offset="30%" stopColor="#FFD700" />
                    <stop offset="65%" stopColor="#FF9933" />
                    <stop offset="100%" stopColor="#8B3A00" />
                  </radialGradient>
                  <radialGradient id={`gw${d.id}`} cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {/* Glow aura */}
                <ellipse cx="22" cy="38" rx="24" ry="30" fill={`url(#gw${d.id})`} />
                {/* Hanging thread */}
                <line x1="22" y1="2" x2="22" y2="8" stroke="#7B3A00" strokeWidth="1.2" />
                {/* Top ring */}
                <rect x="17" y="5" width="10" height="4" rx="2" fill="#6B2F00" opacity="0.9" />
                {/* Body */}
                <path d="M 22 8 C 4 8 3 18 3 38 C 3 52 11 64 22 66 C 33 64 41 52 41 38 C 41 18 40 8 22 8 Z" fill={`url(#dg${d.id})`} />
                {/* Inner highlight */}
                <path d="M 12 18 C 10 25 9 35 11 46 C 15 42 17 34 17 25 Z" fill="white" opacity="0.12" />
                {/* Ribs */}
                <ellipse cx="22" cy="28" rx="19" ry="2.8" fill="none" stroke="#C07000" strokeWidth="0.7" opacity="0.3" />
                <ellipse cx="22" cy="46" rx="17" ry="2.3" fill="none" stroke="#C07000" strokeWidth="0.7" opacity="0.25" />
                {/* Flame */}
                <path d="M 22 8 C 20 4 18 0 22 -1 C 26 0 24 4 22 8 Z" fill="#FFF9C4" opacity="0.92" />
                {/* Tassels */}
                <line x1="17" y1="66" x2="15" y2="73" stroke="#7B3A00" strokeWidth="1" />
                <line x1="22" y1="66" x2="22" y2="75" stroke="#7B3A00" strokeWidth="1" />
                <line x1="27" y1="66" x2="29" y2="73" stroke="#7B3A00" strokeWidth="1" />
                <circle cx="15" cy="73" r="1.5" fill="#FF9933" />
                <circle cx="22" cy="75" r="1.5" fill="#FF9933" />
                <circle cx="29" cy="73" r="1.5" fill="#FF9933" />
              </svg>
            </motion.div>
          ))}
        </div>
      )}

      {/* ── Paithani top border ── */}
      <div
        className="absolute top-0 left-0 right-0 h-2 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(to right, #8B0000 0px, #FF9933 12px, #FFD700 24px, #228B22 36px, #6A0DAD 48px, #FF9933 60px, #FFD700 72px, #8B0000 84px)",
          opacity: 0.7,
          zIndex: 30,
        }}
      />

      {/* ── Main content ── */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4"
        style={{ paddingBottom: "36vh", textAlign: "center" }}
      >
        {/* Om circle with glow */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            width: "4rem", height: "4rem", borderRadius: "9999px",
            background: "radial-gradient(circle, rgba(255,153,51,0.25) 0%, rgba(255,215,0,0.06) 100%)",
            border: "1.5px solid rgba(255,215,0,0.55)",
            boxShadow: "0 0 28px rgba(255,153,51,0.3)",
            marginBottom: "0.75rem",
          }}
        >
          <span className="font-serif" style={{ fontSize: "2.1rem", color: "#FFD700", lineHeight: 1, textShadow: "0 0 18px rgba(255,153,51,0.8)" }}>
            ॐ
          </span>
        </motion.div>

        {/* श्री गणेशाय नमः */}
        <motion.p
          className="font-display"
          style={{ color: "rgba(255,215,0,0.85)", letterSpacing: "0.14em", fontSize: "clamp(0.75rem, 1.4vw, 0.95rem)", marginBottom: "0.25rem", textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          श्री गणेशाय नमः
        </motion.p>

        {/* Paithani-style top ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{ marginBottom: "1rem" }}
        >
          <svg viewBox="0 0 300 30" style={{ width: "clamp(10rem, 22vw, 18rem)", height: "1.5rem" }}>
            <line x1="0" y1="15" x2="100" y2="15" stroke="#FF9933" strokeWidth="0.8" opacity="0.7" />
            <path d="M 105 7 L 118 15 L 105 23 L 92 15 Z" fill="#FF9933" opacity="0.85" />
            <circle cx="122" cy="15" r="5" fill="#FFD700" />
            <path d="M 130 9 L 143 15 L 130 21" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.55" />
            <circle cx="150" cy="15" r="3.5" fill="#FF9933" opacity="0.8" />
            <path d="M 157 9 L 170 15 L 157 21" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.55" />
            <circle cx="178" cy="15" r="5" fill="#FFD700" />
            <path d="M 182 7 L 195 15 L 182 23 L 169 15 Z" fill="#FF9933" opacity="0.85" />
            <line x1="200" y1="15" x2="300" y2="15" stroke="#FF9933" strokeWidth="0.8" opacity="0.7" />
          </svg>
        </motion.div>

        {/* लग्न पत्रिका */}
        <motion.p
          className="font-display"
          style={{ color: "#FFD700", letterSpacing: "0.22em", fontSize: "clamp(0.8rem, 1.5vw, 1rem)", marginBottom: "0.75rem", textAlign: "center" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          लग्न पत्रिका
        </motion.p>

        {/* Groom name */}
        <motion.h1
          className="font-serif font-bold uppercase"
          style={{
            fontSize: "clamp(2.8rem, 8.5vw, 7.5rem)",
            color: "#FFFFFF",
            textShadow: "0 0 50px rgba(255,153,51,0.55), 0 2px 6px rgba(0,0,0,0.7)",
            letterSpacing: "0.18em",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: -35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.9, ease: "easeOut" }}
        >
          {weddingData.couple.groom.name}
        </motion.h1>

        {/* & divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          style={{ margin: "0.6rem 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(1rem, 4vw, 2.5rem)" }}
        >
          <div style={{ height: "1px", width: "clamp(3rem, 6vw, 6rem)", background: "linear-gradient(to right, transparent, #FF9933)" }} />
          <span className="font-script" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#FFD700", letterSpacing: "0.08em" }}>
            weds
          </span>
          <div style={{ height: "1px", width: "clamp(3rem, 6vw, 6rem)", background: "linear-gradient(to left, transparent, #FF9933)" }} />
        </motion.div>

        {/* Bride name */}
        <motion.h1
          className="font-serif font-bold uppercase"
          style={{
            fontSize: "clamp(2.8rem, 8.5vw, 7.5rem)",
            color: "#FFFFFF",
            textShadow: "0 0 50px rgba(255,153,51,0.55), 0 2px 6px rgba(0,0,0,0.7)",
            letterSpacing: "0.18em",
            textAlign: "center",
          }}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.1, ease: "easeOut" }}
        >
          {weddingData.couple.bride.name}
        </motion.h1>

        {/* Bottom ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          style={{ marginTop: "1.25rem" }}
        >
          <svg viewBox="0 0 200 22" style={{ width: "clamp(8rem, 16vw, 13rem)", height: "1.25rem" }}>
            <line x1="0" y1="11" x2="75" y2="11" stroke="#FF9933" strokeWidth="0.7" opacity="0.6" />
            <circle cx="85" cy="11" r="3" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.7" />
            <circle cx="100" cy="11" r="4.5" fill="#FFD700" opacity="0.9" />
            <circle cx="115" cy="11" r="3" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.7" />
            <line x1="125" y1="11" x2="200" y2="11" stroke="#FF9933" strokeWidth="0.7" opacity="0.6" />
          </svg>
        </motion.div>

        <motion.p
          style={{ marginTop: "1rem", color: "#FFD700", letterSpacing: "0.3em", fontSize: "clamp(0.65rem, 1.3vw, 0.875rem)", textAlign: "center" }}
          className="font-display uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          March 2026 &nbsp;·&nbsp; Rambagh &nbsp;·&nbsp; Jaipur
        </motion.p>
      </div>

      {/* ── Warli art band ── */}
      <WarliBand />

      {/* ── Marathi Temple silhouette ── */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ zIndex: 5 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.15, ease: "easeOut" }}
      >
        <svg
          viewBox="0 0 1200 340"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax meet"
          style={{ maxHeight: "40vh" }}
        >
          <defs>
            <linearGradient id="templeStone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6B1A8A" />
              <stop offset="50%" stopColor="#4A1070" />
              <stop offset="100%" stopColor="#2D0848" />
            </linearGradient>
            <linearGradient id="templeSide" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2D0848" />
              <stop offset="40%" stopColor="#5A1480" />
              <stop offset="60%" stopColor="#5A1480" />
              <stop offset="100%" stopColor="#2D0848" />
            </linearGradient>
            <linearGradient id="templeDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D0020" />
              <stop offset="100%" stopColor="#050010" />
            </linearGradient>
            <linearGradient id="templeGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFD700" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#FFD700" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="saffronGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9933" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
            </linearGradient>
          </defs>

          <rect x="0" y="265" width="1200" height="75" fill="url(#templeStone)" />
          <rect x="0" y="261" width="1200" height="5" fill="url(#templeGold)" opacity="0.9" />
          {[275, 285, 295, 310, 325].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="1200" y2={y} stroke="#FFD700" strokeWidth="0.4" opacity="0.12" />
          ))}
          <rect x="50" y="245" width="1100" height="22" fill="url(#templeStone)" />
          <rect x="80" y="232" width="1040" height="15" fill="url(#templeSide)" />
          <rect x="50" y="241" width="1100" height="5" fill="url(#templeGold)" opacity="0.6" />
          <rect x="60" y="155" width="145" height="95" fill="url(#templeStone)" />
          <path d="M 60 155 Q 85 90 132 70 Q 180 90 205 155" fill="url(#templeStone)" />
          <ellipse cx="132" cy="68" rx="16" ry="20" fill="#5A1480" />
          <ellipse cx="132" cy="52" rx="9" ry="10" fill="#4A1070" />
          <line x1="132" y1="42" x2="132" y2="30" stroke="#FFD700" strokeWidth="3" />
          <circle cx="132" cy="27" r="5.5" fill="#FFD700" />
          <path d="M 126 27 L 138 27 L 134 35 L 128 35 Z" fill="#FFD700" opacity="0.7" />
          {[170, 185, 200, 215].map((y, i) => (
            <line key={i} x1="60" y1={y} x2="205" y2={y} stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
          ))}
          <path d="M 108 245 L 108 210 Q 132 195 156 210 L 156 245 Z" fill="url(#templeDark)" />
          <path d="M 111 245 L 111 212 Q 132 199 153 212 L 153 245" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
          <path d="M 58 168 Q 78 158 98 168" fill="url(#templeStone)" />
          <ellipse cx="78" cy="156" rx="12" ry="10" fill="#5A1480" />
          <line x1="78" y1="146" x2="78" y2="138" stroke="#FFD700" strokeWidth="1.8" />
          <circle cx="78" cy="136" r="3.5" fill="#FFD700" />
          <rect x="995" y="155" width="145" height="95" fill="url(#templeStone)" />
          <path d="M 995 155 Q 1020 90 1068 70 Q 1115 90 1140 155" fill="url(#templeStone)" />
          <ellipse cx="1068" cy="68" rx="16" ry="20" fill="#5A1480" />
          <ellipse cx="1068" cy="52" rx="9" ry="10" fill="#4A1070" />
          <line x1="1068" y1="42" x2="1068" y2="30" stroke="#FFD700" strokeWidth="3" />
          <circle cx="1068" cy="27" r="5.5" fill="#FFD700" />
          <path d="M 1062 27 L 1074 27 L 1070 35 L 1064 35 Z" fill="#FFD700" opacity="0.7" />
          {[170, 185, 200, 215].map((y, i) => (
            <line key={i} x1="995" y1={y} x2="1140" y2={y} stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
          ))}
          <path d="M 1044 245 L 1044 210 Q 1068 195 1092 210 L 1092 245 Z" fill="url(#templeDark)" />
          <path d="M 1047 245 L 1047 212 Q 1068 199 1089 212 L 1089 245" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
          <path d="M 1102 168 Q 1122 158 1142 168" fill="url(#templeStone)" />
          <ellipse cx="1122" cy="156" rx="12" ry="10" fill="#5A1480" />
          <line x1="1122" y1="146" x2="1122" y2="138" stroke="#FFD700" strokeWidth="1.8" />
          <circle cx="1122" cy="136" r="3.5" fill="#FFD700" />
          <rect x="380" y="200" width="440" height="50" fill="url(#templeStone)" />
          <path d="M 380 200 Q 420 155 460 125 Q 500 95 540 68 Q 580 38 600 18 Q 620 38 660 68 Q 700 95 740 125 Q 780 155 820 200" fill="url(#templeStone)" />
          <path d="M 410 200 Q 445 160 480 132 Q 515 104 548 78 Q 575 54 600 36 Q 625 54 652 78 Q 685 104 720 132 Q 755 160 790 200" fill="url(#templeSide)" opacity="0.5" />
          <ellipse cx="600" cy="26" rx="30" ry="10" fill="#5A1480" />
          <ellipse cx="600" cy="22" rx="20" ry="7" fill="#4A1070" />
          <path d="M 590 18 Q 590 8 600 5 Q 610 8 610 18 Z" fill="#FFD700" />
          <ellipse cx="600" cy="6" rx="8" ry="5" fill="#FFD700" />
          <line x1="600" y1="1" x2="600" y2="-12" stroke="#FFD700" strokeWidth="3" />
          <circle cx="600" cy="-14" r="6" fill="#FFD700" />
          <path d="M 594 -14 L 606 -14 L 603 -7 L 597 -7 Z" fill="#FFD700" />
          {[210, 220, 235, 252, 270, 290].map((x, i) => {
            const halfW = x - 210;
            return <line key={i} x1={600 - halfW - 40} y1={200 - i * 22} x2={600 + halfW + 40} y2={200 - i * 22} stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />;
          })}
          <path d="M 458 340 L 458 235 Q 600 158 742 235 L 742 340 Z" fill="url(#templeDark)" />
          <path d="M 458 340 L 458 235 Q 600 158 742 235 L 742 340" fill="none" stroke="#FFD700" strokeWidth="4" />
          <path d="M 476 340 L 476 243 Q 600 172 724 243 L 724 340" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="600" cy="163" rx="16" ry="9" fill="#FFD700" opacity="0.9" />
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i * 30 - 75) * (Math.PI / 180);
            const r = 78;
            const x = 600 + r * Math.cos(angle);
            const y = 163 + r * Math.sin(angle) * 0.8;
            return <circle key={i} cx={x} cy={y} r="3" fill="#FF9933" opacity="0.5" />;
          })}
          <path d="M 220 340 L 220 278 Q 280 248 340 278 L 340 340 Z" fill="url(#templeDark)" opacity="0.85" />
          <path d="M 220 340 L 220 278 Q 280 248 340 278 L 340 340" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.75" />
          <path d="M 860 340 L 860 278 Q 920 248 980 278 L 980 340 Z" fill="url(#templeDark)" opacity="0.85" />
          <path d="M 860 340 L 860 278 Q 920 248 980 278 L 980 340" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.75" />
          {[180, 365, 835, 1020].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={310} r="16" fill="none" stroke="#FFD700" strokeWidth="1.2" opacity="0.5" />
              <circle cx={x} cy={310} r="9" fill="none" stroke="#FF9933" strokeWidth="0.8" opacity="0.35" />
              <circle cx={x} cy={310} r="3.5" fill="#FFD700" opacity="0.5" />
            </g>
          ))}
          <rect x="0" y="320" width="1200" height="20" fill="url(#saffronGlow)" />
        </svg>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to top, #1A0035, transparent)", zIndex: 15 }}
      />

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1.5 cursor-pointer"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToNext}
      >
        <span className="font-display text-xs uppercase" style={{ color: "#FFD700", letterSpacing: "0.3em" }}>
          Scroll
        </span>
        <ChevronDown className="w-4 h-4" style={{ color: "#FFD700" }} />
      </motion.button>
    </section>
  );
}
