import Link from "next/link";
import { FadeIn } from "../motion-wrapper";
import ShinyText from "@/components/ui/ShinyText";
import { ArrowUpRight } from "lucide-react";

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
              className="group inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:bg-primary/90">
              <span>Request a Demo</span>
              <div className="w-0 overflow-hidden transition-all duration-300 ease-out group-hover:ml-2 group-hover:w-7">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-current">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
            <Link
              href="/docs/quickstart"
              className="group inline-flex h-11 items-center justify-center rounded-md border border-trouve-border px-6 text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:border-trouve-teal hover:text-trouve-teal">
              <span>Explore Docs</span>
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
