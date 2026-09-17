import type { ReactNode } from "react";
import { FloatingCard, type CardDepth } from "@/components/ui/floating-card";
import { cn } from "@/lib/constants/utils";

export interface BackgroundCardPlateProps {
  id?: string;
  className?: string;
  tilted?: boolean;
  tiltAngle?: { x?: number; y?: number; z?: number };
  depth?: CardDepth;
  fadeBottom?: boolean;
  opacity?: number;
  children?: ReactNode;
}

/** Static, non-interactive glass plate used as a depth underlay behind a foreground card. */
export function BackgroundCardPlate({
  id,
  className = "",
  tilted = true,
  tiltAngle = { x: 15, y: -18, z: 3 },
  depth = "background",
  fadeBottom = true,
  opacity = 0.85,
  children,
}: BackgroundCardPlateProps) {
  return (
    <FloatingCard
      id={id}
      tilted={tilted}
      tiltAngle={tiltAngle}
      depth={depth}
      fadeBottom={fadeBottom}
      opacity={opacity}
      interactive={false}
      aria-label="Background card plate"
      className={cn("h-full min-h-[140px] w-full select-none", className)}
    >
      {children}
    </FloatingCard>
  );
}
