"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const kols = [
  {
    id: 1,
    img: "/image/home/09.jpg",
    category: "美妝保養",
    enCategory: "Beauty",
    name: "林曉晴",
    handle: "@xiaoming.beauty",
    platform: "Instagram",
    followers: "18.5萬 粉絲",
    quote: "WIS 讓我找到了真正適合亞洲膚質的保養方式，每一款產品都是精心策劃的美麗體驗。",
  },
  {
    id: 2,
    img: "/image/home/10.jpg",
    category: "時尚彩妝",
    enCategory: "Fashion",
    name: "陳美珊",
    handle: "@melissa.glam",
    platform: "YouTube",
    followers: "32萬 訂閱",
    quote: "與 WIS 合作，讓我深刻理解什麼是真正的高端品牌美學。",
  },
  {
    id: 3,
    img: "/image/home/09.jpg",
    category: "生活風格",
    enCategory: "Lifestyle",
    name: "王子涵",
    handle: "@zihan.lifestyle",
    platform: "小紅書",
    followers: "45萬 粉絲",
    quote: "WIS 的品牌理念和我的生活美學完美契合，每次使用都是一種享受。",
  },
];

export default function Editorial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [large, ...smalls] = kols;

  const LARGE_H = "clamp(380px, 50vw, 620px)";

  return (
    <section className="relative bg-[#F5EFE8] wis-section overflow-hidden">
      <div ref={ref} className="wis-container">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="h-px w-8 bg-[#8C6A78]/35" />
            <span className="wis-label text-[#8C6A78]">KOL 代言 · Influencers</span>
            <div className="h-px w-8 bg-[#8C6A78]/35" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="wis-display text-[#1a1a1a]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            KOL 專區
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="wis-italic text-[#4B2438] mt-2"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          >
            品牌寫手 &amp; 意見領袖
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.26 }}
            className="text-sm text-[#4B2438]/65 mt-4 leading-relaxed max-w-md"
          >
            與各領域頂尖 KOL 攜手合作，透過真實體驗傳遞 WIS 品牌的美麗哲學。
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.34 }}
            href="/kol"
            className="inline-flex items-center gap-2 wis-label text-[#8C6A78] hover:text-[#4B2438]
                       transition-colors duration-300 mt-6"
            style={{ letterSpacing: "0.3em" }}
          >
            查看全部
            <svg width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 4H14M11 1L14 4L11 7" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.a>
        </div>

        {/* Grid: large left | two smalls right */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2"
          style={{ gridTemplateRows: `${LARGE_H}` }}
        >

          {/* Large KOL card */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: EASE }}
            className="relative overflow-hidden group cursor-pointer h-full"
          >
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <Image
                src={large.img}
                alt={large.name}
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0306]/92 via-[#0a0306]/30 to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-[#4B2438]/18 pointer-events-none"
            />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <div className="flex items-center gap-2 mb-3">
                <span className="wis-label text-[#8C6A78]">{large.category}</span>
                <span className="text-[#8C6A78]/40 text-xs">·</span>
                <span className="wis-label text-[#8C6A78]/65">{large.platform}</span>
              </div>
              <h3
                className="wis-display text-[#F5EFE8] mb-1"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
              >
                {large.name}
              </h3>
              <p className="wis-label text-[#8C6A78]/80 mb-4" style={{ letterSpacing: "0.2em" }}>
                {large.handle}
              </p>
              <p className="text-sm text-[#F5EFE8]/70 leading-relaxed mb-5 hidden md:block max-w-sm">
                &ldquo;{large.quote}&rdquo;
              </p>
              <span className="wis-label text-[#8C6A78]/75" style={{ letterSpacing: "0.28em" }}>
                {large.followers}
              </span>
            </div>
          </motion.article>

          {/* Two small KOL cards stacked */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            {smalls.map((k, i) => (
              <motion.article
                key={k.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.18 + i * 0.14, ease: EASE }}
                className="group relative overflow-hidden flex cursor-pointer flex-1 min-h-0"
              >
                {/* Thumbnail */}
                <div className="relative shrink-0 overflow-hidden" style={{ width: "38%" }}>
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  >
                    <Image
                      src={k.img}
                      alt={k.name}
                      fill
                      className="object-cover object-center"
                      sizes="20vw"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-[#0a0306]/20" />
                </div>

                {/* Text */}
                <div
                  className="flex-1 flex flex-col justify-center px-6 md:px-8 py-5
                              bg-white border border-[#4B2438]/06
                              group-hover:border-[#4B2438]/18 transition-colors duration-300"
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="wis-label text-[#8C6A78]">{k.category}</span>
                    <span className="text-[#8C6A78]/40 text-xs">·</span>
                    <span className="wis-label text-[#8C6A78]/65">{k.platform}</span>
                  </div>
                  <h3
                    className="wis-display text-[#1a1a1a] leading-snug mb-1
                               group-hover:text-[#4B2438] transition-colors duration-300"
                    style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
                  >
                    {k.name}
                  </h3>
                  <p className="wis-label text-[#8C6A78]/70 mb-2.5" style={{ letterSpacing: "0.18em" }}>
                    {k.handle}
                  </p>
                  <p className="text-xs text-[#1a1a1a]/60 leading-relaxed line-clamp-2 hidden sm:block">
                    &ldquo;{k.quote}&rdquo;
                  </p>
                  <span className="wis-label text-[#8C6A78]/70 mt-3 block" style={{ letterSpacing: "0.28em" }}>
                    {k.followers}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
