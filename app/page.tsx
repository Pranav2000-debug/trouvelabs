import Prism from "@/components/Prism";
import SdkGridSection from "@/components/home-comps/sdkGrid";
import HeroSection from "@/components/home-comps/herosection";
import Particles from "@/components/Particles";
import UseCasePreviewSection from "@/components/home-comps/usecasepreview";
import MobilityContextSection from "@/components/home-comps/mobilitycontextsection";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <Prism animationType="rotate" timeScale={0.3} height={3.5} baseWidth={3.5} scale={3.6} hueShift={0} colorFrequency={1} noise={0} glow={1} />
        </div>
        <HeroSection />
      </div>
      <SdkGridSection />
      <UseCasePreviewSection />
      <MobilityContextSection />
    </>
  );
}
