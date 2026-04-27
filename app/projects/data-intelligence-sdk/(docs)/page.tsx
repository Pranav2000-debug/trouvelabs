import { Breadcrumb } from "@/components/ui/breadcrumb";
import { DocsPage } from "@/components/docs/docs-page";
import type { TocItem } from "@/components/docs/table-of-contents";

const TOC: TocItem[] = [
  { id: "why", title: "Why Data Intelligence", depth: 2 },
  { id: "what-makes-it-different", title: "What makes it different", depth: 2 },
  { id: "how-it-works", title: "How it works", depth: 2 },
  { id: "ingestion", title: "Dataset ingestion", depth: 3 },
  { id: "graph-construction", title: "Knowledge graph construction", depth: 3 },
  { id: "semantic-clustering", title: "Semantic clustering", depth: 3 },
  { id: "query-augmentation", title: "Query-time augmentation", depth: 3 },
  { id: "multi-tenant", title: "Multi-tenant by design", depth: 2 },
  { id: "built-for-production", title: "Built for production", depth: 2 },
  { id: "where-it-fits", title: "Where it fits", depth: 2 },
  { id: "whats-next", title: "What's next", depth: 2 },
  { id: "get-started", title: "Get started", depth: 2 },
];

export default function GraphRagSdkOverviewPage() {
  return (
    <>
      <Breadcrumb
        className="mb-8"
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: "Data Intelligence SDK" },
        ]}
      />

      <DocsPage toc={TOC}>
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-trouve-teal">
          SDK Overview
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">Data Intelligence SDK</h1>
        <p className="text-md text-muted-foreground leading-relaxed mb-10">
          <strong className="text-foreground font-semibold">Knowledge graph + retrieval-augmented generation for context-aware AI.</strong>{" "}
          A multi-tenant SDK that combines large language models with
          graph-based retrieval, so your applications can reason over private
          data — not just pattern-match against it.
        </p>

        <h2 id="why" className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28">Why Data Intelligence</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          LLMs are powerful, but they&apos;re limited to what they saw in
          training. The moment you point them at private documents — your
          contracts, your patient records, your internal research — they start
          guessing. Standard RAG helps, but only partially: chunks get
          retrieved in isolation, context gets fragmented, and the model still
          can&apos;t connect dots that live in different documents.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data Intelligence fixes the connection problem. Instead of retrieving
          disconnected chunks, it builds a knowledge graph from your data
          first — entities, relationships, themes — and uses that graph at
          query time to deliver answers that are coherent, grounded, and
          traceable.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          The result: less hallucination, fewer fragmented responses, and
          answers that reflect how the information actually relates.
        </p>

        <h2 id="what-makes-it-different" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">What makes it different</h2>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Multi-hop reasoning</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Standard RAG retrieves chunks that match keywords. Data Intelligence
          traverses relationships. When a question requires connecting facts
          across multiple documents — &ldquo;which clauses in contract A
          reference obligations defined in contract B?&rdquo; — the graph
          makes those links first-class.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Semantic continuity across chunks</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Chunks from different documents stay connected through the graph.
          The model sees how concepts relate, not just what words appeared
          near each other. Responses come back coherent, not stitched.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Concise, non-redundant outputs</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Because the SDK understands which chunks are conceptually related,
          it stops retrieving the same idea three times in three different
          phrasings. Answers are tighter and more useful.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Domain-adaptive</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          The graph adapts to your terminology. Legal, healthcare, scientific,
          financial — wherever the relationships between entities matter as
          much as the entities themselves, Data Intelligence performs.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Built-in provenance</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Every claim in a response is traceable to the source document and
          the path through the graph that produced it. Auditability isn&rsquo;t
          a feature you bolt on later — it&rsquo;s how the system works.
        </p>

        <h2 id="how-it-works" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">How it works</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data Intelligence runs four stages, three at ingestion time and one
          at query time.
        </p>

        <h3 id="ingestion" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">1. Dataset ingestion</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data enters Data Intelligence through three paths.{" "}
          <strong className="text-foreground font-semibold">Batch upload</strong> accepts files — PDF, Word, PowerPoint,
          Markdown, HTML, plain text, spreadsheets (CSV, Excel), and images
          (PNG, JPG, TIFF, WebP, BMP, GIF) routed through OCR — with metadata
          attached for project, confidentiality, and ownership.{" "}
          <strong className="text-foreground font-semibold">Live connectors </strong> bind directly to operational
          systems — PostgreSQL, MySQL, Slack, and arbitrary REST APIs — so the
          graph stays in step with data that&rsquo;s still being produced.{" "}
          <strong className="text-foreground font-semibold">MCP integrations</strong> pull from SaaS content services —
          Google Drive, Notion, and any other MCP-compliant source — through
          the same ingestion pipeline. From any of these paths, the system
          reads the content and identifies the entities that matter — people,
          places, organizations, concepts — along with the relationships
          between them.
        </p>

        <h3 id="graph-construction" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">2. Knowledge graph construction</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          The extracted entities and relationships are assembled into a
          knowledge graph. Each node is an entity. Each edge is a
          relationship. The graph is generated and refined by the LLM itself,
          then stored alongside your documents.
        </p>

        <h3 id="semantic-clustering" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">3. Semantic clustering</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          The graph is analyzed bottom-up to form clusters of related
          entities. These clusters represent themes — distinct semantic
          regions of your data. They enable hierarchical understanding and
          pre-summarization, so the system can reason about whole topics, not
          just individual facts.
        </p>

        <h3 id="query-augmentation" className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">4. Query-time augmentation</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          At inference, the user&rsquo;s query triggers retrieval across both
          the graph structure and the original source content. Retrieval
          spans every connected source in scope — uploaded files and live
          connectors alike — concurrently, so a single question can pivot
          from a clause in a contract to a row in a database to a paragraph
          in a Slack thread without the application steering it. The LLM
          receives the relevant subgraph plus source passages and generates
          an answer grounded in both.
        </p>

        <h2 id="multi-tenant" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">Multi-tenant by design</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data Intelligence is built to serve multiple isolated tenants from
          a single deployment.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Every document, graph, and query is scoped to an organization, and
          within that, to a project. Users belong to organizations and have
          roles that determine what they can read, ingest, or modify. Tokens
          carry the tenant context, so a query issued by one tenant can never
          traverse another tenant&rsquo;s graph — isolation happens at the
          data layer, not just the application layer.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">This means:</p>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-[15px] leading-7">
          <li>
            A single SDK deployment can serve dozens of customers without
            cross-contamination
          </li>
          <li>
            Inside a customer&rsquo;s account, separate projects keep
            different data domains cleanly partitioned
          </li>
          <li>
            Role-based access controls who can ingest, query, or administrate
            within each project
          </li>
          <li>
            Audit trails are scoped per tenant, so compliance reviews stay
            clean
          </li>
        </ul>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          For teams building B2B AI products, this removes the most painful
          part of going to production: the multi-tenancy plumbing is already
          done.
        </p>

        <h2 id="built-for-production" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">Built for production</h2>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Identity that fits your stack</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data Intelligence integrates with enterprise identity providers
          through OIDC and SAML, so user identity, roles, and access rules
          flow through from your existing auth — no parallel user system to
          maintain.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Sessions are JWT-based with access and refresh tokens. Refresh
          rotates both tokens on every call, so a stolen token has a short
          useful life. Users can hold multiple active sessions across
          devices, list them from their profile, and revoke any session
          individually — useful for &ldquo;I forgot to log out on my
          laptop&rdquo; or for security teams cutting off compromised devices.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Programmatic ingestion</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Upload files in bulk through the SDK or API across the supported
          document, spreadsheet, and image formats. Attach metadata, assign
          ownership, and let the system handle parsing, OCR, entity
          extraction, and graph construction in the background. Track
          ingestion status — pending, processing, done, failed — through the
          same interface, with structured failure reasons surfaced for the
          rows that don&rsquo;t make it through.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Live connectors</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Beyond batch upload, Data Intelligence connects directly to
          operational data sources — PostgreSQL, MySQL, Slack, and arbitrary
          REST endpoints — and keeps the graph current as records change.
          Each connector carries its own scoped configuration and
          credentials, runs a continuous health-check loop, and reports
          degradation through the same status interface as document
          ingestion, so the platform knows when a source is unreliable
          before queries start returning stale answers.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">MCP integrations</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          For SaaS content sources — Google Drive, Notion, and any
          MCP-compliant service — the SDK speaks Model Context Protocol
          directly, so files and pages from those systems flow into the same
          ingestion pipeline as batch uploads. The integration runs entirely
          server-side: there is no desktop or IDE component to install, no
          per-user agent to keep alive. Source-side permissions are honoured
          at ingestion and at query time, so a user only ever sees content
          they were already entitled to in the underlying service.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Query with context</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Applications query the knowledge base using user-scoped tokens.
          Results are filtered to what the requesting user is allowed to
          see — enforced by the platform, not your application code. Every
          query reaches every authorised source — files, spreadsheets,
          images, live connectors, and MCP-integrated content — through a
          single interface; the graph is the join, so the application
          doesn&rsquo;t have to route per-source-type.
        </p>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Responses stream from the SDK token-by-token, and clients can
          resume a stream that was interrupted mid-flight — a dropped
          network or a backgrounded tab doesn&rsquo;t lose the answer in
          progress.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Audit trails per tenant</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Every action — logins, document uploads, queries, configuration
          changes — is logged and scoped to the organization that produced
          it. Logs can be retrieved per organization, per user, per project,
          or filtered to security-relevant events. Compliance reviews stay
          clean because the audit boundary matches the tenancy boundary.
        </p>

        <h2 id="where-it-fits" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">Where it fits</h2>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Financial services</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Real-time transaction analysis, fraud detection, and regulatory
          reporting where tracing every claim back to source data is
          non-negotiable.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Healthcare</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          HIPAA-bound document processing, clinical reference retrieval, and
          patient record analysis where terminology precision and access
          control define correctness.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Legal and compliance</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Contract review, regulatory tracking, and case research across
          document corpora where the relationships between clauses, parties,
          and obligations carry the meaning.
        </p>

        <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Research and scientific work</h3>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Literature synthesis, citation traversal, and hypothesis
          exploration where multi-hop reasoning across thousands of papers is
          the work itself.
        </p>

        <h2 id="whats-next" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">What&rsquo;s next</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">
          Data Intelligence ships today with the capabilities above. On the
          near-term roadmap:
        </p>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-[15px] leading-7">
          <li>
            <strong className="text-foreground font-semibold">Audio and video ingestion</strong> — extend ingestion
            beyond text and OCR&rsquo;d images to transcripts, speaker turns,
            and visual scenes, so the graph spans every modality your team
            produces
          </li>
          <li>
            <strong className="text-foreground font-semibold">Federated document stores</strong> — query across systems
            and clouds while keeping data where it lives
          </li>
          <li>
            <strong className="text-foreground font-semibold">Continued retrieval improvements</strong> — sharper
            targeting, faster traversal, better handling of ambiguous queries
          </li>
        </ul>

        <h2 id="get-started" className="text-2xl font-semibold tracking-tight text-primary mt-14 mb-4 scroll-mt-28">Get started</h2>
        <p className="text-[15px] text-muted-foreground leading-7 mb-4">Two paths from here:</p>
        <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-[15px] leading-7">
          <li>
            <strong className="text-foreground font-semibold">
              <a href="/projects/data-intelligence-sdk/quickstart" className="text-trouve-teal underline-offset-4 hover:underline">Quickstart</a>
            </strong>{" "}
            — install the SDK, authenticate, ingest your first document, and
            run a query in under ten minutes
          </li>
          <li>
            <strong className="text-foreground font-semibold">
              <a href="/projects/data-intelligence-sdk/api-reference" className="text-trouve-teal underline-offset-4 hover:underline">API Reference</a>
            </strong>{" "}
            — full endpoint documentation, request and response shapes, and
            authentication flows
          </li>
        </ul>
      </DocsPage>
    </>
  );
}
