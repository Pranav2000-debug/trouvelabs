import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../ui/motion-wrapper";

interface PillarItem {
  title: string;
  description: string;
}
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
export function PillarsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn className="flex flex-col items-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Platform Pillars.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">The foundations that drive our AI SDK infrastructure forward.</p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <FadeInStaggerItem key={pillar.title} className="h-full">
              <div className="h-full rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-primary">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
