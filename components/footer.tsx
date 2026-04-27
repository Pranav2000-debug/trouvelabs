"use client"
import Link from "next/link";
import Image from "next/image";

interface FooterLinkItem {
  href: string;
  label: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLinkItem[];
}

const PRODUCT_LINKS: FooterLinkItem[] = [
  { href: "/projects/vision-sdk", label: "Vision SDK" },
  { href: "/projects/data-intelligence-sdk", label: "Data Intelligence SDK" },
  { href: "/projects/tokenization-sdk", label: "Tokenization SDK" },
  { href: "/projects/genai-sdk", label: "GenAI SDK" },
  { href: "/projects/llm-service", label: "LLM Service" },
];

const RESOURCE_LINKS: FooterLinkItem[] = [
  { href: "/projects", label: "Documentation" },
  { href: "/blog", label: "Blog" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/architecture", label: "Architecture" },
];

const COMPANY_LINKS: FooterLinkItem[] = [
  { href: "/about", label: "About" },
  { href: "https://example.com", label: "Contact" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/benchmarks", label: "Benchmarks" },
];

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-trouve-teal uppercase tracking-wider">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link prefetch={false} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-trouve-teal">
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
  return (
    <footer className="border-t border-white/6 bg-[#0e1015]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link prefetch={false} href="/" className="inline-flex items-center gap-2">
              <Image src="/image 44.png" alt="Trouve Labs" width={100} height={100} className="h-22 w-20" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Finding efficiencies at every curve. AI SDKs that power next-generation mobility systems.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {/* <Link prefetch={false} href="mailto:example.com" className="transition-colors hover:text-trouve-teal">
                example.com
              </Link> */}
            </p>
          </div>

          {/* Link columns */}
          <FooterColumn title="Projects" links={PRODUCT_LINKS} />
          <FooterColumn title="Resources" links={RESOURCE_LINKS} />
          <FooterColumn title="Company" links={COMPANY_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-trouve-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© {year} Trouve Labs. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">
            Part of the <span className="font-medium text-trouve-teal"><a target="_blank" href="https://ahoy.technology/">AHOY Ecosystem</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}
