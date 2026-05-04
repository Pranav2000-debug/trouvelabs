import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "try-the-platform", title: "Try the platform", depth: 2 },
];

export default function VisionSdkOverviewPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Vision SDK" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          SDK Overview
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Vision SDK</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Computer vision capabilities for intelligent visual processing. Full SDK documentation is on its way - for now, you can try the live platform below.
        </p>

        <h2 id="try-the-platform" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Try the platform</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          The Vision platform is live. Explore it directly in your browser.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          <a
            href="https://visionsdk.trouvelabs.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border border-border bg-card/80 p-5 transition-colors hover:border-primary/30">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground">Vision Platform</p>
              <p className="mt-1 text-xs text-muted-foreground">visionsdk.trouvelabs.io</p>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>
      </DocsPage>
    </>
  );
}
