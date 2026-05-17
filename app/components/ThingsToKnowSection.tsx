"use client";

import { motion } from "framer-motion";
import { weddingData } from "../data/weddingData";
import { Hash, Cloud, Users, Car } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  hashtag: Hash,
  cloud: Cloud,
  users: Users,
  car: Car,
};

const cardAccents = ["#FF9933", "#6A0DAD", "#8B0000", "#B8860B"];

export default function ThingsToKnowSection() {
  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFF8F0 0%, #FAEBD7 50%, #FFF8F0 100%)" }}
    >
      {/* Rangoli texture */}
      <div className="absolute inset-0 opacity-[0.04] rangoli-overlay" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.4), transparent)" }} />

      <div className="relative z-10" style={{ maxWidth: "72rem", marginLeft: "auto", marginRight: "auto", width: "100%" }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginBottom: "4rem" }}
        >
          <p
            className="font-display italic"
            style={{ color: "#B8860B", letterSpacing: "0.22em", fontSize: "0.95rem", textAlign: "center", marginBottom: "0.5rem" }}
          >
            थोडी माहिती
          </p>
          <p
            className="font-display italic"
            style={{ color: "#8B4513", letterSpacing: "0.15em", fontSize: "0.85rem", textAlign: "center", marginBottom: "0.75rem" }}
          >
            a few notes
          </p>
          <h2
            className="font-serif uppercase"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)", color: "#1E0040", letterSpacing: "0.14em", textAlign: "center" }}
          >
            Things to Know
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginTop: "1.25rem" }}>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to right, transparent, #FF9933)" }} />
            <svg viewBox="0 0 20 20" style={{ width: "0.75rem", height: "0.75rem", fill: "#FFD700", flexShrink: 0 }}>
              <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
            </svg>
            <div style={{ height: "1px", width: "5rem", background: "linear-gradient(to left, transparent, #FF9933)" }} />
          </div>
          <p
            className="font-display"
            style={{ color: "#5A3A1A", lineHeight: 1.75, letterSpacing: "0.02em", textAlign: "center", marginTop: "1.5rem", maxWidth: "36rem", fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)" }}
          >
            To help you feel at ease and enjoy every moment, we&apos;ve gathered a few thoughtful details before the big day.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingData.thingsToKnow.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Hash;
            const accent = cardAccents[index % cardAccents.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className="relative h-full rounded-2xl p-8 text-center"
                  style={{
                    background: "linear-gradient(145deg, #FFF8F0, #FAEBD7)",
                    border: "1.5px solid rgba(255,153,51,0.3)",
                    boxShadow: "0 4px 20px rgba(139,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
                  }}
                >
                  {/* Paithani top accent bar */}
                  <div
                    className="absolute top-0 left-6 right-6 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
                  />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 + 0.25, type: "spring" }}
                    className="flex justify-center mb-6"
                  >
                    <div
                      className="flex items-center justify-center w-16 h-16 rounded-full"
                      style={{
                        background: `radial-gradient(circle, ${accent}20 0%, ${accent}08 100%)`,
                        border: `1.5px solid ${accent}66`,
                        boxShadow: `0 4px 16px ${accent}20`,
                      }}
                    >
                      <IconComponent className="w-7 h-7" style={{ color: accent }} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="font-serif uppercase mb-3"
                    style={{ fontSize: "1.3rem", color: "#1E0040", letterSpacing: "0.1em" }}
                  >
                    {item.title}
                  </h3>

                  <div className="flex justify-center mb-4">
                    <div className="h-px w-10" style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }} />
                  </div>

                  <p
                    className="font-display text-sm md:text-base leading-relaxed text-center"
                    style={{ color: "#4A2E0E", lineHeight: 1.75, textAlign: "center" }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,153,51,0.35), transparent)" }} />
    </section>
  );
}
