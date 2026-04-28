import Teams from "@/components/about-comps/teams";
import { StatsSection } from "@/components/about-comps/statsSection";
import { AboutLead } from "@/components/about-comps/about-lead";
import { AboutMissionVision } from "@/components/about-comps/about-mission-vision";
import { AboutCoreValues } from "@/components/about-comps/about-core-values";
import { AboutDifferentiators } from "@/components/about-comps/about-differentiators";
import { AboutAcademy } from "@/components/about-comps/about-academy";
import { JourneyConnector } from "@/components/ui/journey-connector";
import ReactLenis from "lenis/react";

export default async function AboutPage() {
  "use cache";

  return (
    <ReactLenis root>
      <div className="mx-auto flex max-w-7xl flex-col px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <AboutLead />

        <JourneyConnector from="center" to="left" height={120} />

        <AboutMissionVision />

        <JourneyConnector from="center" to="right" height={120} />

        <AboutCoreValues />

        <JourneyConnector from="right" to="left" height={140} />

        <AboutDifferentiators />

        <JourneyConnector from="left" to="center" height={120} />

        <AboutAcademy />
      </div>

      <StatsSection />
      <Teams />
    </ReactLenis>
  );
}
