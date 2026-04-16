"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden">
      <motion.div
        style={{ y, scale, backgroundImage: "url(/img/hero.jpg)" }}
        className="absolute inset-0 bg-cover bg-center brightness-[0.55]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-mono text-[8px] tracking-[5px] text-white/40 mb-3"
        >
          ATHLETIC CLUB · GRIMSTAD · NORWAY
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-[clamp(36px,9vw,56px)] tracking-[clamp(8px,3vw,20px)] leading-none mb-2"
        >
          FUBAR
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-mono text-[11px] tracking-[5px] text-accent"
        >
          BEYOND RECOVERY
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-mono text-[8px] tracking-[3px] text-white/25 mt-6"
        >
          DROP 001 · SUMMER 2026 · LIMITED
        </motion.div>
      </div>
    </section>
  );
}
