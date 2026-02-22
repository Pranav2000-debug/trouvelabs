import SmoothStackScroll from "@/components/ui/smooth-stack-scroll";
import HeroSection from "@/components/home-comps/herosection";
import AboutBento from "@/components/home-comps/about-bento";
import MobilityContextSection from "@/components/home-comps/mobilitycontextsection";
import { BackgroundPaths } from "@/components/ui/gradient-flow";

export default function HomePage() {
  return (
    <>
      {/* Fixed gradient background — flows behind all sections */}
      <BackgroundPaths className="fixed inset-0 -z-10 text-[#4EC9D4]" />

      <HeroSection />
      <AboutBento />
      <SmoothStackScroll />
      <MobilityContextSection />
    </>
  );
}
