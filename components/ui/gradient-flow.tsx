"use client";

import * as m from "motion/react-m";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

function FloatingPaths({ position }: { position: number }) {
  const paths = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => {
        const p = position;
        const s = i * 6; // vertical spacing between lines
        const drift = i * 5 * p; // horizontal drift per line

        // S-curve with 3 cubic bezier segments for a contour-line feel
        const d = [
          `M${-480 - drift} ${-120 + s}`,
          `C${-320 - drift} ${40 + s + i * 4} ${-180 - drift} ${-60 + s - i * 3} ${-40 - drift} ${80 + s}`,
          `C${100 - drift} ${220 + s + i * 3} ${240 - drift} ${30 + s - i * 4} ${380 - drift} ${180 + s}`,
          `C${520 - drift} ${330 + s + i * 3} ${660 - drift} ${120 + s - i * 2} ${800 - drift} ${260 + s}`,
        ].join(" ");

        return {
          id: i,
          d,
          width: 0.5 + i * 0.03,
          opacity: 0.1 + i * 0.03,
          duration: 20 + (i % 10) * 1.5,
        };
      }),
    [position],
  );

  return (
    <svg className="absolute inset-0 h-full w-full" fill="none" viewBox="0 0 696 316" preserveAspectRatio="xMidYMid slice">
      {paths.map((path) => (
        <m.path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          initial={{ pathLength: 0.3, opacity: 0.3 }}
          animate={{
            pathLength: [0.3, 1, 0.3],
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: path.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

export interface BackgroundPathsProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackgroundPaths({ className, children }: BackgroundPathsProps) {
  return (
    <div className={cn("fixed inset-0 overflow-hidden bg-neutral-950 text-white", className)}>
      {/* Mirrored path sets for symmetry */}
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Subtle center glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          width: "min(60vw, 60vh)",
          height: "min(60vw, 60vh)",

        }}
      />

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
