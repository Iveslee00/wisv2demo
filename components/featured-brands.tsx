"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const cards = [
  {
    name: "SHISEIDO",
    zhName: "資生堂",
    origin: "日本 · 1872",
    tagline: "百年淬鍊的美學極致",
    img: "/image/home/06.jpg",
  },
  {
    name: "SK-II",
    zhName: "SK-II",
    origin: "日本 · 頂級保養",
    tagline: "神仙水傳奇，每天上演",
    img: "/image/home/07.jpg",
  },
  {
    name: "LANEIGE",
    zhName: "蘭芝",
    origin: "韓國 · 水科學",
    tagline: "水感科技，為現代肌膚而生",
    img: "/image/home/08.jpg",
  },
];

const list = [
  { name: "IPSA",   zhName: "茵芙莎", origin: "日本 · 科學美容", no: "04" },
  { name: "CLIO",   zhName: "珂莉歐", origin: "韓國 · 大膽彩妝", no: "05" },
  { name: "HERA",   zhName: "赫拉",   origin: "韓國 · 奢華美妝", no: "06" },
];

export default function FeaturedBrands() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="relative bg-[#F5EFE8] overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at right center, rgba(75,36,56,0.28) 0%, transparent 70%)" }}
      />

      {/* Header — constrained */}
      <div ref={ref} className="wis-container pt-12 md:pt-16 pb-6 md:pb-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-5"
          >
            <div className="h-px w-8 bg-[#8C6A78]/35" />
            <span className="wis-label text-[#8C6A78]">品牌專區 · Featured Brands</span>
            <div className="h-px w-8 bg-[#8C6A78]/35" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1, ease: EASE }}
            className="wis-display text-[#4B2438]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            引領風潮的品牌
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="wis-italic text-[#8C6A78] mt-2"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.6rem)" }}
          >
            Brands That Spark Influence
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="text-sm text-[#4B2438]/70 mt-4 leading-relaxed max-w-sm"
          >
            精心策選，引領美妝趨勢、文化與現代生活風格的頂尖品牌。
          </motion.p>
        </div>
      </div>

      {/* 3-column card grid — true full-bleed */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
        {cards.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: i * 0.12, ease: EASE }}
              className="relative overflow-hidden group cursor-pointer"
              style={{ height: "clamp(300px, 38vw, 560px)" }}
            >
              {/* Image */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <Image
                  src={brand.img}
                  alt={brand.zhName}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
              </motion.div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0306]/88 via-[#0a0306]/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-[#4B2438]/20 pointer-events-none"
              />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-center">
                <p className="wis-label text-[#8C6A78] mb-2">{brand.origin}</p>
                <h3
                  className="wis-display text-[#F5EFE8] mb-1"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)" }}
                >
                  {brand.zhName}
                </h3>
                <p className="wis-label text-[#F5EFE8]/60" style={{ letterSpacing: "0.22em" }}>
                  {brand.name}
                </p>
                {/* Tagline on hover */}
                <p
                  className="wis-italic text-[#d4b8c6]/65 mt-3 text-sm leading-relaxed
                             opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-20
                             transition-all duration-500 overflow-hidden"
                >
                  {brand.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      {/* Secondary brand list — contained */}
      <div className="wis-container pb-10 md:pb-16">
        <div className="border-t border-[#4B2438]/12">
          {list.map((b, i) => (
            <motion.div
              key={b.name}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.55 + i * 0.08, ease: EASE }}
              className="group flex items-center justify-between border-b border-[#4B2438]/12
                         py-5 md:py-6 cursor-pointer
                         hover:pl-3 transition-all duration-400"
            >
              <div className="flex items-center gap-5 md:gap-8 min-w-0">
                <span className="wis-label text-[#8C6A78]/80 hidden sm:block shrink-0" style={{ letterSpacing: "0.25em" }}>
                  {b.no}
                </span>
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3
                      className="wis-display text-[#1a1a1a] group-hover:text-[#4B2438] transition-colors duration-300 leading-none"
                      style={{ fontSize: "clamp(1.4rem, 3vw, 2.6rem)" }}
                    >
                      {b.zhName}
                    </h3>
                    <span
                      className="wis-label text-[#8C6A78]/60"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      {b.name}
                    </span>
                  </div>
                  <p className="wis-label text-[#8C6A78]/60 mt-1.5" style={{ letterSpacing: "0.28em" }}>
                    {b.origin}
                  </p>
                </div>
              </div>
              <svg
                width="22" height="11" viewBox="0 0 22 11" fill="none"
                className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1"
              >
                <path d="M0 5.5H20M15.5 1L20 5.5L15.5 10" stroke="#8C6A78" strokeWidth="1.2" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
