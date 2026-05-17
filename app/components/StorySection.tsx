"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { weddingData } from "../data/weddingData";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = weddingData.gallery.images;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(175deg, #FFF8F0 0%, #FAEBD7 40%, #FFE4B5 80%, #FFF8F0 100%)" }}
    >
      {/* Subtle rangoli texture */}
      <div className="absolute inset-0 opacity-[0.04] rangoli-overlay" />

      {/* Vintage decorated car — drives across the top */}
      <motion.div
        initial={{ x: "-110%" }}
        whileInView={{ x: "110%" }}
        viewport={{ once: true }}
        transition={{ duration: 13, ease: "linear" }}
        className="absolute top-10 left-0 w-56 md:w-72 opacity-20 pointer-events-none"
        style={{ zIndex: 1 }}
      >
        <svg viewBox="0 0 380 165" className="w-full h-auto">
          <defs>
            <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <radialGradient id="wheel" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5A3A1A" />
              <stop offset="70%" stopColor="#3D1A00" />
              <stop offset="100%" stopColor="#1A0E00" />
            </radialGradient>
          </defs>
          {/* Body */}
          <rect x="30" y="88" width="320" height="56" rx="12" fill="url(#carBody)" />
          {/* Cabin */}
          <path d="M 80 88 L 95 50 L 285 50 L 300 88 Z" fill="#E07000" />
          {/* Roof with garland decoration */}
          <rect x="95" y="46" width="190" height="7" rx="3" fill="#B8860B" />
          {/* Garland on roof */}
          <path d="M 100 46 Q 115 40 130 46 Q 145 40 160 46 Q 175 40 190 46 Q 205 40 220 46 Q 235 40 250 46 Q 265 40 280 46" fill="none" stroke="#228B22" strokeWidth="2" opacity="0.7" />
          {/* Flowers on garland */}
          {[115, 145, 175, 205, 235, 265].map((x, i) => (
            <circle key={i} cx={x} cy={43} r="3" fill="#FFD700" opacity="0.8" />
          ))}
          {/* Windows */}
          <rect x="100" y="58" width="74" height="24" rx="3" fill="rgba(255,255,255,0.3)" />
          <rect x="206" y="58" width="74" height="24" rx="3" fill="rgba(255,255,255,0.3)" />
          {/* Door */}
          <line x1="188" y1="55" x2="188" y2="90" stroke="#B8860B" strokeWidth="2" />
          {/* Side trim */}
          <line x1="35" y1="115" x2="345" y2="115" stroke="#B8860B" strokeWidth="1.5" opacity="0.5" />
          {/* Floral side motif */}
          <circle cx="190" cy="108" r="6" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          {/* Headlight */}
          <circle cx="28" cy="110" r="8" fill="rgba(255,240,180,0.6)" stroke="#B8860B" strokeWidth="1" />
          {/* Taillight */}
          <rect x="340" y="102" width="13" height="15" rx="2" fill="rgba(200,80,80,0.5)" stroke="#B8860B" strokeWidth="1" />
          {/* Wheels */}
          <circle cx="108" cy="148" r="24" fill="url(#wheel)" />
          <circle cx="108" cy="148" r="14" fill="none" stroke="#FF9933" strokeWidth="3" opacity="0.6" />
          <circle cx="108" cy="148" r="4" fill="#FFD700" opacity="0.8" />
          <circle cx="272" cy="148" r="24" fill="url(#wheel)" />
          <circle cx="272" cy="148" r="14" fill="none" stroke="#FF9933" strokeWidth="3" opacity="0.6" />
          <circle cx="272" cy="148" r="4" fill="#FFD700" opacity="0.8" />
          {/* Spokes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const c = Math.round(Math.cos(rad) * 1e4) / 1e4;
            const s = Math.round(Math.sin(rad) * 1e4) / 1e4;
            return (
              <g key={i}>
                <line
                  x1={108 + c * 4} y1={148 + s * 4}
                  x2={108 + c * 13} y2={148 + s * 13}
                  stroke="#FF9933" strokeWidth="1.5" opacity="0.5"
                />
                <line
                  x1={272 + c * 4} y1={148 + s * 4}
                  x2={272 + c * 13} y2={148 + s * 13}
                  stroke="#FF9933" strokeWidth="1.5" opacity="0.5"
                />
              </g>
            );
          })}
        </svg>
      </motion.div>

      <div className="relative z-10" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "3rem", marginTop: "4rem" }}
        >
          <p className="font-display italic" style={{ color: "#B8860B", letterSpacing: "0.2em", fontSize: "1rem", textAlign: "center", marginBottom: "0.5rem" }}>
            आमची गोष्ट
          </p>
          <h2
            className="font-serif uppercase"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", color: "#1E0040", letterSpacing: "0.12em", textAlign: "center" }}
          >
            Meet the
          </h2>
          <h2
            className="font-serif uppercase"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", letterSpacing: "0.12em", textAlign: "center" }}
          >
            <span className="shimmer-gold">Bride &amp; Groom</span>
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginTop: "1rem" }}>
            <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to right, transparent, #FF9933)" }} />
            <div style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", background: "#FFD700" }} />
            <div style={{ height: "1px", width: "4rem", background: "linear-gradient(to left, transparent, #FF9933)" }} />
          </div>
        </motion.div>

        {/* Story Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{ maxWidth: "42rem", marginLeft: "auto", marginRight: "auto", marginBottom: "3.5rem", width: "100%", textAlign: "center" }}
        >
          <p className="font-display text-base md:text-lg leading-relaxed" style={{ color: "#3D1A00", lineHeight: 1.85, textAlign: "center" }}>
            {weddingData.story.description}
          </p>
        </motion.div>

        {/* Photo Frame */}
        <div style={{ display: "flex", justifyContent: "center" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative w-full max-w-xl"
        >
          <div
            className="relative p-4 md:p-6 rounded-2xl"
            style={{
              background: "linear-gradient(145deg, #FFF8F0, #FAEBD7)",
              boxShadow: "0 8px 40px rgba(184,134,11,0.2), 0 2px 8px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,153,51,0.3)",
            }}
          >
            {/* Gold inner border with saffron tint */}
            <div
              className="relative rounded-xl overflow-hidden"
              style={{ border: "2px solid rgba(255,153,51,0.5)" }}
            >
              {/* Corner pieces — top-left */}
              {["", "scale-x-[-1]", "scale-y-[-1]", "rotate-180"].map((transform, i) => (
                <div
                  key={i}
                  className={`absolute z-20 pointer-events-none ${
                    i === 0 ? "top-0 left-0" : i === 1 ? "top-0 right-0" : i === 2 ? "bottom-0 left-0" : "bottom-0 right-0"
                  } ${transform}`}
                >
                  <svg viewBox="0 0 50 50" className="w-10 h-10 md:w-12 md:h-12">
                    <path d="M 2 2 L 2 32" stroke="#FF9933" strokeWidth="1.5" opacity="0.7" />
                    <path d="M 2 2 L 32 2" stroke="#FF9933" strokeWidth="1.5" opacity="0.7" />
                    <circle cx="2" cy="2" r="3" fill="#FFD700" opacity="0.85" />
                    <path d="M 10 2 Q 2 2 2 10" fill="none" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
                    {/* Small lotus */}
                    <ellipse cx="8" cy="8" rx="3" ry="4" fill="#FF9933" opacity="0.2" transform="rotate(-45 8 8)" />
                  </svg>
                </div>
              ))}

              {/* Image area */}
              <div className="relative w-full overflow-hidden rounded-lg" style={{ height: "clamp(280px, 55vw, 500px)" }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Photo ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.65, ease: "easeInOut" }}
                  />
                </AnimatePresence>

                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-sm"
                  style={{ background: "rgba(255,248,240,0.8)", border: "1px solid rgba(255,153,51,0.4)" }}
                >
                  <ChevronLeft className="w-5 h-5" style={{ color: "#1E0040" }} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-sm"
                  style={{ background: "rgba(255,248,240,0.8)", border: "1px solid rgba(255,153,51,0.4)" }}
                >
                  <ChevronRight className="w-5 h-5" style={{ color: "#1E0040" }} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: currentIndex === i ? "24px" : "6px",
                        height: "6px",
                        background: currentIndex === i ? "#FF9933" : "rgba(255,248,240,0.6)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="font-display italic"
            style={{ color: "#B8860B", fontSize: "0.95rem", letterSpacing: "0.08em", textAlign: "center", marginTop: "1.25rem" }}
          >
            {weddingData.couple.groom.name} &amp; {weddingData.couple.bride.name}
          </motion.p>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
