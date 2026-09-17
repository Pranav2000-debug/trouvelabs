/** Grid of package cards (data/model/runtime style breakdowns). */
export function PackageCardList({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">{children}</div>;
}

interface PackageCardProps {
  /** Small uppercase label above the name, e.g. "Data", "Model", "Runtime". */
  role: string;
  /** Package identifier or proper name, e.g. "perception-data" or "Perception Engine". */
  name: string;
  /** Render `name` as a proper noun (body font) instead of a package identifier (mono). */
  named?: boolean;
  children: React.ReactNode;
}

export function PackageCard({ role, name, named, children }: PackageCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{role}</span>
      <h4
        className={
          named
            ? "text-base font-semibold text-foreground"
            : "font-mono text-sm font-medium text-primary"
        }
      >
        {name}
      </h4>
      <div className="text-sm leading-relaxed text-muted-foreground [&>p]:m-0">{children}</div>
    </div>
  );
}
