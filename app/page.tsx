import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/home-comps/herosection";
import AboutBento from "@/components/home-comps/about-bento";
import MobilityContextSection from "@/components/home-comps/mobilitycontextsection";
import { BackgroundPaths } from "@/components/ui/gradient-flow";
import Teams from "@/components/home-comps/teams";

// Lazy load heavy interactive scroll component
const SmoothStackScroll = dynamic(() => import("@/components/ui/smooth-stack-scroll"), {
  loading: () => <div className="min-h-screen w-full bg-background/80" />,
});

export default async function HomePage() {
  "use cache";

  return (
    <>
      {/* Fixed gradient background — client-only animation, doesn't block static shell */}
      <Suspense fallback={null}>
        <BackgroundPaths className="fixed inset-0 -z-10 text-[#4EC9D4]" />
      </Suspense>

      {/* Cached static content — prerendered at build time */}
      <HeroSection />
      <AboutBento />

      {/* Interactive scroll section — streams in via Suspense */}
      <Suspense fallback={null}>
        <SmoothStackScroll />
      </Suspense>

      <MobilityContextSection />
      {/* Teams Hub and Spoke Section */}
    </>
  );
}
