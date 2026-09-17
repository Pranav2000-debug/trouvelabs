import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

const TOC: TocItem[] = [{ id: "sections", title: "Sections", depth: 2 }];

export default function PerceptionSdkApiReferencePage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Perception SDK", href: "/projects/perception-sdk" },
          { label: "API Reference" },
        ]}
      />

      <DocsPage toc={TOC}>
        <Content />
      </DocsPage>
    </>
  );
}
