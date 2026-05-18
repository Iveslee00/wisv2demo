"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const navLinks = [
  { zh: "關於 WIS", href: "/about" },
  { zh: "品牌專區", href: "/brands" },
  { zh: "最新消息", href: "/news" },
  { zh: "聯絡我們", href: "/contact" },
];

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <footer ref={ref} className="relative bg-[#200a16] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5EFE8]/15 to-transparent" />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50vw] h-[15vh] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center bottom, rgba(75,36,56,0.14) 0%, transparent 70%)" }}
      />

      <div className="wis-container py-16 md:py-20">
        {/* Centered logo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: EASE }}
          className="flex justify-center mb-14 md:mb-16"
        >
          <div className="relative w-[180px] h-[52px] md:w-[260px] md:h-[76px]">
            <Image
              src="/image/home/logo.svg"
              alt="WIS"
              fill
              className="object-contain [filter:brightness(0)_invert(1)] opacity-50"
            />
          </div>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 pb-12 border-b border-[#F5EFE8]/05">
          {/* Col 1: Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.07, ease: EASE }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <p className="wis-italic text-[#F5EFE8]/80 mb-2 leading-relaxed" style={{ fontSize: "0.85rem" }}>
              點燃美麗
            </p>
            <p className="wis-label text-[#8C6A78]/80 leading-loose" style={{ letterSpacing: "0.22em" }}>
              We Spark Beauty<br />
              Beauty is not waiting — it is ignited.
            </p>
          </motion.div>

          {/* Col 2: Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.13, ease: EASE }}
            className="flex flex-col items-center"
          >
            <p className="wis-label text-[#8C6A78]/90 mb-5" style={{ letterSpacing: "0.42em" }}>網站導覽</p>
            <nav className="flex flex-col items-center gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#F5EFE8]/80 hover:text-[#F5EFE8] transition-colors duration-300 tracking-wide"
                >
                  {link.zh}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Col 3: Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.19, ease: EASE }}
            className="flex flex-col items-center md:items-end text-center md:text-right"
          >
            <p className="wis-label text-[#8C6A78]/90 mb-5" style={{ letterSpacing: "0.42em" }}>聯絡資訊</p>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-[#F5EFE8] tracking-wide">華資粧業股份有限公司</p>
                <p className="text-xs text-[#F5EFE8]/70 mt-0.5 tracking-wide">HWA TSU COSMETICS CO., LTD.</p>
              </div>
              <div className="text-xs text-[#F5EFE8]/75 leading-loose">
                <p>100 台北市中正區寶慶路 37 號 5 樓</p>
                <p>5F, No.37, Baoqing Rd., Taipei 100</p>
              </div>
              <a
                href="tel:+886223613585"
                className="text-xs text-[#8C6A78] hover:text-[#F5EFE8] transition-colors duration-300 block"
              >
                +886 2 2361-3585 ext. 1200
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="wis-label text-[#F5EFE8]/55 text-center sm:text-left" style={{ letterSpacing: "0.18em" }}>
            © {new Date().getFullYear()} 華資粧業股份有限公司. ALL RIGHTS RESERVED.
          </p>
          <p className="wis-italic text-[#8C6A78]/70" style={{ fontSize: "0.65rem" }}>
            We Spark Beauty
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
