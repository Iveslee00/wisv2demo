"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const items = [
  { img: "/image/home/02.jpg", brand: "SHISEIDO", zh: "資生堂", name: "時光琉璃御藏極上美容液", tag: "保濕精華" },
  { img: "/image/home/03.jpg", brand: "SK-II",    zh: "SK-II",  name: "晶透輕感神仙水",         tag: "調理精華" },
  { img: "/image/home/04.jpg", brand: "IPSA",     zh: "茵芙莎", name: "自律循環水",               tag: "調理精華" },
  { img: "/image/home/06.jpg", brand: "SHISEIDO", zh: "資生堂", name: "百優精純乳",               tag: "保濕乳液" },
  { img: "/image/home/07.jpg", brand: "SK-II",    zh: "SK-II",  name: "輕透感神仙水 EX",          tag: "調理精華" },
  { img: "/image/home/08.jpg", brand: "LANEIGE",  zh: "蘭芝",   name: "水凝霜",                   tag: "保濕霜" },
  { img: "/image/home/09.jpg", brand: "IPSA",     zh: "茵芙莎", name: "美膚調理精華",             tag: "肌膚調理" },
  { img: "/image/home/10.jpg", brand: "CLIO",     zh: "珂莉歐", name: "眼影盤",                   tag: "彩妝系列" },
];

export default function ProductCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-8%" });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    updateArrows();
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 580, behavior: "smooth" });
  };

  /* ── drag-to-scroll ── */
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    const startX    = e.pageX;
    const startLeft = el.scrollLeft;
    const onMove    = (ev: MouseEvent) => { el.scrollLeft = startLeft - (ev.pageX - startX); };
    const onUp      = () => { window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const ArrowBtn = ({ dir, disabled }: { dir: 1 | -1; disabled: boolean }) => (
    <button
      onClick={() => scroll(dir)}
      disabled={disabled}
      aria-label={dir === -1 ? "上一張" : "下一張"}
      className={`w-9 h-9 border flex items-center justify-center transition-colors duration-300
        ${disabled
          ? "border-[#4B2438]/15 text-[#4B2438]/20 cursor-not-allowed"
          : "border-[#4B2438]/35 text-[#4B2438] hover:border-[#4B2438] hover:bg-[#4B2438]/04"
        }`}
    >
      {dir === -1
        ? <svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M13 4.5H1M5 1L1 4.5L5 8" stroke="currentColor" strokeWidth="1.2"/></svg>
        : <svg width="13" height="9" viewBox="0 0 13 9" fill="none"><path d="M0 4.5H12M8 1L12 4.5L8 8" stroke="currentColor" strokeWidth="1.2"/></svg>
      }
    </button>
  );

  return (
    <section ref={sectionRef} className="relative bg-[#F5EFE8] py-12 md:py-18 overflow-hidden">
      {/* Header */}
      <div className="wis-container mb-7 md:mb-10 flex items-end justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-px w-6 bg-[#8C6A78]/40" />
            <span className="wis-label text-[#8C6A78]">商品精選 · Featured Products</span>
          </div>
          <h2 className="wis-display text-[#4B2438]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)" }}>
            精選商品
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2">
          <ArrowBtn dir={-1} disabled={!canPrev} />
          <ArrowBtn dir={1}  disabled={!canNext} />
        </div>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        className="flex gap-3 md:gap-4 overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing
                   pl-6 md:pl-12 xl:pl-16 pr-6"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: Math.min(i * 0.065, 0.35), ease: EASE }}
            className="shrink-0 group cursor-pointer select-none"
            style={{ width: "clamp(200px, 20vw, 268px)", scrollSnapAlign: "start" }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden bg-[#ece4db]"
              style={{ height: "clamp(255px, 28vw, 345px)" }}
            >
              <Image
                src={item.img}
                alt={item.name}
                fill
                draggable={false}
                className="object-cover object-center transition-transform duration-700 group-hover:scale-104"
                sizes="(max-width:768px) 220px, 268px"
              />
              <div className="absolute inset-0 bg-[#4B2438]/18 opacity-0 group-hover:opacity-100 transition-opacity duration-350" />
            </div>
            {/* Text */}
            <div className="pt-3 pb-1">
              <p className="wis-label text-[#8C6A78] mb-1">{item.zh} · {item.tag}</p>
              <p
                className="text-[#1a1a1a] leading-snug group-hover:text-[#4B2438] transition-colors duration-300"
                style={{ fontSize: "0.875rem" }}
              >
                {item.name}
              </p>
            </div>
          </motion.div>
        ))}
        {/* right breathing room */}
        <div className="shrink-0 w-6 md:w-12 xl:w-16" />
      </div>
    </section>
  );
}
