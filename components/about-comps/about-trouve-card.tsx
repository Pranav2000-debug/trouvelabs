import { cn } from "@/lib/utils";

interface AboutTrouveCardProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Reusable Trouve-style section card for the About page.
 * Large rounded shell with subtle border and surface fill - composed
 * by each About-page section to render label + heading + visual.
 */
export function AboutTrouveCard({ className, children }: AboutTrouveCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-card/80 backdrop-blur-sm",
        "p-8 sm:p-12 lg:p-16",
        className,
      )}>
      {children}
    </div>
  );
}

interface AboutTrouveEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Pill-style label for the top of an AboutTrouveCard. */
export function AboutTrouveEyebrow({ children, className }: AboutTrouveEyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs font-medium text-muted-foreground",
        className,
      )}>
      {children}
    </span>
  );
}
