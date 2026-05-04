"use client";

import { LazyMotion, domMax } from "motion/react";
import type { ReactNode } from "react";

export function LazyMotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
}
