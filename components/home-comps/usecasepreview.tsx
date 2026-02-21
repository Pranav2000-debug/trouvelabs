import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../motion-wrapper";

interface UseCaseData {
  name: string;
  slug: string;
  builtWith: string;
  description: string;
}

const USE_CASES: UseCaseData[] = [
  {
    name: "Agentic Video",
    slug: "agentic-video",
    builtWith: "Vision SDK + GenAI SDK",
    description: "Autonomous video analysis and generation powered by composable AI pipelines.",
  },
  {
    name: "Voice Agent",
    slug: "voice-agent",
    builtWith: "LLM Service + GenAI SDK",
    description: "Intelligent voice interactions with real-time language understanding and response.",
  },
];

export default function UseCasePreviewSection() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-3xl font-bold sm:text-4xl">Built with our SDKs.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">Real-world capabilities demonstrating what composable AI infrastructure can achieve.</p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-8 sm:grid-cols-2">
          {USE_CASES.map((uc) => (
            <FadeInStaggerItem key={uc.slug}>
              <Link
                href={`/use-cases/${uc.slug}`}
                className="group flex flex-col rounded-xl border border-trouve-border bg-card p-8 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5">
                <span className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">{uc.builtWith}</span>
                <h3 className="text-2xl font-bold">{uc.name}.</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{uc.description}</p>
                <span className="mt-6 text-sm font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Explore →</span>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
