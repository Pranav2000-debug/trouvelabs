import Link from "next/link";
import { FadeIn } from "@/components/ui/motion-wrapper";
import { AuroraText } from "@/components/ui/aurora-text";
import { ArrowUpRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:pt-32 lg:pb-20">
      <div className="relative mx-auto max-w-2xl text-center z-20">
        <FadeIn>
          <AuroraText
            className="text-6xl font-bold uppercase leading-none tracking-tight sm:text-8xl lg:text-9xl"
            colors={["#ffffffff", "#9fcfebff", "#c8cacbff", "#3d8585ff"]}
            speed={1}>
            404
          </AuroraText>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-6 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            This page took a wrong turn
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground sm:text-lg">
            The page you are looking for does not exist or may have moved. Let us get you back on route.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row z-20">
            <Link
              prefetch={false}
              href="/"
              className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:bg-primary/80">
              <Home className="mr-2 h-4 w-4" />
              <span>Back home</span>
            </Link>
            <Link
              prefetch={false}
              href="/projects"
              className="group inline-flex h-11 items-center justify-center rounded-md border bg-background/30 backdrop-blur-3xl border-primary/30 px-6 text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:border-primary hover:text-primary">
              <span>Explore our research</span>
              <div className="w-0 overflow-hidden transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-7">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
