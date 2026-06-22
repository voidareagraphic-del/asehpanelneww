"use client";
// src/components/sections/FireShield.tsx
import Image from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BrandBar } from "@/components/ui/BrandBar";
import { Button } from "@/components/ui/Button";
import { EngBadgeRow } from "@/components/ui/EngBadge";
import { ShieldCheck, Flame, Droplets, Wind, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PROPERTY_ICONS = [Flame, Droplets, ShieldCheck, Wind];

const CERTIFICATIONS = [
  { code: "EN 13501-1", scope: "Fire classification — non-load-bearing walls" },
  { code: "EN 13501-2", scope: "Fire resistance — non-load-bearing elements" },
  { code: "ASTM E84",   scope: "Surface burning characteristics" },
  { code: "NFPA 285",   scope: "Fire propagation — exterior non-load-bearing walls" },
  { code: "BS1D0",      scope: "British Standard fire performance classification" },
];

interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  wobbleOffset: number; wobbleSpeed: number; wobbleAmp: number;
}

export function FireShield() {
  const sectionRef = useRef<HTMLElement>(null);
  const charLineRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const rafRef = useRef<number>(0);
  const { t } = useLanguage();

  const spawnSpark = useCallback((w: number, h: number): Spark => {
    // spawn along bottom-right quadrant
    const x = w * (0.55 + Math.random() * 0.45);
    const y = h * (0.75 + Math.random() * 0.25);
    const speed = 0.8 + Math.random() * 1.4;
    const angle = Math.PI * (0.55 + Math.random() * 0.2); // ~100°–126° — up-left
    return {
      x, y,
      vx: Math.cos(angle) * speed,
      vy: -Math.sin(angle) * speed,
      life: 0,
      maxLife: 200 + Math.random() * 160,
      size: 0.8 + Math.random() * 1.6,
      wobbleOffset: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.04 + Math.random() * 0.06,
      wobbleAmp: 0.3 + Math.random() * 0.5,
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
    const SEED = 40;
    const MAX = 55;

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < SEED; i++) {
      const s = spawnSpark(canvas.width, canvas.height);
      s.life = Math.random() * s.maxLife;
      sparksRef.current.push(s);
    }

    const tick = () => {
      const w = canvas.width, h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (sparksRef.current.length < MAX) {
        sparksRef.current.push(spawnSpark(w, h));
      }

      sparksRef.current = sparksRef.current.filter((s) => {
        s.life++;
        const progress = s.life / s.maxLife;
        if (progress >= 1) return false;

        // wobble: sinusoidal deviation perpendicular to main direction
        const wobble = Math.sin(s.life * s.wobbleSpeed + s.wobbleOffset) * s.wobbleAmp;
        s.x += s.vx + wobble;
        s.y += s.vy;

        // fade: bright in middle, fade at birth & death
        const alpha = progress < 0.15
          ? progress / 0.15
          : progress > 0.75
          ? 1 - (progress - 0.75) / 0.25
          : 1;

        // color shifts orange → yellow → white-ish at peak
        const r = 255;
        const g = Math.round(80 + 160 * Math.min(progress * 2.5, 1));
        const b = Math.round(progress > 0.5 ? (progress - 0.5) * 2 * 80 : 0);

        const currentSize = s.size * (1 - progress * 0.4);

        // glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, currentSize * 3.5);
        grd.addColorStop(0, `rgba(${r},${g},${b},${alpha * 0.9})`);
        grd.addColorStop(0.4, `rgba(${r},${Math.max(g - 40, 0)},0,${alpha * 0.4})`);
        grd.addColorStop(1, `rgba(180,40,0,0)`);

        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();

        return true;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      sparksRef.current = [];
    };
  }, [spawnSpark]);

  useEffect(() => {
    if (!sectionRef.current || !charLineRef.current) return;
    gsap.fromTo(
      charLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 60%" },
      }
    );
  }, []);

  return (
    <section id="fire-shield" ref={sectionRef} className="relative py-16 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Sparks canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />

      {/* Fire glow layers */}
      <div className="fire-glow-base absolute inset-0 pointer-events-none" />
      <div className="fire-glow-ember absolute inset-0 pointer-events-none" />
      <div className="fire-glow-pulse absolute inset-0 pointer-events-none" />

      <style>{`
        @keyframes fireBase {
          0%   { opacity: 0.55; transform: scale(1)    translateY(0px); }
          25%  { opacity: 0.70; transform: scale(1.04) translateY(-6px); }
          50%  { opacity: 0.50; transform: scale(0.97) translateY(4px); }
          75%  { opacity: 0.75; transform: scale(1.06) translateY(-3px); }
          100% { opacity: 0.55; transform: scale(1)    translateY(0px); }
        }
        @keyframes fireEmber {
          0%   { opacity: 0.30; transform: scale(1.1) translateX(0px); }
          33%  { opacity: 0.55; transform: scale(0.95) translateX(8px); }
          66%  { opacity: 0.25; transform: scale(1.08) translateX(-6px); }
          100% { opacity: 0.30; transform: scale(1.1) translateX(0px); }
        }
        @keyframes firePulse {
          0%   { opacity: 0.20; }
          50%  { opacity: 0.45; }
          100% { opacity: 0.20; }
        }
        .fire-glow-base {
          background:
            radial-gradient(ellipse 65% 75% at 72% 85%, rgba(210,80,10,0.22) 0%, transparent 65%),
            radial-gradient(ellipse 45% 60% at 60% 95%, rgba(255,120,20,0.18) 0%, transparent 55%),
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(180,50,5,0.15) 0%, transparent 55%);
          animation: fireBase 3.8s ease-in-out infinite;
        }
        .fire-glow-ember {
          background:
            radial-gradient(ellipse 40% 55% at 80% 80%, rgba(255,160,40,0.14) 0%, transparent 60%),
            radial-gradient(ellipse 30% 45% at 40% 90%, rgba(220,90,15,0.12) 0%, transparent 55%);
          animation: fireEmber 2.9s ease-in-out infinite 0.6s;
        }
        .fire-glow-pulse {
          background:
            radial-gradient(ellipse 90% 45% at 50% 100%, rgba(200,60,0,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 55% 70% at 65% 75%, rgba(255,100,0,0.08) 0%, transparent 70%);
          animation: firePulse 1.9s ease-in-out infinite 0.3s;
        }
      `}</style>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{ width: "50%", height: "70%", background: "radial-gradient(ellipse at 80% 50%, rgba(180,60,20,0.04) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative" style={{ zIndex: 2 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left: Content */}
          <div>
            <AnimateIn delay={0}>
              <SectionLabel text={t.fireShield.label} accent="purple" className="mb-5" />
              <BrandBar width="120px" height={3} className="mb-8" />
              <h2 className="text-2xl md:text-display-xl font-black text-white leading-tight mb-4 md:mb-6">
                {t.fireShield.headline1}<br />
                <span className="text-white/30">{t.fireShield.headline2}</span>
              </h2>
              <p className="text-sm md:text-base text-steel leading-relaxed mb-6 md:mb-8 max-w-lg">{t.fireShield.body}</p>

              {/* Char layer visual indicator */}
              <div className="mb-8 p-4 rounded-xl bg-surface/50 border border-white/[0.05]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-widest text-muted">{t.fireShield.charLabel}</span>
                </div>
                <div className="flex gap-1 h-8 rounded-lg overflow-hidden" ref={charLineRef}>
                  <div className="w-[12%] rounded-l bg-[#2A2A2A]" />
                  <div className="w-[8%] bg-[#1A1009]" />
                  <div className="w-[60%] bg-gradient-to-r from-[#C47820] to-[#E89030]" />
                  <div className="w-[8%] bg-[#1A1009]" />
                  <div className="w-[12%] rounded-r bg-[#2A2A2A]" />
                </div>
                <div className="hidden sm:flex justify-between mt-2 font-mono text-[0.55rem] text-muted">
                  <span>Steel facer</span>
                  <span style={{ color: "#8B5EA4" }}>Char barrier</span>
                  <span style={{ color: "#E89030" }}>PIR core — intact</span>
                  <span style={{ color: "#8B5EA4" }}>Char barrier</span>
                  <span>Steel facer</span>
                </div>
              </div>

              {/* Fire properties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-6 md:mb-10">
                {t.fireShield.properties.map((p, i) => {
                  const Icon = PROPERTY_ICONS[i];
                  return (
                    <div
                      key={p.label}
                      className="flex gap-3 p-4 rounded-xl bg-surface/40 border border-white/[0.05] hover:border-[#8B5EA4]/30 transition-colors duration-300"
                    >
                      <div className="mt-0.5 flex-shrink-0"><Icon size={16} color="#8B5EA4" /></div>
                      <div>
                        <div className="text-sm font-semibold text-white mb-0.5">{p.label}</div>
                        <div className="text-[0.72rem] text-muted leading-relaxed">{p.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </AnimateIn>
          </div>

          {/* Right: Image + Certifications + data */}
          <div className="flex flex-col gap-5">
            {/* Fire shield product image */}
            <AnimateIn delay={0.1} direction="left">
              <div className="rounded-2xl overflow-hidden relative h-52">
                <Image src="/images/A05.webp" alt="FireShield Panel" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.7) 100%)" }} />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15} direction="left">
              <div className="rounded-2xl bg-panel border border-white/[0.05] p-7">
                <div className="flex items-center gap-2 mb-6">
                  <ShieldCheck size={18} color="#8B5EA4" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">{t.fireShield.certTitle}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {CERTIFICATIONS.map((cert) => (
                    <div key={cert.code} className="flex items-center justify-between gap-4 py-3 border-b border-white/[0.04] last:border-0">
                      <div className="flex items-center gap-3">
                        <CheckCircle size={13} color="#8B5EA4" className="flex-shrink-0" />
                        <span className="font-mono text-sm font-bold text-white">{cert.code}</span>
                      </div>
                      <span className="text-xs text-steel text-right leading-tight max-w-[55%]">{cert.scope}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.25} direction="left">
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1A1020 0%, #120D18 100%)", border: "1px solid rgba(139,94,164,0.2)" }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(139,94,164,0.15) 0%, transparent 70%)" }} />
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-muted mb-2">Real fire test result</div>
                <div className="text-2xl font-black text-white mb-1">{t.fireShield.resultTitle}</div>
                <div className="text-sm text-steel mb-6">{t.fireShield.resultSub}</div>
                {t.fireShield.results.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#8B5EA4" }} />
                    <span className="text-sm text-frost">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  );
}
