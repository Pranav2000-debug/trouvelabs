import { cn } from "@/lib/utils";

interface AboutMastraCardProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable Mastra-style section card for the About page.
 * Large rounded shell with subtle border and surface fill - composed
 * by each About-page section to render label + heading + visual.
 */
export function AboutMastraCard({ className, children }: AboutMastraCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-trouve-border bg-trouve-surface/60 backdrop-blur-sm",
        "p-8 sm:p-12 lg:p-16",
        className,
      )}>
      {children}
    </div>
  );
}

interface AboutMastraEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Pill-style label for the top of an AboutMastraCard. */
export function AboutMastraEyebrow({ children, className }: AboutMastraEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-trouve-border bg-trouve-navy/40 px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}>
      {children}
    </span>
  );
}
