"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { weddingData } from "../data/weddingData";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = (): TimeLeft => {
      const diff = +new Date(weddingData.weddingDate) - +new Date();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, []);

  const stars = useMemo(
    () =>
      Array.from({ length: 70 }, (_, i) => ({
        id: i,
        x: (i * 41 + 13) % 100,
        y: (i * 57 + 9) % 75,
        dur: 2 + (i * 0.55) % 3.5,
        delay: (i * 0.35) % 4,
        size: i % 5 === 0 ? 2.5 : i % 3 === 0 ? 1.8 : 1,
      })),
    []
  );

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Days",    marathi: "दिवस",    value: timeLeft.days },
    { label: "Hours",   marathi: "तास",     value: timeLeft.hours },
    { label: "Minutes", marathi: "मिनिटे",  value: timeLeft.minutes },
    { label: "Seconds", marathi: "सेकंद",   value: timeLeft.seconds },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 px-4"
      style={{ background: "linear-gradient(175deg, #0D0020 0%, #1E0040 30%, #3D0C5C 60%, #6A0DAD 90%, #8B3A8A 100%)" }}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
            animate={{ opacity: [0.05, 0.92, 0.05], scale: [0.5, 1.4, 0.5] }}
            transition={{ duration: s.dur, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Marathi Wada / Temple Silhouette — bottom */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
      >
        <svg
          viewBox="0 0 1400 310"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMax meet"
          style={{ maxHeight: "38vh" }}
        >
          <defs>
            <linearGradient id="wadaStone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5A1A8A" />
              <stop offset="100%" stopColor="#2D0848" />
            </linearGradient>
            <linearGradient id="wadaDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D0020" />
              <stop offset="100%" stopColor="#050010" />
            </linearGradient>
            <linearGradient id="wadaPool" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3D0C5C" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#0D0020" stopOpacity="0.95" />
            </linearGradient>
            <linearGradient id="wadaGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B8860B" stopOpacity="0" />
              <stop offset="40%" stopColor="#FFD700" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#FFD700" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#B8860B" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="saffronBase" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9933" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ── MAIN PLATFORM ── */}
          <rect x="0" y="175" width="1400" height="135" fill="url(#wadaStone)" />
          <rect x="0" y="171" width="1400" height="5" fill="url(#wadaGold)" />
          {[190, 210, 230, 250, 270, 295].map((y, i) => (
            <line key={i} x1="0" y1={y} x2="1400" y2={y} stroke="#FFD700" strokeWidth="0.4" opacity="0.1" />
          ))}

          {/* ── STEPPED CORNICE ── */}
          <rect x="40" y="158" width="1320" height="18" fill="url(#wadaStone)" />
          <rect x="70" y="148" width="1260" height="12" fill="url(#wadaStone)" opacity="0.8" />
          <rect x="40" y="154" width="1320" height="5" fill="url(#wadaGold)" opacity="0.5" />

          {/* ── BATTLEMENTS / KANGURAS ── */}
          {Array.from({ length: 35 }, (_, i) => (
            <rect key={i} x={i * 40} y={134} width={24} height={18} fill="url(#wadaStone)" />
          ))}

          {/* ── LEFT TOWER / BURUJ ── */}
          <rect x="0" y="72" width="160" height="235" fill="url(#wadaStone)" />
          {/* Left tower battlements */}
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={i * 32} y={60} width={21} height={16} fill="url(#wadaStone)" />
          ))}
          {/* Left tower shikhara */}
          <path d="M 8 72 Q 80 12 152 72" fill="url(#wadaStone)" />
          <ellipse cx="80" cy="22" rx="18" ry="20" fill="#4A1070" />
          <ellipse cx="80" cy="8" rx="10" ry="9" fill="#3A0C58" />
          <line x1="80" y1="-1" x2="80" y2="-14" stroke="#FFD700" strokeWidth="3" />
          <circle cx="80" cy="-16" r="5" fill="#FFD700" opacity="0.95" />
          {/* Small flag */}
          <path d="M 80 -14 L 92 -10 L 80 -6 Z" fill="#FF9933" opacity="0.8" />
          {/* Left tower arched windows */}
          <path d="M 50 155 L 50 136 Q 72 122 94 136 L 94 155 Z" fill="url(#wadaDark)" />
          <path d="M 53 155 L 53 138 Q 72 126 91 138 L 91 155" fill="none" stroke="#FFD700" strokeWidth="1.3" opacity="0.55" />
          <path d="M 50 228 L 50 209 Q 72 195 94 209 L 94 228 Z" fill="url(#wadaDark)" />
          {/* Paithani pattern on tower */}
          {[80, 105, 130, 155].map((y, i) => (
            <line key={i} x1="2" y1={y} x2="158" y2={y} stroke="#FF9933" strokeWidth="0.5" opacity="0.15" />
          ))}

          {/* ── RIGHT TOWER / BURUJ ── */}
          <rect x="1240" y="72" width="160" height="235" fill="url(#wadaStone)" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={1240 + i * 32} y={60} width={21} height={16} fill="url(#wadaStone)" />
          ))}
          <path d="M 1248 72 Q 1320 12 1392 72" fill="url(#wadaStone)" />
          <ellipse cx="1320" cy="22" rx="18" ry="20" fill="#4A1070" />
          <ellipse cx="1320" cy="8" rx="10" ry="9" fill="#3A0C58" />
          <line x1="1320" y1="-1" x2="1320" y2="-14" stroke="#FFD700" strokeWidth="3" />
          <circle cx="1320" cy="-16" r="5" fill="#FFD700" opacity="0.95" />
          <path d="M 1320 -14 L 1332 -10 L 1320 -6 Z" fill="#FF9933" opacity="0.8" />
          <path d="M 1306 155 L 1306 136 Q 1328 122 1350 136 L 1350 155 Z" fill="url(#wadaDark)" />
          <path d="M 1309 155 L 1309 138 Q 1328 126 1347 138 L 1347 155" fill="none" stroke="#FFD700" strokeWidth="1.3" opacity="0.55" />
          <path d="M 1306 228 L 1306 209 Q 1328 195 1350 209 L 1350 228 Z" fill="url(#wadaDark)" />
          {[80, 105, 130, 155].map((y, i) => (
            <line key={i} x1="1242" y1={y} x2="1398" y2={y} stroke="#FF9933" strokeWidth="0.5" opacity="0.15" />
          ))}

          {/* ── CENTRAL SHIKHARA COMPLEX ── */}
          {/* Main central tower body */}
          <path d="M 430 175 Q 700 22 970 175" fill="url(#wadaStone)" />
          <path d="M 460 175 Q 700 44 940 175" fill="#4A1070" opacity="0.5" />
          {/* Main dome / shikhara top */}
          <ellipse cx="700" cy="56" rx="64" ry="56" fill="url(#wadaStone)" />
          <ellipse cx="700" cy="12" rx="32" ry="28" fill="#4A1070" />
          <ellipse cx="700" cy="-8" rx="15" ry="13" fill="url(#wadaStone)" />
          {/* Kalasha finial */}
          <line x1="700" y1="-21" x2="700" y2="-36" stroke="#FFD700" strokeWidth="4" />
          <circle cx="700" cy="-38" r="7" fill="#FFD700" />
          <path d="M 694 -38 L 706 -38 L 703 -30 L 697 -30 Z" fill="#FFD700" />
          {/* Saffron flag */}
          <path d="M 700 -36 L 718 -30 L 700 -24 Z" fill="#FF9933" opacity="0.9" />
          {/* Horizontal courses */}
          {[80, 105, 128, 150, 168].map((y, i) => (
            <line key={i} x1={700 - (180 - i * 30)} y1={y} x2={700 + (180 - i * 30)} y2={y} stroke="#FFD700" strokeWidth="0.5" opacity="0.2" />
          ))}
          {/* Secondary side towers */}
          <path d="M 370 175 Q 408 148 446 175" fill="url(#wadaStone)" />
          <ellipse cx="408" cy="143" rx="22" ry="20" fill="url(#wadaStone)" />
          <line x1="408" y1="123" x2="408" y2="110" stroke="#FFD700" strokeWidth="2" />
          <circle cx="408" cy="108" r="4" fill="#FFD700" opacity="0.9" />
          <path d="M 954 175 Q 992 148 1030 175" fill="url(#wadaStone)" />
          <ellipse cx="992" cy="143" rx="22" ry="20" fill="url(#wadaStone)" />
          <line x1="992" y1="123" x2="992" y2="110" stroke="#FFD700" strokeWidth="2" />
          <circle cx="992" cy="108" r="4" fill="#FFD700" opacity="0.9" />

          {/* ── MAIN GOPURA ARCH ── */}
          <path d="M 530 310 L 530 228 Q 700 138 870 228 L 870 310 Z" fill="url(#wadaDark)" />
          <path d="M 530 310 L 530 228 Q 700 138 870 228 L 870 310" fill="none" stroke="#FFD700" strokeWidth="4.5" />
          <path d="M 548 310 L 548 236 Q 700 152 852 236 L 852 310" fill="none" stroke="#FF9933" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="700" cy="143" rx="15" ry="8" fill="#FFD700" opacity="0.9" />
          {/* Arch dot decoration */}
          {[0, 1, 2, 3, 4].map((i) => {
            const angle = (i * 36 - 72) * (Math.PI / 180);
            const r = 76;
            return <circle key={i} cx={700 + r * Math.cos(angle)} cy={143 + r * Math.sin(angle) * 0.75} r="3" fill="#FF9933" opacity="0.5" />;
          })}

          {/* ── SIDE ENTRANCES ── */}
          <path d="M 215 310 L 215 256 Q 270 222 325 256 L 325 310 Z" fill="url(#wadaDark)" opacity="0.85" />
          <path d="M 215 310 L 215 256 Q 270 222 325 256 L 325 310" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.7" />
          <path d="M 1075 310 L 1075 256 Q 1130 222 1185 256 L 1185 310 Z" fill="url(#wadaDark)" opacity="0.85" />
          <path d="M 1075 310 L 1075 256 Q 1130 222 1185 256 L 1185 310" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.7" />

          {/* Decorative roundels */}
          {[185, 370, 1030, 1215].map((x, i) => (
            <g key={i}>
              <circle cx={x} cy={260} r="15" fill="none" stroke="#FFD700" strokeWidth="1.2" opacity="0.5" />
              <circle cx={x} cy={260} r="8" fill="none" stroke="#FF9933" strokeWidth="0.8" opacity="0.35" />
              <circle cx={x} cy={260} r="3" fill="#FFD700" opacity="0.5" />
            </g>
          ))}

          {/* Saffron glow at base */}
          <rect x="0" y="285" width="1400" height="25" fill="url(#saffronBase)" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full" style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto", paddingBottom: "28vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <p
            className="font-display italic"
            style={{ color: "rgba(255,215,0,0.75)", letterSpacing: "0.22em", fontSize: "0.95rem", textAlign: "center", marginBottom: "0.25rem" }}
          >
            मोजत आहोत क्षण
          </p>
          <p
            className="font-display italic"
            style={{ color: "rgba(255,200,100,0.55)", letterSpacing: "0.18em", fontSize: "0.85rem", textAlign: "center", marginBottom: "0.75rem" }}
          >
            marking time until
          </p>
          <h2
            className="font-serif uppercase"
            style={{
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              color: "#FFF8F0",
              letterSpacing: "0.14em",
              textShadow: "0 0 40px rgba(255,153,51,0.3)",
              textAlign: "center",
              marginBottom: "2.5rem",
            }}
          >
            The Countdown
          </h2>

          {/* Countdown grid */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="flex justify-center gap-3 md:gap-5 lg:gap-8 mb-12 flex-wrap"
          >
            {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div
                  className="relative flex items-center justify-center rounded-xl mb-2"
                  style={{
                    width: "clamp(72px, 14vw, 120px)",
                    height: "clamp(80px, 15vw, 130px)",
                    background: "rgba(255,153,51,0.06)",
                    backdropFilter: "blur(8px)",
                    border: "1.5px solid rgba(255,215,0,0.35)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,215,0,0.15)",
                  }}
                >
                  {/* Corner dots */}
                  <div className="absolute top-1.5 left-1.5 w-1 h-1 rounded-full" style={{ background: "#FF9933", opacity: 0.6 }} />
                  <div className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full" style={{ background: "#FF9933", opacity: 0.6 }} />
                  <div className="absolute bottom-1.5 left-1.5 w-1 h-1 rounded-full" style={{ background: "#FF9933", opacity: 0.6 }} />
                  <div className="absolute bottom-1.5 right-1.5 w-1 h-1 rounded-full" style={{ background: "#FF9933", opacity: 0.6 }} />

                  <motion.span
                    key={unit.value}
                    initial={{ y: -16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.28 }}
                    className="font-serif font-bold"
                    style={{
                      fontSize: "clamp(2rem, 6vw, 4rem)",
                      color: "#FFF8F0",
                      textShadow: "0 0 20px rgba(255,153,51,0.4)",
                    }}
                  >
                    {pad(unit.value)}
                  </motion.span>
                </div>

                <span
                  className="font-display"
                  style={{ color: "#FFD700", letterSpacing: "0.18em", fontSize: "0.75rem", textAlign: "center" }}
                >
                  {unit.marathi}
                </span>
                <span
                  className="font-display uppercase"
                  style={{ color: "rgba(255,215,0,0.45)", letterSpacing: "0.2em", fontSize: "0.55rem", textAlign: "center" }}
                >
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Flourish separator */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.5))" }} />
            <svg viewBox="0 0 20 20" className="w-3 h-3" style={{ fill: "#FFD700", opacity: 0.75 }}>
              <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
            </svg>
            <div className="h-px w-16" style={{ background: "linear-gradient(to left, transparent, rgba(255,153,51,0.5))" }} />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="font-display italic"
            style={{ color: "rgba(255,240,160,0.7)", lineHeight: 1.75, textAlign: "center", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", marginBottom: "1.5rem", fontSize: "clamp(0.9rem, 1.8vw, 1.125rem)" }}
          >
            Our families are delighted that you will join us in celebrating what we hope will be one of the happiest days of our lives.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="font-display text-xs uppercase"
            style={{ color: "rgba(255,215,0,0.45)", letterSpacing: "0.3em", textAlign: "center" }}
          >
            Abhishek &amp; Kanika · March 2026
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(to top, #0D0020, transparent)", zIndex: 10 }}
      />
    </section>
  );
}
