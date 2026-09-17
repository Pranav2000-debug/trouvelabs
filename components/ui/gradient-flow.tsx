"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/constants/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { WebThreads } from "@/components/ui/web-threads";

export interface BackgroundPathsProps {
  className?: string;
  children?: ReactNode;
}

export function BackgroundPaths({ className, children }: BackgroundPathsProps) {
  const { reduced } = useReducedMotion();

  return (
    <div className={cn("fixed inset-0 overflow-hidden bg-background", className)}>
      {!reduced && (
        <WebThreads
          className="absolute inset-0"
          color1="#4ec9d4"
          color2="#1c2233"
          color3="#4ec9d4"
          backgroundColor="#0e1024"
          fanMode="center"
          threadCount={10}
          speed={0.2}
          frequency={9.5}
          spread={0.06}
          taper={1.05}
          position={0.47}
          glow={0.015}
          falloff={0.63}
          thickness={1.15}
          brightness={0.55}
          opacity={0.25}
          mirror={false}
          shimmer
          grain={false}
          mouseInteraction
          mouseStrength={0.3}
        />
      )}

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(10,10,10,0.8) 100%)",
        }}
      />

      {/* Content layer */}
      {children && <div className="relative z-10 h-full w-full">{children}</div>}
    </div>
  );
}

export default function BackgroundPathsDemo() {
  return <BackgroundPaths />;
}
