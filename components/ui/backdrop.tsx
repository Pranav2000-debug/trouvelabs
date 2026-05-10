"use client";

import * as React from "react";
import * as m from "motion/react-m";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface BackdropProps {
  /** Whether the backdrop is shown. */
  open: boolean;
  /** Optional click handler (typical use: close the parent overlay). */
  onClick?: () => void;
  /** Tailwind classes for tint, blur strength, z-index, etc. */
  className?: string;
  /** Disable pointer interaction (e.g. when overlay should be inert). */
  inert?: boolean;
}

export function Backdrop({
  open,
  onClick,
  className,
  inert = false,
}: BackdropProps) {
  return (
    <AnimatePresence>
      {open && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
          onClick={onClick}
          aria-hidden="true"
          className={cn(
            "fixed inset-0 z-40 bg-background/40 backdrop-blur-md",
            inert && "pointer-events-none",
            className,
          )}
        />
      )}
    </AnimatePresence>
  );
}
