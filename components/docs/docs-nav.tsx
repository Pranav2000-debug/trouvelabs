"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

interface DocsNavProps {
  slug: string;
}

export function DocsNav({ slug }: DocsNavProps) {
  const pathname = usePathname();
  const project = PROJECTS.find((p) => p.slug === slug);
  const title = project?.title ?? slug;

  const items = [
    { href: `/projects/${slug}`, label: "Overview" },
    { href: `/projects/${slug}/quickstart`, label: "Quickstart" },
    { href: `/projects/${slug}/api-reference`, label: "API Reference" },
  ];

  return (
    <nav className="flex flex-col gap-1 text-sm">
      <span className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </span>
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            prefetch={false}
            href={item.href}
            className={cn(
              "rounded-md px-3 py-1.5 transition-colors",
              isActive
                ? "bg-trouve-teal/10 text-trouve-teal"
                : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
