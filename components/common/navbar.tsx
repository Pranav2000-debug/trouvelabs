"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { PROJECTS } from "@/lib/constants/projects";
import { cn } from "@/lib/constants/utils";

/* ──────── Types ──────── */

type Sandbox = {
  title: string;
  href: string;
  description: string;
  sdks: string;
};

/* ──────── Data ──────── */

const SANDBOXES: Sandbox[] = [
  {
    title: "Data Intelligence Platform",
    href: "/sandboxes/data-intelligence",
    description: "Intelligent data processing and analysis with graph-based retrieval.",
    sdks: "Data Intelligence SDK",
  },
  {
    title: "Voice Agent",
    href: "/sandboxes/voice-agent",
    description: "Intelligent voice interactions with real-time understanding.",
    sdks: "Voice SDK",
  },
];

/* ──────── Dropdown ──────── */

function Dropdown({ label, children, dropdownType }: { label: string; children: React.ReactNode; dropdownType?: "docs" | "sandboxes" }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="flex items-center gap-1 text-sm text-white/60 transition-colors hover:text-primary"
        onClick={() => setOpen(!open)}>
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={cn(
            "absolute top-full z-50 pt-5",
            dropdownType === "docs" && "-right-5",
            dropdownType === "sandboxes" && "left-1/3 -translate-x-1/2",
            !dropdownType && "left-1/2 -translate-x-1/2",
          )}>
          <div className="w-max rounded-xl border border-white/10 bg-card p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">{children}</div>
        </div>
      )}
    </div>
  );
}

/* ──────── Navbar ──────── */

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const [mobileSandboxesOpen, setMobileSandboxesOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProjectsOpen(false);
    setMobileSandboxesOpen(false);
  };

  const toggleMobile = () => {
    if (mobileOpen) closeMobile();
    else setMobileOpen(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating pill */}
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-card/80 px-8 py-0.5 backdrop-blur-xl">
        {/* Logo */}
        <Link prefetch={false} href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/assets/TROUVE-LOGO-W-08.webp" alt="Trouve Labs" width={120} height={24} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          <Link prefetch={false} href="/" className="text-sm text-white/60 transition-colors hover:text-primary">
            Home
          </Link>
          <Link prefetch={false} href="/about" className="text-sm text-white/60 transition-colors hover:text-primary">
            About
          </Link>
          <Dropdown label="Documentation">
            <div className="grid gap-1 md:w-[420px] md:grid-cols-2">
              {PROJECTS.map((p) => {
                const Icon = p.icon;
                return p.comingSoon ? (
                  <div key={p.slug} className="flex gap-3 rounded-lg p-2.5 opacity-50 cursor-default select-none">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-white">{p.title}</span>
                        <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/60">
                          Soon
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-white/40">{p.description}</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    prefetch={false}
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="flex gap-3 rounded-lg p-2.5 transition-colors hover:bg-white/5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-3.5 w-3.5 text-primary" />
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

          <Dropdown label="Sandboxes" dropdownType="sandboxes">
            <div className="grid gap-1 w-[320px]">
              {SANDBOXES.map((uc) => (
                <Link
                  prefetch={false}
                  key={uc.title}
                  href={uc.href}
                  className="flex flex-col gap-1 rounded-lg p-2.5 transition-colors hover:bg-white/5">
                  <span className="text-xs font-medium uppercase text-primary">{uc.sdks}</span>
                  <div className="text-sm font-medium text-white">{uc.title}</div>
                  <p className="text-xs text-white/40">{uc.description}</p>
                </Link>
              ))}
            </div>
          </Dropdown>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={toggleMobile}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}>
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-card p-6 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link prefetch={false} href="/" onClick={closeMobile} className="text-base font-medium text-white/70 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                Documentation
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileProjectsOpen && (
                <ul className="mt-2 flex flex-col gap-2 pl-3">
                  {PROJECTS.map((p) =>
                    p.comingSoon ? (
                      <li key={p.slug} className="flex items-center gap-2 text-sm text-white/30 cursor-default select-none">
                        {p.title}
                        <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">
                          Soon
                        </span>
                      </li>
                    ) : (
                      <li key={p.slug}>
                        <Link prefetch={false} href={`/projects/${p.slug}`} onClick={closeMobile} className="text-sm text-white/50 hover:text-white">
                          {p.title}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMobileSandboxesOpen(!mobileSandboxesOpen)}
                className="flex w-full items-center justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                Sandboxes
                <ChevronDown className={`h-3.5 w-3.5 transition-transform ${mobileSandboxesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileSandboxesOpen && (
                <ul className="mt-2 flex flex-col gap-2 pl-3">
                  {SANDBOXES.map((uc) => (
                    <li key={uc.href}>
                      <Link prefetch={false} href={uc.href} onClick={closeMobile} className="text-sm text-white/50 hover:text-white">
                        {uc.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link prefetch={false} href="/about" onClick={closeMobile} className="text-base font-medium text-white/70 hover:text-white">
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
