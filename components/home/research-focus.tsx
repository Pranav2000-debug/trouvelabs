import { Bot, Waypoints, Network, KeyRound, Layers, Gauge } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Discipline = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const DISCIPLINES: Discipline[] = [
  {
    icon: Bot,
    title: "Agent-Based Reasoning",
    description: "Autonomous agents that plan, reason, and collaborate to solve multi-step problems.",
  },
  {
    icon: Waypoints,
    title: "Graph-Based Intelligence",
    description: "Dynamic knowledge graphs that evolve in real-time to represent complex world states.",
  },
  {
    icon: Network,
    title: "Federated & Private Learning",
    description: "Training models across silos without ever exposing the raw training data.",
  },
  {
    icon: KeyRound,
    title: "Cryptographic AI",
    description: "Verifiable computation and zero-knowledge proofs for AI outputs.",
  },
  {
    icon: Layers,
    title: "Orchestration",
    description: "Managing thousands of models and agents across distributed infrastructure.",
  },
  {
    icon: Gauge,
    title: "Real-Time Systems",
    description: "Sub-millisecond decision making for physical world control systems.",
  },
];

export default function ResearchFocus() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">Trouve Lab Disciplines</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Areas of Research Focus</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Six disciplines that feed every system we ship.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((d) => {
            const Icon = d.icon;
            return (
              <li
                key={d.title}
                className="group rounded-2xl border border-border bg-card p-6 backdrop-blur-sm transition-all hover:border-primary/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
