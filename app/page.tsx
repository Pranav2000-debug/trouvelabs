import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home/herosection";
import OpeningPositioning from "@/components/home/opening-positioning";
import CapabilityShowcase from "@/components/home/capability-showcase";
import WhyTrouve from "@/components/home/why-trouve";
import ApproachSteps from "@/components/home/approach-steps";
import PhilosophyBand from "@/components/home/philosophy-band";
import { BackgroundPaths } from "@/components/ui/gradient-flow";
import { ReactLenis } from "lenis/react";

// Lazy load heavy interactive scroll component, SSR comp.
const SmoothStackScroll = dynamic(
  () => import("@/components/home/product-preview-sec"),
  {
    loading: () => <div className="min-h-screen w-full bg-background/80" />,
  },
);

export default async function HomePage() {
  "use cache";

  return (
    <ReactLenis root>
      {/* Fixed gradient background - client-only animation, doesn't block static shell */}
      <Suspense fallback={null}>
        <BackgroundPaths className="fixed inset-0 -z-10 text-[#4EC9D4]" />
      </Suspense>

      <HeroSection />

      <OpeningPositioning />

      <CapabilityShowcase />

      {/* Locked: Core SDKs + Sandboxes sticky stack */}
      <Suspense fallback={null}>
        <SmoothStackScroll />
      </Suspense>

      <WhyTrouve />

      <ApproachSteps />

      <PhilosophyBand />

      {/* TODO: Designed For + Final CTA - user is supplying components */}
    </ReactLenis>
  );
}
