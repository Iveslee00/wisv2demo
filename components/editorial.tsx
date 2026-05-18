"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const articles = [
  {
    id: 1,
    img: "/image/home/09.jpg",
    category: "美學觀點",
    enCategory: "Philosophy",
    title: "美，超越產品本身",
    subtitle: "情緒是現代美妝的核心語言",
    excerpt: "美不再只是塗抹的動作，而是一種感受。新奢華活在觸感、香氣與儀式感之中。",
    reading: "6",
  },
  {
    id: 2,
    img: "/image/home/10.jpg",
    category: "潮流文化",
    enCategory: "Culture",
    title: "情緒即美麗",
    subtitle: "當品牌開始對靈魂說話",
    excerpt: "最強大的美妝品牌，賣的不是產品，而是一種你想成為的樣子。",
    reading: "4",
  },
  {
    id: 3,
    img: "/image/home/09.jpg",
    category: "視覺美學",
    enCategory: "Aesthetics",
    title: "視覺奢華的崛起",
    subtitle: "設計，成為新時代的溢價語言",
    excerpt: "當配方趨近完美，包裝成為最後的差異戰場。視覺奢華是新貨幣。",
    reading: "5",
  },
];

export default function Editorial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const [large, ...smalls] = articles;

  /* Large card height drives the row — small cards use flex-1 to fill exactly */
  const LARGE_H = "clamp(380px, 50vw, 620px)";

  return (
    <section className="relative bg-[#F5EFE8] wis-section overflow-hidden">
      {/* Decorative BG letter */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 select-none pointer-events-none leading-none wis-display"
        style={{
          fontSize: "clamp(8rem, 22vw, 18rem)",
          color: "rgba(75,36,56,0.025)",
        }}
      >
        美
      </div>

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
            <span className="wis-label text-[#8C6A78]">品牌故事 · Editorial</span>
            <div className="h-px w-8 bg-[#8C6A78]/35" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="wis-display text-[#1a1a1a]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            美的故事
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="wis-italic text-[#4B2438] mt-2"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          >
            &amp; 趨勢觀察
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            href="/news"
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

        {/* Grid: large left | two smalls right — row height driven by LARGE_H */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2"
          style={{ gridTemplateRows: `${LARGE_H}` }}
        >

          {/* Large article */}
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
                alt={large.title}
                fill
                className="object-cover object-center"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0306]/90 via-[#0a0306]/25 to-transparent" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 bg-[#4B2438]/18 pointer-events-none"
            />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
              <div className="flex items-center gap-2 mb-3">
                <span className="wis-label text-[#8C6A78]">{large.category}</span>
                <span className="text-[#8C6A78]/30 text-xs">·</span>
                <span className="wis-label text-[#8C6A78]/45">{large.enCategory}</span>
              </div>
              <h3
                className="wis-display text-[#F5EFE8] mb-2"
                style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)" }}
              >
                {large.title}
              </h3>
              <p
                className="wis-italic text-[#F5EFE8]/50 mb-3 leading-relaxed"
                style={{ fontSize: "clamp(0.85rem, 1.3vw, 1rem)" }}
              >
                {large.subtitle}
              </p>
              <p className="text-sm text-[#F5EFE8]/35 leading-relaxed mb-5 hidden md:block max-w-sm">
                {large.excerpt}
              </p>
              <span className="wis-label text-[#8C6A78]/55" style={{ letterSpacing: "0.28em" }}>
                閱讀 {large.reading} 分鐘
              </span>
            </div>
          </motion.article>

          {/* Two small articles stacked — flex-1 makes them split the row height equally */}
          <div className="flex flex-col gap-1.5 md:gap-2">
            {smalls.map((a, i) => (
              <motion.article
                key={a.id}
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
                      src={a.img}
                      alt={a.title}
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
                    <span className="wis-label text-[#8C6A78]">{a.category}</span>
                    <span className="text-[#8C6A78]/28 text-xs">·</span>
                    <span className="wis-label text-[#8C6A78]/38">{a.enCategory}</span>
                  </div>
                  <h3
                    className="wis-display text-[#1a1a1a] leading-snug mb-1.5
                               group-hover:text-[#4B2438] transition-colors duration-300"
                    style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)" }}
                  >
                    {a.title}
                  </h3>
                  <p
                    className="wis-italic text-[#4B2438]/50 mb-2.5 leading-relaxed line-clamp-2"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {a.subtitle}
                  </p>
                  <p className="text-xs text-[#1a1a1a]/38 leading-relaxed line-clamp-2 hidden sm:block">
                    {a.excerpt}
                  </p>
                  <span className="wis-label text-[#8C6A78]/45 mt-3 block" style={{ letterSpacing: "0.28em" }}>
                    閱讀 {a.reading} 分鐘
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
