"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CampaignBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ minHeight: "70vh" }}>
      {/* Parallax BG */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-12%] z-0">
        <Image
          src="/image/home/05.jpg"
          alt="Campaign"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#F5EFE8]/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 65%, rgba(75,36,56,0.18) 0%, transparent 55%)," +
              "radial-gradient(ellipse at 75% 35%, rgba(140,106,120,0.12) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* Content — fully centered */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center
                   px-6 py-24 md:py-36"
        style={{ minHeight: "70vh" }}
      >
        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: EASE }}
          className="w-10 h-px bg-[#8C6A78]/40 mb-10 origin-center"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="wis-label text-[#8C6A78] mb-7"
          style={{ letterSpacing: "0.52em" }}
        >
          品牌宣言 · Campaign 2025
        </motion.p>

        {/* CH headline — two lines */}
        <motion.h2
          initial={{ opacity: 0, y: 34 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.28, ease: EASE }}
          className="wis-display text-[#1a1a1a] mb-2"
          style={{ fontSize: "clamp(2.2rem, 7.5vw, 7rem)", lineHeight: 0.9 }}
        >
          我們不跟隨美麗，
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 34 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.42, ease: EASE }}
          className="wis-display mb-10"
          style={{
            fontSize: "clamp(2.2rem, 7.5vw, 7rem)",
            lineHeight: 0.9,
            background: "linear-gradient(90deg, #4B2438 0%, #8C6A78 50%, #4B2438 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          我們點燃美麗。
        </motion.h2>

        {/* EN */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.58 }}
          className="wis-italic text-[#4B2438]/55 mb-12"
          style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.1rem)" }}
        >
          We don&apos;t follow beauty. We create the spark.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: "rgba(75,36,56,0.06)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3 }}
            className="border border-[#4B2438]/30 text-[#4B2438]/75 wis-label
                       px-12 py-4 hover:text-[#4B2438] hover:border-[#4B2438]/60
                       transition-all duration-400"
            style={{ letterSpacing: "0.35em" }}
          >
            深入了解
          </motion.button>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.32, ease: EASE }}
          className="w-10 h-px bg-[#8C6A78]/40 mt-10 origin-center"
        />
      </div>
    </section>
  );
}
