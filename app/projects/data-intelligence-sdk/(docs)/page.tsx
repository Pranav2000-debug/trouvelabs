import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

// Curated TOC (preserved verbatim from the original page). Each id matches the
// slug rehype-slug generates from the corresponding heading text in content.mdx.
const TOC: TocItem[] = [
  { id: "why-data-intelligence", title: "Why Data Intelligence", depth: 2 },
  { id: "what-makes-it-different", title: "What makes it different", depth: 2 },
  { id: "how-it-works", title: "How it works", depth: 2 },
  { id: "1-dataset-ingestion", title: "Dataset ingestion", depth: 3 },
  { id: "2-knowledge-graph-construction", title: "Knowledge graph construction", depth: 3 },
  { id: "3-semantic-clustering", title: "Semantic clustering", depth: 3 },
  { id: "4-query-time-augmentation", title: "Query-time augmentation", depth: 3 },
  { id: "multi-tenant-by-design", title: "Multi-tenant by design", depth: 2 },
  { id: "built-for-production", title: "Built for production", depth: 2 },
  { id: "where-it-fits", title: "Where it fits", depth: 2 },
  { id: "whats-next", title: "What's next", depth: 2 },
  { id: "get-started", title: "Get started", depth: 2 },
];

export default function GraphRagSdkOverviewPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Data Intelligence SDK" },
        ]}
      />

      <DocsPage toc={TOC}>
        <Content />
      </DocsPage>
    </>
  );
}
