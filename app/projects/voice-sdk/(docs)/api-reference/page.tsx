import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

// TODO: Replace with real API reference. TOC will be populated when
// methods/types/errors sections are written.
const TOC: TocItem[] = [];

export default function VoiceSdkApiReferencePage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Voice SDK", href: "/projects/voice-sdk" },
          { label: "API Reference" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Voice SDK
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">API Reference</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          API reference documentation coming soon.
        </p>
      </DocsPage>
    </>
  );
}
