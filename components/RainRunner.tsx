"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import FadeIn from "./FadeIn";

export default function RainRunner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div
        style={{ y, backgroundImage: "url(/img/rain.jpg)" }}
        className="absolute inset-[-80px] bg-cover bg-center brightness-[0.45]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />
      <div className="relative z-10 flex items-end min-h-[480px] px-6 py-14">
        <FadeIn y={20}>
          <div className="max-w-[280px]">
            <div className="font-mono text-[7px] tracking-[4px] text-accent mb-3">LAYER · DROP 001</div>
            <h2 className="font-mono text-[22px] tracking-[5px] leading-tight mb-3">
              STORM<br />SHELL
            </h2>
            <p className="text-[13px] leading-[1.8] text-[#999] mb-5 font-light">
              3-layer shell built for Norwegian autumn. Seam-sealed, YKK zip, packs to nothing.
            </p>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[16px]">1 899 NOK</span>
              <span className="font-mono text-[7px] tracking-[3px] text-[#444]">LIMITED</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
