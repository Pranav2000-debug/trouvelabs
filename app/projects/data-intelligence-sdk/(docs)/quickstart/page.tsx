import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "quickstart", title: "Quickstart", depth: 1 },
  { id: "prerequisites", title: "Prerequisites", depth: 2 },
  { id: "install", title: "Install the SDK", depth: 2 },
  { id: "authenticate", title: "Authenticate", depth: 2 },
  { id: "first-query", title: "Your first query", depth: 2 },
  { id: "ingest-data", title: "Ingest data", depth: 2 },
  { id: "next-steps", title: "Next steps", depth: 2 },
];

export default function QuickstartPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Data Intelligence SDK", href: "/projects/data-intelligence-sdk" },
          { label: "Quickstart" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
          Data Intelligence SDK
        </p>

        <h1 id="quickstart" className="text-4xl font-bold tracking-tight text-foreground mb-4">Quickstart</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Get up and
          running with the Data Intelligence SDK in under five minutes.
        </p>

        <h2 id="prerequisites" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Prerequisites</h2>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-[15px] leading-7">
          <li>Node.js 20 or newer.</li>
          <li>
            A Trouve workspace with an active API key. Lorem ipsum dolor sit
            amet.
          </li>
          <li>Read access to at least one ingestion source.</li>
        </ul>

        <h2 id="install" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Install the SDK</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          The SDK ships as an ES module and works in Node and edge runtimes.
        </p>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`npm install @trouve/graph-rag-sdk`}</code>
        </pre>

        <h2 id="authenticate" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Authenticate</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          Set your API key as an environment variable, then construct the
          client.
        </p>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`# .env
TROUVE_API_KEY=sk_live_...`}</code>
        </pre>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`import { GraphRAG } from "@trouve/graph-rag-sdk";

const client = new GraphRAG({
  apiKey: process.env.TROUVE_API_KEY!,
});`}</code>
        </pre>

        <h2 id="first-query" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Your first query</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Duis aute irure dolor in reprehenderit. Run a query against the
          default workspace graph to confirm everything is wired up.
        </p>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`const { answer, subgraph } = await client.query({
  question: "Which routes had the highest delay variance last week?",
  topK: 5,
});

console.log(answer);`}</code>
        </pre>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          You should see a grounded answer along with the subgraph the model
          used to generate it. <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">subgraph.nodes</code> and{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">subgraph.edges</code> are returned as plain JSON.
        </p>

        <h2 id="ingest-data" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Ingest data</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Excepteur sint occaecat cupidatat non proident. Point the ingestion
          API at any structured or unstructured source - the SDK takes care
          of chunking, entity extraction, and edge inference.
        </p>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`await client.ingest({
  source: "s3://trouve-demo/fleet-logs/",
  schema: "mobility/incident.v2",
  onProgress: (p) => console.log(\`\${p.processed} / \${p.total}\`),
});`}</code>
        </pre>

        <h2 id="next-steps" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Next steps</h2>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-[15px] leading-7">
          <li>
            Browse the{" "}
            <a href="/projects/data-intelligence-sdk/api-reference" className="text-primary underline-offset-4 hover:underline">API Reference</a>{" "}
            for every method, option, and return type.
          </li>
          <li>
            Read the <a href="/projects/data-intelligence-sdk" className="text-primary underline-offset-4 hover:underline">Overview</a> for
            a deeper look at how Data Intelligence works under the hood.
          </li>
        </ul>
      </DocsPage>
    </>
  );
}
