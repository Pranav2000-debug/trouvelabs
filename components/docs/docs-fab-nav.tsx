"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { EdgeTab } from "@/components/ui/edge-tab";
import { RadialMenu, RadialMenuItem, RadialMenuTrigger } from "@/components/ui/radial-menu";

interface DocsFabNavProps {
  slug: string;
}

export function DocsFabNav({ slug }: DocsFabNavProps) {
  const pathname = usePathname();

  const items = [
    { href: `/projects/${slug}`, label: "Overview" },
    { href: `/projects/${slug}/quickstart`, label: "Quickstart" },
    { href: `/projects/${slug}/api-reference`, label: "API Reference" },
  ];

  return (
    <div className="md:hidden">
      <RadialMenu anchor="edge-right" arcStart={152} arcEnd={208} radius={80}>
        <RadialMenuTrigger>
          {({ open }) => (
            <EdgeTab
              icon={open ? <X /> : <Image src="/icons/menublack-icon.ico" alt="" width={20} height={20} className="h-5 w-5" aria-hidden="true" />}
              aria-label={open ? "Close docs menu" : "Open docs menu"}
              pressed={open}
              edge="right"
              size="md"
              variant="primary"
            />
          )}
        </RadialMenuTrigger>
        {items.map((item) => (
          <RadialMenuItem key={item.href} label={item.label} href={item.href} active={pathname === item.href} />
        ))}
      </RadialMenu>
    </div>
  );
}
