import { cn } from "@/lib/constants/utils";

function TagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M1 7.775V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.752 1.752 0 0 1 1 7.775Zm1.5 0c0 .066.026.13.073.177l6.25 6.25a.25.25 0 0 0 .354 0l5.025-5.025a.25.25 0 0 0 0-.354l-6.25-6.25a.25.25 0 0 0-.177-.073H2.75a.25.25 0 0 0-.25.25ZM6 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}

interface BadgeProps {
  version: string;
  variant?: "default" | "subtle" | "primary";
  className?: string;
}

export function Badge({ version, variant = "subtle", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium tabular-nums",
        variant === "subtle" && "border-border/60 bg-muted/40 text-muted-foreground",
        variant === "default" && "border-border bg-muted/50 text-muted-foreground",
        variant === "primary" && "border-primary/30 bg-primary/10 text-primary",
        className,
      )}>
      <TagIcon className="size-3 shrink-0 opacity-70" />
      {version}
    </span>
  );
}
