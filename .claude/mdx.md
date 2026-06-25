# Docs pages use MDX

Docs page **content** is authored in MDX, not hand-styled TSX. Each route is a thin `page.tsx`
that owns the shell and imports a colocated `content.mdx`:

```
app/projects/<slug>/(docs)/
├── layout.tsx        # DocsNav + DocsFabNav grid (unchanged)
├── page.tsx          # thin wrapper: <Breadcrumb> + <DocsPage toc={TOC}><Content/></DocsPage>
└── content.mdx       # the prose - pure Markdown, no Tailwind classes
```

**Why `page.tsx` + `content.mdx` and not file-based `page.mdx`:** the route must wrap the content
in `<Breadcrumb>` and feed a per-page `TOC` array into `<DocsPage>` (the right-rail scroll-spy).
A layout cannot read a page's data, so the page itself owns that shell. `.mdx` files are imported
as modules - `pageExtensions` is left default so they never become routes.

**How styling works:** `mdx-components.tsx` (project root) maps every Markdown element (`h1`-`h4`,
`p`, `ul`/`ol`, `a`, `code`, `pre`, `strong`, `hr`) to the canonical typography classes from
`.claude/typography.md`. This is why `content.mdx` carries zero classes. It also provides docs
components usable in any `.mdx` without imports: `<Eyebrow>`, `<Lead>`, `<LinkCard>`,
`<LinkCardList>`. One-offs (`next/image`, `Badge`) are `import`ed at the top of the specific `.mdx`.

**Config (`next.config.ts`):** wrapped with `createMDX`. Rehype plugins are referenced **by
string** (`[["rehype-slug"], ["rehype-mdx-code-props"]]`) because Turbopack must serialize the
options - never pass an imported plugin function. `rehype-slug` auto-generates heading `id`s;
`rehype-mdx-code-props` turns code-fence meta into props on `<pre>`. `**/*.mdx` is in tsconfig `include`.

## Authoring rules

- **TOC stays hand-maintained** in `page.tsx`. Each `TocItem.id` MUST equal the slug `rehype-slug`
  produces from the heading text (e.g. "Why Data Intelligence" -> `why-data-intelligence`,
  "1. Dataset ingestion" -> `1-dataset-ingestion`). A mismatch silently breaks scroll-spy and anchor
  jumps for that row - verify against the rendered DOM.
- **Code blocks:** use fenced Markdown. Add a title with fence meta to get the header bar:
  ` ```yaml title="pipeline.yaml" ` - without a title the block renders compact. Fences route
  through the existing async `<CodeBlock>` (Shiki) via the `pre` mapping.
- **Docs H2 is `text-primary`** (teal) - set in `mdx-components.tsx`, matches `.claude/typography.md`.
- House copy rules still apply in `.mdx`: plain hyphens (no em/en dashes), ASCII quotes, no
  emoji-presentation Unicode.

## Migrating a TSX docs page to MDX (recipe)

1. Move the prose into `content.mdx` as plain Markdown; use `<Eyebrow>`/`<Lead>` for the
   intro, `<LinkCard>`/`<LinkCardList>` for external link lists, fenced code for samples.
2. Rewrite `page.tsx` to the thin wrapper: `import Content from "./content.mdx"`, keep the
   `<Breadcrumb>` and the curated `TOC` array, render `<DocsPage toc={TOC}><Content/></DocsPage>`.
3. Set each `TOC[i].id` to the `rehype-slug` slug of its heading; `npm run build` then verify
   the rendered heading `id`s match (scroll-spy + cross-links).

## Future (not done yet)

- Auto-generated TOC (drop the hand-maintained array) via `remark-flexible-toc` + a `mapToc()` helper.
- Revisit `next-mdx-remote` only if docs move to a CMS or grow past ~100 pages.
