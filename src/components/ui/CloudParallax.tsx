"use client";
import { useEffect, useRef } from "react";

interface Puff { dx: number; dy: number; r: number; }

interface Cloud {
  cx: number;
  cyBase: number;
  puffs: Puff[];
  alpha: number;
  layer: number;
  vx: number; vy: number;
  wobblePhase: number; wobbleFreq: number; wobbleAmp: number;
  irregPhase: number;  irregFreq: number;  irregAmp: number;
  wigglePhase: number; wiggleFreq: number; wiggleAmp: number;
  springPhase: number; springFreq: number; springAmp: number;
  orbitAngle: number;   // current orbit angle (radians)
  orbitSpeed: number;   // radians/second
  orbitRadiusX: number; // orbit radius x (normalized)
  orbitRadiusY: number; // orbit radius y (normalized)
}

function makePuffs(count: number, spreadX: number, spreadY: number, baseR: number): Puff[] {
  const puffs: Puff[] = [{ dx: 0, dy: 0, r: baseR }];
  for (let i = 1; i < count; i++) {
    const angle = (i / (count - 1)) * Math.PI * 1.6 - 0.3;
    const dist = spreadX * (0.4 + Math.random() * 0.5);
    puffs.push({
      dx: Math.cos(angle) * dist,
      dy: Math.sin(angle) * spreadY * (0.3 + Math.random() * 0.5),
      r: baseR * (0.45 + Math.random() * 0.55),
    });
  }
  return puffs;
}

function buildClouds(w: number, h: number, densityScale = 1, particleScale = 1): Cloud[] {
  const clouds: Cloud[] = [];
  const layerCounts = [45, 56, 67].map(n => Math.round(n * densityScale));
  const layerAlpha  = [0.08, 0.10, 0.12];
  const layerSpread = [
    { sx: 170 * particleScale, sy: 55 * particleScale, r: 95 * particleScale },
    { sx: 195 * particleScale, sy: 65 * particleScale, r: 115 * particleScale },
    { sx: 220 * particleScale, sy: 75 * particleScale, r: 132 * particleScale },
  ];
  for (let layer = 0; layer < 3; layer++) {
    const { sx, sy, r } = layerSpread[layer];
    for (let i = 0; i < layerCounts[layer]; i++) {
      const speed   = (1.725 + Math.random() * 2.875) / (w || 1400);
      const upSpeed = (21.8 + Math.random() * 24.2) / (h || 800);
      // orbit around external point
      const orbitSpeed = (Math.random() < 0.5 ? 1 : -1) * (0.319 + Math.random() * 0.765);
      clouds.push({
        cx: Math.random(),
        cyBase: Math.random(),
        puffs: makePuffs(
          4 + Math.floor(Math.random() * 3),
          sx * (0.7 + Math.random() * 0.6),
          sy * (0.7 + Math.random() * 0.6),
          r  * (0.6 + Math.random() * 0.8),
        ),
        alpha: layerAlpha[layer] * (0.8 + Math.random() * 0.4),
        layer,
        vx: speed, vy: -upSpeed,
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleFreq:  0.08 + Math.random() * 0.12,
        wobbleAmp:   0.003 + Math.random() * 0.005,
        irregPhase:  Math.random() * Math.PI * 2,
        irregFreq:   0.03 + Math.random() * 0.07,
        irregAmp:    speed * (0.3 + Math.random() * 0.5),
        wigglePhase: Math.random() * Math.PI * 2,
        wiggleFreq:  0.08 + Math.random() * 0.35,
        wiggleAmp:   0.012 + Math.random() * 0.025,
        springPhase: Math.random() * Math.PI * 2,
        springFreq:  0.2 + Math.random() * 0.8,
        springAmp:   0.015 + Math.random() * 0.03,
        orbitAngle:   Math.random() * Math.PI * 2,
        orbitSpeed,
        orbitRadiusX: (0.02 + Math.random() * 0.05),
        orbitRadiusY: (0.015 + Math.random() * 0.04),
      });
    }
  }
  return clouds;
}

// ── Noise texture ─────────────────────────────────────────────────────────────
function valueNoise(x: number, y: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}
function smoothNoise(x: number, y: number): number {
  const ix = Math.floor(x); const iy = Math.floor(y);
  const fx = x - ix; const fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx); const uy = fy * fy * (3 - 2 * fy);
  const a = valueNoise(ix,iy); const b = valueNoise(ix+1,iy);
  const c = valueNoise(ix,iy+1); const d = valueNoise(ix+1,iy+1);
  return a + (b-a)*ux + (c-a)*uy + (d+a-b-c)*ux*uy;
}
const NOISE_SIZE = 512;
function buildNoiseCanvas(): HTMLCanvasElement {
  const nc = document.createElement("canvas");
  nc.width = nc.height = NOISE_SIZE;
  const ctx = nc.getContext("2d")!;
  const img = ctx.createImageData(NOISE_SIZE, NOISE_SIZE);
  const scale = 0.009;
  for (let y = 0; y < NOISE_SIZE; y++) {
    for (let x = 0; x < NOISE_SIZE; x++) {
      const n =
        smoothNoise(x*scale,     y*scale)     * 0.55 +
        smoothNoise(x*scale*2.1, y*scale*2.1) * 0.30 +
        smoothNoise(x*scale*4.3, y*scale*4.3) * 0.15;
      const v = Math.pow(Math.max(0, Math.min(1, n*1.4 - 0.15)), 0.7);
      const i = (y * NOISE_SIZE + x) * 4;
      img.data[i] = img.data[i+1] = img.data[i+2] = 255;
      img.data[i+3] = Math.round(v * 255);
    }
  }
  ctx.putImageData(img, 0, 0);
  return nc;
}
// ─────────────────────────────────────────────────────────────────────────────

const DISPERSE_RADIUS = 320;

function drawCloud(
  ctx: CanvasRenderingContext2D,
  cloud: Cloud, w: number, h: number,
  mx: number, my: number,
  time: number,
  naturalDrift: boolean,
  white: boolean,
  driftUp: boolean,
  cloudColor: string,
) {
  if (driftUp) {
    const wiggleX = Math.sin(time * cloud.wiggleFreq + cloud.wigglePhase) * cloud.wiggleAmp * w;
    const spring  = Math.sin(time * cloud.springFreq * Math.PI * 2 + cloud.springPhase) * cloud.springAmp * h;
    // orbit: particle moves around an external point
    const orbitX  = Math.cos(cloud.orbitAngle) * cloud.orbitRadiusX * w;
    const orbitY  = Math.sin(cloud.orbitAngle) * cloud.orbitRadiusY * h;
    const cx = cloud.cx     * w + wiggleX + orbitX;
    const cy = cloud.cyBase * h + spring  + orbitY;

    const t = Math.max(0, Math.min(1, cloud.cyBase));
    let rr: number, gg: number, bb: number, alphaBoost: number;
    if (cloudColor === "red") {
      rr = 255; gg = Math.round(20 + t * 15); bb = Math.round(20 + t * 15);
      alphaBoost = 4.5;
    } else if (cloudColor === "black") {
      rr = 0; gg = 0; bb = 0;
      alphaBoost = 25;
    } else if (cloudColor === "white") {
      rr = 255; gg = 255; bb = 255;
      alphaBoost = 20;
    } else {
      rr = Math.round(227 - t * 10); gg = Math.round(242 - t * 10); bb = Math.round(255 - t * 10);
      alphaBoost = 4;
    }
    const fadeAlpha = Math.max(0, Math.min(1, cloud.cyBase / 0.25));
    const a = Math.min(cloud.alpha * alphaBoost * fadeAlpha, 0.98);

    // scale: large at bottom (cyBase~1), small at top (cyBase~0)
    const sizeScale = 0.25 + Math.max(0, Math.min(1, cloud.cyBase)) * 1.75;
    for (const puff of cloud.puffs) {
      const px = cx + puff.dx * sizeScale;
      const py = cy + puff.dy * sizeScale;
      const r = puff.r * sizeScale;
      const grad = ctx.createRadialGradient(px, py, 0, px, py, r);
      grad.addColorStop(0,   `rgba(${rr},${gg},${bb},${a})`);
      grad.addColorStop(0.3, `rgba(${rr},${gg},${bb},${a * 0.85})`);
      grad.addColorStop(0.6, `rgba(${rr},${gg},${bb},${a * 0.5})`);
      grad.addColorStop(1,   `rgba(${rr},${gg},${bb},0)`);
      ctx.beginPath();
      ctx.arc(px, py, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
    return;
  }

  // ── standard mode ──
  const wobbleY = Math.sin(time * cloud.wobbleFreq + cloud.wobblePhase) * cloud.wobbleAmp * h;
  const wiggleX = Math.sin(time * cloud.wiggleFreq + cloud.wigglePhase) * cloud.wiggleAmp * w * 0.4;
  const cx = cloud.cx     * w + wiggleX;
  const cy = cloud.cyBase * h + wobbleY;

  const ddx = cx - mx; const ddy = cy - my;
  const dist = Math.sqrt(ddx*ddx + ddy*ddy);
  const disperse = dist < DISPERSE_RADIUS ? dist / DISPERSE_RADIUS : 1;
  const a = cloud.alpha * disperse;
  if (a < 0.004) return;

  for (const puff of cloud.puffs) {
    const px = cx + puff.dx; const py = cy + puff.dy; const pr = puff.r;
    const grad = ctx.createRadialGradient(px, py, 0, px, py, pr);
    if (white || cloudColor === "white") {
      grad.addColorStop(0,   `rgba(255,255,255,${a})`);
      grad.addColorStop(0.3, `rgba(255,255,255,${a*0.85})`);
      grad.addColorStop(0.6, `rgba(255,255,255,${a*0.5})`);
      grad.addColorStop(1,   `rgba(255,255,255,0)`);
    } else if (cloudColor === "lightgray") {
      grad.addColorStop(0,   `rgba(210,210,215,${a})`);
      grad.addColorStop(0.3, `rgba(210,210,215,${a*0.85})`);
      grad.addColorStop(0.6, `rgba(210,210,215,${a*0.5})`);
      grad.addColorStop(1,   `rgba(210,210,215,0)`);
    } else {
      grad.addColorStop(0,   `rgba(220,235,248,${a})`);
      grad.addColorStop(0.3, `rgba(200,222,240,${a*0.85})`);
      grad.addColorStop(0.6, `rgba(175,208,230,${a*0.5})`);
      grad.addColorStop(1,   `rgba(168,204,224,0)`);
    }
    ctx.beginPath();
    ctx.arc(px, py, pr, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();
  }
}

interface Props {
  className?: string;
  layers?: number[];
  disableMouse?: boolean;
  naturalDrift?: boolean;
  driftUp?: boolean;
  vortex?: boolean;
  white?: boolean;
  noiseMask?: boolean;
  cloudColor?: string;
  densityScale?: number;
  particleScale?: number;
  onReady?: () => void;
}

export function CloudParallax({
  className = "",
  layers,
  disableMouse  = false,
  naturalDrift  = false,
  driftUp       = false,
  vortex        = false,
  white         = false,
  noiseMask     = false,
  cloudColor    = "default",
  densityScale  = 1,
  particleScale = 1,
  onReady,
}: Props) {
  const canvasRef   = useRef<HTMLCanvasElement>(null);
  const mouse       = useRef({ x: -9999, y: -9999 });
  const smoothMouse = useRef({ x: -9999, y: -9999 });
  const clouds      = useRef<Cloud[]>([]);
  const raf         = useRef(0);
  const lastTime    = useRef<number>(0);
  const elapsed     = useRef<number>(0);
  const noiseCanvas = useRef<HTMLCanvasElement | null>(null);
  const visible     = useRef(true);
  const readyFired  = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (noiseMask) noiseCanvas.current = buildNoiseCanvas();

    // pause RAF when canvas is not visible
    const observer = new IntersectionObserver(
      ([entry]) => { visible.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(canvas);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;

    const effectiveDensity = densityScale;
    const effectiveParticle = particleScale;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      canvas.style.width  = "100%";
      canvas.style.height = "100%";
      clouds.current = buildClouds(canvas.width, canvas.height, effectiveDensity, effectiveParticle);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      if (disableMouse) return;
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMove);

    const render = (ts: number) => {
      raf.current = requestAnimationFrame(render);
      if (!visible.current) return;

      const dt = lastTime.current ? Math.min((ts - lastTime.current) / 1000, 0.05) : 0;
      lastTime.current = ts;
      elapsed.current += dt;

      const w = canvas.width;
      const h = canvas.height;

      if (driftUp) {
        for (const cloud of clouds.current) {
          if (layers && !layers.includes(cloud.layer)) continue;
          cloud.cyBase    += cloud.vy * dt;
          cloud.orbitAngle += cloud.orbitSpeed * dt;
          if (vortex) {
            // spiral around canvas center
            const dx = cloud.cx - 0.5;
            const dy = cloud.cyBase - 0.5;
            const angle = Math.atan2(dy, dx);
            const radius = Math.sqrt(dx * dx + dy * dy);
            const rotSpeed = (0.4 + Math.abs(cloud.orbitSpeed) * 0.3) * (cloud.orbitSpeed > 0 ? 1 : -1);
            const newAngle = angle + rotSpeed * dt;
            cloud.cx = 0.5 + Math.cos(newAngle) * radius;
          } else {
            const hDrift = Math.sin(elapsed.current * cloud.irregFreq + cloud.irregPhase) * cloud.irregAmp * 2.5;
            cloud.cx += hDrift * dt;
          }
          // wrap horizontally
          if (cloud.cx >  1.2) cloud.cx = -0.2;
          if (cloud.cx < -0.2) cloud.cx =  1.2;
          if (cloud.cyBase < -0.2) cloud.cyBase = 1.2;
        }
      } else if (naturalDrift) {
        for (const cloud of clouds.current) {
          if (layers && !layers.includes(cloud.layer)) continue;
          cloud.orbitAngle += cloud.orbitSpeed * dt;
          const irregVx = cloud.vx + Math.sin(elapsed.current * cloud.irregFreq + cloud.irregPhase) * cloud.irregAmp;
          cloud.cx     += irregVx * dt;
          cloud.cyBase += cloud.vy * dt;
          if (cloud.cx     >  1.15) cloud.cx     = -0.15;
          if (cloud.cx     < -0.15) cloud.cx     =  1.15;
          if (cloud.cyBase < 0)     cloud.cyBase = 0;
          if (cloud.cyBase > 0.85)  cloud.cyBase = 0.85;
        }
      }

      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * 0.07;
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * 0.07;

      if (!readyFired.current) { readyFired.current = true; onReady?.(); }

      ctx.clearRect(0, 0, w, h);

      for (let layer = 0; layer < 3; layer++) {
        if (layers && !layers.includes(layer)) continue;
        for (const cloud of clouds.current) {
          if (cloud.layer !== layer) continue;
          drawCloud(
            ctx, cloud, w, h,
            (naturalDrift || driftUp) ? -9999 : smoothMouse.current.x,
            (naturalDrift || driftUp) ? -9999 : smoothMouse.current.y,
            elapsed.current, naturalDrift, white, driftUp, cloudColor,
          );
        }
      }

      // punch a soft hole in clouds around mouse so the image shows through
      if (!driftUp && !naturalDrift && smoothMouse.current.x > 0) {
        const mx = smoothMouse.current.x;
        const my = smoothMouse.current.y;
        const spotlight = ctx.createRadialGradient(mx, my, 0, mx, my, DISPERSE_RADIUS * 0.35);
        spotlight.addColorStop(0,   "rgba(0,0,0,0.55)");
        spotlight.addColorStop(0.4, "rgba(0,0,0,0.3)");
        spotlight.addColorStop(1,   "rgba(0,0,0,0)");
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = spotlight;
        ctx.beginPath();
        ctx.arc(mx, my, DISPERSE_RADIUS * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
      }

      if (noiseMask && noiseCanvas.current) {
        const nc = noiseCanvas.current;
        const ox = (elapsed.current * 18) % NOISE_SIZE;
        const oy = Math.sin(elapsed.current * 0.07) * NOISE_SIZE * 0.12;
        ctx.globalCompositeOperation = "destination-in";
        for (let tx = -NOISE_SIZE; tx < w + NOISE_SIZE; tx += NOISE_SIZE)
          for (let ty = -NOISE_SIZE; ty < h + NOISE_SIZE; ty += NOISE_SIZE)
            ctx.drawImage(nc, Math.round(tx - ox), Math.round(ty + oy));
        ctx.globalCompositeOperation = "source-over";
      }

    };
    raf.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf.current);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
