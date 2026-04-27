"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const ITEMS = [
  { href: "/projects/data-intelligence-sdk", label: "Overview" },
  { href: "/projects/data-intelligence-sdk/quickstart", label: "Quickstart" },
  { href: "/projects/data-intelligence-sdk/api-reference", label: "API Reference" },
];

export function DocsNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1 text-sm">
      <span className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Data Intelligence SDK
      </span>
      {ITEMS.map((item) => {
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
