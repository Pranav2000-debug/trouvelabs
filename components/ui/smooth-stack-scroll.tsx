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

export default function SmoothStackScroll(): React.JSX.Element {
  return (
      <main>
        <div className="wrapper">
          {/* ── Section 1: SDK Cards ── */}
          <section className="text-white h-dvh w-full bg-background/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
              <div className="mb-6 sm:mb-12 text-center">
                <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Core SDKs.</h2>
                <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Modular, composable AI building blocks designed for mobility intelligence.
                </p>
              </div>

              {/* Desktop: grid layout */}
              <div className="hidden sm:grid w-full max-w-5xl grid-cols-2 gap-5 lg:grid-cols-3">
                {SDK_CARDS.map((sdk) => {
                  const IconComponent = sdk.icon;
                  return (
                    <Link
                      prefetch={false}
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

              {/* Mobile: horizontal snap-scroll strip */}
              <div className="sm:hidden w-full">
                <div
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-1 scrollbar-hide"
                  style={{ WebkitOverflowScrolling: "touch" }}>
                  {SDK_CARDS.map((sdk) => {
                    const IconComponent = sdk.icon;
                    return (
                      <Link
                        prefetch={false}
                        key={sdk.slug}
                        href={`/products/${sdk.slug}`}
                        className="group flex flex-col snap-center shrink-0 w-[75vw] rounded-xl border border-trouve-border bg-trouve-surface/70 backdrop-blur-sm p-5 transition-all cursor-pointer">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-trouve-teal/10">
                          <IconComponent className="h-4 w-4 text-trouve-teal" />
                        </div>
                        <h3 className="text-base font-semibold">{sdk.name}</h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{sdk.purpose}</p>
                      </Link>
                    );
                  })}
                </div>
                <p className="mt-2 text-center text-xs text-muted-foreground/60">Swipe to explore →</p>
              </div>
            </div>
          </section>

          {/* ── Section 2: Use Cases ── */}
          <section className="text-white h-dvh w-full bg-trouve-navy/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
              <div className="mb-6 sm:mb-12 text-center">
                <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Built with our SDKs.</h2>
                <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
                  Real-world capabilities demonstrating what composable AI infrastructure can achieve.
                </p>
              </div>

              <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
                {USE_CASES.map((uc) => (
                  <Link
                    prefetch={false}
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group flex flex-col rounded-xl border border-trouve-border bg-trouve-surface/70 backdrop-blur-sm p-5 sm:p-8 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5">
                    <span className="mb-1 sm:mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">{uc.builtWith}</span>
                    <h3 className="text-xl sm:text-2xl font-bold">{uc.name}.</h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                    <span className="mt-4 sm:mt-6 text-sm font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">
                      Explore →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
  );
}
