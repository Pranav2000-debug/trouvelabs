"use client";

import { useRef } from "react";
import * as m from "motion/react-m";
import { useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

type Side = "left" | "center" | "right";

interface JourneyConnectorProps {
  /** Horizontal anchor where the line starts (top edge) */
  from?: Side;
  /** Horizontal anchor where the line ends (bottom edge) */
  to?: Side;
  /** Connector height in px (default 120) */
  height?: number;
  /** Show a small filled dot at the line's start */
  showStartDot?: boolean;
  /** Show a small filled dot at the line's end */
  showEndDot?: boolean;
  /** Wrapper classes - control color via `text-*` (uses currentColor) */
  className?: string;
}

const SIDE_X: Record<Side, number> = {
  left: 10,
  center: 50,
  right: 90,
};

/**
 * Decorative SVG connector for vertical "journey" layouts that link
 * alternating left/right content sections. The S-curve runs from the
 * top edge `from` anchor to the bottom edge `to` anchor; same anchors
 * render a straight vertical line.
 *
 * `pathLength` is bound to scroll progress through the connector - the
 * line literally draws/undraws as the viewer scrolls past it.
 */
export function JourneyConnector({
  from = "center",
  to = "center",
  height = 120,
  showStartDot = false,
  showEndDot = false,
  className,
}: JourneyConnectorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // 0 when connector top hits viewport bottom (just entering)
    // 1 when connector bottom hits viewport top (just leaving)
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const startDotScale = useTransform(scrollYProgress, [0, 0.05], [0, 1]);
  const endDotScale = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  const x1 = SIDE_X[from];
  const x2 = SIDE_X[to];

  const path =
    x1 === x2
      ? `M ${x1} 0 L ${x2} 100`
      : `M ${x1} 0 C ${x1} 50, ${x2} 50, ${x2} 100`;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none relative w-full text-trouve-teal", className)}
      style={{ height }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full">
        <m.path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.6}
          strokeWidth={1.5}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>

      {showStartDot && (
        <m.span
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
          style={{ left: `${x1}%`, top: 0, scale: startDotScale }}
        />
      )}
      {showEndDot && (
        <m.span
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"
          style={{ left: `${x2}%`, top: "100%", scale: endDotScale }}
        />
      )}
    </div>
  );
}
