
// TODO: Replace # with the Voice Agent platform URL when available.

export default function VoiceAgentPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-medium uppercase tracking-wider text-trouve-teal mb-2">Use Case</p>
        <h1 className="text-3xl font-bold mb-4">Voice Agent</h1>
        <p className="text-muted-foreground mb-8">
          Intelligent voice interactions with real-time language understanding and response.
        </p>
        {/* TODO: Replace href="#" with the Voice Agent platform URL */}
        <a
          href="https://voiceai.trouve.works"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-full bg-trouve-teal px-6 text-sm font-semibold text-black transition-all hover:bg-trouve-teal/90">
          Open Voice Agent Platform →
        </a>
      </div>
    </main>
  );
}
