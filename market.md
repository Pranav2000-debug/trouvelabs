# Data Intelligence SDK

**Knowledge graph + retrieval-augmented generation for context-aware AI.**

A multi-tenant SDK that combines large language models with graph-based retrieval, so your applications can reason over private data — not just pattern-match against it.

---

## Why Data Intelligence

LLMs are powerful, but they're limited to what they saw in training. The moment you point them at private documents — your contracts, your patient records, your internal research — they start guessing. Standard RAG helps, but only partially: chunks get retrieved in isolation, context gets fragmented, and the model still can't connect dots that live in different documents.

Data Intelligence fixes the connection problem. Instead of retrieving disconnected chunks, it builds a knowledge graph from your data first — entities, relationships, themes — and uses that graph at query time to deliver answers that are coherent, grounded, and traceable.

The result: less hallucination, fewer fragmented responses, and answers that reflect how the information actually relates.

---

## What makes it different

### Multi-hop reasoning

Standard RAG retrieves chunks that match keywords. Data Intelligence traverses relationships. When a question requires connecting facts across multiple documents — "which clauses in contract A reference obligations defined in contract B?" — the graph makes those links first-class.

### Semantic continuity across chunks

Chunks from different documents stay connected through the graph. The model sees how concepts relate, not just what words appeared near each other. Responses come back coherent, not stitched.

### Concise, non-redundant outputs

Because the SDK understands which chunks are conceptually related, it stops retrieving the same idea three times in three different phrasings. Answers are tighter and more useful.

### Domain-adaptive

The graph adapts to your terminology. Legal, healthcare, scientific, financial — wherever the relationships between entities matter as much as the entities themselves, Data Intelligence performs.

### Built-in provenance

Every claim in a response is traceable to the source document and the path through the graph that produced it. Auditability isn't a feature you bolt on later — it's how the system works.

---

## How it works

Data Intelligence runs four stages, three at ingestion time and one at query time.

### 1. Dataset ingestion

Data enters Data Intelligence through three paths. **Batch upload** accepts files — PDF, Word, PowerPoint, Markdown, HTML, plain text, spreadsheets (CSV, Excel), and images (PNG, JPG, TIFF, WebP, BMP, GIF) routed through OCR — with metadata attached for project, confidentiality, and ownership. **Live connectors** bind directly to operational systems — PostgreSQL, MySQL, Slack, and arbitrary REST APIs — so the graph stays in step with data that's still being produced. **MCP integrations** pull from SaaS content services — Google Drive, Notion, and any other MCP-compliant source — through the same ingestion pipeline. From any of these paths, the system reads the content and identifies the entities that matter — people, places, organizations, concepts — along with the relationships between them.

### 2. Knowledge graph construction

The extracted entities and relationships are assembled into a knowledge graph. Each node is an entity. Each edge is a relationship. The graph is generated and refined by the LLM itself, then stored alongside your documents.

### 3. Semantic clustering

The graph is analyzed bottom-up to form clusters of related entities. These clusters represent themes — distinct semantic regions of your data. They enable hierarchical understanding and pre-summarization, so the system can reason about whole topics, not just individual facts.

### 4. Query-time augmentation

At inference, the user's query triggers retrieval across both the graph structure and the original source content. Retrieval spans every connected source in scope — uploaded files and live connectors alike — concurrently, so a single question can pivot from a clause in a contract to a row in a database to a paragraph in a Slack thread without the application steering it. The LLM receives the relevant subgraph plus source passages and generates an answer grounded in both.

---

## Multi-tenant by design

Data Intelligence is built to serve multiple isolated tenants from a single deployment.

Every document, graph, and query is scoped to an organization, and within that, to a project. Users belong to organizations and have roles that determine what they can read, ingest, or modify. Tokens carry the tenant context, so a query issued by one tenant can never traverse another tenant's graph — isolation happens at the data layer, not just the application layer.

This means:

- A single SDK deployment can serve dozens of customers without cross-contamination
- Inside a customer's account, separate projects keep different data domains cleanly partitioned
- Role-based access controls who can ingest, query, or administrate within each project
- Audit trails are scoped per tenant, so compliance reviews stay clean

For teams building B2B AI products, this removes the most painful part of going to production: the multi-tenancy plumbing is already done.

---

## Built for production

### Identity that fits your stack

Data Intelligence integrates with enterprise identity providers through OIDC and SAML, so user identity, roles, and access rules flow through from your existing auth — no parallel user system to maintain.

Sessions are JWT-based with access and refresh tokens. Refresh rotates both tokens on every call, so a stolen token has a short useful life. Users can hold multiple active sessions across devices, list them from their profile, and revoke any session individually — useful for "I forgot to log out on my laptop" or for security teams cutting off compromised devices.

### Programmatic ingestion

Upload files in bulk through the SDK or API across the supported document, spreadsheet, and image formats. Attach metadata, assign ownership, and let the system handle parsing, OCR, entity extraction, and graph construction in the background. Track ingestion status — pending, processing, done, failed — through the same interface, with structured failure reasons surfaced for the rows that don't make it through.

### Live connectors

Beyond batch upload, Data Intelligence connects directly to operational data sources — PostgreSQL, MySQL, Slack, and arbitrary REST endpoints — and keeps the graph current as records change. Each connector carries its own scoped configuration and credentials, runs a continuous health-check loop, and reports degradation through the same status interface as document ingestion, so the platform knows when a source is unreliable before queries start returning stale answers.

### MCP integrations

For SaaS content sources — Google Drive, Notion, and any MCP-compliant service — the SDK speaks Model Context Protocol directly, so files and pages from those systems flow into the same ingestion pipeline as batch uploads. The integration runs entirely server-side: there is no desktop or IDE component to install, no per-user agent to keep alive. Source-side permissions are honoured at ingestion and at query time, so a user only ever sees content they were already entitled to in the underlying service.

### Query with context

Applications query the knowledge base using user-scoped tokens. Results are filtered to what the requesting user is allowed to see — enforced by the platform, not your application code. Every query reaches every authorised source — files, spreadsheets, images, live connectors, and MCP-integrated content — through a single interface; the graph is the join, so the application doesn't have to route per-source-type.

Responses stream from the SDK token-by-token, and clients can resume a stream that was interrupted mid-flight — a dropped network or a backgrounded tab doesn't lose the answer in progress.

### Audit trails per tenant

Every action — logins, document uploads, queries, configuration changes — is logged and scoped to the organization that produced it. Logs can be retrieved per organization, per user, per project, or filtered to security-relevant events. Compliance reviews stay clean because the audit boundary matches the tenancy boundary.

---

## Where it fits

### Financial services

Real-time transaction analysis, fraud detection, and regulatory reporting where tracing every claim back to source data is non-negotiable.

### Healthcare

HIPAA-bound document processing, clinical reference retrieval, and patient record analysis where terminology precision and access control define correctness.

### Legal and compliance

Contract review, regulatory tracking, and case research across document corpora where the relationships between clauses, parties, and obligations carry the meaning.

### Research and scientific work

Literature synthesis, citation traversal, and hypothesis exploration where multi-hop reasoning across thousands of papers is the work itself.

---

## What's next

Data Intelligence ships today with the capabilities above. On the near-term roadmap:

- **Audio and video ingestion** — extend ingestion beyond text and OCR'd images to transcripts, speaker turns, and visual scenes, so the graph spans every modality your team produces
- **Federated document stores** — query across systems and clouds while keeping data where it lives
- **Continued retrieval improvements** — sharper targeting, faster traversal, better handling of ambiguous queries

---

## Get started

Two paths from here:

- **Quickstart** — install the SDK, authenticate, ingest your first document, and run a query in under ten minutes
- **API Reference** — full endpoint documentation, request and response shapes, and authentication flows