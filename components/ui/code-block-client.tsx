"use client";

/**
 * jalco-ui
 * CodeBlockCopyButton, CodeBlockWrapper
 * by Justin Levine
 * ui.justinlevine.me
 *
 * Client-side primitives for the CodeBlock component: copy button and
 * overflow wrapper (default, scrollable, collapsible).
 *
 * Dependencies: lucide-react
 */

import * as React from "react";
import { Check, ChevronDown, Copy } from "lucide-react";
import { cn } from "@/lib/constants/utils";

interface CodeBlockCopyButtonProps extends Omit<React.ComponentProps<"button">, "value"> {
  value: string;
}

export function CodeBlockCopyButton({ value, className, ...props }: CodeBlockCopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      data-slot="code-block-copy-button"
      className={cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border/60 bg-card/80 text-muted-foreground backdrop-blur-sm transition-colors hover:bg-muted hover:text-foreground",
        className,
      )}
      aria-label={copied ? "Copied code" : "Copy code"}
      title={copied ? "Copied" : "Copy"}
      {...props}>
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

// CodeBlockWrapper

type Overflow = "default" | "scrollable" | "collapsible";

interface CodeBlockWrapperProps extends Omit<React.ComponentProps<"div">, "children"> {
  overflow: Overflow;
  maxHeight?: number;
  muted?: boolean;
  children: React.ReactNode;
}

export function CodeBlockWrapper({ overflow, maxHeight = 280, muted = false, children }: CodeBlockWrapperProps) {
  const [expanded, setExpanded] = React.useState(false);

  if (overflow === "default") {
    return <div className="overflow-x-auto">{children}</div>;
  }

  if (overflow === "scrollable") {
    return (
      <div className="overflow-auto" style={{ maxHeight }}>
        {children}
      </div>
    );
  }

  // collapsible
  return (
    <div className="relative">
      <div className={cn("overflow-hidden transition-all", !expanded && "relative")} style={!expanded ? { maxHeight } : undefined}>
        {children}
        {!expanded && (
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t to-transparent",
              muted ? "from-muted/30" : "from-card",
            )}
          />
        )}
      </div>
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "flex w-full items-center justify-center gap-1.5 border-t py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground",
          muted ? "border-border/40 bg-muted/10 hover:bg-muted/30" : "border-border/60 bg-muted/30 hover:bg-muted/50",
        )}>
        <ChevronDown className={cn("size-3.5 transition-transform", expanded && "rotate-180")} />
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}
