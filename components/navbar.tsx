"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const leftLinks = [
  { zh: "關於 WIS", href: "/about" },
  { zh: "品牌專區", href: "/brands" },
];
const rightLinks = [
  { zh: "最新消息", href: "/news" },
  { zh: "聯絡我們", href: "/contact" },
];
const allLinks = [...leftLinks, ...rightLinks];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-[#4B2438] hover:text-[#8C6A78]"
    : "text-[#F5EFE8] hover:text-[#d4b8c6]";
  const barColor = scrolled ? "#4B2438" : "#F5EFE8";

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5EFE8]/92 backdrop-blur-xl border-b border-[#4B2438]/08"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 grid grid-cols-3 items-center">

          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-8 justify-start">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-widest transition-colors duration-400 group ${linkClass}`}
              >
                {link.zh}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400 ${
                    scrolled ? "bg-[#4B2438]" : "bg-[#F5EFE8]"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Center logo */}
          <div className="flex justify-center">
            <Link href="/" className="relative block w-[130px] h-[38px] md:w-[190px] md:h-[56px]">
              <Image
                src="/image/home/logo.svg"
                alt="WIS"
                fill
                priority
                className={`object-contain transition-all duration-500 ${
                  scrolled ? "" : "[filter:brightness(0)_invert(1)]"
                }`}
              />
            </Link>
          </div>

          {/* Right nav */}
          <nav className="hidden md:flex items-center gap-8 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm tracking-widest transition-colors duration-400 group ${linkClass}`}
              >
                {link.zh}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400 ${
                    scrolled ? "bg-[#4B2438]" : "bg-[#F5EFE8]"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger (right side) */}
          <div className="md:hidden flex justify-end col-start-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-[5px] p-1"
              aria-label="選單"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7, backgroundColor: "#F5EFE8" } : { rotate: 0, y: 0, backgroundColor: barColor }}
                className="block w-6 h-px origin-center"
                style={{ backgroundColor: barColor }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-px"
                style={{ backgroundColor: barColor }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7, backgroundColor: "#F5EFE8" } : { rotate: 0, y: 0, backgroundColor: barColor }}
                className="block w-6 h-px origin-center"
                style={{ backgroundColor: barColor }}
              />
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0d0508] flex flex-col items-center justify-center gap-8"
          >
            {/* Logo */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2" style={{ width: 110, height: 32 }}>
              <Image
                src="/image/home/logo.svg"
                alt="WIS"
                fill
                className="object-contain [filter:brightness(0)_invert(1)] opacity-60"
              />
            </div>

            {allLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.06 + i * 0.07, duration: 0.45 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-center text-[#F5EFE8]/75 hover:text-[#F5EFE8] text-2xl tracking-[0.2em] transition-colors duration-300"
                >
                  {link.zh}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
