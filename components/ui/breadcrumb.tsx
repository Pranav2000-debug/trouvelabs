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
      className={`flex min-w-0 flex-nowrap items-center gap-1.5 overflow-hidden text-xs text-muted-foreground ${className ?? ""}`}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span
            key={item.label}
            className="flex min-w-0 items-center gap-1.5"
          >
            {i > 0 && (
              <span className="shrink-0 text-muted-foreground/30">/</span>
            )}
            {isLast || !item.href ? (
              <span
                title={item.label}
                className="block max-w-[12rem] truncate text-foreground"
              >
                {item.label}
              </span>
            ) : (
              <Link
                prefetch={false}
                href={item.href}
                title={item.label}
                className="block max-w-[10rem] truncate transition-colors hover:text-foreground sm:max-w-[14rem]"
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
