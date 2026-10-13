"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";

interface FooterLinkItem {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLinkItem[];
}

const RESOURCE_LINKS: FooterLinkItem[] = [
  { href: "/projects", label: "Documentation" },
  // { href: "/roadmap", label: "Roadmap" },
];

const COMPANY_LINKS: FooterLinkItem[] = [
  { href: "/about", label: "About" },
  { href: "https://ahoy.technology/policies", label: "Policies" },
  { href: "/about#team", label: "Trouve Team" },
];

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-primary uppercase tracking-wider">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link prefetch={false} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const productLinks: FooterLinkItem[] = PROJECTS.map((p) => ({
    href: `/projects/${p.slug}`,
    label: p.title,
  }));
  return (
    <footer className="border-t border-border bg-card/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link prefetch={false} href="/" className="inline-flex items-center gap-2">
              <Image src="/assets/image-44.webp" alt="Trouve Labs" width={80} height={96} className="h-20 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Finding efficiencies at every curve. AI SDKs that power next-generation mobility systems.
            </p>
            <Link
              prefetch={false}
              href="mailto:research@trouve.works"
              className="group mt-4 inline-block text-sm text-foreground transition-colors hover:text-primary">
              Reach out to us at research@trouve.works
              <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5 align-middle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Link columns */}
          <FooterColumn title="Projects" links={productLinks} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-10 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} Trouve Labs. All rights reserved.</p>
          <a
            href="https://ahoy.technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card/30 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground">
            <Image src="/assets/ahoy-logo-colored.webp" alt="AHOY" width={16} height={16} className="shrink-0" />
            <span>
              Part of the <span className="font-medium text-primary">AHOY Ecosystem</span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
