"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { MessageCircle } from "lucide-react";

export default function RSVPSection() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${weddingData.rsvp.phoneNumber}?text=${encodeURIComponent(
      weddingData.rsvp.message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-24 px-4"
      style={{ background: "linear-gradient(165deg, #3D0000 0%, #8B0000 35%, #5A0000 70%, #3D0C5C 100%)" }}
    >
      {/* Rangoli texture */}
      <div className="absolute inset-0 opacity-[0.05] rangoli-overlay" />

      {/* Saffron border accent lines */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, #FF9933, #FFD700, #FF9933, transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: "linear-gradient(to right, transparent, #FF9933, #FFD700, #FF9933, transparent)" }} />

      {/* Palakhi / Doli illustration — bottom decoration */}
      <motion.div
        initial={{ x: "110%", opacity: 0 }}
        whileInView={{ x: "0%", opacity: 0.15 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 md:w-96 pointer-events-none"
      >
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          <defs>
            <linearGradient id="doliBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
            <linearGradient id="doliRoof" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          {/* Palanquin body */}
          <rect x="100" y="80" width="200" height="90" rx="8" fill="url(#doliBody)" opacity="0.9" />
          {/* Roof — curved */}
          <path d="M 85 80 Q 200 40 315 80" fill="url(#doliRoof)" />
          <path d="M 85 80 Q 200 55 315 80" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.5" />
          {/* Decorative curtains */}
          <path d="M 100 80 Q 110 105 100 120 Q 108 108 116 120 Q 108 105 120 80 Z" fill="#FF9933" opacity="0.5" />
          <path d="M 300 80 Q 290 105 300 120 Q 292 108 284 120 Q 292 105 280 80 Z" fill="#FF9933" opacity="0.5" />
          {/* Flower decorations on curtains */}
          <circle cx="108" cy="95" r="5" fill="#FFD700" opacity="0.8" />
          <circle cx="292" cy="95" r="5" fill="#FFD700" opacity="0.8" />
          {/* Side ornaments */}
          <circle cx="100" cy="125" r="8" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
          <circle cx="300" cy="125" r="8" fill="none" stroke="#FFD700" strokeWidth="1.5" opacity="0.6" />
          {/* Carrying poles */}
          <rect x="60" y="115" width="280" height="8" rx="4" fill="#8B4513" opacity="0.7" />
          {/* Pole ends */}
          <circle cx="60" cy="119" r="6" fill="#FFD700" opacity="0.7" />
          <circle cx="340" cy="119" r="6" fill="#FFD700" opacity="0.7" />
          {/* Vertical support poles */}
          <rect x="115" y="85" width="6" height="30" rx="2" fill="#8B4513" opacity="0.5" />
          <rect x="279" y="85" width="6" height="30" rx="2" fill="#8B4513" opacity="0.5" />
          {/* Hanging bells */}
          <line x1="200" y1="40" x2="200" y2="55" stroke="#FFD700" strokeWidth="1" opacity="0.6" />
          <ellipse cx="200" cy="57" rx="4" ry="5" fill="#FFD700" opacity="0.7" />
          <line x1="160" y1="50" x2="160" y2="62" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <ellipse cx="160" cy="64" rx="3" ry="4" fill="#FFD700" opacity="0.6" />
          <line x1="240" y1="50" x2="240" y2="62" stroke="#FFD700" strokeWidth="1" opacity="0.5" />
          <ellipse cx="240" cy="64" rx="3" ry="4" fill="#FFD700" opacity="0.6" />
          {/* Garland at top */}
          <path d="M 120 75 Q 135 68 150 75 Q 165 68 180 75 Q 195 68 210 75 Q 225 68 240 75 Q 255 68 270 75 Q 285 68 300 75" fill="none" stroke="#228B22" strokeWidth="2" opacity="0.6" />
          {[135, 165, 195, 225, 255, 285].map((x, i) => (
            <circle key={i} cx={x} cy={71} r="3" fill="#FFD700" opacity="0.7" />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Ornament */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(to right, transparent, #FF9933)" }} />
            <svg viewBox="0 0 30 30" className="w-5 h-5" style={{ fill: "#FFD700" }}>
              <path d="M15 2 L17.5 10.5 L26 10.5 L19.5 15.5 L22 24 L15 19 L8 24 L10.5 15.5 L4 10.5 L12.5 10.5 Z" />
            </svg>
            <div className="h-px w-16 md:w-24" style={{ background: "linear-gradient(to left, transparent, #FF9933)" }} />
          </motion.div>

          <p
            className="font-display italic mb-2"
            style={{ color: "rgba(255,215,0,0.8)", letterSpacing: "0.2em", fontSize: "1.05rem" }}
          >
            कृपया नक्की येण्यास
          </p>
          <p
            className="font-display italic mb-3"
            style={{ color: "rgba(255,224,160,0.65)", letterSpacing: "0.15em", fontSize: "0.9rem" }}
          >
            kindly
          </p>
          <h2
            className="font-serif uppercase mb-2"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", color: "#FFF8F0", letterSpacing: "0.15em", lineHeight: 1 }}
          >
            Please
          </h2>
          <h2
            className="font-serif uppercase mb-10"
            style={{ fontSize: "clamp(4rem, 11vw, 7rem)", letterSpacing: "0.2em", lineHeight: 1.05 }}
          >
            <span className="shimmer-gold">RSVP</span>
          </h2>

          <p
            className="font-display text-lg md:text-xl mb-10 text-center"
            style={{ color: "rgba(255,224,160,0.8)", letterSpacing: "0.05em", lineHeight: 1.7, textAlign: "center" }}
          >
            We would be honoured to have you join us.<br />
            Tap below to confirm via WhatsApp.
          </p>

          {/* WhatsApp Button */}
          <motion.button
            onClick={handleWhatsAppClick}
            className="group relative inline-flex flex-col items-center gap-3 mx-auto"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{ transform: "scale(1.3)" }}
            />
            <div
              className="relative flex items-center justify-center w-24 h-24 rounded-full"
              style={{
                background: "linear-gradient(145deg, #25D366, #128C7E)",
                boxShadow: "0 8px 32px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <span className="font-display uppercase text-xs" style={{ color: "#FFD700", letterSpacing: "0.3em" }}>
              WhatsApp
            </span>
          </motion.button>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-14 font-display italic text-sm"
            style={{ color: "rgba(255,224,160,0.5)", letterSpacing: "0.08em" }}
          >
            We look forward to celebrating with you
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
