"use client";

import { type ReactNode } from "react";
import * as m from "motion/react-m";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}>
      {children}
    </m.div>
  );
}

interface FadeInStaggerProps {
  children: ReactNode;
  className?: string;
}

export function FadeInStagger({ children, className }: FadeInStaggerProps) {
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className={className}>
      {children}
    </m.div>
  );
}

interface FadeInStaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function FadeInStaggerItem({ children, className }: FadeInStaggerItemProps) {
  return (
    <m.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}>
      {children}
    </m.div>
  );
}
