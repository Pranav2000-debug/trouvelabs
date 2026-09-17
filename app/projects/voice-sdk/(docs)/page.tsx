import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

const TOC: TocItem[] = [
  { id: "why-voice-sdk", title: "Why Voice SDK", depth: 2 },
  { id: "what-makes-it-different", title: "What makes it different", depth: 2 },
  { id: "one-pipeline-not-five-integrations", title: "One pipeline, not five", depth: 3 },
  { id: "self-hosted-with-no-exceptions", title: "Self-hosted, no exceptions", depth: 3 },
  { id: "drop-in-compatible-with-what-you-already-wrote", title: "Drop-in compatible", depth: 3 },
  { id: "how-it-works", title: "How it works", depth: 2 },
  { id: "1-capture-and-clean", title: "Capture and clean", depth: 3 },
  { id: "2-understand", title: "Understand", depth: 3 },
  { id: "3-reason", title: "Reason", depth: 3 },
  { id: "4-respond", title: "Respond", depth: 3 },
  { id: "self-hosted-by-design", title: "Self-hosted by design", depth: 2 },
  { id: "built-for-production", title: "Built for production", depth: 2 },
  { id: "where-it-fits", title: "Where it fits", depth: 2 },
  { id: "whats-next", title: "What's next", depth: 2 },
  { id: "get-started", title: "Get started", depth: 2 },
];

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
