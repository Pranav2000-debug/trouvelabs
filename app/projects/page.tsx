import Link from "next/link";
import { PROJECTS } from "@/lib/constants/projects";

export const metadata = {
  title: "Projects - Trouve Labs",
  description: "Explore Trouve Labs' modular AI SDKs for next-generation mobility intelligence.",
};

export default function ProjectsIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-primary mb-3">SDK Platform</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Our Projects.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Modular, composable AI building blocks designed for mobility intelligence.
          </p>
        </div>

        {/* SDK Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            return project.comingSoon ? (
              <div
                key={project.slug}
                className="relative flex flex-col rounded-xl border border-border bg-card/80 p-6 opacity-55 cursor-not-allowed select-none">
                <span className="absolute top-4 right-4 rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/50">
                  Coming Soon
                </span>
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold text-white/70">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground/70">{project.description}</p>
              </div>
            ) : (
              <Link
                key={project.slug}
                prefetch={false}
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col rounded-xl border border-border bg-card/80 p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <span className="mt-auto pt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">View SDK →</span>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
