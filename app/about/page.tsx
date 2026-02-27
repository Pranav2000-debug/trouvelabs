import Teams from "@/components/about-comps/teams";
import { AboutTabbedSection } from "@/components/about-comps/aboutTabbedSection";
import { PillarsSection } from "@/components/about-comps/pillarsSection";
import { StatsSection } from "@/components/about-comps/statsSection";

export default async function AboutPage() {
  "use cache";

  return (
    <>
      <AboutTabbedSection />
      <StatsSection />
      <PillarsSection />
      <Teams />
    </>
  );
}
