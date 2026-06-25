import { Suspense } from "react";
import type { ComponentProps, ReactElement, ReactNode } from "react";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { CodeBlock } from "@/components/ui/code-block";
import { CodeBlockSkeleton } from "@/components/docs/code-block-skeleton";
import { LinkCard, LinkCardList } from "@/components/docs/link-card";

/**
 * Global MDX element map for the docs system. Maps Markdown elements to the
 * canonical typography classes (see .claude/typography.md), matching what the
 * live docs pages render. Server module - the `pre` -> CodeBlock path is async.
 *
 * Note: H2 uses `text-primary` to match the existing docs pages. typography.md
 * currently documents `text-foreground` for the docs H2; that drift is tracked
 * separately - here we preserve the live visual output.
 */

const inlineCode =
  "rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border";

function Eyebrow({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
      {children}
    </p>
  );
}

function Lead({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <p id={id} className="text-lg text-muted-foreground leading-relaxed mb-10">
      {children}
    </p>
  );
}

function Anchor({ href = "", children, ...props }: ComponentProps<"a">) {
  const className = "text-primary underline-offset-4 hover:underline";

  if (href.startsWith("/")) {
    return (
      <Link href={href} prefetch={false} className={className}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
      {children}
    </a>
  );
}

type CodeChild = ReactElement<{ className?: string; children?: ReactNode }>;

// `title` arrives via rehype-mdx-code-props, which turns the code-fence meta
// (e.g. ```yaml title="pipeline.yaml") into props on this <pre>. With a title we
// show the CodeBlock header bar; without one we render it compact.
function Pre({ children, title }: { children?: ReactNode; title?: string }) {
  const code = children as CodeChild;
  const childClassName = code?.props?.className ?? "";
  const language = childClassName.replace(/^language-/, "") || "tsx";
  const value = String(code?.props?.children ?? "").replace(/\n$/, "");

  return (
    <div className="mb-4">
      <Suspense fallback={<CodeBlockSkeleton withHeader={!!title} lines={title ? 10 : 1} />}>
        <CodeBlock language={language} code={value} title={title} compact={!title} />
      </Suspense>
    </div>
  );
}

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1
      className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      className="text-2xl font-semibold text-primary tracking-tight mt-14 mb-4 scroll-mt-28"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-base font-semibold text-foreground mt-6 mb-2" {...props}>
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p className="text-base text-muted-foreground leading-relaxed mb-4" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed"
      {...props}
    >
      {children}
    </ol>
  ),
  a: Anchor,
  code: ({ className, children, ...props }) => {
    // Fenced code is handled by `pre`; only style inline code here.
    if (className?.includes("language-")) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={inlineCode} {...props}>
        {children}
      </code>
    );
  },
  pre: Pre,
  strong: ({ children, ...props }) => (
    <strong className="text-foreground font-semibold" {...props}>
      {children}
    </strong>
  ),
  hr: (props) => <hr className="my-10 border-border" {...props} />,
  Eyebrow,
  Lead,
  LinkCard,
  LinkCardList,
};

export function useMDXComponents(existing: MDXComponents): MDXComponents {
  return { ...existing, ...components };
}
