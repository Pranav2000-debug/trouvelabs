import { Award, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AboutMastraCard, AboutMastraEyebrow } from "./about-mastra-card";

type Differentiator = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  tags: string[];
};

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: Award,
    label: "Talent",
    title: "Leading talent across applied disciplines.",
    description:
      "Specialists in applied mathematics, operations research, machine learning, and blockchain - building solutions for cognitive cities across energy, water, traffic, housing, waste, finance, and telecommunications.",
    tags: ["Applied Math", "Operations Research", "ML", "Blockchain"],
  },
  {
    icon: Workflow,
    label: "Algorithms",
    title: "Industry-agnostic by construction.",
    description:
      "Our algorithms are built to be agnostic - designed once, deployed across industries and scales of application without rewriting the core logic for every new domain.",
    tags: ["Cross-domain", "Composable", "Production-ready"],
  },
];

export function AboutDifferentiators() {
  return (
    <AboutMastraCard>
      <div className="max-w-3xl">
        <AboutMastraEyebrow>What makes us different</AboutMastraEyebrow>
        <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          The combination is what compounds.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Two distinct edges that compound when applied to the same problem.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {DIFFERENTIATORS.map((d) => {
          const Icon = d.icon;
          return (
            <div
              key={d.label}
              className="flex flex-col rounded-2xl border border-trouve-border bg-trouve-navy/40 p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-trouve-teal">{d.label}</span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-trouve-teal/10">
                  <Icon className="h-5 w-5 text-trouve-teal" />
                </div>
              </div>

              <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground sm:text-2xl">{d.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{d.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {d.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-trouve-border bg-trouve-surface/70 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AboutMastraCard>
  );
}
