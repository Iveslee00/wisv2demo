"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  opacity: number; od: number;
}

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf: number;
    const pts: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    for (let i = 0; i < 55; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2 - 0.05,
        radius: Math.random() * 1.2 + 0.4,
        opacity: Math.random() * 0.38 + 0.08,
        od: (Math.random() - 0.5) * 0.003,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(245,239,232,${0.05 * (1 - d / 100)})`;
            ctx.lineWidth = 0.4;
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        p.opacity += p.od;
        if (p.opacity <= 0.04 || p.opacity >= 0.5) p.od *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
        g.addColorStop(0, `rgba(245,239,232,${p.opacity * 0.6})`);
        g.addColorStop(1, "rgba(75,36,56,0)");
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,239,232,${p.opacity * 0.5})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full z-10 pointer-events-none" />;
}

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const [hidden, setHidden] = useState(false);

  /* Lock scroll while hero is covering the page */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleEnter = () => {
    setEntered(true);
  };

  const handleExitComplete = () => {
    document.body.style.overflow = "";
    setHidden(true);
    window.dispatchEvent(new CustomEvent("wis:hero-exited"));
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.0, delay, ease: EASE },
  });

  if (hidden) return null;

  return (
    <motion.section
      className="fixed inset-0 z-[100] bg-[#4B2438] overflow-hidden"
      animate={entered ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: EASE }}
      onAnimationComplete={entered ? handleExitComplete : undefined}
      style={{ minHeight: 620 }}
    >
      {/* Particles */}
      <ParticleCanvas />

      {/* Flowing SVG lines */}
      <svg
        aria-hidden
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity: 0.07 }}
      >
        <motion.path
          d="M0,500 C240,360 480,640 720,500 C960,360 1200,640 1440,500"
          stroke="#F5EFE8" strokeWidth="1" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,380 C300,550 620,220 920,400 C1100,540 1300,290 1440,390"
          stroke="#d4b8c6" strokeWidth="0.7" fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.5, delay: 1.1, ease: "easeInOut" }}
        />
      </svg>

      {/* Copy */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">

          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0.35)}
            className="wis-label text-[#8C6A78] mb-10"
            style={{ letterSpacing: "0.55em" }}
          >
            華資粧業 · HWA TSU COSMETICS
          </motion.p>

          {/* Logo */}
          <div
            className="relative mb-8"
            style={{ width: "clamp(340px, 54vw, 720px)", height: "clamp(100px, 16vw, 212px)" }}
          >
            <Image
              src="/image/home/logo.svg"
              alt="WIS"
              fill
              priority
              className="object-contain [filter:brightness(0)_invert(1)]"
            />
          </div>

          {/* Tagline */}
          <motion.p
            {...fadeUp(1.2)}
            className="wis-italic text-[#F5EFE8]/38 mb-12"
            style={{ fontSize: "clamp(0.85rem, 1.5vw, 1.05rem)" }}
          >
            Beauty is not waiting — it is ignited.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(1.5)}>
            <motion.button
              onClick={handleEnter}
              className="inline-flex items-center gap-3 border border-[#F5EFE8]/25 text-[#F5EFE8]
                         wis-label px-12 py-4 relative overflow-hidden group cursor-pointer
                         hover:border-[#F5EFE8]/50 transition-colors duration-400"
              style={{ letterSpacing: "0.3em" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <span className="relative z-10">探索品牌</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5EFE8]/5 to-transparent
                               -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
