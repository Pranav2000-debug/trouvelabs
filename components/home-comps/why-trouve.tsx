import { Microscope, Layers, ShieldCheck, Wrench, Activity } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const PILLARS: Pillar[] = [
  {
    icon: Microscope,
    title: "Research-Led Innovation",
    description:
      "We start with strong research foundations, then translate them into tools, platforms, and deployable systems.",
  },
  {
    icon: Layers,
    title: "Industry-Agnostic Algorithms",
    description:
      "Our algorithms are designed to be flexible, scalable, and adaptable across mobility, logistics, smart cities, and enterprise intelligence.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy and Data Sovereignty",
    description:
      "The next generation of digital infrastructure must protect user privacy while still enabling intelligent personalization and modern data needs.",
  },
  {
    icon: Wrench,
    title: "Deep Tech Accessibility",
    description:
      "We build tooling that helps developers, organizations, and researchers work with complex technology more easily.",
  },
  {
    icon: Activity,
    title: "Movement as a Source of Value",
    description:
      "Everything in motion creates value. Our role is to make that movement more intelligent, efficient, and secure.",
  },
];

export default function WhyTrouve() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — sticky-ish heading column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-trouve-teal">Why Trouve Labs</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Research depth. Practical execution. Real-world impact.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our team brings together expertise in applied mathematics, machine learning, blockchain, operations research, AI systems, and advanced software engineering — building technologies that operate across industries and at different scales.
              </p>
            </div>
          </div>

          {/* Right — pillar list */}
          <ul className="flex flex-col gap-3 lg:col-span-7">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.title}
                  className="group rounded-2xl border border-trouve-border bg-trouve-surface/70 p-6 backdrop-blur-sm transition-all hover:border-trouve-teal/30">
                  <div className="flex items-start gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-trouve-teal/10">
                      <Icon className="h-5 w-5 text-trouve-teal" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
