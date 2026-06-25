import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

// ids match the slugs rehype-slug generates from each heading in content.mdx.
const TOC: TocItem[] = [
  { id: "prerequisites", title: "Prerequisites", depth: 2 },
  { id: "installation", title: "Installation", depth: 2 },
  { id: "quick-start", title: "Quick start", depth: 2 },
  { id: "1-create-a-config-file", title: "1. Create a config file", depth: 3 },
  { id: "2-run-it", title: "2. Run it", depth: 3 },
];

export default function VisionSdkQuickstartPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Vision SDK", href: "/projects/vision-sdk" },
          { label: "Quickstart" },
        ]}
      />

      <DocsPage toc={TOC}>
        <Content />
      </DocsPage>
    </>
  );
}
