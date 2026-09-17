"use client";

import { useCallback, useRef, useState } from "react";
import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/constants/utils";

export type CardDepth = "foreground" | "mid" | "deep" | "background";

export interface FloatingCardProps {
  id?: string;
  className?: string;
  tilted?: boolean;
  tiltAngle?: { x?: number; y?: number; z?: number };
  depth?: CardDepth;
  fadeBottom?: boolean;
  interactive?: boolean;
  opacity?: number;
  onClick?: () => void;
  children?: ReactNode;
  "aria-label"?: string;
}

const depthStyles: Record<CardDepth, { bg: string; border: string; shadow: string }> = {
  foreground: {
    bg: "linear-gradient(135deg, rgba(22, 33, 46, 0.92) 0%, rgba(12, 18, 26, 0.96) 100%)",
    border: "rgba(255, 255, 255, 0.14)",
    shadow:
      "0 24px 50px -12px rgba(0, 0, 0, 0.85), inset 0 1px 0 rgba(255, 255, 255, 0.20), inset 0 0 20px rgba(78, 201, 212, 0.04)",
  },
  mid: {
    bg: "linear-gradient(135deg, rgba(16, 24, 34, 0.86) 0%, rgba(10, 15, 22, 0.92) 100%)",
    border: "rgba(255, 255, 255, 0.09)",
    shadow: "0 20px 42px -15px rgba(0, 0, 0, 0.78), inset 0 1px 0 rgba(255, 255, 255, 0.12)",
  },
  deep: {
    bg: "linear-gradient(135deg, rgba(13, 20, 29, 0.80) 0%, rgba(8, 12, 18, 0.88) 100%)",
    border: "rgba(255, 255, 255, 0.07)",
    shadow: "0 16px 36px -15px rgba(0, 0, 0, 0.68), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
  },
  background: {
    bg: "linear-gradient(135deg, rgba(14, 21, 31, 0.85) 0%, rgba(8, 13, 20, 0.92) 100%)",
    border: "rgba(255, 255, 255, 0.08)",
    shadow: "0 18px 40px -14px rgba(0, 0, 0, 0.82), inset 0 1px 0 rgba(255, 255, 255, 0.09)",
  },
};

/**
 * Isometric-tilted glass card used across the homepage hero. Tilt/hover
 * geometry is ported as-is from the reference design; only the teal
 * literal (56,209,216 -> 78,201,212) was swapped to match this site's
 * actual --color-trouve-teal.
 */
export function FloatingCard({
  id,
  className = "",
  tilted = true,
  tiltAngle = { x: 15, y: -18, z: 3 },
  depth = "mid",
  fadeBottom = false,
  interactive = true,
  opacity = 1,
  onClick,
  children,
  "aria-label": ariaLabel,
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!interactive || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    },
    [interactive],
  );

  const rx = tiltAngle.x ?? 15;
  const ry = tiltAngle.y ?? -18;
  const rz = tiltAngle.z ?? 3;

  const tiltTransform = tilted
    ? interactive && isHovered
      ? `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateZ(8px)`
      : `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)`
    : undefined;

  const styleConfig = depthStyles[depth];
  const fadeMask = fadeBottom
    ? "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 55%, rgba(0,0,0,0.35) 82%, rgba(0,0,0,0) 100%)"
    : undefined;

  return (
    <div
      id={id}
      ref={cardRef}
      role={interactive && onClick ? "button" : "region"}
      tabIndex={interactive && onClick ? 0 : undefined}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (interactive && onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      onClick={interactive ? onClick : undefined}
      onMouseMove={interactive ? handleMouseMove : undefined}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      draggable={false}
      style={{
        transform: tiltTransform,
        background: styleConfig.bg,
        opacity,
        borderColor: interactive && isHovered ? "rgba(78, 201, 212, 0.45)" : styleConfig.border,
        boxShadow:
          interactive && isHovered
            ? "0 28px 55px -10px rgba(0, 0, 0, 0.92), 0 0 32px rgba(78, 201, 212, 0.18)"
            : styleConfig.shadow,
        maskImage: fadeMask,
        WebkitMaskImage: fadeMask,
      }}
      className={cn(
        "relative select-none rounded-2xl border backdrop-blur-xl transition-all duration-300",
        interactive ? "group" : "pointer-events-none",
        interactive && onClick ? "cursor-pointer" : "cursor-default",
        className,
      )}
    >
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle 200px at ${mousePos.x}% ${mousePos.y}%, rgba(78, 201, 212, 0.18), transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        aria-hidden="true"
      />

      {fadeBottom && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-16 rounded-b-2xl bg-gradient-to-t from-background/90 via-transparent to-transparent backdrop-blur-sm"
          aria-hidden="true"
        />
      )}

      {children && <div className="relative z-10 p-5 md:p-6">{children}</div>}
    </div>
  );
}
