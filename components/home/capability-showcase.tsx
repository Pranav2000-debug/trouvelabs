"use client";

import type { ComponentType } from "react";
import { Brain, Sigma, Cpu, Lock, Building2 } from "lucide-react";
import { PathThinIcon } from "@/components/icons/ph-path-thin";
import { BentoProtrusion, type TabData } from "@/components/ui/bentoProtusion";
import DecryptedText from "@/components/ui/DecryptedText";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type CardContent = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
};

type CapabilityIcon = ComponentType<{ className?: string }>;

type Capability = {
  id: string;
  icon: CapabilityIcon;
  label: string;
  cards: [CardContent, CardContent];
};

const CAPABILITIES: Capability[] = [
  {
    id: "ai-rd",
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
        ],
      },
    ],
  },
  {
    id: "optimization",
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
        ],
      },
    ],
  },
  {
    id: "mobility",
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
        ],
      },
    ],
  },
  {
    id: "compute",
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
        ],
      },
    ],
  },
  {
    id: "privacy",
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
        ],
      },
    ],
  },
  {
    id: "smart-city",
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
        ],
      },
    ],
  },
];

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

interface CapabilityFacetProps {
  prefix: string;
  card: CardContent;
}

function CapabilityFacet({ prefix, card }: CapabilityFacetProps) {
  const { reduced } = useReducedMotion();
  return (
    <div>
      <div className="mb-3">
        <p className="font-mono text-sm font-semibold text-foreground tracking-tight">
          {card.title}
        </p>
        <p className="mt-0.5 font-mono text-xs text-primary">
          {card.subtitle}
        </p>
      </div>
      <div className="text-sm leading-relaxed text-muted-foreground">
        {reduced ? (
          <span className="font-mono">{card.description}</span>
        ) : (
          <DecryptedText
            key={`${prefix}-desc`}
            text={card.description}
            animateOn="view"
            sequential
            speed={8}
            characters={DEFAULT_CHARS}
            className="font-mono"
            encryptedClassName="font-mono text-primary/60"
          />
        )}
      </div>
      <ul className="mt-4 space-y-2.5">
        {card.bullets.map((b, i) => (
          <li key={`${prefix}-b-${i}`} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
            <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            {reduced ? (
              <span className="font-mono">{b}</span>
            ) : (
              <DecryptedText
                key={`${prefix}-b-text-${i}`}
                text={b}
                animateOn="view"
                sequential
                speed={20}
                characters={DEFAULT_CHARS}
                className="font-mono"
                encryptedClassName="font-mono text-primary/60"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function buildTab(cap: Capability): TabData {
  return {
    id: cap.id,
    label: cap.label,
    icon: cap.icon,
    content: (
      <div className="flex flex-col gap-5">
        <CapabilityFacet prefix={`${cap.id}-0`} card={cap.cards[0]} />
        <div className="rounded-xl bg-card p-4">
          <CapabilityFacet prefix={`${cap.id}-1`} card={cap.cards[1]} />
        </div>
      </div>
    ),
  };
}

const LEFT_TABS: TabData[] = CAPABILITIES.slice(0, 3).map(buildTab);
const RIGHT_TABS: TabData[] = CAPABILITIES.slice(3, 6).map(buildTab);

export default function CapabilityShowcase() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
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
