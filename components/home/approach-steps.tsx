import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "@/components/ui/timeline";

type Step = {
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    title: "Research the Problem",
    description: "We study the system, its movement, its constraints, and its inefficiencies.",
  },
  {
    title: "Model the Complexity",
    description:
      "We use applied mathematics, machine learning, and operations research to build models that explain and improve the system.",
  },
  {
    title: "Build the Technology",
    description: "We convert research into algorithms, tools, platforms, APIs, and deployment-ready solutions.",
  },
  {
    title: "Optimize for the Real World",
    description: "We test, refine, and scale solutions for actual operational, commercial, and infrastructure environments.",
  },
  {
    title: "Preserve Security and Privacy",
    description: "We design systems that respect data ownership, privacy, and modern security expectations.",
  },
];

export default function ApproachSteps() {
  const items = STEPS.map((step, i) => (
    <TimelineItem key={step.title} className="flex-1">
      <TimelineDot />
      <TimelineConnector />
      <TimelineContent className="pr-6">
        <TimelineHeader>
          <TimelineTitle className="text-base font-semibold text-foreground">
            <span className="mr-2 text-trouve-yellow">0{i + 1}</span>
            {step.title}
          </TimelineTitle>
          <TimelineDescription className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </TimelineDescription>
        </TimelineHeader>
      </TimelineContent>
    </TimelineItem>
  ));

  return (
    <section className="relative bg-background/80 backdrop-blur-sm px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-primary">Our Approach</p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            From mathematical models to intelligent infrastructure.
          </h2>
        </div>

        {/* Desktop - horizontal */}
        <Timeline orientation="horizontal" activeIndex={STEPS.length} className="mt-10 sm:mt-14 hidden lg:flex lg:gap-6 xl:gap-8">
          {items}
        </Timeline>

        {/* Mobile - vertical */}
        <Timeline orientation="vertical" activeIndex={STEPS.length} className="mt-10 lg:hidden">
          {items}
        </Timeline>
      </div>
    </section>
  );
}
