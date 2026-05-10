import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import { ReleaseBadge, type GitHubReleaseData } from "@/components/release-badge";

const TOC: TocItem[] = [
  { id: "Intro", title: "Intro", depth: 2 },
  { id: "where-to-next", title: "Where to next", depth: 2 },
];

const visionSdkRelease: GitHubReleaseData = {
  tag: "v1.0",
  name: "Vision SDK",
  preRelease: false,
  draft: false,
  publishedAt: new Date(0).toISOString(),
  url: "https://visionsdk.trouvelabs.io",
  body: "",
  assetCount: 0,
};

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
        <p id="Intro" className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Introduction
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vision SDK
          </h1>
          <ReleaseBadge
            owner=""
            repo=""
            data={visionSdkRelease}
            layout="inline"
            variant="subtle"
            size="sm"
          />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          Vision SDK turns a single config file into a production video pipeline - inputs, models, tracking, and outputs - running on NVIDIA DeepStream.
        </p>
        <p className="text-base text-muted-foreground leading-relaxed mb-10">
          Define your input streams, AI models, object tracker, and outputs in a single YAML config file, then run everything with one command.
        </p>

        <figure className="mb-10 rounded-xl border border-border overflow-hidden">
          <Image
            src="/projects/vision-sdk/visionsdk-pipe.png"
            alt="Vision SDK pipeline overview - inputs (live streams, video files) flow through models (detector, tracker, classifier) into outputs (display, file recording, RTSP/RTMP streams, Kafka, FPS counter), all configured via a single YAML file."
            width={1280}
            height={800}
            loading="lazy"
            className="h-auto w-full"
            sizes="(min-width: 1280px) 768px, 100vw"
          />
        </figure>

        <h2
          id="where-to-next"
          className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
        >
          Where to next
        </h2>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
          <li>
            <Link
              prefetch={false}
              href="/projects/vision-sdk/quickstart#prerequisites"
              className="text-primary underline-offset-4 hover:underline"
            >
              Prerequisites
            </Link>{" "}
            - what you need installed
          </li>
          <li>
            <Link
              prefetch={false}
              href="/projects/vision-sdk/quickstart#installation"
              className="text-primary underline-offset-4 hover:underline"
            >
              Installation
            </Link>{" "}
            - drop the wheel into DeepStream
          </li>
          <li>
            <Link
              prefetch={false}
              href="/projects/vision-sdk/quickstart#quick-start"
              className="text-primary underline-offset-4 hover:underline"
            >
              Quick start
            </Link>{" "}
            - your first pipeline in three steps
          </li>
        </ul>
      </DocsPage>
    </>
  );
}
