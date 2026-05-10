import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "sections", title: "Sections", depth: 2 },
];

const API_REF_LINKS: { label: string; href: string }[] = [
  { label: "Configuration Reference", href: "https://visionsdk.trouvelabs.io/docs/config-reference" },
  { label: "Model Types", href: "https://visionsdk.trouvelabs.io/docs/model-types" },
  { label: "Output Types", href: "https://visionsdk.trouvelabs.io/docs/output-types" },
  { label: "Multi-Stream Output Modes", href: "https://visionsdk.trouvelabs.io/docs/multi-stream" },
  { label: "Kafka Message Format", href: "https://visionsdk.trouvelabs.io/docs/kafka-format" },
  { label: "Examples", href: "https://visionsdk.trouvelabs.io/docs/examples" },
];

export default function VisionSdkApiReferencePage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Vision SDK", href: "/projects/vision-sdk" },
          { label: "API Reference" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Vision SDK
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Full API documentation lives on the Vision SDK docs site. Each section below opens the upstream reference in a new tab.
        </p>

        <h2
          id="sections"
          className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
        >
          Sections
        </h2>
        <ul className="mt-4 flex flex-col gap-3">
          {API_REF_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-border bg-card/80 p-5 transition-colors hover:border-primary/30"
              >
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">
                    {link.label}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground truncate">
                    {link.href.replace(/^https?:\/\//, "")}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </li>
          ))}
        </ul>
      </DocsPage>
    </>
  );
}
