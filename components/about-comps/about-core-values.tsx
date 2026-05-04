import { ShieldCheck, KeyRound } from "lucide-react";
import { PersonalPrivacyIcon } from "@/components/icons/icon-park-solid-personal-privacy";
import { AboutTrouveCard, AboutTrouveEyebrow } from "./about-trouve-card";

const VALUE_CHIPS = [
  { icon: ShieldCheck, label: "Privacy by design" },
  { icon: KeyRound, label: "Data sovereignty" },
  { icon: PersonalPrivacyIcon, label: "Personalization without surveillance" },
];

export function AboutCoreValues() {
  return (
    <AboutTrouveCard>
      {/* Soft accent - left-side glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left visual */}
        <div className="hidden items-center justify-center lg:col-span-4 lg:flex">
          <div className="relative flex h-56 w-56 items-center justify-center rounded-3xl border border-primary/30 bg-secondary/60">
            <ShieldCheck className="h-20 w-20 text-primary" />
            <div className="absolute -inset-2 rounded-3xl border border-primary/10" />
            <div className="absolute -inset-5 rounded-3xl border border-primary/10" />
          </div>
        </div>

        {/* Right text */}
        <div className="lg:col-span-8">
          <AboutTrouveEyebrow>Core Values</AboutTrouveEyebrow>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            People should remain custodians of their own data.
          </h2>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              We provide infrastructure for the next generation of tech where people are the custodians of their own data, and privacy is preserved at every level - while still catering to the demands of modern data-rich digital experiences.
            </p>
            <p>
              Imagine personalization at every layer of the digital landscape, but with a twist: you keep your privacy and sovereignty over your data, and still get things the way you like them.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {VALUE_CHIPS.map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground">
                  <Icon className="h-3.5 w-3.5 text-primary" />
                  {chip.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </AboutTrouveCard>
  );
}
