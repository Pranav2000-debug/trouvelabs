interface CodeBlockSkeletonProps {
  lines?: number;
  withHeader?: boolean;
}

/**
 * Suspense fallback for the async <CodeBlock> (which awaits Shiki highlighting).
 * Shared by the MDX `pre` mapping and any docs page that renders a code block.
 */
export function CodeBlockSkeleton({ lines = 1, withHeader = false }: CodeBlockSkeletonProps) {
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
