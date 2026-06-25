import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

// TODO: Replace with real API reference. Add TOC entries (ids = heading slugs)
// when methods/types/errors sections are written in content.mdx.
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
        <Content />
      </DocsPage>
    </>
  );
}
