import Link from "next/link";
import { Eye } from "lucide-react";

// TODO: Replace # with the Vision frontend URL when available.

export default function VisionSdkPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-trouve-teal/10">
          <Eye className="h-7 w-7 text-trouve-teal" />
        </div>
        <p className="text-xs font-medium uppercase tracking-wider text-trouve-teal mb-2">Project</p>
        <h1 className="text-3xl font-bold mb-4">Vision SDK</h1>
        <p className="text-muted-foreground mb-8">
          Computer vision capabilities for intelligent visual processing.
        </p>
        {/* TODO: Replace href="#" with the Vision frontend URL */}
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center rounded-full bg-trouve-teal px-6 text-sm font-semibold text-black transition-all hover:bg-trouve-teal/90">
          Open Vision Platform →
        </Link>
      </div>
    </main>
  );
}
