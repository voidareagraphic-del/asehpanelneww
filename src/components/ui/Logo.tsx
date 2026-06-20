"use client";
// src/components/ui/Logo.tsx
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: { height: 38  },
  md: { height: 53  },
  lg: { height: 72  },
  xl: { height: 96  },
};

export function Logo({ size = "md", className }: LogoProps) {
  const s = sizes[size];
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/images/Logo-asehpanel.svg"
        alt="Aseh Panel"
        height={s.height}
        width={0}
        style={{ height: s.height, width: "auto" }}
        priority
      />
    </div>
  );
}

