"use client";

import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import {
  Brain,
  Sigma,
  Cpu,
  Lock,
  Building2,
  BarChart3,
  Share2,
  Database,
  TrendingUp,
  SlidersHorizontal,
  Repeat,
  Radar,
  Route,
  Network,
  Layers,
  HardDrive,
  KeyRound,
} from "lucide-react";
import { PathThinIcon } from "@/components/icons/ph-path-thin";
import { BentoProtrusion, type TabData } from "@/components/ui/bentoProtusion";
import DecryptedText from "@/components/ui/DecryptedText";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type CapabilityIcon = ComponentType<{ className?: string }>;

type FeatureBoxData = {
  icon: CapabilityIcon;
  title: string;
  description: string;
};

type HeroCard = {
  eyebrow: string;
  heading: [string, string];
  description: string;
  image: string;
  imageAlt: string;
  features: [FeatureBoxData, FeatureBoxData];
  footerTitle: string;
  footerSubtitle: string;
  footerBullets: [string, string];
};

type Capability = { id: string; icon: CapabilityIcon; label: string; hero: HeroCard };

const CAPABILITIES: Capability[] = [
  {
    id: "ai-rd",
    icon: Brain,
    label: "AI R&D",
    hero: {
      eyebrow: "ADAPTIVE AI SYSTEMS",
      heading: ["From research", "to runtime"],
      description:
        "We design AI-driven systems that support smarter decision-making, automation, prediction, optimization, and real-time intelligence.",
      image: "/assets/ai-rnd.png",
      imageAlt: "AI research and development visualization",
      features: [
        {
          icon: SlidersHorizontal,
          title: "Foundation model fine-tuning and evaluation",
          description: "Adapt base models to your domain with measurable gains.",
        },
        {
          icon: Repeat,
          title: "Reinforcement learning over operational telemetry",
          description: "Learn from live system feedback, not just static data.",
        },
      ],
      footerTitle: "Decision intelligence",
      footerSubtitle: "Embedded in your stack",
      footerBullets: [
        "Predictive maintenance and anomaly detection",
        "Workflow automation with human-in-the-loop",
      ],
    },
  },
  {
    id: "optimization",
    icon: Sigma,
    label: "Optimization",
    hero: {
      eyebrow: "MATHEMATICAL MODELING",
      heading: ["Solving the", "hard parts"],
      description:
        "We use mathematical modeling, algorithm design, and operations research to solve complex problems across mobility, logistics, energy, and enterprise infrastructure.",
      image: "/assets/optimization.png",
      imageAlt: "Optimization surface visualization",
      features: [
        {
          icon: BarChart3,
          title: "Mixed-integer and constraint optimization",
          description: "Solve large, real-world problems with mathematical rigor.",
        },
        {
          icon: Share2,
          title: "Stochastic and combinatorial methods",
          description: "Model uncertainty and complex decision spaces.",
        },
      ],
      footerTitle: "Real-world optimization",
      footerSubtitle: "Routing, scheduling, allocation",
      footerBullets: [
        "Last-mile and multi-depot routing",
        "Resource and shift scheduling",
      ],
    },
  },
  {
    id: "mobility",
    icon: PathThinIcon,
    label: "Mobility",
    hero: {
      eyebrow: "MOVEMENT AS DATA",
      heading: ["Supply chains,", "fleets, cities"],
      description:
        "We build solutions that optimize supply chains, improve urban traffic flow, streamline logistics, and support smarter movement across cities and industries.",
      image: "/assets/mobility.png",
      imageAlt: "Mobility network visualization",
      features: [
        {
          icon: Radar,
          title: "Live traffic and demand modeling",
          description: "Forecast congestion and demand before it happens.",
        },
        {
          icon: Route,
          title: "Multi-modal route synthesis",
          description: "Blend transit modes into a single optimal path.",
        },
      ],
      footerTitle: "Smarter operations",
      footerSubtitle: "Fleet & traffic intelligence",
      footerBullets: [
        "Predictive ETA and dwell-time models",
        "Adaptive signal control prototypes",
      ],
    },
  },
  {
    id: "compute",
    icon: Cpu,
    label: "Compute",
    hero: {
      eyebrow: "WORKLOAD ORCHESTRATION",
      heading: ["Hybrid by", "design"],
      description:
        "We develop tools for decentralized and hybrid computational workloads, helping organizations manage compute more efficiently while supporting privacy, control, and scalability.",
      image: "/assets/compute.png",
      imageAlt: "Compute orchestration visualization",
      features: [
        {
          icon: Network,
          title: "Edge / cloud / on-prem scheduling",
          description: "Place workloads wherever they run best.",
        },
        {
          icon: Layers,
          title: "Cost-aware placement policies",
          description: "Balance performance against spend automatically.",
        },
      ],
      footerTitle: "Compute where data lives",
      footerSubtitle: "Privacy & scale by default",
      footerBullets: [
        "Federated training pipelines",
        "Confidential compute enclaves",
      ],
    },
  },
  {
    id: "privacy",
    icon: Lock,
    label: "Privacy",
    hero: {
      eyebrow: "DATA SOVEREIGNTY",
      heading: ["Privacy by", "default"],
      description:
        "We research and build systems where data ownership, privacy, and security are central, not afterthoughts.",
      image: "/assets/privacy.png",
      imageAlt: "Data privacy visualization",
      features: [
        {
          icon: HardDrive,
          title: "Local-first storage primitives",
          description: "Keep raw data on-device by default.",
        },
        {
          icon: KeyRound,
          title: "Encrypted compute and key custody",
          description: "Compute on encrypted data without exposing keys.",
        },
      ],
      footerTitle: "Intelligence without exposure",
      footerSubtitle: "Personalize without surveilling",
      footerBullets: [
        "Differential privacy in training loops",
        "On-device personalization models",
      ],
    },
  },
  {
    id: "smart-city",
    icon: Building2,
    label: "Smart City",
    hero: {
      eyebrow: "COGNITIVE CITIES",
      heading: ["Sense, analyze,", "adapt"],
      description:
        "We apply AI, algorithms, and data intelligence to support smarter cities, including mobility, energy, water, housing, waste management, finance, and telecommunications.",
      image: "/assets/smart-city.png",
      imageAlt: "Smart city infrastructure visualization",
      features: [
        {
          icon: Database,
          title: "Cross-utility data fusion",
          description: "Unify diverse data sources across city systems.",
        },
        {
          icon: TrendingUp,
          title: "Demand-responsive infrastructure",
          description: "Adapt to real-time needs for a more resilient city.",
        },
      ],
      footerTitle: "Infrastructure that learns",
      footerSubtitle: "Citizen-scale impact",
      footerBullets: [
        "Equity-aware resource allocation",
        "Anomaly detection on utility grids",
      ],
    },
  },
];

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

function GlowCard({ children, "aria-label": ariaLabel }: { children: ReactNode; "aria-label"?: string }) {
  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="rounded-xl border border-white/10 bg-gradient-to-br from-background/70 to-background/40 p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 hover:border-primary/40"
    >
      {children}
    </div>
  );
}

function CapabilityHeroCard({ hero }: { hero: HeroCard }) {
  const { reduced } = useReducedMotion();
  return (
    <div className="relative flex h-full flex-col overflow-hidden bg-card p-6 sm:p-7 lg:p-8">
      <Image
        src={hero.image}
        alt={hero.imageAlt}
        width={1536}
        height={1024}
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-auto w-80 brightness-75 saturate-75 sm:block sm:w-96 lg:w-[30rem]"
      />
      {/* Darkens the image where it sits behind the text so the description stays legible */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden bg-black/25 sm:block" />
      <div className="pointer-events-none absolute inset-0 z-[5] hidden bg-gradient-to-r from-card/90 via-card/45 to-card/10 sm:block" />

      <div className="relative z-10 max-w-xs sm:max-w-sm">
        <p className="font-mono text-xs uppercase tracking-wider text-primary">{hero.eyebrow}</p>
        <h3 className="mt-2 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
          {hero.heading[0]}
          <br />
          {hero.heading[1]}
        </h3>
        <div className="mt-4 h-0.5 w-10 bg-primary" />
        <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {reduced ? (
            <span className="font-mono">{hero.description}</span>
          ) : (
            <DecryptedText
              text={hero.description}
              animateOn="view"
              sequential
              speed={8}
              characters={DEFAULT_CHARS}
              className="font-mono"
              encryptedClassName="font-mono text-primary/60"
            />
          )}
        </div>
      </div>

      <div className="relative z-10 mt-auto flex flex-col gap-6 pt-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {hero.features.map((f, i) => {
            const Icon = f.icon;
            return (
              <GlowCard key={i} aria-label={f.title}>
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-snug text-foreground">{f.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{f.description}</p>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>

        <div>
          <div className="border-t border-border" />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{hero.footerTitle}</p>
              <p className="text-xs text-primary">{hero.footerSubtitle}</p>
            </div>
            <ul className="space-y-1.5">
              {hero.footerBullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildTab(cap: Capability): TabData {
  return {
    id: cap.id,
    label: cap.label,
    icon: cap.icon,
    content: <CapabilityHeroCard hero={cap.hero} />,
  };
}

const LEFT_TABS: TabData[] = CAPABILITIES.slice(0, 3).map(buildTab);
const RIGHT_TABS: TabData[] = CAPABILITIES.slice(3, 6).map(buildTab);

export default function CapabilityShowcase() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">What we do</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            We transform research into working technology.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Six capability surfaces - from foundational AI research to deployed cognitive infrastructure - that turn complex problems into systems that actually run.
          </p>
        </div>

        <BentoProtrusion leftTabs={LEFT_TABS} rightTabs={RIGHT_TABS} />
      </div>
    </section>
  );
}
