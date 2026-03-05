import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home-comps/herosection";
import AboutBento from "@/components/home-comps/about-bento";
import MobilityContextSection from "@/components/home-comps/mobilitycontextsection";
import { BackgroundPaths } from "@/components/ui/gradient-flow";
import {ReactLenis} from "lenis/react";

// Lazy load heavy interactive scroll component, SSR comp.
const SmoothStackScroll = dynamic(() => import("@/components/home-comps/product-preview-sec"), {
  loading: () => <div className="min-h-screen w-full bg-background/80" />,
});

export default async function HomePage() {
  "use cache";

  return (
    <ReactLenis root>
      {/* Fixed gradient background — client-only animation, doesn't block static shell */}
      <Suspense fallback={null}>
        <BackgroundPaths className="fixed inset-0 -z-10 text-[#4EC9D4]" />
      </Suspense>

      <HeroSection />

      <AboutBento />

      {/* Interactive scroll section — streams in via Suspense */}
      {/* SmoothStackScroll showcases product cards and use-cases cards */}
      <Suspense fallback={null}>
        <SmoothStackScroll /> 
      </Suspense>

      <MobilityContextSection />

    </ReactLenis>
  );
}
