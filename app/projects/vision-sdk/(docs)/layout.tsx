import { DocsNav } from "@/components/docs/docs-nav";
import { DocsFabNav } from "@/components/docs/docs-fab-nav";

export default function VisionSdkDocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-32 md:grid-cols-5">
      <aside className="sticky top-28 hidden h-fit md:col-span-1 md:block">
        <DocsNav slug="vision-sdk" />
      </aside>

      <main className="min-w-0 md:col-span-4">{children}</main>

      <DocsFabNav slug="vision-sdk" />
    </div>
  );
}
