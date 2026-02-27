import { FadeIn } from "../ui/motion-wrapper";

export function CombinedAboutSection() {
  return (
    <section className="px-6 py-32 border-b border-trouve-border">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Half: Main Heading */}
        <div className="flex-1 lg:sticky lg:top-32 h-fit">
          <FadeIn>
            <h1 className="text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">About Trouve Labs <span className="pl-8">.</span></h1>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Trouve Labs was born to redefine what&apos;s possible in mobility and tech by pioneering AI-driven solutions that transcend traditional
              boundaries. We make mobility more efficient, sustainable, and valuable.
            </p>
          </FadeIn>
        </div>

        {/* Right Half: Sub Headings */}
        <div className="flex-1 flex flex-col gap-16 lg:pt-4">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Our Mission.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Everything in motion creates value. We design AI systems that transform movement into measurable progress.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Our Approach.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We transform mathematical algorithms into applied intelligence for smart cities, logistics systems, and mobility infrastructure.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Our Vision.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                To become the MENA region&apos;s leading AI mobility innovation firm, creating complex solutions from the simplest equations.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
