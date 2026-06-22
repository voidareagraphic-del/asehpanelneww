"use client";
// src/components/sections/Hero.tsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { BrandBar } from "@/components/ui/BrandBar";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { AsteriskMarkGhost } from "@/components/ui/AsteriskMark";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EASING } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import dynamic from "next/dynamic";

const Mountain3D = dynamic(
  () => import("@/components/ui/Mountain3D").then((m) => m.Mountain3D),
  { ssr: false }
);

export function Hero() {
  const corridorRef = useRef<HTMLDivElement>(null);
  const lightRaysRef = useRef<HTMLDivElement[]>([]);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!reducedMotion) {
      lightRaysRef.current.forEach((ray, i) => {
        if (!ray) return;
        gsap.to(ray, {
          opacity: 0.04 + (i % 3) * 0.02,
          scaleY: 1.05,
          duration: 3 + i * 0.7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });
    }

    return () => {};
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
  };
  const item = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASING.cinematic } },
  };

  return (
    <div data-hero-scroll style={{ height: "300vh" }}>
    <section
      className="relative w-full h-screen min-h-[700px] overflow-hidden flex items-center"
      style={{ contain: "layout style", position: "sticky", top: 0 }}
    >

      {/* Layer 3: 3D Mountain model */}
      <div
        ref={corridorRef}
        className="absolute inset-0 will-change-transform [--hero-3d-shift:0%] md:[--hero-3d-shift:-25%]"
        style={isRTL ? { transform: "translateX(var(--hero-3d-shift, 0%))" } : undefined}
      >
        <Mountain3D />

        {/* Volumetric light rays */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            ref={(el) => { if (el) lightRaysRef.current[i] = el; }}
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `${18 + i * 11}%`,
              width: `${1.5 + (i % 3) * 0.8}%`,
              background: `linear-gradient(180deg, rgba(168,204,224,${0.06 + (i%3)*0.02}) 0%, rgba(168,204,224,0.01) 60%, transparent 100%)`,
              opacity: 0.05,
            }}
          />
        ))}
      </div>

      {/* Ghost asterisk watermark */}
      <AsteriskMarkGhost size={600} className={`${isRTL ? "left-[-100px]" : "right-[-100px]"} top-1/2 -translate-y-1/2 opacity-[0.03]`} />

      {/* Layer 6: Upward drift cloud -- hidden */}
      {/* <div ... /> */}

      {/* Content -- z-8: between cloud layers and driftUp layer */}
      <div className="relative w-full max-w-[1440px] mx-auto px-6 lg:px-20 pt-20 lg:pt-24" style={{ zIndex: 8 }}>
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Label row */}
          <motion.div variants={item} className="flex items-center gap-3 mb-5 lg:mb-8">
            <BrandBar width="140px" height={3} />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-steel">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={item} className={`font-black tracking-tight mb-5 lg:mb-8 ${isRTL ? "leading-[2.8]" : "leading-[0.93]"}`}>
            {[t.hero.line1, t.hero.line2, t.hero.line3].filter(Boolean).map((line, i) => (
              <span key={i} className="block" style={{
                color: "#FFFFFF",
                fontSize: isRTL ? "clamp(2.8rem, 5.5vw, 5rem)" : "clamp(3.15rem, 7.2vw, 6.3rem)",
                lineHeight: isRTL ? 1.6 : 0.93,
                letterSpacing: "-0.03em",
              }}>
                {line}
              </span>
            ))}
          </motion.h1>

          {/* Accent line */}
          <motion.div variants={item}>
            <div className="mb-4 lg:mb-6" style={{ width: 200, height: 1, background: "linear-gradient(90deg, #A8CCE0, transparent)" }} />
          </motion.div>

          {/* Sub-copy */}
          <motion.p variants={item} className="text-base text-steel leading-relaxed mb-2 lg:mb-3 max-w-xl">
            {t.hero.sub1}
          </motion.p>
          <motion.p variants={item} className="text-sm text-muted mb-6 lg:mb-10 max-w-xl">
            {t.hero.sub2}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-6 lg:mb-12">
            <Button variant="gradient-border" size="lg" href="#products">
              {t.hero.cta1} <ArrowRight size={16} />
            </Button>
            <Button variant="ghost" size="lg" href="#technology">
              {t.hero.cta2}
            </Button>
          </motion.div>

          {/* Eng badges */}
          <motion.div variants={item}>
            <EngBadgeRow badges={["ISO 9001:2014", "BS1D0", "EN 13501-1", "λD = 0.022 W/m·K"]} />
          </motion.div>

        </motion.div>
      </div>

      {/* lambda-D floating data tag */}
      <motion.div
        className={`absolute bottom-10 glass rounded-xl px-4 py-3 hidden md:flex flex-col gap-1 ${isRTL ? "left-8 lg:left-16" : "right-8 lg:right-16"}`}
        style={{ zIndex: 8 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.7, ease: EASING.cinematic }}
      >
        <span className="font-mono text-[0.65rem] text-muted uppercase tracking-widest">{t.hero.thermalLabel}</span>
        <span className="font-mono text-sm font-bold text-frost">λD = 0.022 W/m·K</span>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#products"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-steel transition-colors"
        style={{ zIndex: 8 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.25em] font-semibold">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.a>
    </section>
    </div>
  );
}
