import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

const TOC: TocItem[] = [{ id: "try-the-platform", title: "Try the platform", depth: 2 }];

export default function VoiceSdkOverviewPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Voice SDK" },
        ]}
      />

      <DocsPage toc={TOC}>
        <Content />
      </DocsPage>
    </>
  );
}
