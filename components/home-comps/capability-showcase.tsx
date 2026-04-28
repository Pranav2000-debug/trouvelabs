"use client";

import { useState, type ComponentType } from "react";
import { Brain, Sigma, Cpu, Lock, Building2 } from "lucide-react";
import { PathThinIcon } from "@/components/icons/ph-path-thin";
import { CapabilityShowcaseCard } from "./capability-showcase-card";
import { cn } from "@/lib/utils";

type CardContent = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

type CapabilityIcon = ComponentType<{ className?: string }>;

type Capability = {
  icon: CapabilityIcon;
  label: string;
  cards: [CardContent, CardContent];
};

const CAPABILITIES: Capability[] = [
  {
    icon: Brain,
    label: "AI R&D",
    cards: [
      {
        title: "Adaptive AI systems",
        subtitle: "From research to runtime",
        description:
          "We design AI-driven systems that support smarter decision-making, automation, prediction, optimization, and real-time intelligence.",
        bullets: [
          "Foundation model fine-tuning and evaluation",
          "Reinforcement learning over operational telemetry",
          "Sub-second inference on production traffic",
        ],
      },
      {
        title: "Decision intelligence",
        subtitle: "Embedded in your stack",
        description:
          "Prediction surfaces, automation runtimes, and decision APIs that fit alongside your existing services.",
        bullets: [
          "Predictive maintenance and anomaly detection",
          "Workflow automation with human-in-the-loop",
          "Streaming inference at scale",
        ],
      },
    ],
  },
  {
    icon: Sigma,
    label: "Optimization",
    cards: [
      {
        title: "Mathematical modeling",
        subtitle: "Solving the hard parts",
        description:
          "We use mathematical modeling, algorithm design, and operations research to solve complex problems across mobility, logistics, energy, and enterprise infrastructure.",
        bullets: [
          "Mixed-integer and constraint optimization",
          "Stochastic and combinatorial methods",
          "Custom solver pipelines",
        ],
      },
      {
        title: "Real-world optimization",
        subtitle: "Routing, scheduling, allocation",
        description:
          "Optimization engines that translate business rules into operationally-deployable algorithms.",
        bullets: [
          "Last-mile and multi-depot routing",
          "Resource and shift scheduling",
          "Capacity and inventory allocation",
        ],
      },
    ],
  },
  {
    icon: PathThinIcon,
    label: "Mobility",
    cards: [
      {
        title: "Movement as data",
        subtitle: "Supply chains, fleets, cities",
        description:
          "We build solutions that optimize supply chains, improve urban traffic flow, streamline logistics, and support smarter movement across cities and industries.",
        bullets: [
          "Live traffic and demand modeling",
          "Multi-modal route synthesis",
          "Fleet telemetry ingestion",
        ],
      },
      {
        title: "Smarter operations",
        subtitle: "Fleet & traffic intelligence",
        description:
          "Operational dashboards and decision agents grounded in your live mobility graph.",
        bullets: [
          "Predictive ETA and dwell-time models",
          "Adaptive signal control prototypes",
          "Driver and dispatcher copilots",
        ],
      },
    ],
  },
  {
    icon: Cpu,
    label: "Compute",
    cards: [
      {
        title: "Workload orchestration",
        subtitle: "Hybrid by design",
        description:
          "We develop tools for decentralized and hybrid computational workloads, helping organizations manage compute more efficiently while supporting privacy, control, and scalability.",
        bullets: [
          "Edge / cloud / on-prem scheduling",
          "Cost-aware placement policies",
          "Failure and drift recovery",
        ],
      },
      {
        title: "Compute where data lives",
        subtitle: "Privacy & scale by default",
        description:
          "Distributed runtimes that keep sensitive data in place while still serving cross-tenant intelligence.",
        bullets: [
          "Federated training pipelines",
          "Confidential compute enclaves",
          "Verifiable workload audit logs",
        ],
      },
    ],
  },
  {
    icon: Lock,
    label: "Privacy",
    cards: [
      {
        title: "Data sovereignty",
        subtitle: "Privacy by default",
        description:
          "We research and build systems where data ownership, privacy, and security are central, not afterthoughts.",
        bullets: [
          "Local-first storage primitives",
          "Encrypted compute and key custody",
          "Auditable consent and access trails",
        ],
      },
      {
        title: "Intelligence without exposure",
        subtitle: "Personalize without surveilling",
        description:
          "Privacy-preserving ML stacks that deliver personalization without aggregating raw user data.",
        bullets: [
          "Differential privacy in training loops",
          "On-device personalization models",
          "Zero-knowledge attestation surfaces",
        ],
      },
    ],
  },
  {
    icon: Building2,
    label: "Smart City",
    cards: [
      {
        title: "Cognitive cities",
        subtitle: "Sense, analyze, adapt",
        description:
          "We apply AI, algorithms, and data intelligence to support smarter cities, including mobility, energy, water, housing, waste management, finance, and telecommunications.",
        bullets: [
          "Cross-utility data fusion",
          "Demand-responsive infrastructure",
          "Citizen-scale digital twins",
        ],
      },
      {
        title: "Infrastructure that learns",
        subtitle: "Citizen-scale impact",
        description:
          "Infrastructure analytics that compound: every signal makes the next decision sharper, fairer, and faster.",
        bullets: [
          "Equity-aware resource allocation",
          "Anomaly detection on utility grids",
          "Cross-domain policy simulation",
        ],
      },
    ],
  },
];

export default function CapabilityShowcase() {
  const [active, setActive] = useState(0);
  const cap = CAPABILITIES[active];

  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header - left-aligned, asymmetric to break centred-heading rhythm */}
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-trouve-teal">What we do</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            We transform research into working technology.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Six capability surfaces - from foundational AI research to deployed cognitive infrastructure - that turn complex problems into systems that actually run.
          </p>
        </div>

        {/* Tab row */}
        <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {CAPABILITIES.map((c, i) => {
            const Icon = c.icon;
            const isActive = active === i;
            return (
              <button
                key={c.label}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={cn(
                  "group relative aspect-square rounded-2xl border transition-all",
                  "flex flex-col items-center justify-center gap-2",
                  isActive
                    ? "border-trouve-teal/60 bg-trouve-surface/80 shadow-lg shadow-trouve-teal/10"
                    : "border-trouve-border bg-trouve-surface/30 hover:bg-trouve-surface/60",
                )}>
                <Icon
                  className={cn(
                    "h-7 w-7 transition-colors",
                    isActive ? "text-trouve-teal" : "text-muted-foreground group-hover:text-foreground",
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}>
                  {c.label}
                </span>

                {/* Connector - bridges active tab to the card row below */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute left-1/2 top-full h-6 w-0.5 -translate-x-1/2 bg-trouve-teal transition-opacity",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            );
          })}
        </div>

        {/* Detail cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {cap.cards.map((card, i) => (
            <CapabilityShowcaseCard
              key={`${active}-${i}`}
              title={card.title}
              subtitle={card.subtitle}>
              <p className="text-sm leading-relaxed text-muted-foreground">{card.description}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-trouve-teal" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </CapabilityShowcaseCard>
          ))}
        </div>
      </div>
    </section>
  );
}
