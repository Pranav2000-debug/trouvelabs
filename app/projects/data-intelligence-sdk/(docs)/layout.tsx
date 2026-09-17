import { DocsNav } from "@/components/docs/docs-nav";
import { DocsFabNav } from "@/components/docs/docs-fab-nav";

export default function GraphRagDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-32 pt-24 sm:gap-12 sm:px-6 sm:pb-48 sm:pt-28 lg:pb-64 lg:pt-32 md:grid-cols-5">
      <aside className="sticky top-28 hidden h-fit md:col-span-1 md:block">
        <DocsNav slug="data-intelligence-sdk" />
      </aside>

      <main className="min-w-0 md:col-span-4">{children}</main>

      <DocsFabNav slug="data-intelligence-sdk" />
    </div>
  );
}
