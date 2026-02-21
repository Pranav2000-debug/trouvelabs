"use client";

import Link from "next/link";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { useRef, useEffect, useState } from "react";
import { Eye, Network, Lock, Sparkles, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ──────── Data ──────── */

interface SdkCard {
  name: string;
  slug: string;
  purpose: string;
  icon: LucideIcon;
}

const SDK_CARDS: SdkCard[] = [
  { name: "Vision SDK", slug: "vision-sdk", purpose: "Computer vision capabilities for intelligent visual processing.", icon: Eye },
  { name: "Graph RAG SDK", slug: "graph-rag-sdk", purpose: "Knowledge graph + retrieval-augmented generation for context-aware AI.", icon: Network },
  { name: "Tokenization SDK", slug: "tokenization-sdk", purpose: "Secure data tokenization and orchestration at scale.", icon: Lock },
  { name: "GenAI SDK", slug: "genai-sdk", purpose: "Multimodal generative AI capabilities for diverse applications.", icon: Sparkles },
  { name: "LLM Service", slug: "llm-service", purpose: "Managed large language model infrastructure, ready to deploy.", icon: Server },
];

/* ──────── Constants ──────── */

const CARD_WIDTH = 480;
const GAP = 28;

/* ──────── Hook ──────── */

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [breakpoint]);
  return isMobile;
}

/* ──────── Shared card ──────── */

function SdkCardItem({ sdk }: { sdk: SdkCard }) {
  const IconComponent = sdk.icon;
  return (
    <Link
      href={`/products/${sdk.slug}`}
      className="group flex h-full flex-col rounded-xl border border-trouve-border bg-card p-6 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5 cursor-pointer">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-trouve-teal/10">
        <IconComponent className="h-5 w-5 text-trouve-teal" />
      </div>
      <h3 className="text-lg font-semibold">{sdk.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sdk.purpose}</p>
      <span className="mt-auto pt-3 text-xs font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Learn more →</span>
    </Link>
  );
}

/* ──────── Desktop: horizontal-scroll layout ──────── */

function DesktopSdkGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalDistance = (SDK_CARDS.length - 1) * (CARD_WIDTH + GAP);
  const x = useTransform(scrollYProgress, [0, 0.85], [0, -totalDistance]);

  const arrowOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const arrowY = useTransform(scrollYProgress, [0.7, 0.9], [30, 0]);

  return (
    <div ref={containerRef} className="relative" style={{ height: `${SDK_CARDS.length * 100}vh` }}>
      <div className="sticky top-0 flex h-[90vh] flex-col items-center justify-center overflow-hidden">
        <div className="mb-12 text-center px-6">
          <h2 className="text-3xl font-bold sm:text-4xl">Core SDKs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Modular, composable AI building blocks designed for mobility intelligence.</p>
        </div>

        <div className="flex w-full items-center justify-center">
          <div className="overflow-visible" style={{ width: CARD_WIDTH }}>
            <m.div className="flex" style={{ x, gap: GAP }}>
              {SDK_CARDS.map((sdk) => (
                <div key={sdk.slug} style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH, height: 260 }}>
                  <SdkCardItem sdk={sdk} />
                </div>
              ))}
            </m.div>
          </div>
        </div>

        <m.div className="mt-12 flex flex-col items-center gap-3" style={{ opacity: arrowOpacity, y: arrowY }}>
          <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">See what&apos;s built with our SDKs</p>
          <Image src="/image 26.png" alt="Scroll down" width={32} height={32} className="animate-bounce" />
        </m.div>
      </div>
    </div>
  );
}

/* ──────── Mobile: simple vertical list ──────── */

function MobileSdkGrid() {
  return (
    <section className="px-5 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold">Core SDKs.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">Modular, composable AI building blocks designed for mobility intelligence.</p>
      </div>

      <div className="flex flex-col gap-5">
        {SDK_CARDS.map((sdk) => (
          <SdkCardItem key={sdk.slug} sdk={sdk} />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center gap-3">
        <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">See what&apos;s built with our SDKs</p>
        <Image src="/image 26.png" alt="Scroll down" width={32} height={32} className="animate-bounce" />
      </div>
    </section>
  );
}

/* ──────── Entry ──────── */

export default function SdkGridSection() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileSdkGrid /> : <DesktopSdkGrid />;
}
