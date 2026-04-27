import { TableOfContents, type TocItem } from "@/components/docs/table-of-contents";

interface DocsPageProps {
  toc: TocItem[];
  children: React.ReactNode;
}

/**
 * Inner shell for a docs page. Renders content on the left and a
 * scroll-spy TOC sticky on the right.
 *
 * Typography is intentionally not styled here — pages apply Tailwind
 * classes directly on each element. Will be revisited when the docs
 * typography system is finalised.
 */
export function DocsPage({ toc, children }: DocsPageProps) {
  return (
    <div className="grid grid-cols-1 gap-10 xl:grid-cols-5">
      <article className="min-w-0 max-w-none xl:col-span-4">{children}</article>

      <aside className="sticky top-28 hidden h-fit xl:col-span-1 xl:block">
        <TableOfContents items={toc} />
      </aside>
    </div>
  );
}
