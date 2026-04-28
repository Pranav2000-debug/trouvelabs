"use client";

import { useRef } from "react";
import * as m from "motion/react-m";
import { useInView } from "motion/react";
import { BreenoMemoryIcon } from "@/components/icons/arcticons-breeno-memory";

const PULSE_DELAYS = [0, 0.6, 1.2];

/**
 * Animated concentric-circle motif for the About lead card. Three rings
 * pulse outward like a sonar wave; the inner icon disc breathes gently.
 * Animations pause whenever the motif is offscreen.
 */
export function AboutLeadMotif() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div ref={ref} className="relative flex h-48 w-48 items-center justify-center">
      {/* Sonar pulse rings - staggered outward waves */}
      {PULSE_DELAYS.map((delay) => (
        <m.div
          key={delay}
          aria-hidden="true"
          animate={
            isInView
              ? { scale: [0.5, 1.4], opacity: [0, 0.85, 0] }
              : { scale: 0.5, opacity: 0 }
          }
          transition={{
            duration: 1.8,
            delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-trouve-teal/70"
        />
      ))}

      {/* Inner icon disc - subtle breath */}
      <m.div
        animate={isInView ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-12 z-10 flex items-center justify-center rounded-full bg-trouve-teal/20 backdrop-blur-sm">
        <BreenoMemoryIcon className="h-10 w-10 text-trouve-teal" />
      </m.div>
    </div>
  );
}
