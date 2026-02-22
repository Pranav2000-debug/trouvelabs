import { FocusCards } from "@/components/ui/focus-cards";

export type TeamMember = {
  title: string;
  jobTitle: string;
  src: string;
};

const teamMembers: TeamMember[] = [
  {
    title: "Sarah Johnson",
    jobTitle: "Chief Executive Officer",
    src: "/team/team-1.png",
  },
  {
    title: "Michael Chen",
    jobTitle: "Head of Engineering",
    src: "/team/team-2.png",
  },
  {
    title: "Emily Rodriguez",
    jobTitle: "Lead AI Researcher",
    src: "/team/team-3.png",
  },
  {
    title: "David Kim",
    jobTitle: "Product Designer",
    src: "/team/team-4.png",
  },
  {
    title: "Jessica Martinez",
    jobTitle: "ML Engineer",
    src: "/team/team-5.png",
  },
  {
    title: "James Wilson",
    jobTitle: "Developer Advocate",
    src: "/team/team-6.png",
  },
  {
    title: "Amanda Lee",
    jobTitle: "Senior Frontend Engineer",
    src: "/team/team-7.png",
  },
  {
    title: "Christopher Brown",
    jobTitle: "Backend Developer",
    src: "/team/team-8.png",
  },
  {
    title: "Michelle Taylor",
    jobTitle: "Data Scientist",
    src: "/team/team-9.png",
  },
  {
    title: "Daniel Garcia",
    jobTitle: "DevOps Engineer",
    src: "/team/team-10.png",
  },
  {
    title: "Lauren Anderson",
    jobTitle: "VP of Marketing",
    src: "/team/team-11.png",
  },
  {
    title: "Kevin Thompson",
    jobTitle: "Growth Hacker",
    src: "/team/team-12.png",
  },
  {
    title: "Sophie White",
    jobTitle: "Content Strategist",
    src: "/team/team-13.png",
  },
  {
    title: "Ryan Harris",
    jobTitle: "Sales Director",
    src: "/team/team-14.png",
  },
  {
    title: "Nicole Clark",
    jobTitle: "Account Executive",
    src: "/team/team-15.png",
  },
  {
    title: "Brandon Lewis",
    jobTitle: "Customer Success Manager",
    src: "/team/team-16.png",
  },
  {
    title: "Olivia Martin",
    jobTitle: "HR Business Partner",
    src: "/team/team-17.png",
  },
  {
    title: "Tyler Jackson",
    jobTitle: "Operations Manager",
    src: "/team/team-18.png",
  },
];

export default function Teams() {
  return (
    <section className="relative bg-background px-6 py-20 overflow-hidden">
      {/* Background Pattern Mask */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/BG PATTERN MASK.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "invert(1)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-2">Our Team</h1>
          <p className="text-muted-foreground">Meet the talented people behind our success</p>
        </div>

        {/* Pass the updated data array into FocusCards components. The grid wrapping logic has to be migrated to the component or inside it. */}
        <div className="flex justify-center flex-wrap gap-8 items-center max-w-5xl mx-auto">
          <FocusCards cards={teamMembers} />
        </div>
      </div>
    </section>
  );
}
