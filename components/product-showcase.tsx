"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const products = [
  {
    id: 1,
    img: "/image/home/02.jpg",
    brand: "SHISEIDO",
    zhBrand: "資生堂",
    zhName: "時光琉璃御藏極上美容液",
    name: "Future Solution LX",
    tagline: "以時間淬鍊的光感極致",
    url: "https://www.momoshop.com.tw",
    platform: "momo 購物",
  },
  {
    id: 2,
    img: "/image/home/03.jpg",
    brand: "SK-II",
    zhBrand: "SK-II",
    zhName: "晶透輕感神仙水",
    name: "Facial Treatment Essence",
    tagline: "奇蹟之水，每天上演",
    url: "https://shopee.tw",
    platform: "蝦皮購物",
  },
  {
    id: 3,
    img: "/image/home/04.jpg",
    brand: "IPSA",
    zhBrand: "茵芙莎",
    zhName: "自律循環水",
    name: "The Time Reset Aqua",
    tagline: "看不見的奢華，看得見的蛻變",
    url: "https://www.momoshop.com.tw",
    platform: "momo 購物",
  },
];

/* Card row: image fills left (or right), text fills the other side.
   On desktop, row height is fixed at 500px so both sides align. */
function ProductCard({ p, index }: { p: (typeof products)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const flip = index % 2 !== 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: EASE }}
      /* Mobile: stack vertically. Desktop: side by side, fixed height 500px */
      className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} w-full`}
      style={{ minHeight: "auto" }}
    >
      {/* ── Image panel ── */}
      <div
        className="relative w-full md:w-1/2 overflow-hidden bg-[#1a0b12]"
        style={{ height: "clamp(260px, 50vw, 640px)" }}
      >
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Image
            src={p.img}
            alt={p.zhName}
            fill
            className="object-cover object-center"
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0306]/45 to-transparent pointer-events-none" />
        <span
          className="absolute top-5 left-6 wis-label text-[#F5EFE8]/20"
          aria-hidden
        >
          0{p.id}
        </span>
      </div>

      {/* ── Text panel ── */}
      <div
        className="relative w-full md:w-1/2 bg-[#F5EFE8] flex flex-col justify-center"
        style={{ height: "clamp(260px, 50vw, 640px)" }}
      >
        {/* Subtle side border accent */}
        <div
          className={`absolute top-1/4 bottom-1/4 w-px bg-[#8C6A78]/15 ${flip ? "right-0" : "left-0"} hidden md:block`}
        />

        <div className={`px-10 md:px-16 lg:px-24 xl:px-32 py-10 md:py-0 ${flip ? "md:text-right md:items-end" : ""} flex flex-col ${flip ? "md:items-end" : "md:items-start"}`}>
          {/* Brand */}
          <p className="wis-label text-[#8C6A78] mb-4">
            {p.zhBrand} · {p.brand}
          </p>

          {/* Product name */}
          <h3
            className="wis-display text-[#1a1a1a] mb-1"
            style={{ fontSize: "clamp(1.25rem, 2vw, 1.85rem)" }}
          >
            {p.zhName}
          </h3>
          <p
            className="wis-label text-[#4B2438]/50 mb-6"
            style={{ letterSpacing: "0.2em" }}
          >
            {p.name}
          </p>

          {/* Tagline */}
          <p
            className="wis-italic text-[#8C6A78] mb-10 leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
          >
            {p.tagline}
          </p>

          {/* CTA */}
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 wis-label text-[#8C6A78] hover:text-[#4B2438] transition-colors duration-300 group"
            style={{ letterSpacing: "0.28em" }}
          >
            <span>前往 {p.platform}</span>
            <svg
              width="20" height="10" viewBox="0 0 20 10" fill="none"
              className="group-hover:translate-x-1.5 transition-transform duration-300"
            >
              <path d="M0 5H18M14 1L18 5L14 9" stroke="currentColor" strokeWidth="1.1" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="products" className="relative bg-[#F5EFE8] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(75,36,56,0.06) 0%, transparent 60%)" }}
      />

      {/* Header — constrained to wis-container */}
      <div ref={ref} className="wis-container pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="h-px w-8 bg-[#8C6A78]/35" />
            <span className="wis-label text-[#8C6A78]">嚴選商品 · Selected Products</span>
            <div className="h-px w-8 bg-[#8C6A78]/35" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="wis-display text-[#4B2438]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            精選美妝
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="wis-italic text-[#8C6A78] mt-2"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          >
            Curated Beauty Picks
          </motion.p>
        </div>
      </div>

      {/* Product rows — full-bleed edge to edge */}
      <div className="flex flex-col gap-px pb-10 md:pb-16">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
