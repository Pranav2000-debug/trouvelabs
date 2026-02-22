import SdkGridSection from "@/components/home-comps/sdkGrid";
import HeroSection from "@/components/home-comps/herosection";
import UseCasePreviewSection from "@/components/home-comps/usecasepreview";
import MobilityContextSection from "@/components/home-comps/mobilitycontextsection";
import { BackgroundPaths } from "@/components/ui/gradient-flow";

export default function HomePage() {
  return (
    <>
      <div className="relative overlow-hidden">
        <BackgroundPaths className="absolute inset-0 -z-10 text-white" />
        <HeroSection />
      </div>
      <SdkGridSection />
      <UseCasePreviewSection />
      <MobilityContextSection />
    </>
  );
}
