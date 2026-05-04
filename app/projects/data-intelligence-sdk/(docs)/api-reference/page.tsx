import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "api-reference", title: "API Reference", depth: 1 },
  { id: "client", title: "Client", depth: 2 },
  { id: "constructor", title: "Constructor", depth: 3 },
  { id: "query", title: "client.query", depth: 2 },
  { id: "query-params", title: "Parameters", depth: 3 },
  { id: "query-returns", title: "Returns", depth: 3 },
  { id: "ingest", title: "client.ingest", depth: 2 },
  { id: "ingest-params", title: "Parameters", depth: 3 },
  { id: "errors", title: "Errors", depth: 2 },
];

export default function ApiReferencePage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Data Intelligence SDK", href: "/projects/data-intelligence-sdk" },
          { label: "API Reference" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">Data Intelligence SDK</p>

        <h1 id="api-reference" className="text-4xl font-bold tracking-tight text-foreground mb-4">API Reference</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Full type signatures and behaviour for every public surface of the Data Intelligence SDK.
        </p>

        <h2 id="client" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Client</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          The <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">GraphRAG</code> class is the single entry point for ingestion and retrieval. Sed do eiusmod tempor incididunt ut labore.
        </p>

        <h3 id="constructor" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Constructor</h3>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`new GraphRAG(options: GraphRAGOptions)

interface GraphRAGOptions {
  apiKey: string;
  baseUrl?: string;        // defaults to https://api.trouve.dev
  workspace?: string;      // override the default workspace
  fetch?: typeof fetch;    // bring your own fetch impl
}`}</code>
        </pre>

        <h2 id="query" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">client.query</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Ut enim ad minim veniam, quis nostrud exercitation. Issues a retrieval-augmented query against the workspace graph and returns a grounded
          answer.
        </p>

        <h3 id="query-params" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Parameters</h3>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">question</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">string</code>. Lorem ipsum dolor sit amet.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">topK</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">number</code>, optional. Maximum number of subgraph paths to return. Defaults to <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">8</code>.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">filters</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">Record&lt;string, unknown&gt;</code>, optional. Restricts traversal to matching node attributes.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">stream</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">boolean</code>, optional. When true, returns an async iterable of tokens.
          </li>
        </ul>

        <h3 id="query-returns" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Returns</h3>
        <pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
          <code className="text-foreground font-mono">{`interface QueryResult {
  answer: string;
  subgraph: {
    nodes: Node[];
    edges: Edge[];
  };
  citations: Citation[];
  latencyMs: number;
}`}</code>
        </pre>

        <h2 id="ingest" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">client.ingest</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">Duis aute irure dolor in reprehenderit. Streams a source into the ingestion pipeline and materialises the resulting graph delta.</p>

        <h3 id="ingest-params" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Parameters</h3>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">source</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">string | ReadableStream</code>. Path, URL, or stream of records.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">schema</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">string</code>. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">onProgress</code> - <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">(p: Progress) =&gt; void</code>, optional. Called as records are committed.
          </li>
        </ul>

        <h2 id="errors" className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Errors</h2>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          Excepteur sint occaecat cupidatat non proident. All errors thrown by the SDK extend <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">GraphRAGError</code> and expose a stable{" "}
          <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">code</code> field.
        </p>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">auth_failed</code> - invalid or expired API key.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">rate_limited</code> - workspace quota exceeded.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">schema_mismatch</code> - ingested record does not match the declared schema.
          </li>
          <li>
            <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">internal</code> - fall-through error; safe to retry with backoff.
          </li>
        </ul>
      </DocsPage>
    </>
  );
}
