// diff --git a//mnt/c/Users/prana/Desktop/trouvelabs/components/about-comps/teams.tsx b//mnt/c/Users/prana/Desktop/trouvelabs/components/about-comps/teams.tsx
// --- a//mnt/c/Users/prana/Desktop/trouvelabs/components/about-comps/teams.tsx
// +++ b//mnt/c/Users/prana/Desktop/trouvelabs/components/about-comps/teams.tsx
// @@ -1,119 +1,75 @@
// -import { FocusCards } from "@/components/ui/focus-cards";
// -
// -export type TeamMember = {
// -  title: string;
// -  jobTitle: string;
// -  src: string;
// -};
// -
// -
// -
// -export default function Teams() {
// -  return (
// -    <section className="relative bg-background px-6 py-20 overflow-hidden">
// -      {/* Background Pattern Mask */}
// -      <div className="relative z-10 mx-auto max-w-7xl">
// -        <div className="text-center mb-16">
// -          <h1 className="text-4xl font-bold mb-2">Our Team</h1>
// -          <p className="text-muted-foreground">Meet the talented people behind our success</p>
// -        </div>
// -
// -        {/* Pass the updated data array into FocusCards components. The grid wrapping logic has to be migrated to the component or inside it. */}
// -        <div className="flex justify-center flex-wrap gap-8 items-center max-w-5xl mx-auto">
// -          <FocusCards cards={teamMembers} />
// -        </div>
// -      </div>
// -    </section>
// -  );
// -}
// +"use client";
// +
// +import { useState } from "react";
// +import { Card } from "@/components/ui/focus-cards";
// +
// +export type TeamMember = {
// +  title: string;
// +  jobTitle: string;
// +  src: string;
// +};
// +
// +const teamMembers: TeamMember[] = [
// +  {
// +    title: "Olivia Carter",
// +    jobTitle: "CEO & Founder",
// +    src: "/team/team-1.png",
// +  },
// +  {
// +    title: "Liam Anderson",
// +    jobTitle: "Chief Design Officer",
// +    src: "/team/team-2.png",
// +  },
// +  {
// +    title: "Ethan Bennett",
// +    jobTitle: "Lead Developer",
// +    src: "/team/team-3.png",
// +  },
// +  {
// +    title: "Sophia Nguyen",
// +    jobTitle: "Marketing Director",
// +    src: "/team/team-4.png",
// +  },
// +  {
// +    title: "Mia Roberts",
// +    jobTitle: "Project Manager",
// +    src: "/team/team-5.png",
// +  },
// +  {
// +    title: "Ava Thompson",
// +    jobTitle: "Customer Success Manager",
// +    src: "/team/team-6.png",
// +  },
// +];
// +
// +export default function Teams() {
// +  const [hovered, setHovered] = useState<number | null>(null);
// +
// +  return (
// +    <section className="relative overflow-hidden bg-background px-6 py-20">
// +      <div className="relative z-10 mx-auto max-w-7xl">
// +        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[minmax(280px,1fr)_minmax(420px,1.4fr)] lg:gap-16">
// +          <div className="lg:pt-4">
// +            <span className="inline-flex rounded-md bg-muted px-4 py-1.5 text-sm font-medium text-trouve-teal">Team</span>
// +            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Our Creative Minds</h2>
// +            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
// +              There are many variations of available but the majority have suffered alteration in some form.
// +            </p>
// +          </div>
// +
// +          <div className="grid grid-cols-1 gap-y-7 sm:grid-cols-2 sm:gap-x-10">
// +            {teamMembers.map((member, index) => (
// +              <div key={member.title} className="flex items-center gap-4">
// +                <Card card={member} index={index} hovered={hovered} setHovered={setHovered} />
// +                <div className="min-w-0">
// +                  <h3 className="text-2xl font-semibold leading-tight text-foreground md:text-[30px]">{member.title}</h3>
// +                  <p className="mt-1 text-sm text-muted-foreground md:text-base">{member.jobTitle}</p>
// +                </div>
// +              </div>
// +            ))}
// +          </div>
// +        </div>
// +      </div>
// +    </section>
// +  );
// +}
