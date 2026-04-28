import { BreenoMemoryIcon } from "@/components/icons/arcticons-breeno-memory";
import { AboutMastraCard, AboutMastraEyebrow } from "./about-mastra-card";

export function AboutLead() {
  return (
    <AboutMastraCard>
      {/* Soft accent — top-right radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-trouve-teal/10 blur-3xl"
      />

      <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <AboutMastraEyebrow>About Trouve Labs</AboutMastraEyebrow>

          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            We turn deep research into systems that actually run.
          </h1>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              Trouve Labs is a research and development organization working in core and deep tech, aiming to lower the barrier to entry for deep-tech enthusiasts, organizations, and developers by providing comprehensive tooling.
            </p>
            <p>
              We embody decentralization through that tooling — especially for the orchestration of hybrid and decentralized computational workloads — so teams can run advanced workloads with relative ease.
            </p>
            <p>
              Built to pioneer AI-driven solutions in mobility and transcend boundaries in the space of movement, Trouve Labs takes generic mathematical algorithms and transforms them to enable the wellness of smart — or otherwise — cities.
            </p>
          </div>
        </div>

        {/* Right visual column — abstract motif */}
        <div className="hidden items-center justify-center lg:col-span-4 lg:flex">
          <div className="relative flex h-48 w-48 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-trouve-teal/20" />
            <div className="absolute inset-4 rounded-full border border-trouve-teal/30" />
            <div className="absolute inset-8 rounded-full border border-trouve-teal/40" />
            <div className="absolute inset-12 flex items-center justify-center rounded-full bg-trouve-teal/10">
              <BreenoMemoryIcon className="h-10 w-10 text-trouve-teal" />
            </div>
          </div>
        </div>
      </div>
    </AboutMastraCard>
  );
}
