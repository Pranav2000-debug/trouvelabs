"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/motion-wrapper";
import Image from "next/image";

interface AboutSection {
  title: string;
  body: string;
}

const WHY_SECTION: AboutSection = {
  title: "About Trouve Labs",
  body: "Trouve Labs is a research and development organization focused on core technology and deep-tech innovation. We combine applied mathematics, AI, machine learning, operations research, and decentralized infrastructure to create solutions that are technically strong, commercially relevant, and built for real-world impact. Complex problems do not always need complicated solutions — they need the right models, the right infrastructure, and the right research discipline.",
};

const TAB_SECTIONS: AboutSection[] = [
  {
    title: "Our Mission",
    body: "To pioneer the next iteration of technology by building tools that empower people, organizations, and developers to create solutions aligned with privacy, security, and intelligent progress.",
  },
  {
    title: "Our Philosophy",
    body: "Through a relentless focus on research and development, Trouve Labs believes in the power of movement to drive progress in an all-encompassing sense. Trouve Labs takes generic mathematical algorithms and transforms them to enable the wellness of smart – or otherwise – cities, among other functions.",
  },
  {
    title: "Our Vision",
    body: "Our vision is to harness the potential of technology to create a world where mobility is seamlessly integrated into everyday life, optimizing the way people and goods move and unlocking new levels of value across industries. We aim to become the MENA regions leading innovation firm that creates complex solutions from the simplest of equations.",
  },
  {
    title: "Innovation First",
    body: "At Trouve Labs, innovation is at the heart of everything we do. We constantly explore and redefine the boundaries of advanced mobility through innovation, cutting-edge research and revolutionary ideas.",
  },
  {
    title: "Continuous Learning & Open Collaboration",
    body: "We pride ourselves on our contributions to the mobility ecosystem, each driven by the need to create valuable change. We embrace and encourage a culture of continuous learning and open collaboration. By leveraging tools like AI, machine learning, and data science, we transform how the world moves, ensuring efficiency and innovation at every turn.",
  },
];

export function AboutTabbedSection() {
  const firstTabTitle = TAB_SECTIONS[0]?.title ?? "";
  const [activeTab, setActiveTab] = useState(firstTabTitle);

  const activeSection = useMemo(() => TAB_SECTIONS.find((section) => section.title === activeTab) ?? TAB_SECTIONS[0], [activeTab]);

  return (
    <section className="overflow-hidden border-b border-trouve-border py-20 sm:py-24 relative">
      <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/3 z-0 pointer-events-none opacity-5 xl:-translate-x-1/4">
        <Image src="/image 22.png" alt="About Background" width={400} height={400} className="object-contain" />
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row lg:gap-16 relative z-10">
        <FadeIn className="px-6 lg:w-[45%] lg:shrink-0">
          <div className="lg:sticky lg:top-28 h-fit">
            <div className="flex items-center gap-3 sm:block">
              <Image src="/image 22.png" alt="Trouve Labs Icon" width={48} height={48} className="object-contain sm:hidden" />
              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{WHY_SECTION.title}</h1>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{WHY_SECTION.body}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="min-w-0 px-2 lg:flex-1">
          <div className="rounded-2xl p-4 sm:p-6 w-full">
            <div className="w-full relative min-w-0 flex flex-col sm:flex-row">
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:snap-none">
                {TAB_SECTIONS.map((section) => {
                  const isActive = section.title === activeTab;
                  return (
                    <button
                      key={section.title}
                      type="button"
                      onClick={() => setActiveTab(section.title)}
                      className={cn(
                        "shrink-0 snap-start whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors sm:shrink sm:whitespace-normal sm:text-base",
                        isActive
                          ? "border-trouve-teal bg-trouve-teal text-primary-foreground shadow-[0_0_0_1px_var(--color-trouve-teal)]"
                          : "border-trouve-border bg-trouve-navy/30 text-foreground hover:border-trouve-teal/60 hover:text-trouve-teal",
                      )}
                      aria-pressed={isActive}>
                      {section.title}
                    </button>
                  );
                })}
              </div>
              <span className="text-xs text-muted-foreground sm:hidden self-center">scroll to view more →</span>
            </div>

            <div className="mt-5">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={activeSection?.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="rounded-xl border bg-background/50 p-5 sm:p-6 border-trouve-teal/60 hover:text-trouve-teal">
                  <h2 className="text-xl font-bold sm:text-2xl">{activeSection?.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{activeSection?.body}</p>
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
