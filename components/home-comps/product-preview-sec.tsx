import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { USE_CASES } from "@/lib/use-cases";
import { cn } from "@/lib/utils";

export default function SmoothStackScroll(): React.JSX.Element {
  return (
    <div className="w-full">
      {/* ── Section 1: SDK Cards ── */}
      <section className="text-white h-dvh w-full bg-background/80 backdrop-blur-sm sticky top-0 rounded-t-2xl border-t border-trouve-navy/70">
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
          <div className="mb-6 sm:mb-12 text-center">
            <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Core SDKs.</h2>
            <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Modular, composable AI building blocks designed for mobility intelligence.
            </p>
          </div>

          {/* Desktop: 3 + 2 grid (5 cards centered) */}
          <div className="hidden sm:grid w-full max-w-7xl gap-5 grid-cols-6">
            {PROJECTS.map((product, i) => {
              const IconComponent = product.icon;
              const span = cn(
                "col-span-3 md:col-span-2",
                i === 3 && "md:col-start-2",
                i === 4 && "col-span-6 md:col-span-2",
              );
              return product.comingSoon ? (
                <div
                  key={product.slug}
                  className={cn(span, "relative flex flex-col rounded-xl border bg-trouve-surface/90 backdrop-blur-sm p-6 opacity-60 cursor-not-allowed select-none")}>
                  <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/50">Coming Soon</span>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-trouve-teal/10">
                    <IconComponent className="h-5 w-5 text-trouve-teal" />
                  </div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                </div>
              ) : (
                <Link
                  prefetch={false}
                  key={product.slug}
                  href={`/projects/${product.slug}`}
                  className={cn(span, "group flex flex-col rounded-xl border bg-trouve-surface/90 backdrop-blur-sm p-6 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/15 cursor-pointer")}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-trouve-teal/10">
                    <IconComponent className="h-5 w-5 text-trouve-teal" />
                  </div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <span className="mt-auto pt-3 text-xs font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile: 2-row horizontal snap-scroll grid */}
          <div className="sm:hidden w-full">
            <div
              className="grid grid-flow-col grid-rows-2 auto-cols-[70vw] gap-3 overflow-x-scroll snap-x snap-mandatory pb-4 px-1"
              style={{ WebkitOverflowScrolling: "touch" }}>
              {PROJECTS.map((product) => {
                const IconComponent = product.icon;
                return product.comingSoon ? (
                  <div
                    key={product.slug}
                    className="relative flex h-full flex-col snap-center rounded-xl border bg-trouve-surface/90 backdrop-blur-sm p-5 opacity-60 cursor-not-allowed select-none">
                    <span className="absolute top-3 right-3 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/50">Coming Soon</span>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-trouve-teal/10">
                      <IconComponent className="h-4 w-4 text-trouve-teal" />
                    </div>
                    <h3 className="text-base font-semibold">{product.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{product.description}</p>
                  </div>
                ) : (
                  <Link
                    prefetch={false}
                    key={product.slug}
                    href={`/projects/${product.slug}`}
                    className="flex h-full flex-col snap-center rounded-xl border bg-trouve-surface/90 backdrop-blur-sm p-5 transition-all cursor-pointer">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-trouve-teal/10">
                      <IconComponent className="h-4 w-4 text-trouve-teal" />
                    </div>
                    <h3 className="text-base font-semibold">{product.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{product.description}</p>
                  </Link>
                );
              })}
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground/60">Swipe to explore →</p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Use Cases ── */}
      <section className="text-white h-dvh w-full bg-trouve-navy/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
          <div className="mb-6 sm:mb-12 text-center">
            <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Built with our SDKs.</h2>
            <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Real-world capabilities demonstrating what composable AI infrastructure can achieve.
            </p>
          </div>

          <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8">
            {USE_CASES.map((uc) => (
              <Link
                prefetch={false}
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="group flex flex-col rounded-xl border bg-trouve-surface/90 backdrop-blur-sm p-6 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/15 cursor-pointer">
                <span className="mb-1 sm:mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">{uc.builtWith}</span>
                <h3 className="text-xl sm:text-2xl font-bold">{uc.name}.</h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                <span className="pt-3 text-xs font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
