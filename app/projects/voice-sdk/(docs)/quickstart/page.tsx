import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

// TODO: Replace with real quickstart content. TOC and scroll-spy entries
// will be added once each section has a heading + id.
const TOC: TocItem[] = [];

export default function VoiceSdkQuickstartPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Voice SDK", href: "/projects/voice-sdk" },
          { label: "Quickstart" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">
          Voice SDK
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Quickstart</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Quickstart documentation coming soon.
        </p>
      </DocsPage>
    </>
  );
}
