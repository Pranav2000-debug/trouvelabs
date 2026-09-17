import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import Content from "./content.mdx";

const TOC: TocItem[] = [
  { id: "why-perception-sdk", title: "Why Perception SDK", depth: 2 },
  { id: "what-makes-it-different", title: "What makes it different", depth: 2 },
  { id: "one-lifecycle-not-three-disconnected-stages", title: "One lifecycle, not three stages", depth: 3 },
  { id: "shipping-is-a-rule-not-a-judgement-call", title: "Shipping is a rule", depth: 3 },
  { id: "the-runtime-comes-with-it", title: "The runtime comes with it", depth: 3 },
  { id: "it-tells-you-when-it-is-going-wrong", title: "It tells you when it's going wrong", depth: 3 },
  { id: "how-it-works", title: "How it works", depth: 2 },
  { id: "1-bring-the-data-in", title: "Bring the data in", depth: 3 },
  { id: "2-train-and-score", title: "Train and score", depth: 3 },
  { id: "3-gate-and-ship", title: "Gate and ship", depth: 3 },
  { id: "4-run-and-close-the-loop", title: "Run and close the loop", depth: 3 },
  { id: "three-packages-one-lifecycle", title: "Three packages, one lifecycle", depth: 2 },
  { id: "built-for-production", title: "Built for production", depth: 2 },
  { id: "where-it-fits", title: "Where it fits", depth: 2 },
  { id: "whats-next", title: "What's next", depth: 2 },
  { id: "get-started", title: "Get started", depth: 2 },
];

export default function PerceptionSdkOverviewPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Perception SDK" },
        ]}
      />

      <DocsPage toc={TOC}>
        <Content />
      </DocsPage>
    </>
  );
}
