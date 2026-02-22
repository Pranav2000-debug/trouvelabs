import Link from "next/link";
import { FadeIn } from "../motion-wrapper";
import ShinyText from "../ShinyText";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-32 pb-20">
      {/* Prism WebGL background */}

      <div className="relative z-10 mx-auto max-w-4xl text-center z-20">
        <FadeIn>
          <ShinyText
            text="Finding Efficiencies at Every Curve."
            className="text-4xl font-bold uppercase leading-tight tracking-tight sm:text-7xl lg:text-8xl"
            speed={3}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
          />
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Building intelligent mobility systems through modular AI SDKs.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row z-20">
            <Link
              href="mailto:Hood@MailAhoy.com"
              className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              Request a Demo
            </Link>
            <Link
              href="/docs/quickstart"
              className="inline-flex h-11 items-center rounded-md border border-trouve-border px-6 text-sm font-medium text-muted-foreground transition-colors hover:border-trouve-teal hover:text-trouve-teal">
              Explore Docs
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
