import Teams from "@/components/about-comps/teams";
import { CombinedAboutSection } from "@/components/about-comps/combinedAboutSection";
import { PillarsSection } from "@/components/about-comps/pillarsSection";
import { StatsSection } from "@/components/about-comps/statsSection";

export default async function AboutPage() {
  "use cache";

  return (
    <>
      <CombinedAboutSection />
      <StatsSection />
      <PillarsSection />
      <Teams />
    </>
  );
}
