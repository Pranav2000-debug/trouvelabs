import { Target, Telescope } from "lucide-react";
import { AboutMastraCard, AboutMastraEyebrow } from "./about-mastra-card";

export function AboutMissionVision() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Mission */}
      <AboutMastraCard>
        <div className="flex items-start justify-between gap-4">
          <AboutMastraEyebrow>Mission</AboutMastraEyebrow>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-trouve-teal/10">
            <Target className="h-5 w-5 text-trouve-teal" />
          </div>
        </div>

        <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Pioneer the next iteration of technology.
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          A research firm that wants to pioneer the next iteration of technology by providing tools and empowering people to build solutions that are in-tune with their security and privacy.
        </p>
      </AboutMastraCard>

      {/* Vision */}
      <AboutMastraCard>
        <div className="flex items-start justify-between gap-4">
          <AboutMastraEyebrow>Vision</AboutMastraEyebrow>
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-trouve-teal/10">
            <Telescope className="h-5 w-5 text-trouve-teal" />
          </div>
        </div>

        <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
          Simple solutions to the most complex of problems.
        </h2>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          To become the MENA region&rsquo;s leading innovation firm that creates simple solutions for the most complex of problems.
        </p>
      </AboutMastraCard>
    </div>
  );
}
