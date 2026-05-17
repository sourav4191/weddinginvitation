"use client";
import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  alpha: number; color: string; size: number; decay: number;
};

type Rocket = {
  x: number; y: number; vy: number; color: string;
  trail: { x: number; y: number }[];
};

const COLS = [
  "#FFD700", "#FF9933", "#FF6B35", "#FFF9C4",
  "#228B22", "#4CAF50", "#8B0000", "#E91E63",
  "#9C27B0", "#FFFFFF", "#FFC200", "#FF4500", "#00E5FF",
];

export default function CrackersAnimation() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const resize = () => { cv.width = window.innerWidth; cv.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    let particles: Particle[] = [];
    let rockets: Rocket[] = [];
    let running = true;
    let raf: number;

    const rndCol = () => COLS[Math.floor(Math.random() * COLS.length)];

    const burst = (x: number, y: number, col: string) => {
      for (let i = 0; i < 95; i++) {
        const angle = (Math.PI * 2 * i) / 95 + (Math.random() - 0.5) * 0.5;
        const speed = 1.5 + Math.random() * 5.5;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: Math.random() > 0.45 ? col : rndCol(),
          size: 1.5 + Math.random() * 3.5,
          decay: 0.009 + Math.random() * 0.011,
        });
      }
      // white sparkle halo
      for (let i = 0; i < 28; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.4 + Math.random() * 2.5;
        particles.push({
          x: x + (Math.random() - 0.5) * 45,
          y: y + (Math.random() - 0.5) * 45,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: "#FFFFFF",
          size: 1 + Math.random() * 2,
          decay: 0.022 + Math.random() * 0.018,
        });
      }
    };

    const launch = () => {
      rockets.push({
        x: cv.width * (0.08 + Math.random() * 0.84),
        y: cv.height + 10,
        vy: -(8 + Math.random() * 10),
        color: rndCol(),
        trail: [],
      });
    };

    [0, 220, 440, 700, 1000, 1300, 1650, 2050].forEach(t => setTimeout(launch, t));
    const iv = setInterval(() => { if (running) launch(); }, 600);
    setTimeout(() => { running = false; clearInterval(iv); }, 11000);

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.11)";
      ctx.fillRect(0, 0, cv.width, cv.height);

      rockets = rockets.filter(r => {
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 22) r.trail.shift();
        r.y += r.vy;
        r.vy += 0.13;
        r.trail.forEach((t, j) => {
          const a = (j / r.trail.length) * 0.75;
          ctx.beginPath();
          ctx.arc(t.x, t.y, 2.5 * a, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,210,80,${a})`;
          ctx.fill();
        });
        if (r.vy >= -0.5) { burst(r.x, r.y, r.color); return false; }
        return true;
      });

      ctx.globalAlpha = 1;
      particles = particles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06;
        p.vx *= 0.993;
        p.alpha -= p.decay;
        if (p.alpha <= 0) return false;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.1, p.size * Math.sqrt(p.alpha)), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        return true;
      });

      ctx.globalAlpha = 1;

      if (running || rockets.length > 0 || particles.length > 0) {
        raf = requestAnimationFrame(draw);
      } else {
        ctx.clearRect(0, 0, cv.width, cv.height);
      }
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(iv);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none",
        zIndex: 25,
        mixBlendMode: "screen",
      }}
    />
  );
}
