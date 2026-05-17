"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";

export default function SocialMediaSection() {
  return (
    <section
      className="relative min-h-[70vh] w-full overflow-hidden flex items-center justify-center py-24 px-4"
      style={{ background: "linear-gradient(165deg, #FFF8F0 0%, #FAEBD7 40%, #FFE4B5 80%, #FFF0A0 100%)" }}
    >
      {/* Rangoli texture */}
      <div className="absolute inset-0 opacity-[0.05] rangoli-overlay" />

      {/* Top divider — saffron */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.5), transparent)" }} />

      {/* Decorated car drives right to left */}
      <motion.div
        initial={{ x: "110%" }}
        whileInView={{ x: "-110%" }}
        viewport={{ once: true }}
        transition={{ duration: 14, ease: "linear" }}
        className="absolute bottom-8 left-0 w-52 md:w-64 opacity-20 pointer-events-none"
        style={{ transform: "scaleX(-1)" }}
      >
        <svg viewBox="0 0 360 160" className="w-full h-auto">
          <defs>
            <linearGradient id="socialCar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF9933" />
              <stop offset="100%" stopColor="#B8860B" />
            </linearGradient>
          </defs>
          <rect x="30" y="85" width="300" height="55" rx="12" fill="url(#socialCar)" />
          <path d="M 75 85 L 90 45 L 270 45 L 285 85 Z" fill="#E07000" />
          <rect x="92" y="51" width="68" height="26" rx="3" fill="rgba(255,255,255,0.3)" />
          <rect x="196" y="51" width="68" height="26" rx="3" fill="rgba(255,255,255,0.3)" />
          <line x1="180" y1="45" x2="180" y2="85" stroke="#B8860B" strokeWidth="1.5" opacity="0.5" />
          {/* Garland on roof */}
          <path d="M 93 44 Q 108 38 123 44 Q 138 38 153 44 Q 168 38 183 44 Q 198 38 213 44 Q 228 38 243 44 Q 258 38 273 44" fill="none" stroke="#228B22" strokeWidth="2" opacity="0.7" />
          {[108, 138, 168, 198, 228, 258].map((x, i) => (
            <circle key={i} cx={x} cy={41} r="2.5" fill="#FFD700" opacity="0.8" />
          ))}
          <circle cx="100" cy="145" r="22" fill="#3D1A00" />
          <circle cx="100" cy="145" r="12" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.6" />
          <circle cx="260" cy="145" r="22" fill="#3D1A00" />
          <circle cx="260" cy="145" r="12" fill="none" stroke="#FF9933" strokeWidth="2.5" opacity="0.6" />
          <circle cx="330" cy="108" r="7" fill="rgba(220,100,80,0.5)" stroke="#B8860B" strokeWidth="1" />
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
          {/* Top ornament */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-12 md:w-20" style={{ background: "linear-gradient(to right, transparent, #B8860B)" }} />
            <svg viewBox="0 0 30 30" className="w-4 h-4" style={{ fill: "#FFD700" }}>
              <path d="M15 2 L17.5 10.5 L26 10.5 L19.5 15.5 L22 24 L15 19 L8 24 L10.5 15.5 L4 10.5 L12.5 10.5 Z" />
            </svg>
            <div className="h-px w-12 md:w-20" style={{ background: "linear-gradient(to left, transparent, #B8860B)" }} />
          </div>

          <p
            className="font-display italic mb-1"
            style={{ color: "#8B4513", letterSpacing: "0.15em", fontSize: "0.85rem" }}
          >
            जोडलेले राहा
          </p>
          <p
            className="font-display italic mb-3"
            style={{ color: "#B8860B", letterSpacing: "0.22em", fontSize: "0.9rem" }}
          >
            stay connected
          </p>
          <h2
            className="font-serif uppercase mb-1"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", color: "#1E0040", letterSpacing: "0.14em" }}
          >
            Follow
          </h2>
          <h2
            className="font-serif uppercase mb-8"
            style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)", color: "#3D0C5C", letterSpacing: "0.14em" }}
          >
            The Action
          </h2>

          <p
            className="font-display text-base md:text-lg mb-10 text-center"
            style={{ color: "#5A3A1A", letterSpacing: "0.04em", lineHeight: 1.7, textAlign: "center" }}
          >
            Share your moments using our hashtag &nbsp;
            <span className="font-serif" style={{ color: "#8B0000", fontWeight: 600 }}>
              #abkan
            </span>
            &nbsp; and follow our Instagram for updates.
          </p>

          {/* Instagram button */}
          <motion.a
            href={weddingData.socialMedia.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex flex-col items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <div
              className="flex items-center justify-center w-20 h-20 rounded-2xl shadow-xl"
              style={{
                background: "linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                boxShadow: "0 8px 28px rgba(220,39,67,0.35)",
              }}
            >
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span
              className="font-display uppercase text-xs"
              style={{ color: "#B8860B", letterSpacing: "0.3em" }}
            >
              Instagram
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
