import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string; // omit for the current (last) item
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb - renders a slash-separated trail of links.
 * The last item (no `href`) is treated as the current page and rendered as plain text.
 *
 * @example
 * <Breadcrumb items={[
 *   { label: "Home", href: "/" },
 *   { label: "Projects", href: "/projects" },
 *   { label: "Graph RAG SDK" },
 * ]} />
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-xs text-muted-foreground ${className ?? ""}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-muted-foreground/40">/</span>}
            {isLast || !item.href ? (
              <span className="text-foreground">{item.label}</span>
            ) : (
              <Link
                prefetch={false}
                href={item.href}
                className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
