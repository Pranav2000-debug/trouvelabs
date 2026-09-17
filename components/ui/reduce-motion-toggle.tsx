"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/constants/utils";

/** Persistent toggle for background motion - always available, not a one-time prompt. */
export function ReduceMotionToggle() {
  const { reduced, setReduced } = useReducedMotion();

  return (
    <button
      type="button"
      onClick={() => setReduced(!reduced)}
      aria-pressed={reduced}
      className={cn(
        "fixed bottom-4 left-4 z-50 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs font-medium backdrop-blur-xl transition-colors",
        reduced ? "text-primary" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {reduced ? "Motion on" : "Motion off"}
    </button>
  );
}
