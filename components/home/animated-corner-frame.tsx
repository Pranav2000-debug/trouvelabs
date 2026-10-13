"use client";

import * as m from "motion/react-m";
import type { ReactNode } from "react";

function CornerCross({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={`h-3 w-3 text-foreground/50 ${className ?? ""}`} stroke="currentColor" strokeWidth="1">
      <line x1="6" y1="0" x2="6" y2="12" />
      <line x1="0" y1="6" x2="12" y2="6" />
    </svg>
  );
}

export function AnimatedCornerFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <m.span
        className="absolute -bottom-1.5 -left-1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <CornerCross />
      </m.span>
      <m.span
        className="absolute -right-1.5 -top-1.5"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <CornerCross />
      </m.span>
      {children}
    </div>
  );
}
