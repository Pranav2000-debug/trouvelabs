import { Lock } from "lucide-react";

export default function TokenizationSdkPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-trouve-teal/10 opacity-60">
          <Lock className="h-7 w-7 text-trouve-teal" />
        </div>
        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/50 mb-4">
          Coming Soon
        </span>
        <h1 className="text-3xl font-bold mb-4 text-white/70">Tokenization SDK</h1>
        <p className="text-muted-foreground">
          Secure data tokenization and orchestration at scale. This SDK is currently in development.
        </p>
      </div>
    </main>
  );
}
