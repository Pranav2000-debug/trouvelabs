import Image from "next/image";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "../motion-wrapper";
import Link from "next/link";

export default function SdkGridSection({ SDK_CARDS }: { SDK_CARDS: any[] }) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">Core SDKs.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
            Modular, composable AI building blocks designed for mobility intelligence.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SDK_CARDS.map((sdk) => {
            const IconComponent = sdk.icon;
            return (
              <FadeInStaggerItem key={sdk.slug}>
                <Link
                  href={`/products/${sdk.slug}`}
                  className="group flex flex-col rounded-xl border border-trouve-border bg-card p-6 transition-all hover:border-trouve-teal/30 hover:shadow-lg hover:shadow-trouve-teal/5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-trouve-teal/10">
                    <IconComponent className="h-5 w-5 text-trouve-teal" />
                  </div>
                  <h3 className="text-lg font-semibold">{sdk.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sdk.purpose}</p>
                  <span className="mt-4 text-xs font-medium text-trouve-teal opacity-0 transition-opacity group-hover:opacity-100">Learn more →</span>
                </Link>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
