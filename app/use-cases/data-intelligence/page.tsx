import Link from "next/link";

// TODO: Replace # with the Data Intelligence platform URL when available.

export default function DataIntelligencePage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-medium uppercase tracking-wider text-trouve-teal mb-2">Use Case</p>
        <h1 className="text-3xl font-bold mb-4">Data Intelligence</h1>
        <p className="text-muted-foreground mb-8">
          Intelligent data processing and analysis with graph-based retrieval. Powered by Graph RAG SDK.
        </p>
        {/* TODO: Replace href="#" with the Data Intelligence platform URL */}
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-full bg-trouve-teal px-6 text-sm font-semibold text-black transition-all hover:bg-trouve-teal/90">
          Open Data Intelligence Platform →
        </Link>
      </div>
    </main>
  );
}
