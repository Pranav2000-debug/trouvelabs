"use client";

import { ReactLenis } from "lenis/react";
import Link from "next/link";
import { Eye, Network, Lock, Sparkles, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/* ──────── SDK Data ──────── */

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

/* ──────── Use Case Data ──────── */

interface UseCaseData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
}

const USE_CASES: UseCaseData[] = [
  {
    name: "Agentic Video",
    slug: "agentic-video",
    builtWith: "Vision SDK + GenAI SDK",
    description: "Autonomous video analysis and generation powered by composable AI pipelines.",
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "LLM Service + GenAI SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
  },
];

/* ──────── Component ──────── */

export default function SmoothStackScroll(): React.JSX.Element {
  return (
    <ReactLenis root>
      <main>
        <div className="wrapper">
          {/* ── Section 1: SDK Cards ── */}
          <section className="text-white h-screen w-full bg-background/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Core SDKs.</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Modular, composable AI building blocks designed for mobility intelligence.
                </p>
              </div>

              <div className="grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {SDK_CARDS.map((sdk) => {
                  const IconComponent = sdk.icon;
                  return (
                    <Link
                      key={sdk.slug}
                      href={`/products/${sdk.slug}`}
                      className="group flex flex-col rounded-xl border border-trouve-border bg-trouve-surface/70 backdrop-blur-sm p-6 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5 cursor-pointer">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-trouve-teal/10">
                        <IconComponent className="h-5 w-5 text-trouve-teal" />
                      </div>
                      <h3 className="text-lg font-semibold">{sdk.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sdk.purpose}</p>
                      <span className="mt-auto pt-3 text-xs font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">
                        Learn more →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ── Section 2: Use Cases ── */}
          <section className="text-white h-screen w-full bg-trouve-navy/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Built with our SDKs.</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Real-world capabilities demonstrating what composable AI infrastructure can achieve.
                </p>
              </div>

              <div className="grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
                {USE_CASES.map((uc) => (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group flex flex-col rounded-xl border border-trouve-border bg-trouve-surface/70 backdrop-blur-sm p-8 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5">
                    <span className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">{uc.builtWith}</span>
                    <h3 className="text-2xl font-bold">{uc.name}.</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                    <span className="mt-6 text-sm font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}
