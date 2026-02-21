import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import Prism from "@/components/Prism";
import { Eye, Network, Lock, Sparkles, Server } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SdkGridSection from "@/components/home-comps/sdkGrid";
import Image from "next/image";

/* ──────────────────────────── Types ──────────────────────────── */

interface SdkCardData {
  name: string;
  slug: string;
  purpose: string;
  icon: LucideIcon;
}

interface UseCaseData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
}

/* ──────────────────────────── Data ──────────────────────────── */

const SDK_CARDS: SdkCardData[] = [
  {
    name: "Vision SDK",
    slug: "vision-sdk",
    purpose: "Computer vision capabilities for intelligent visual processing.",
    icon: Eye,
  },
  {
    name: "Graph RAG SDK",
    slug: "graph-rag-sdk",
    purpose: "Knowledge graph + retrieval-augmented generation for context-aware AI.",
    icon: Network,
  },
  {
    name: "Tokenization SDK",
    slug: "tokenization-sdk",
    purpose: "Secure data tokenization and orchestration at scale.",
    icon: Lock,
  },
  {
    name: "GenAI SDK",
    slug: "genai-sdk",
    purpose: "Multimodal generative AI capabilities for diverse applications.",
    icon: Sparkles,
  },
  {
    name: "LLM Service",
    slug: "llm-service",
    purpose: "Managed large language model infrastructure, ready to deploy.",
    icon: Server,
  },
];

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

/* ──────────────────────────── Sections ──────────────────────── */

function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-20">
      {/* Prism WebGL background */}
      <div className="pointer-events-none absolute inset-0 opacity-40 z-10">
        <Prism animationType="rotate" timeScale={0.5} height={3.5} baseWidth={5.5} scale={3.6} hueShift={0} colorFrequency={1} noise={0} glow={1} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center z-20">
        <FadeIn>
          <h1 className="text-5xl font-bold uppercase leading-tight tracking-tight sm:text-7xl lg:text-8xl">Finding Efficiencies at Every Curve.</h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Building intelligent mobility systems through modular AI SDKs.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row z-20">
            <Link
              href="mailto:Hood@MailAhoy.com"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Request a Demo
            </Link>
            <Link
              href="/docs/quickstart"
              className="inline-flex h-11 items-center rounded-md border border-trouve-border px-6 text-sm font-medium text-muted-foreground transition-colors hover:border-trouve-teal hover:text-trouve-teal">
              Explore Docs
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function MobilityContextSection() {
  return (
    <section className="relative border-y border-trouve-border px-6 py-24">
      <Image src="/topo-vector-3.jpg" alt="" fill className="absolute inset-0 object-cover opacity-10 pointer-events-none select-none z-0" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Mobility is the domain.</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Everything in motion creates value. We transform mathematical algorithms into applied intelligence for supply chains, traffic
            optimization, and logistics systems.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-3">
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-6">
              <h3 className="text-lg font-semibold text-trouve-yellow">Enablement.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Technical integration frameworks that embed AI intelligence directly into mobility infrastructure.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-6">
              <h3 className="text-lg font-semibold text-trouve-yellow">Research.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                10+ research papers driving innovation at the intersection of AI, mobility, and movement-driven efficiency.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-6">
              <h3 className="text-lg font-semibold text-trouve-yellow">Development.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Community-driven SDK development powering the intelligence layer within AMS-built solutions and beyond.
              </p>
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}

function UseCasePreviewSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Built with our SDKs.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Real-world capabilities demonstrating what composable AI infrastructure can achieve.</p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <FadeInStaggerItem key={uc.slug}>
              <Link
                href={`/use-cases/${uc.slug}`}
                className="group flex flex-col rounded-xl border border-trouve-border bg-card p-8 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5">
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">{uc.builtWith}</span>
                <h3 className="text-2xl font-bold">{uc.name}.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                <span className="mt-6 text-sm font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="border-t border-trouve-border px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-5xl lg:text-6xl">Build Intelligent Mobility.</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Modern mobility made efficient, sustainable, and valuable.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:Hood@MailAhoy.com"
              className="inline-flex h-11 items-center rounded-md bg-primary px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Partner With Us
            </Link>
            <Link
              href="/docs/quickstart"
              className="inline-flex h-11 items-center rounded-md border border-trouve-border px-8 text-sm font-medium text-muted-foreground transition-colors hover:border-trouve-teal hover:text-trouve-teal">
              Explore Integration
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ──────────────────────────── Page ────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SdkGridSection SDK_CARDS={SDK_CARDS} />
      <MobilityContextSection />
      <UseCasePreviewSection />
      <FinalCtaSection />
    </>
  );
}
