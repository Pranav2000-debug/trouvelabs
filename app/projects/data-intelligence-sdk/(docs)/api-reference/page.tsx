import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [];

export default function DataIntelligenceApiReferencePage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Data Intelligence SDK", href: "/projects/data-intelligence-sdk" },
          { label: "API Reference" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Data Intelligence SDK
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          API Reference
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Coming soon.
        </p>
      </DocsPage>
    </>
  );
}
