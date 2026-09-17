import Image from "next/image";

export default function DirectorsNote() {
  return (
    <section className="relative bg-background/80 backdrop-blur-sm px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-primary">Director&apos;s Note</p>
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden rounded-3xl border border-border">
              <Image src="/team/hood-khizer.webp" alt="Hood Khizer" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" loading="lazy" />
            </div>
          </div>

          <div className="lg:col-span-7">
            <blockquote className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
              &quot;We navigate complex technological landscapes to innovate solutions that are both practical and transformative.&quot;
            </blockquote>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              True innovation isn&apos;t just about the technology itself - it&apos;s about building the infrastructure for the future. At Trouve Labs, we focus on creating sustainable research cycles that ensure a consistent flow of solutions that drive real-world value for smart cities, mobility, and critical infrastructure.
            </p>

            <figcaption className="mt-8 border-t border-border pt-6">
              <p className="text-base font-semibold text-primary">Hood Khizer</p>
              <p className="text-sm text-muted-foreground">Director of Innovation &amp; Research | CEO, Trouve Labs</p>
            </figcaption>
          </div>
        </div>
      </div>
    </section>
  );
}
