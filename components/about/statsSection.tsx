import { FadeInStagger, FadeInStaggerItem } from "../ui/motion-wrapper";

interface StatItem {
  value: string;
  label: string;
}

const STATS: StatItem[] = [
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Research Papers" },
  { value: "5", label: "Core SDKs" },
];

export function StatsSection() {
  return (
    <section className="border-y border-border px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {STATS.map((stat) => (
            <FadeInStaggerItem key={stat.label}>
              <div className="text-center">
                <p className="text-3xl font-bold text-trouve-yellow sm:text-5xl lg:text-6xl">{stat.value}</p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</p>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
