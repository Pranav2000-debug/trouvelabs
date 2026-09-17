import Teams from "@/components/about/teams";
import { StatsSection } from "@/components/about/statsSection";
import { AboutLead } from "@/components/about/about-lead";
import { AboutMissionVision } from "@/components/about/about-mission-vision";
import { AboutCoreValues } from "@/components/about/about-core-values";
import { AboutDifferentiators } from "@/components/about/about-differentiators";
import { AboutAcademy } from "@/components/about/about-academy";
import { JourneyConnector } from "@/components/ui/journey-connector";
import ReactLenis from "lenis/react";

export default async function AboutPage() {
  return (
    <ReactLenis root>
      <div className="mx-auto flex max-w-7xl flex-col px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8 lg:pt-32">
        <AboutLead />

        <JourneyConnector from="center" to="left" height={90} />

        <AboutMissionVision />

        <JourneyConnector from="center" to="right" height={90} />

        <AboutCoreValues />

        <JourneyConnector from="right" to="left" height={105} />

        <AboutDifferentiators />

        <JourneyConnector from="left" to="center" height={90} />

        <AboutAcademy />
      </div>

      <StatsSection />
      <Teams />
    </ReactLenis>
  );
}
