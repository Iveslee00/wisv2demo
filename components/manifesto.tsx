"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 36 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 1.1, delay: i * 0.14, ease: EASE },
    }),
  };

  const lineReveal: Variants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 1.4, ease: EASE } },
  };

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative bg-[#F5EFE8] py-24 md:py-44 px-5 overflow-hidden"
    >
      {/* Decorative BG letterform */}
      <div
        aria-hidden
        className="absolute top-0 right-0 select-none pointer-events-none leading-none text-[#4B2438]/[0.03]"
        style={{ fontSize: "clamp(8rem,22vw,18rem)", fontWeight: 700, letterSpacing: "-0.04em" }}
      >
        W
      </div>

      {/* Top rule */}
      <motion.div
        variants={lineReveal}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="absolute top-0 left-0 right-0 h-px bg-[#4B2438]/12 origin-left"
      />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-4 mb-14 md:mb-20"
        >
          <div className="h-px w-8 bg-[#8C6A78]/40" />
          <span className="text-[10px] tracking-[0.5em] text-[#8C6A78] uppercase">品牌理念 · Our Philosophy</span>
        </motion.div>

        {/* 大標：中文宣言分行顯示 */}
        <div className="mb-14 md:mb-20 space-y-2 md:space-y-3">
          {["美，不是等待的結果。", "美，是被點燃的力量。"].map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 + i * 0.18, ease: EASE }}
            >
              <span
                className={`block leading-tight tracking-tight ${
                  i === 0 ? "text-[#1a1a1a]" : "text-[#4B2438]"
                }`}
                style={{ fontSize: "clamp(1.8rem,5vw,4.2rem)", fontWeight: 700 }}
              >
                {line}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.55, ease: EASE }}
          >
            <span
              className="block font-editorial text-[#8C6A78] leading-tight"
              style={{ fontSize: "clamp(1.4rem,3.5vw,3rem)" }}
            >
              Beauty is not waiting — it is ignited.
            </span>
          </motion.div>
        </div>

        {/* 內文兩欄 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5"
          >
            <p className="text-base md:text-lg text-[#1a1a1a]/70 leading-loose tracking-wide">
              在 WIS，我們在創意與市場之間點燃火花，在概念與成長之間創造動能，推動美的前進。
            </p>
            <p className="text-sm text-[#1a1a1a]/50 leading-loose tracking-wide">
              At WIS, we spark ideas between creativity and market — between concept and growth,
              we create the momentum that drives beauty forward.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-5 md:pt-10"
          >
            <p className="text-base md:text-lg text-[#1a1a1a]/70 leading-loose tracking-wide">
              WIS 不只是名稱，而是一種行動。<br />
              點燃新想法，點燃新品牌，點燃下一個新趨勢。
            </p>
            <p
              className="font-display text-[#4B2438] leading-tight"
              style={{ fontSize: "clamp(1.2rem,2.5vw,2rem)", letterSpacing: "-0.02em" }}
            >
              WIS is not a name.<br />It is an action.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 md:mt-28 flex items-center gap-5"
        >
          <div className="h-px flex-1 bg-[#4B2438]/10" />
          <span className="text-[9px] tracking-[0.4em] text-[#8C6A78]/50 uppercase">台北 · 台灣 · Taipei, Taiwan</span>
          <div className="h-px flex-1 bg-[#4B2438]/10" />
        </motion.div>
      </div>
    </section>
  );
}
