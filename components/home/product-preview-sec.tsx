import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants/projects";
import { SANDBOXES } from "@/lib/constants/sandboxes";
import { cn } from "@/lib/constants/utils";

export default function SmoothStackScroll(): React.JSX.Element {
  return (
    <div className="w-full">
      {/* ── Section 1: SDK Cards ── */}
      <section className="text-foreground h-dvh w-full bg-secondary/80 backdrop-blur-sm sticky top-0 rounded-t-2xl border-t border-secondary/60">
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
              const span = cn("col-span-3 md:col-span-2", i === 3 && "md:col-start-2", i === 4 && "col-span-6 md:col-span-2");
              return product.comingSoon ? (
                <div
                  key={product.slug}
                  className={cn(
                    span,
                    "relative flex flex-col rounded-xl border bg-card/80 backdrop-blur-sm p-6 opacity-60 cursor-not-allowed select-none",
                  )}>
                  <span className="absolute top-3 right-3 rounded-full bg-foreground/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-foreground/60">
                    Coming Soon
                  </span>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                </div>
              ) : (
                <Link
                  prefetch={false}
                  key={product.slug}
                  href={`/projects/${product.slug}`}
                  className={cn(
                    span,
                    "group flex flex-col rounded-xl border bg-card/80 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer",
                  )}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                  <span className="mt-auto pt-3 text-xs font-medium text-primary">
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
                    className="relative flex h-full flex-col snap-center rounded-xl border bg-card/80 backdrop-blur-sm p-5 opacity-60 cursor-not-allowed select-none">
                    <span className="absolute top-3 right-3 rounded-full bg-foreground/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-foreground/60">
                      Coming Soon
                    </span>
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-4 w-4 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold">{product.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{product.description}</p>
                  </div>
                ) : (
                  <Link
                    prefetch={false}
                    key={product.slug}
                    href={`/projects/${product.slug}`}
                    className="flex h-full flex-col snap-center rounded-xl border bg-card/80 backdrop-blur-sm p-5 transition-all cursor-pointer">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-4 w-4 text-primary" />
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

      {/* ── Section 2: Sandboxes ── */}
      <section className="text-foreground h-dvh w-full bg-background/80 backdrop-blur-sm sticky top-0 rounded-t-2xl overflow-hidden">
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
          <div className="relative mb-6 w-full max-w-6xl text-center sm:mb-12">
            <h2 className="text-2xl font-bold sm:text-4xl lg:text-5xl">Built with our SDKs.</h2>
            <p className="mx-auto mt-2 sm:mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
              Real-world capabilities demonstrating what composable AI infrastructure can achieve.
            </p>
            <div className="absolute right-0 top-0 hidden text-right lg:block">
              <span className="mb-1 block h-px w-6 bg-primary/60" />
              <span className="block text-xs font-medium uppercase leading-relaxed tracking-[0.2em] text-muted-foreground/60">
                Build<br />Integrate<br />Deploy<br />Scale
              </span>
            </div>
          </div>

          <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {SANDBOXES.map((uc) => (
              <a
                key={uc.slug}
                href={uc.href}
                target={uc.external ? "_blank" : undefined}
                rel={uc.external ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col rounded-xl border bg-card/80 backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-t-xl sm:h-44">
                  <Image src={uc.image} alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-1 sm:mb-2 text-xs font-medium uppercase tracking-wider text-primary">{uc.builtWith}</span>
                  <h3 className="text-xl sm:text-2xl font-semibold">{uc.name}.</h3>
                  <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                  <span className="mt-auto pt-3 text-xs font-medium text-primary">
                    {uc.external ? "Get Started →" : "Explore →"}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
