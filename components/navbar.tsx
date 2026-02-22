"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Eye, Network, Lock, Sparkles, Server, ChevronDown } from "lucide-react";

/* ──────── Types ──────── */

type Product = {
  title: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

type UseCase = {
  title: string;
  href: string;
  description: string;
  sdks: string;
};

/* ──────── Data ──────── */

const PRODUCTS: Product[] = [
  { title: "Vision SDK", href: "/products/vision-sdk", description: "Computer vision capabilities for intelligent visual processing.", icon: Eye },
  { title: "Graph RAG SDK", href: "/products/graph-rag-sdk", description: "Knowledge graph + retrieval-augmented generation.", icon: Network },
  { title: "Tokenization SDK", href: "/products/tokenization-sdk", description: "Secure data tokenization and orchestration at scale.", icon: Lock },
  { title: "GenAI SDK", href: "/products/genai-sdk", description: "Multimodal generative AI capabilities.", icon: Sparkles },
  { title: "LLM Service", href: "/products/llm-service", description: "Managed large language model infrastructure.", icon: Server },
];

const USE_CASES: UseCase[] = [
  {
    title: "Agentic Video",
    href: "/use-cases/agentic-video",
    description: "Autonomous video analysis and generation.",
    sdks: "Vision SDK + GenAI SDK",
  },
  {
    title: "Voice Agent",
    href: "/use-cases/voice-agent",
    description: "Intelligent voice interactions with real-time understanding.",
    sdks: "LLM Service + GenAI SDK",
  },
];

/* ──────── Dropdown ──────── */

function Dropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-white"
        onClick={() => setOpen(!open)}>
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 pt-5 -translate-x-1/2">
          <div className="min-w-[280px] rounded-xl border border-white/10 bg-black/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

/* ──────── Navbar ──────── */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) {
      setMobileProductsOpen(false);
      setMobileUseCasesOpen(false);
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      {/* Floating pill */}
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/image 51.png" alt="Trouve Labs" width={120} height={24} className="h-7 w-auto" />
          <Image src="/TROUVE-LOGO-W-08.png" alt="Trouve Labs" width={120} height={24} className="h-12 w-auto" />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm text-white/60 transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/about" className="text-sm text-white/60 transition-colors hover:text-white">
            About
          </Link>
          <Dropdown label="Products">
            <div className="grid gap-1 md:w-[420px] md:grid-cols-2">
              {PRODUCTS.map((p) => {
                const Icon = p.icon;
                return (
                  <Link key={p.title} href={p.href} className="flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-white/5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-trouve-teal/10">
                      <Icon className="h-3.5 w-3.5 text-trouve-teal" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{p.title}</div>
                      <p className="mt-0.5 text-xs text-white/40">{p.description}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Dropdown>

          <Dropdown label="Use Cases">
            <div className="grid gap-1 w-[320px]">
              {USE_CASES.map((uc) => (
                <Link key={uc.title} href={uc.href} className="flex flex-col gap-1 rounded-lg p-2.5 transition-colors hover:bg-white/5">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-trouve-teal">{uc.sdks}</span>
                  <div className="text-sm font-medium text-white">{uc.title}</div>
                  <p className="text-xs text-white/40">{uc.description}</p>
                </Link>
              ))}
            </div>
          </Dropdown>

          <Link href="/docs/quickstart" target="_blank" className="text-sm text-white/60 transition-colors hover:text-white">
            Docs
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-[#111318]/98 p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-base font-medium text-white/70 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-trouve-teal">
                Products
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProductsOpen && (
                <ul className="mt-2 flex flex-col gap-2 pl-3">
                  {PRODUCTS.map((p) => (
                    <li key={p.href}>
                      <Link href={p.href} onClick={() => setMobileOpen(false)} className="text-sm text-white/50 hover:text-white">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-trouve-teal">
                Use Cases
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileUseCasesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileUseCasesOpen && (
                <ul className="mt-2 flex flex-col gap-2 pl-3">
                  {USE_CASES.map((uc) => (
                    <li key={uc.href}>
                      <Link href={uc.href} onClick={() => setMobileOpen(false)} className="text-sm text-white/50 hover:text-white">
                        {uc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="text-base font-medium text-white/70 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/docs/quickstart" onClick={() => setMobileOpen(false)} className="text-base font-medium text-white/70 hover:text-white">
                Docs
              </Link>
            </li>
          </ul>
          <div className="mt-6 border-t border-white/10 pt-6">
            <Link
              href="mailto:Hood@MailAhoy.com"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Request a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
