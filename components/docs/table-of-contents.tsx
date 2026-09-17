"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/constants/utils";

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

    // Recompute straight from live DOM positions on every scroll, rather than tracking
    // IntersectionObserver crossing events. A fast scroll (e.g. dragging the scrollbar)
    // can jump a heading from "above the trigger line" straight to "below the viewport"
    // without ever firing an event in between (isIntersecting never flips), which leaves
    // an event-based tracker stuck on stale state.
    function update() {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActiveId(items[items.length - 1].id);
        return;
      }

      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top < 112) current = item.id;
      }
      setActiveId(current);
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">On this page</p>
      <ul className="flex flex-col border-l border-border">
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
                  isActive ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground",
                )}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
