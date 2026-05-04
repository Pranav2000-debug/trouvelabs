import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home-comps/herosection";
import OpeningPositioning from "@/components/home-comps/opening-positioning";
import CapabilityShowcase from "@/components/home-comps/capability-showcase";
import WhyTrouve from "@/components/home-comps/why-trouve";
import ApproachSteps from "@/components/home-comps/approach-steps";
import PhilosophyBand from "@/components/home-comps/philosophy-band";
import { BackgroundPaths } from "@/components/ui/gradient-flow";
import { ReactLenis } from "lenis/react";

// Lazy load heavy interactive scroll component, SSR comp.
const SmoothStackScroll = dynamic(
  () => import("@/components/home-comps/product-preview-sec"),
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
