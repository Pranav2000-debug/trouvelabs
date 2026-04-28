import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "../ui/motion-wrapper";
import { AuroraText } from "@/components/ui/aurora-text";
import { ArrowUpRight } from "lucide-react";

export default async function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 pt-32 pb-20">
      <div className="relative mx-auto max-w-4xl text-center z-20">
        <FadeIn>
          <div className="mb-2">
            <Image src="/image 51.png" alt="Trouve logo" width={120} height={78} className="mx-auto" priority />
            <span className="text-sm font-bold">Trouve Labs.</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <AuroraText
            className="text-2xl font-bold uppercase leading-tight tracking-tight sm:text-4xl lg:text-6xl"
            colors={["#ffffffff", "#9fcfebff", "#c8cacbff", "#3d8585ff"]}
            speed={1}>
            Finding Efficiencies at Every Curve
          </AuroraText>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            We research, design, and build intelligent systems that improve how people, data, goods, and infrastructure move.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row z-20">
            <Link
              prefetch={false}
              href="#contact"
              className="group inline-flex h-11 items-center justify-center rounded-md bg-trouve-teal px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:bg-trouve-teal/90">
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
              className="group inline-flex h-11 items-center justify-center rounded-md border bg-background/40 backdrop-blur-3xl border-trouve-teal/40 px-6 text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:border-trouve-teal hover:text-trouve-teal">
              <span>Explore Our Research</span>
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
