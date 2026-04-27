"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type TocItem = {
  id: string;
  title: string;
  depth: 1 | 2 | 3;
};

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -70% 0px",
        threshold: 0,
      },
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="flex flex-col border-l border-trouve-border">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "-ml-px block border-l-2 py-1 transition-colors",
                  item.depth === 1 && "pl-3",
                  item.depth === 2 && "pl-6",
                  item.depth === 3 && "pl-9",
                  isActive
                    ? "border-trouve-teal text-trouve-teal"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
