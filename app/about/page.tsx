import type { Metadata } from "next";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/motion-wrapper";
import Teams from "@/components/home-comps/teams";

export const metadata: Metadata = {
  title: "About — Trouve Labs",
  description:
    "Trouve Labs was born to redefine what's possible in mobility and tech by pioneering AI-driven solutions that transcend traditional boundaries.",
};

/* ──────────────────────────── Types ──────────────────────────── */

interface StatItem {
  value: string;
  label: string;
}

interface PillarItem {
  title: string;
  description: string;
}

/* ──────────────────────────── Data ──────────────────────────── */

const STATS: StatItem[] = [
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Research Papers" },
  { value: "5", label: "Core SDKs" },
];

const PILLARS: PillarItem[] = [
  {
    title: "Technical Integration.",
    description: "Embedding AI intelligence directly into mobility infrastructure through modular SDK architecture.",
  },
  {
    title: "Research-Driven Innovation.",
    description: "Advancing the frontier of mobility AI through rigorous academic research and applied experimentation.",
  },
  {
    title: "Community Collaboration.",
    description: "Building alongside developers and partners to create an open, composable AI ecosystem for mobility.",
  },
];

/* ──────────────────────────── Sections ──────────────────────── */

function AboutHero() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">About Trouve Labs.</h1>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Trouve Labs was born to redefine what&apos;s possible in mobility and tech by pioneering AI-driven solutions that transcend traditional
            boundaries. We make mobility more efficient, sustainable, and valuable.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="border-y border-trouve-border px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <FadeIn>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Mission.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Everything in motion creates value. We design AI systems that transform movement into measurable progress.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Our Approach.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We transform mathematical algorithms into applied intelligence for smart cities, logistics systems, and mobility infrastructure.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function VisionSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Our Vision.</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            To become the MENA region&apos;s leading AI mobility innovation firm, creating complex solutions from the simplest equations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-trouve-border px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <FadeInStaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-5xl font-bold text-trouve-yellow sm:text-6xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Platform Pillars.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">The foundations that drive our AI SDK infrastructure forward.</p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <FadeInStaggerItem key={pillar.title}>
              <div className="rounded-xl border border-trouve-border bg-card p-6">
                <h3 className="text-lg font-semibold text-trouve-teal">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}

/* ──────────────────────────── Page ────────────────────────────── */

export default async function AboutPage() {
  "use cache";

  return (
    <>
      <AboutHero />
      <MissionSection />
      <VisionSection />
      <StatsSection />
      <PillarsSection />
      <Teams />
    </>
  );
}
