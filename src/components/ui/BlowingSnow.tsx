"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
  wobbleOffset: number;
}

export function BlowingSnow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const isMobile = window.innerWidth < 768;
    const MAX_PARTICLES = isMobile ? 80 : 600;
    const SEED_COUNT = isMobile ? 60 : 500;

    let animId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (): Particle => {
      const size = Math.random() * 2.5 + 1.0;
      return {
        x: canvas.width + Math.random() * 200,
        y: Math.random() * canvas.height,
        size,
        speedX: -(Math.random() * 5 + 4),
        speedY: Math.random() * 0.8 - 0.4,
        opacity: Math.random() * 0.6 + 0.2,
        wobble: 0,
        wobbleSpeed: Math.random() * 0.06 + 0.02,
        wobbleOffset: Math.random() * Math.PI * 2,
      };
    };

    for (let i = 0; i < SEED_COUNT; i++) {
      const p = spawn();
      p.x = Math.random() * canvas.width;
      particles.push(p);
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (particles.length < MAX_PARTICLES) particles.push(spawn());

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX;
        p.y += p.speedY + Math.sin(p.wobble + p.wobbleOffset) * 0.4;

        if (p.x < -10) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220, 238, 250, ${p.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 2 }}
    />
  );
}
