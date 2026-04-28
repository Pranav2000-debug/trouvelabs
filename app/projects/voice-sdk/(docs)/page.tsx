import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "try-the-platform", title: "Try the platform", depth: 2 },
];

type TrialLink = {
  title: string;
  display: string;
  href: string;
};

const TRIAL_LINKS: TrialLink[] = [
  {
    title: "Voice AI Platform",
    display: "voiceai.trouve.works",
    href: "https://voiceai.trouve.works",
  },
  {
    title: "Noise Cancellation",
    display: "voiceai.trouve.works/noise",
    href: "https://voiceai.trouve.works/noise",
  },
  {
    title: "Voice Biometrics",
    display: "voiceai.trouve.works/biometric",
    href: "https://voiceai.trouve.works/biometric/",
  },
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
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">
          SDK Overview
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Voice SDK</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Advanced voice processing and understanding capabilities. Full SDK documentation is on its way - for now, you can try the live platforms below.
        </p>

        <h2 id="try-the-platform" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Try the platform</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Three live surfaces are available - the main Voice AI workspace plus two specialised tools.
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {TRIAL_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl border border-trouve-border bg-trouve-surface/70 p-5 transition-colors hover:border-trouve-teal/40">
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">{link.title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{link.display}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-trouve-teal" />
            </a>
          ))}
        </div>
      </DocsPage>
    </>
  );
}
