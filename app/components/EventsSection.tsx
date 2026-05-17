"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { MapPin } from "lucide-react";

const marathiNames: Record<string, { marathi: string; sub: string }> = {
  Mehendi:    { marathi: "मेहंदी",        sub: "Mehndi" },
  Haldi:      { marathi: "हळद",           sub: "Halad" },
  Cocktail:   { marathi: "कॉकटेल",        sub: "Cocktail" },
  Engagement: { marathi: "साखरपुडा",      sub: "Sakhar Puda" },
  Shaadi:     { marathi: "विवाह सोहळा",   sub: "Vivah Sohala" },
  Reception:  { marathi: "स्वागत समारंभ", sub: "Swagat Samarambh" },
};

const eventColors: Record<string, { accent: string; glow: string }> = {
  Mehendi:    { accent: "#228B22", glow: "rgba(34,139,34,0.18)" },
  Haldi:      { accent: "#FFC000", glow: "rgba(255,192,0,0.18)" },
  Cocktail:   { accent: "#6A0DAD", glow: "rgba(106,13,173,0.18)" },
  Engagement: { accent: "#FF9933", glow: "rgba(255,153,51,0.18)" },
  Shaadi:     { accent: "#8B0000", glow: "rgba(139,0,0,0.18)" },
  Reception:  { accent: "#FFD700", glow: "rgba(255,215,0,0.18)" },
};

function PaithaniCorner() {
  return (
    <svg viewBox="0 0 48 48" style={{ width: "2.25rem", height: "2.25rem", fill: "none" }}>
      <path d="M 3 24 Q 3 3 24 3" stroke="#FF9933" strokeWidth="1" opacity="0.5" />
      <path d="M 3 24 Q 3 3 24 3" stroke="#FFD700" strokeWidth="0.5" opacity="0.35" strokeDasharray="2 3" />
      <circle cx="24" cy="3" r="2.5" fill="#FFD700" opacity="0.7" />
      <circle cx="3" cy="24" r="2.5" fill="#FF9933" opacity="0.7" />
      <ellipse cx="13" cy="9"  rx="3" ry="6" fill="#FF9933" opacity="0.18" transform="rotate(-30 13 9)" />
      <ellipse cx="9"  cy="13" rx="3" ry="6" fill="#FFD700" opacity="0.18" transform="rotate(-60 9 13)" />
      <circle cx="17" cy="13" r="1.5" fill="#FF9933" opacity="0.25" />
    </svg>
  );
}

export default function EventsSection() {
  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #1E0040 0%, #280850 50%, #1E0040 100%)" }}
    >
      {/* Saffron dividers */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.5), transparent)" }} />

      <div style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto", width: "100%" }}>

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "4rem", width: "100%" }}
        >
          <p
            className="font-display italic"
            style={{ fontSize: "1rem", color: "rgba(255,215,0,0.75)", letterSpacing: "0.22em", textAlign: "center", marginBottom: "0.5rem" }}
          >
            join us for
          </p>
          <h2
            className="font-serif uppercase"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "#FFF8F0", letterSpacing: "0.15em", textAlign: "center", lineHeight: 1.1 }}
          >
            The Celebrations
          </h2>
          <p
            className="font-display"
            style={{ fontSize: "1.1rem", color: "rgba(255,153,51,0.8)", letterSpacing: "0.12em", textAlign: "center", marginTop: "0.35rem" }}
          >
            सोहळ्यांची वेळापत्रक
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginTop: "1rem" }}>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to right, transparent, #FF9933)" }} />
            <svg viewBox="0 0 20 20" style={{ width: "0.75rem", height: "0.75rem", fill: "#FFD700", flexShrink: 0 }}>
              <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
            </svg>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to left, transparent, #FF9933)" }} />
          </div>
        </motion.div>

        {/* ── Event Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" style={{ width: "100%" }}>
          {weddingData.events.map((event, index) => {
            const colors = eventColors[event.name] ?? { accent: "#FFD700", glow: "rgba(255,215,0,0.18)" };
            const marathi = marathiNames[event.name] ?? { marathi: event.name, sub: event.name };

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className="relative overflow-hidden rounded-2xl h-full"
                  style={{
                    background: "linear-gradient(160deg, #FFF8F0 0%, #FAEBD7 60%, #FFE4B5 100%)",
                    border: `1.5px solid rgba(255,153,51,0.35)`,
                    boxShadow: `0 6px 30px rgba(0,0,0,0.35), 0 0 0 0 ${colors.accent}`,
                  }}
                >
                  {/* Paithani top accent bar */}
                  <div
                    style={{ height: "0.375rem", background: `linear-gradient(to right, #8B0000, ${colors.accent}, #FF9933, ${colors.accent}, #8B0000)` }}
                  />

                  {/* Corner ornaments */}
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", opacity: 0.55 }}><PaithaniCorner /></div>
                  <div style={{ position: "absolute", top: "0.75rem", right: "0.75rem", opacity: 0.55, transform: "scaleX(-1)" }}><PaithaniCorner /></div>
                  <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem", opacity: 0.55, transform: "scaleY(-1)" }}><PaithaniCorner /></div>
                  <div style={{ position: "absolute", bottom: "0.75rem", right: "0.75rem", opacity: 0.55, transform: "rotate(180deg)" }}><PaithaniCorner /></div>

                  {/* Card inner */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2.25rem 2rem 1.75rem", gap: "0", minHeight: "420px" }}>

                    {/* Icon circle */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "5rem", height: "5rem", borderRadius: "9999px",
                        background: colors.glow,
                        border: `2px solid ${colors.accent}`,
                        boxShadow: `0 4px 20px ${colors.glow}`,
                        marginBottom: "1.25rem",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ fontSize: "2.25rem", lineHeight: 1 }}>{event.icon}</span>
                    </motion.div>

                    {/* Marathi event name */}
                    <p
                      className="font-display"
                      style={{
                        fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
                        color: colors.accent,
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {marathi.marathi}
                    </p>

                    {/* English event name */}
                    <h3
                      className="font-serif uppercase"
                      style={{
                        fontSize: "clamp(1.5rem, 2.8vw, 2rem)",
                        color: "#1E0040",
                        letterSpacing: "0.12em",
                        lineHeight: 1.1,
                        textAlign: "center",
                        marginBottom: "1rem",
                      }}
                    >
                      {marathi.sub}
                    </h3>

                    {/* Decorative divider */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", width: "100%", marginBottom: "1.25rem" }}>
                      <div style={{ height: "1px", flex: 1, maxWidth: "3.5rem", background: `linear-gradient(to right, transparent, ${colors.accent})` }} />
                      <div style={{ width: "0.4rem", height: "0.4rem", borderRadius: "9999px", background: colors.accent }} />
                      <svg viewBox="0 0 12 12" style={{ width: "0.6rem", height: "0.6rem", fill: colors.accent, opacity: 0.8 }}>
                        <path d="M6 0 L7 4.5 L11.5 4.5 L8 7 L9.5 12 L6 9.5 L2.5 12 L4 7 L0.5 4.5 L5 4.5 Z" />
                      </svg>
                      <div style={{ width: "0.4rem", height: "0.4rem", borderRadius: "9999px", background: colors.accent }} />
                      <div style={{ height: "1px", flex: 1, maxWidth: "3.5rem", background: `linear-gradient(to left, transparent, ${colors.accent})` }} />
                    </div>

                    {/* Date */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                      <div style={{ width: "4px", height: "4px", borderRadius: "9999px", background: colors.accent, opacity: 0.7 }} />
                      <p
                        className="font-display"
                        style={{ fontSize: "0.9rem", color: "#5A3A1A", letterSpacing: "0.06em", textAlign: "center" }}
                      >
                        {event.date}
                      </p>
                      <div style={{ width: "4px", height: "4px", borderRadius: "9999px", background: colors.accent, opacity: 0.7 }} />
                    </div>

                    {/* Time */}
                    <p
                      className="font-display italic"
                      style={{ fontSize: "0.88rem", color: "#7A4830", letterSpacing: "0.04em", textAlign: "center", marginBottom: "0.6rem" }}
                    >
                      {event.time}
                    </p>

                    {/* Venue */}
                    <p
                      className="font-serif font-medium"
                      style={{ fontSize: "0.95rem", color: "#3D0C5C", letterSpacing: "0.04em", textAlign: "center", lineHeight: 1.4, marginBottom: "auto", paddingBottom: "1.25rem" }}
                    >
                      {event.venue}
                    </p>

                    {/* Map button */}
                    <motion.a
                      href={event.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                        width: "100%", padding: "0.75rem 1.5rem", borderRadius: "9999px",
                        background: "linear-gradient(135deg, #1E0040, #3D0C5C)",
                        color: "#FFD700",
                        border: "1px solid rgba(255,153,51,0.4)",
                        letterSpacing: "0.15em",
                        fontSize: "0.75rem",
                        textDecoration: "none",
                        fontWeight: 600,
                        marginTop: "0.5rem",
                      }}
                      className="font-display uppercase"
                      whileHover={{
                        background: `linear-gradient(135deg, ${colors.accent}, #B8860B)`,
                        color: "#1E0040",
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <MapPin style={{ width: "0.875rem", height: "0.875rem" }} />
                      See the Route
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ marginTop: "5rem", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to right, transparent, rgba(255,153,51,0.5))" }} />
            <p
              className="font-display italic"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#FFD700", letterSpacing: "0.08em", textAlign: "center" }}
            >
              All venues at Rambagh, Jaipur
            </p>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to left, transparent, rgba(255,153,51,0.5))" }} />
          </div>

          <motion.a
            href={weddingData.events[0].mapLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.75rem",
              padding: "1rem 2.5rem", borderRadius: "9999px",
              background: "linear-gradient(135deg, #FF9933, #B8860B)",
              color: "#1E0040",
              letterSpacing: "0.2em",
              fontSize: "0.8rem",
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(255,153,51,0.35)",
              textDecoration: "none",
            }}
            className="font-display uppercase"
            whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(255,153,51,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            <MapPin style={{ width: "1rem", height: "1rem" }} />
            Open in Maps
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.4), transparent)" }} />
    </section>
  );
}
