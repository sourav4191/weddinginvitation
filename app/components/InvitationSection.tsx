"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.9, delay },
});

function GoldDivider({ symbol }: { symbol?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", margin: "1.25rem 0" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6))" }} />
      {symbol ? (
        <span className="font-display" style={{ color: "#FFD700", letterSpacing: "0.2em", fontSize: "0.875rem" }}>{symbol}</span>
      ) : (
        <svg viewBox="0 0 24 24" style={{ width: "1rem", height: "1rem", fill: "#FFD700", opacity: 0.85, flexShrink: 0 }}>
          <path d="M12 2 L14 9 L21 9 L15.5 13.5 L17.5 20.5 L12 16 L6.5 20.5 L8.5 13.5 L3 9 L10 9 Z" />
        </svg>
      )}
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(255,215,0,0.6))" }} />
    </div>
  );
}

function KalashIcon() {
  return (
    <svg viewBox="0 0 60 80" style={{ width: "2rem", height: "2.5rem", fill: "none", flexShrink: 0 }}>
      <path d="M 10 50 Q 8 62 15 70 L 45 70 Q 52 62 50 50 Q 48 35 30 30 Q 12 35 10 50 Z" fill="#FFD700" opacity="0.25" stroke="#FFD700" strokeWidth="1" />
      <rect x="23" y="22" width="14" height="10" rx="3" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.7" />
      <path d="M 15 24 Q 10 18 18 16 Q 16 22 20 24 Z" fill="#228B22" opacity="0.5" />
      <path d="M 45 24 Q 50 18 42 16 Q 44 22 40 24 Z" fill="#228B22" opacity="0.5" />
      <circle cx="30" cy="14" r="6" fill="#8B4513" opacity="0.5" />
      <line x1="30" y1="8" x2="30" y2="4" stroke="#228B22" strokeWidth="1.5" />
    </svg>
  );
}

const center: React.CSSProperties = { textAlign: "center" };

export default function InvitationSection() {
  return (
    <section
      id="invitation"
      className="relative min-h-screen w-full overflow-hidden py-20 px-4"
      style={{ background: "linear-gradient(175deg, #1E0040 0%, #3D0C5C 40%, #280850 70%, #1E0040 100%)" }}
    >
      {/* Rangoli texture */}
      <div className="absolute inset-0 opacity-[0.06] rangoli-overlay" />

      {/* Saffron top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, #FF9933, #FFD700, #FF9933, transparent)" }} />

      {/* Corner ornaments */}
      <div className="absolute top-8 left-8 opacity-35">
        <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" style={{ fill: "none", stroke: "#FF9933", strokeWidth: "1" }}>
          <path d="M 0 40 Q 20 0 40 0" /><path d="M 0 40 Q 0 20 20 0" />
          <circle cx="40" cy="0" r="3" fill="#FFD700" /><circle cx="0" cy="40" r="3" fill="#FFD700" />
          <path d="M 5 5 L 15 5 L 15 10 L 10 10 L 10 15 L 5 15 Z" fill="#FF9933" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-8 right-8 opacity-35 scale-x-[-1]">
        <svg viewBox="0 0 80 80" className="w-16 h-16 md:w-20 md:h-20" style={{ fill: "none", stroke: "#FF9933", strokeWidth: "1" }}>
          <path d="M 0 40 Q 20 0 40 0" /><path d="M 0 40 Q 0 20 20 0" />
          <circle cx="40" cy="0" r="3" fill="#FFD700" /><circle cx="0" cy="40" r="3" fill="#FFD700" />
          <path d="M 5 5 L 15 5 L 15 10 L 10 10 L 10 15 L 5 15 Z" fill="#FF9933" opacity="0.4" />
        </svg>
      </div>

      {/* Main content — flex column ensures every child is centered */}
      <div
        className="relative z-10"
        style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "48rem", margin: "0 auto" }}
      >

        {/* ── Ganesh Vandana ── */}
        <motion.div {...fadeUp(0)} style={{ width: "100%", marginBottom: "2.5rem", ...center }}>

          {/* Om circle */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: "5.5rem", height: "5.5rem", borderRadius: "9999px", marginBottom: "1.5rem",
              background: "radial-gradient(circle, rgba(255,153,51,0.2) 0%, rgba(255,215,0,0.08) 100%)",
              border: "2px solid rgba(255,215,0,0.5)",
              boxShadow: "0 0 30px rgba(255,153,51,0.2)",
            }}
          >
            <span className="font-serif" style={{ fontSize: "2.6rem", color: "#FFD700", lineHeight: 1, textShadow: "0 0 20px rgba(255,153,51,0.7)" }}>
              ॐ
            </span>
          </motion.div>

          {/* Marathi blessing */}
          <motion.p
            {...fadeUp(0.3)}
            className="font-display"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#FFD700", letterSpacing: "0.1em", marginBottom: "0.25rem", ...center }}
          >
            श्री गणेशाय नमः
          </motion.p>

          <motion.p
            {...fadeUp(0.35)}
            className="font-display"
            style={{ fontSize: "clamp(0.75rem, 1.5vw, 0.95rem)", color: "rgba(255,215,0,0.6)", letterSpacing: "0.25em", fontStyle: "italic", marginBottom: "1rem", ...center }}
          >
            ✦ लग्न पत्रिका ✦
          </motion.p>

          <GoldDivider />

          {/* Kalash + grandparents */}
          <motion.div
            {...fadeUp(0.4)}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1rem" }}
          >
            <KalashIcon />
            <div style={center}>
              <p className="font-display" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)", color: "rgba(255,240,160,0.75)", fontStyle: "italic", marginBottom: "0.2rem", ...center }}>
                With the divine blessings of
              </p>
              <p className="font-serif" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#FFF8F0", ...center }}>
                {weddingData.couple.grandparents}
              </p>
            </div>
            <KalashIcon />
          </motion.div>

          <GoldDivider symbol="&" />

          <motion.p
            {...fadeUp(0.7)}
            className="font-serif"
            style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#FFF8F0", ...center }}
          >
            {weddingData.couple.groom.parents}
          </motion.p>
        </motion.div>

        {/* ── Invite block ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{ width: "100%", marginBottom: "2.5rem", ...center }}
        >
          <p
            className="font-display"
            style={{ fontSize: "clamp(1rem, 2.2vw, 1.25rem)", color: "rgba(255,240,160,0.8)", letterSpacing: "0.08em", fontStyle: "italic", marginBottom: "1.25rem", ...center }}
          >
            joyfully invite you to the wedding of
          </p>

          {/* Couple names */}
          <div style={{ marginBottom: "1.25rem" }}>
            <h3
              className="font-serif font-bold uppercase"
              style={{
                fontSize: "clamp(3.2rem, 9.5vw, 6rem)",
                color: "#FFFFFF",
                letterSpacing: "0.12em",
                textShadow: "0 0 40px rgba(255,153,51,0.4)",
                lineHeight: 1.05,
                ...center,
              }}
            >
              {weddingData.couple.groom.name}
            </h3>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "0.5rem 0" }}>
              <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to right, transparent, #FF9933)" }} />
              <span className="font-script" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#FFD700" }}>&amp;</span>
              <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to left, transparent, #FF9933)" }} />
            </div>

            <h3
              className="font-serif font-bold uppercase"
              style={{
                fontSize: "clamp(3.2rem, 9.5vw, 6rem)",
                color: "#FFFFFF",
                letterSpacing: "0.12em",
                textShadow: "0 0 40px rgba(255,153,51,0.4)",
                lineHeight: 1.05,
                ...center,
              }}
            >
              {weddingData.couple.bride.name}
            </h3>
          </div>

          <GoldDivider />

          <p className="font-display" style={{ fontSize: "clamp(0.85rem, 1.8vw, 1.1rem)", color: "rgba(255,240,160,0.7)", fontStyle: "italic", marginBottom: "0.25rem", ...center }}>
            Daughter of
          </p>
          <p className="font-serif" style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#FFF8F0", ...center }}>
            {weddingData.couple.bride.parents}
          </p>
        </motion.div>

        {/* ── "On the following occasions" ── */}
        <motion.div {...fadeUp(0.8)} style={{ width: "100%", ...center }}>
          <GoldDivider symbol="✦" />
          <p
            className="font-display"
            style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#FFD700", letterSpacing: "0.1em", marginTop: "1rem", ...center }}
          >
            on the following occasions
          </p>
        </motion.div>
      </div>

      {/* Bottom saffron border */}
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, #FF9933, #FFD700, #FF9933, transparent)" }} />
    </section>
  );
}
