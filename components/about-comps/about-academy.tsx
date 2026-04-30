import { GraduationCap, BookOpen, Users, Compass } from "lucide-react";
import { AboutTrouveCard, AboutTrouveEyebrow } from "./about-trouve-card";

const ACADEMY_TRACKS = [
  { icon: BookOpen, label: "Applied Mathematics" },
  { icon: Compass, label: "Operations Research" },
  { icon: Users, label: "Mentorship & Apprenticeship" },
];

export function AboutAcademy() {
  return (
    <AboutTrouveCard>
      {/* Soft accent - bottom-right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-trouve-yellow/10 blur-3xl"
      />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <AboutTrouveEyebrow>Trouve Labs Academy</AboutTrouveEyebrow>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Building the next generation of deep-tech talent.
          </h2>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              We support early talent through learning, mentorship, and applied research - recruiting students early and helping them strengthen their skills in applied mathematics, AI, machine learning, and deep-tech development.
            </p>
            <p>
              The future of technology depends not only on better tools, but on better access to knowledge.
            </p>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {ACADEMY_TRACKS.map((t) => {
              const Icon = t.icon;
              return (
                <li
                  key={t.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {t.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right visual */}
        <div className="hidden items-center justify-center lg:col-span-5 lg:flex">
          <div className="relative flex h-56 w-56 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10" />
            <div className="absolute inset-6 rounded-full border border-primary/30" />
            <div className="absolute inset-12 rounded-full border border-primary/60" />
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/10">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </AboutTrouveCard>
  );
}
