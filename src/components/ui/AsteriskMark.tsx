"use client";
// src/components/ui/AsteriskMark.tsx
import { BRAND_COLORS } from "@/lib/utils";

interface AsteriskMarkProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function AsteriskMark({ size = 24, className = "", animated = false }: AsteriskMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="161.5 34.4 50.1 48.4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? "group-hover:rotate-45 transition-transform duration-500" : ""} ${className}`}
      style={{ flexShrink: 0 }}
    >
      {/* Green arm (top-left) */}
      <polygon points="178.3,34.4 169.7,39.4 177.8,53.6 161.5,53.6 161.5,63.6 177.8,63.6 180.7,58.6 186.5,48.5 178.3,34.4" fill={BRAND_COLORS.green} />
      {/* Ice blue arm (top-right) */}
      <polygon points="195.2,53.6 203.4,39.4 194.7,34.4 186.5,48.5 189.4,53.6 192.3,58.6 195.2,63.6 211.6,63.6 211.6,53.6 195.2,53.6" fill={BRAND_COLORS.ice} />
      {/* Purple arm (bottom) */}
      <polygon points="195.2,63.6 189.4,63.6 177.8,63.6 169.7,77.8 178.3,82.8 186.5,68.6 194.7,82.8 203.4,77.8 195.2,63.6" fill={BRAND_COLORS.purple} />
      {/* Blue center */}
      <polygon points="183.6,53.6 177.9,63.6 183.6,63.6 195.2,63.6 192.3,58.6 186.5,48.5 183.6,53.6" fill={BRAND_COLORS.blue} />
    </svg>
  );
}

export function AsteriskMarkGhost({ size = 400, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none absolute ${className}`}
      style={{ width: size, height: size, opacity: 0.09 }}
    >
      <AsteriskMark size={size} />
    </div>
  );
}

