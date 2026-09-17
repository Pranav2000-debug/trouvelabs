import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { BackgroundCardPlate } from "@/components/ui/background-card-plate";
import { HeroFeatureCard } from "@/components/home/hero-feature-card";
import { HeroTerminalCard, type TerminalLine } from "@/components/home/hero-terminal-card";

const STATS = [
  { id: "verticals", value: "5+", label: "RESEARCH VERTICALS" },
  { id: "experiments", value: "30+", label: "EXPERIMENTS" },
  { id: "possibilities", value: "∞", label: "POSSIBILITIES" },
];

const TERMINAL_LINES: TerminalLine[] = [
  { text: "> ingesting real-world data..." },
  { text: "> optimizing at scale..." },
  { text: "> more efficient systems..." },
  { text: "> a more open future." },
];

function PerceptionIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 8V5a1 1 0 0 1 1-1h3" strokeLinecap="round" />
      <path d="M16 4h3a1 1 0 0 1 1 1v3" strokeLinecap="round" />
      <path d="M4 16v3a1 1 0 0 0 1 1h3" strokeLinecap="round" />
      <path d="M16 20h3a1 1 0 0 0 1-1v-3" strokeLinecap="round" />
      <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function DataIntelligenceIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" fill="none">
      <line x1="8" y1="10" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="10" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="8" y1="22" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <line x1="24" y1="22" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="8" cy="10" r="2.5" fill="currentColor" />
      <circle cx="24" cy="10" r="2.5" fill="currentColor" />
      <circle cx="8" cy="22" r="2.5" fill="currentColor" />
      <circle cx="24" cy="22" r="2.5" fill="currentColor" />
      <circle
        cx="16"
        cy="16"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        className="fill-background transition-colors group-hover:fill-primary"
      />
    </svg>
  );
}

function LlmInfraIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 3L2 8l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  );
}

export default async function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left column: copy, CTAs, stats */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <FadeIn>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
              RESEARCH &times; SYSTEMS &times; REAL-WORLD IMPACT
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 mt-5 text-4xl font-bold leading-[1.06] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="block">Finding</span>
              <span className="block">efficiencies</span>
              <span className="block">
                at every{" "}
                <span className="inline-block font-normal italic text-primary drop-shadow-[0_0_24px_rgba(78,201,212,0.45)]">
                  curve
                </span>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              We research, design, and build intelligent systems that improve how people, data, goods, and infrastructure move.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mb-12 flex flex-wrap items-center gap-5 sm:mb-16 sm:gap-7">
              <Link
                prefetch={false}
                href="mailto:hood@mailahoy.com"
                className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:bg-primary/80"
              >
                <span>Get in Touch</span>
                <div className="w-0 overflow-hidden transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-7">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
              <Link
                prefetch={false}
                href="/projects"
                className="group inline-flex h-11 items-center justify-center rounded-md border border-primary/30 bg-background/30 px-6 text-sm font-medium text-muted-foreground backdrop-blur-3xl transition-all duration-300 ease-out hover:border-primary hover:text-primary"
              >
                <span>Explore Our Research</span>
                <div className="w-0 overflow-hidden transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-7">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="grid max-w-md grid-cols-3 border-t border-border pt-6">
              {STATS.map((stat, idx) => (
                <div key={stat.id} className={idx !== 0 ? "border-l border-border pl-4 sm:pl-6" : "pr-4"}>
                  <span className="block font-mono text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-xs font-mono uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right column: tilted card composition */}
        <div className="relative flex h-full min-h-[500px] w-full items-center justify-center sm:min-h-[560px] lg:col-span-6 lg:min-h-[640px]">
          {/* Desktop: hand-placed diagonal composition */}
          <div className="relative hidden h-[620px] w-full lg:block">
            <div className="absolute left-[8%] top-[8%] z-20">
              <HeroFeatureCard
                category="PERCEPTION"
                title={
                  <>
                    From pixels <br /> to perception
                  </>
                }
                icon={<PerceptionIcon />}
                depth="foreground"
              />
            </div>

            <div className="absolute right-0 top-[20%] z-30">
              <HeroFeatureCard
                category="DATA INTELLIGENCE"
                title={
                  <>
                    Connecting <br /> knowledge
                  </>
                }
                icon={<DataIntelligenceIcon />}
                outerEyebrow="MULTIMODAL UNDERSTANDING"
                depth="foreground"
              />
            </div>

            <div className="absolute left-[2%] top-[46%] z-20">
              <div className="pointer-events-none absolute -left-5 -top-7 z-10 h-[190px] w-full sm:w-[320px] md:w-[350px] lg:w-[360px]">
                <BackgroundCardPlate />
              </div>
              <div className="relative z-20">
                <HeroTerminalCard lines={TERMINAL_LINES} fadeBottom />
              </div>
            </div>

            <div className="absolute bottom-[4%] right-[2%] z-30 flex items-end gap-5">
              <HeroFeatureCard
                category="LLM INFRA"
                title={
                  <>
                    Models in <br /> motion
                  </>
                }
                icon={<LlmInfraIcon />}
                footer="99.98% OPS"
                depth="mid"
              />
              <div className="hidden flex-col space-y-1.5 border-l border-border pb-2 pl-4 md:flex">
                <div className="mb-1 h-px w-6 bg-white/20" />
                <span className="text-xs font-mono tracking-[0.25em] text-muted-foreground">PEOPLE</span>
                <span className="text-xs font-mono tracking-[0.25em] text-muted-foreground">DATA</span>
                <span className="text-xs font-mono tracking-[0.25em] text-muted-foreground">GOODS</span>
                <span className="text-xs font-mono tracking-[0.25em] text-muted-foreground">INFRASTRUCTURE</span>
              </div>
            </div>
          </div>

          {/* Tablet & mobile: stacked grid, no absolute positioning */}
          <div className="z-20 grid w-full grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:hidden">
            <HeroFeatureCard
              category="PERCEPTION"
              title={
                <>
                  From pixels <br /> to perception
                </>
              }
              icon={<PerceptionIcon />}
              depth="foreground"
              className="w-full sm:w-auto"
            />
            <HeroFeatureCard
              category="DATA INTELLIGENCE"
              title={
                <>
                  Connecting <br /> knowledge
                </>
              }
              icon={<DataIntelligenceIcon />}
              depth="foreground"
              className="w-full sm:w-auto"
            />
            <div className="relative pt-4 sm:col-span-2">
              <div className="pointer-events-none absolute -left-2 -top-3 z-10 h-[180px] w-full">
                <BackgroundCardPlate />
              </div>
              <div className="relative z-20">
                <HeroTerminalCard lines={TERMINAL_LINES} fadeBottom className="w-full" />
              </div>
            </div>
            <HeroFeatureCard
              category="LLM INFRA"
              title={
                <>
                  Models in <br /> motion
                </>
              }
              icon={<LlmInfraIcon />}
              footer="99.98% OPS"
              depth="mid"
              className="w-full sm:w-auto sm:col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
