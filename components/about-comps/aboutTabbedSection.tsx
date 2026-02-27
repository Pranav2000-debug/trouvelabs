"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { cn } from "@/lib/utils";
import { FadeIn } from "../ui/motion-wrapper";

interface AboutSection {
  title: string;
  body: string;
}

const WHY_SECTION: AboutSection = {
  title: "Why Trouve Labs",
  body: "Trouve Labs was born to redefine what's possible in mobility and tech, by pioneering AI-driven solutions that transcend traditional boundaries. Our commitment to modern mobility is all about making it more efficient, sustainable, and valuable for everyone. As we optimize supply chains, enhance urban traffic flow, and streamline logistics, we empower the world to move smarter.",
};

const TAB_SECTIONS: AboutSection[] = [
  {
    title: "Our Mission",
    body: "Trouve Labs is driven by the philosophy that everything in motion creates value, and we innovate solutions that fulfil this ethos. Dedicated to designing innovative mobility solutions that enable progress, we go beyond the conventional.",
  },
  {
    title: "Our Approach",
    body: "Through a relentless focus on research and development, Trouve Labs believes in the power of movement to drive progress in an all-encompassing sense. Trouve Labs takes generic mathematical algorithms and transforms them to enable the wellness of smart – or otherwise – cities, among other functions.",
  },
  {
    title: "Our Vision",
    body: "Our vision is to harness the potential of technology to create a world where mobility is seamlessly integrated into everyday life, optimizing the way people and goods move and unlocking new levels of value across industries. We aim to become the MENA regions leading innovation firm that creates complex solutions from the simplest of equations.",
  },
  {
    title: "Innovation First",
    body: "At Trouve Labs, innovation is at the heart of everything we do. With 20+ projects and 10+ papers, we constantly explore and redefine the boundaries of advanced mobility through innovation, cutting-edge research and revolutionary ideas.",
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
    <section className="border-b border-trouve-border px-6 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
        <FadeIn>
          <div className="lg:sticky lg:top-28 h-fit">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">{WHY_SECTION.title}</h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">{WHY_SECTION.body}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="rounded-2xl border border-trouve-border bg-card/70 p-4 sm:p-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {TAB_SECTIONS.map((section) => {
                const isActive = section.title === activeTab;
                return (
                  <button
                    key={section.title}
                    type="button"
                    onClick={() => setActiveTab(section.title)}
                    className={cn(
                      "rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-colors sm:text-base",
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-[0_0_0_1px_hsl(var(--primary))]"
                        : "border-trouve-border bg-secondary/30 text-foreground hover:border-primary/60 hover:text-primary",
                    )}
                    aria-pressed={isActive}>
                    {section.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-5">
              <AnimatePresence mode="wait" initial={false}>
                <m.div
                  key={activeSection?.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="rounded-xl border border-trouve-border bg-background/50 p-5 sm:p-6">
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
