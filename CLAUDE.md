# CLAUDE.md - Trouve Labs Frontend

## Project Overview

Trouve Labs is a Next.js 16 (App Router) marketing + documentation site for an AI SDK platform
targeting intelligent mobility systems. Stack: TypeScript, React 19, Tailwind CSS v4, Framer
Motion (`motion/react`). Docs page content is authored in MDX.

---

## Tech Stack

| Tool | Version / Notes |
|---|---|
| Framework | Next.js 16, App Router (Turbopack, `cacheComponents`, React Compiler on) |
| Language | TypeScript + TSX |
| Styling | Tailwind CSS v4 |
| Fonts | Roboto + Roboto Condensed + JetBrains Mono (`next/font`) |
| Animation | Framer Motion (`motion/react`), lazy-loaded via `LazyMotionProvider` |
| Icons | Lucide React + custom SVGs in `components/icons/` |
| Smooth scroll | `lenis/react` (`<ReactLenis root>`) |
| Docs content | MDX (`@next/mdx`) - bodies in `content.mdx`; see `.claude/mdx.md` |
| Syntax highlighting | `shiki` (server, dual-theme) via `components/code-block.tsx` |
| Utilities | `clsx` + `tailwind-merge` via `cn()` from `@/lib/constants/utils` |

---

## Commands

```bash
npm run dev     # dev server with hot reload
npm run build   # production build
npm run start   # run built app
npm run prod    # build + start
npm run lint    # ESLint (next core-web-vitals + TS)
```

> Run `npm run lint` before every commit. No test runner yet.
> Do **not** run `npm audit fix --force` - it downgrades `next` and breaks the build (see `9aceae3`).

---

## Import Alias

Absolute imports use `@/*` (configured in `tsconfig.json`):

```ts
import { PROJECTS } from "@/lib/constants/projects";
import { cn } from "@/lib/constants/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";
```

---

## Reference docs (read on demand)

Detailed reference lives under `.claude/` so this file stays lean. Open the relevant one when working in that area:

| File | Covers |
|---|---|
| `.claude/conventions.md` | **Full coding-style + what-NOT-to-do rules** (the complete list) |
| `.claude/design.md` | Color/token mapping + the 5-tier opacity scale |
| `.claude/typography.md` | Type roles - canonical Tailwind class string per element + responsive sizing rule |
| `.claude/mdx.md` | Docs MDX system - `page.tsx` + `content.mdx`, config, authoring + migration recipe |
| `.claude/architecture.md` | Directory structure, data sources (PROJECTS/SANDBOXES), navbar, routing, UI components, animation patterns, TODOs |

---

## Hard rules (non-negotiable - full list in `.claude/conventions.md`)

- **Semantic tokens only.** Never write raw `trouve-*` classes (`bg-trouve-teal`,
  `text-trouve-teal`, `border-trouve-border`, `bg-trouve-card/shell/navy`, `text-trouve-offwhite`) -
  use the semantic alias (`bg-primary`, `text-primary`, `border-border`, `bg-card`, `bg-background`,
  `bg-secondary`/`bg-muted`, `text-foreground`). Only exceptions: `trouve-yellow`, `trouve-grey`.
- **No em/en dashes** and **no emoji-presentation Unicode** (`↗ ✓` etc.) in copy or code - plain
  hyphens and ASCII/Lucide only.
- **Animation imports:** use `m` from `motion/react-m`, never `motion` from `motion/react`.
- **Docs pages are MDX:** edit `content.mdx` for prose; keep `page.tsx` thin. TOC ids must match
  `rehype-slug` heading slugs. See `.claude/mdx.md`.
- **Do not add an SDK page** without a `lib/constants/projects.ts` entry (navbar/footer/hub/homepage
  all derive from it).
- **Do not modify `components/home/product-preview-sec.tsx`** - it is LOCKED.
- Run `npm run lint` before committing.
