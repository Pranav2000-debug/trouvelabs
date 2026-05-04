import { Truck, Users, GitBranch } from "lucide-react";
import type { ComponentType } from "react";
import { DatastoreIcon } from "@/components/icons/carbon-datastore";

type MovementIcon = ComponentType<{ className?: string }>;

type Movement = {
  icon: MovementIcon;
  label: string;
  description: string;
};

const MOVEMENTS: Movement[] = [
  {
    icon: Truck,
    label: "Goods",
    description: "Move through supply chains.",
  },
  {
    icon: Users,
    label: "People",
    description: "Move through cities.",
  },
  {
    icon: DatastoreIcon,
    label: "Data",
    description: "Moves across networks.",
  },
  {
    icon: GitBranch,
    label: "Decisions",
    description: "Move through organizations.",
  },
];

export default function OpeningPositioning() {
  return (
    <section className="relative bg-trouve-navy/40 px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - heading + closing line */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-trouve-teal">Deep Tech R&amp;D for Smarter Systems</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Every system has movement.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Trouve Labs studies these movements, identifies hidden inefficiencies, and builds intelligent technology that improves flow, performance, security, and value.
            </p>
          </div>

          {/* Right - 4 movement cards stacked */}
          <ul className="flex flex-col gap-4">
            {MOVEMENTS.map((m) => {
              const Icon = m.icon;
              return (
                <li
                  key={m.label}
                  className="flex items-center gap-5 rounded-2xl border border-trouve-border bg-trouve-card/70 p-5 backdrop-blur-sm transition-colors hover:border-trouve-teal/30">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-trouve-teal/10">
                    <Icon className="h-6 w-6 text-trouve-teal" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-foreground">{m.label}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{m.description}</p>
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
