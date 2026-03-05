import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../ui/motion-wrapper";

export default async function MobilityContextSection() {
  return (
    <section className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Mobility is the domain.</h2>
            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Everything in motion creates value. We transform mathematical algorithms into applied intelligence for supply chains, traffic
              optimization, and logistics systems.
            </p>
          </div>
        </FadeIn>

        <FadeInStagger className="mt-10 flex flex-col gap-5 sm:mt-16 sm:gap-8 sm:flex-row">
          <FadeInStaggerItem>
            <div className="rounded-xl border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
              <h3 className="text-lg font-semibold text-trouve-yellow">Enablement.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Technical integration frameworks that embed AI intelligence directly into mobility infrastructure.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
              <h3 className="text-lg font-semibold text-trouve-yellow">Research.</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                10+ research papers driving innovation at the intersection of AI, mobility, and movement-driven efficiency.
              </p>
            </div>
          </FadeInStaggerItem>
          <FadeInStaggerItem>
            <div className="rounded-xl border bg-card p-5 sm:p-6 sm:min-h-[10rem]">
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
