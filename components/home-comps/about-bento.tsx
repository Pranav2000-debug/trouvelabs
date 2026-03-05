"use cache";
import Image from "next/image";
import { FadeInStagger, FadeInStaggerItem } from "../ui/motion-wrapper";

export default async function AboutBento() {
  return (
    <section className="relative bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 overflow-hidden">
      {/* BG pattern mask — topographic contour lines, darkened & faded */}
      <Image
        src="/BG PATTERN MASK.png"
        alt="Background pattern mask"
        fill
        className="pointer-events-none object-cover object-center opacity-[0.07] invert-[1]"
      />
      <div className="text-center text-4xl font-bold mb-10">What we do</div>
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Bento Grid ── */}
        <FadeInStagger className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Enablement — spans 2 cols on row 1 */}
          <FadeInStaggerItem className="md:col-span-2 md:row-span-1">
            <div className="flex h-full flex-col rounded-2xl border bg-trouve-surface/90 p-8">
              <h3 className="mb-4 text-lg font-semibold text-trouve-teal">Enablement</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Trouve Labs is centred on designing innovative solutions in the mobility space, driven by the philosophy that everything in motion
                creates value.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our focus extends beyond conventional transportation, embracing the broader context of mobility in a connected world.
              </p>
            </div>
          </FadeInStaggerItem>

          {/* Research — row 1, col 3 */}
          <FadeInStaggerItem>
            <div className="flex h-full flex-col rounded-2xl border bg-trouve-surface/90 p-8">
              <h3 className="mb-4 text-lg font-semibold text-trouve-teal">Research</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                We believe in the power of movement to drive progress, and our solutions reflect this belief, ensuring that every journey, delivery,
                or logistic operation is not just a movement, but a step towards a more efficient and productive future.
              </p>
            </div>
          </FadeInStaggerItem>

          {/* teal right arrow — row 2, col 1 */}
          <FadeInStaggerItem className="hidden md:block">
            <div className="h-full items-center justify-center rounded-2xl p-6">
              <Image src="/image 27.png" alt="Route direction" width={200} height={195} className="mx-auto" />
            </div>
          </FadeInStaggerItem>

          {/* Development — row 2, spans col 2-3 (wide) */}
          <FadeInStaggerItem className="relative md:col-span-2">
            <div className="flex h-full flex-col rounded-2xl border bg-trouve-surface/90 p-8 overflow-hidden">
              {/* Dog logo watermark */}
              <Image src="/image 51.png" alt="" width={120} height={78} className="pointer-events-none absolute right-6 bottom-4 opacity-[0.06]" />
              <h3 className="mb-4 text-lg font-semibold text-trouve-teal">Development</h3>
              <p className="relative text-sm leading-relaxed text-muted-foreground">
                We leverage tools like AI, machine learning, GIS, data science, operations research, and applied mathematics to transform how people
                and goods move, enhancing efficiency and unlocking value at every turn.
              </p>
            </div>
          </FadeInStaggerItem>
        </FadeInStagger>
      </div>
    </section>
  );
}
