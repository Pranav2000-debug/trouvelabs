import { DocsNav } from "@/components/docs/docs-nav";

export default function GraphRagDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-32 md:grid-cols-5">
      <aside className="sticky top-28 hidden h-fit md:col-span-1 md:block">
        <DocsNav />
      </aside>

      <main className="min-w-0 md:col-span-4">{children}</main>
    </div>
  );
}
