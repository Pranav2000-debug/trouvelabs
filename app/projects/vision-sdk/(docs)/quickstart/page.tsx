import { Suspense } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";
import { CodeBlock } from "@/components/code-block";

const TOC: TocItem[] = [
  { id: "prerequisites", title: "Prerequisites", depth: 2 },
  { id: "installation", title: "Installation", depth: 2 },
  { id: "quick-start", title: "Quick start", depth: 2 },
  { id: "create-config", title: "1. Create a config file", depth: 3 },
  { id: "run-it", title: "2. Run it", depth: 3 },
];

const PIPELINE_YAML = `pipeline:
  name: "My First Pipeline"

streams:
  - uri: "file:///path/to/video.mp4"
    source_id: 0

models:
  - name: "my-detector"
    type: "detector"
    architecture: "yolo11"
    onnx_file: /path/to/model.onnx
    label_file: /path/to/labels.txt

sinks:
  width: 1280
  height: 720
  outputs:
    - type: "display"
`;

const inlineCode =
  "rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border";

function CodeBlockSkeleton({ lines = 1, withHeader = false }: { lines?: number; withHeader?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
      {withHeader && (
        <div className="flex h-[49px] items-center border-b border-border/60 bg-muted/40 px-4" />
      )}
      <div className="space-y-2 p-4 sm:p-5">
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-3.5 w-full max-w-[60%] animate-pulse rounded bg-muted/50" />
        ))}
      </div>
    </div>
  );
}

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
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Vision SDK
        </p>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Quickstart
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Spin up your first pipeline in three steps.
        </p>

        <h2
          id="prerequisites"
          className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
        >
          Prerequisites
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Before installing the SDK, make sure your environment meets these requirements.
        </p>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
          <li>
            NVIDIA DeepStream 8.0 container (
            <code className={inlineCode}>
              nvcr.io/nvidia/deepstream:8.0-triton-multiarch
            </code>
            )
          </li>
          <li>NVIDIA GPU with driver support for DeepStream 8.0</li>
          <li>Access to input media files or camera streams</li>
        </ul>

        <h2
          id="installation"
          className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
        >
          Installation
        </h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Copy the wheel into the DeepStream container and install:
        </p>
        <div className="mb-4">
          <Suspense fallback={<CodeBlockSkeleton />}>
            <CodeBlock
              language="bash"
              compact
              code="pip install /path/to/vision_sdk-*.whl"
            />
          </Suspense>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          This installs the <code className={inlineCode}>vision-runner</code> CLI command and all required native libraries.
        </p>

        <h2
          id="quick-start"
          className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
        >
          Quick start
        </h2>

        <h3
          id="create-config"
          className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28"
        >
          1. Create a config file
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Save this as <code className={inlineCode}>pipeline.yaml</code>:
        </p>
        <div className="mb-4">
          <Suspense fallback={<CodeBlockSkeleton lines={14} withHeader />}>
            <CodeBlock
              language="yaml"
              title="pipeline.yaml"
              code={PIPELINE_YAML}
            />
          </Suspense>
        </div>

        <h3
          id="run-it"
          className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28"
        >
          2. Run it
        </h3>
        <div className="mb-4">
          <Suspense fallback={<CodeBlockSkeleton />}>
            <CodeBlock
              language="bash"
              compact
              code="vision-runner pipeline.yaml"
            />
          </Suspense>
        </div>

        <h3
          id="stop-pipeline"
          className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28"
        >
          3. Stop the pipeline
        </h3>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Press <code className={inlineCode}>Ctrl+C</code>.
        </p>
      </DocsPage>
    </>
  );
}
