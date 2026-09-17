import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/herosection";
import CapabilityShowcase from "@/components/home/capability-showcase";
import ResearchFocus from "@/components/home/research-focus";
import ApproachSteps from "@/components/home/approach-steps";
import DirectorsNote from "@/components/home/directors-note";
import { BackgroundPaths } from "@/components/ui/gradient-flow";
import { ReduceMotionToggle } from "@/components/ui/reduce-motion-toggle";
import { ReactLenis } from "lenis/react";

// Lazy load heavy interactive scroll component, SSR comp.
const SmoothStackScroll = dynamic(
  () => import("@/components/home/product-preview-sec"),
  {
    loading: () => <div className="min-h-screen w-full bg-background/80" />,
  },
);

export default async function HomePage() {
  return (
    <ReactLenis root>
      {/* Fixed gradient background - client-only animation, doesn't block static shell */}
      <Suspense fallback={null}>
        <BackgroundPaths className="fixed inset-0 -z-10" />
      </Suspense>
      <ReduceMotionToggle />

      <HeroSection />

      <DirectorsNote />

      <CapabilityShowcase />

      {/* Locked: Core SDKs + Sandboxes sticky stack */}
      <Suspense fallback={null}>
        <SmoothStackScroll />
      </Suspense>

      <ResearchFocus />

      <ApproachSteps />

      {/* TODO: Designed For + Final CTA - user is supplying components */}
    </ReactLenis>
  );
}
