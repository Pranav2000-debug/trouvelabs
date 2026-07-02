import Image from "next/image";

export default function PhilosophyBand() {
  return (
    <section className="relative overflow-hidden bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* BG pattern mask - topographic contour lines, darkened & faded */}
      <Image
        src="/assets/bg-pattern-mask.webp"
        alt=""
        fill
        className="pointer-events-none object-cover object-center opacity-[0.07] invert-[1]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">
              Innovation that moves beyond buzzwords
            </p>
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              Better questions. Better models. Real systems.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              At Trouve Labs, innovation is not just about adopting the latest technology. It is about asking better questions, building better models, and creating systems that solve real problems.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our work spans research papers, active projects, applied prototypes, and industry-facing solutions - with a continuous focus on learning, experimentation, and collaboration.
            </p>
          </div>

          <div className="hidden items-center justify-center lg:col-span-4 lg:flex">
            <Image
              src="/assets/image-27.webp"
              alt=""
              width={220}
              height={215}
              className="opacity-50"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
