import { ArrowUpRight } from "lucide-react";

/** Vertical stack of external link cards. */
export function LinkCardList({ children }: { children: React.ReactNode }) {
  return <div className="mt-4 flex flex-col gap-3">{children}</div>;
}

interface LinkCardProps {
  title: string;
  href: string;
  /** Subtitle shown under the title. Defaults to the href without its protocol. */
  subtitle?: string;
}

/** External link card: bold title + muted URL + up-right arrow. Opens in a new tab. */
export function LinkCard({ title, href, subtitle }: LinkCardProps) {
  const sub = subtitle ?? href.replace(/^https?:\/\//, "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between rounded-xl border border-border bg-card/80 p-5 transition-colors hover:border-primary/30"
    >
      <div className="min-w-0">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs text-muted-foreground truncate">{sub}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
    </a>
  );
}
