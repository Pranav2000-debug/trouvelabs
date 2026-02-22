import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../motion-wrapper";

export default function MobilityContextSection() {
  return (
    <section className="relative mb-20 px-4 py-16 sm:px-6 sm:py-24">
      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Mobility is the domain.</h2>
          <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
            Everything in motion creates value. We transform mathematical algorithms into applied intelligence for supply chains, traffic
            optimization, and logistics systems.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-10 grid gap-5 sm:mt-16 sm:gap-8 sm:grid-cols-3">
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
              <h3 className="text-lg font-semibold text-trouve-yellow">Enablement.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Technical integration frameworks that embed AI intelligence directly into mobility infrastructure.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
              <h3 className="text-lg font-semibold text-trouve-yellow">Research.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                10+ research papers driving innovation at the intersection of AI, mobility, and movement-driven efficiency.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border border-trouve-border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
              <h3 className="text-lg font-semibold text-trouve-yellow">Development.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Community-driven SDK development powering the intelligence layer within AMS-built solutions and beyond.
              </p>
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}
