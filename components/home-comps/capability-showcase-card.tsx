import { cn } from "@/lib/utils";

interface CapabilityShowcaseCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable detail card for the Capability Showcase UI on the homepage.
 * Tied to that interaction pattern (tab row + paired detail cards) - not a
 * generic surface card. Use only inside <CapabilityShowcase />.
 */
export function CapabilityShowcaseCard({ title, subtitle, children, className }: CapabilityShowcaseCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col rounded-2xl border border-trouve-border bg-trouve-surface/80 backdrop-blur-sm overflow-hidden transition-colors",
        className,
      )}>
      <div className="flex-1 min-h-[260px] p-6 sm:p-8">{children}</div>
      <div className="px-6 sm:px-8 pb-6 sm:pb-8">
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-1 text-sm font-medium text-trouve-teal">{subtitle}</p>
      </div>
    </div>
  );
}
