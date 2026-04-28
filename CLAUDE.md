# CLAUDE.md — Trouve Labs Frontend

## Project Overview

Trouve Labs is a Next.js 16 (App Router) marketing + documentation site for an AI SDK platform targeting intelligent mobility systems. The stack is TypeScript, React 19, Tailwind CSS, and Framer Motion (via `motion/react`).

---

## Tech Stack

| Tool | Version / Notes |
|---|---|
| Framework | Next.js 16, App Router |
| Language | TypeScript + TSX |
| Styling | Tailwind CSS v4 |
| Font | Poppins (Google Fonts, via `next/font`) |
| Animation | Framer Motion (`motion/react`), lazy-loaded via `LazyMotionProvider` |
| Icons | Lucide React |
| Utilities | `clsx` + `tailwind-merge` via `cn()` from `@/lib/utils` |

---

## Commands

```bash
npm run dev     # start dev server with hot reload
npm run build   # production build
npm run start   # run built app
npm run prod    # build + start combined
npm run lint    # ESLint (next core-web-vitals + TypeScript rules)
```

> Run `npm run lint` before every commit. There is no test runner yet.

---

## Import Alias

All absolute imports use the `@/*` alias (configured in `tsconfig.json`):

```ts
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "@/components/ui/breadcrumb";
```

---

## Directory Structure

```
trouvelabs/
├── app/                        # App Router entry points
│   ├── layout.tsx              # Root layout — Navbar, Footer, LazyMotionProvider, Poppins font
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Global CSS + Tailwind tokens
│   ├── about/                  # /about
│   ├── projects/               # SDK docs hub (URL stays `/projects`; navbar label is "Documentation")
│   │   ├── page.tsx            # /projects  — SDK picker/hub page
│   │   ├── data-intelligence-sdk/
│   │   │   └── (docs)/
│   │   │       ├── layout.tsx          # DocsNav left rail + main slot
│   │   │       ├── page.tsx            # /projects/data-intelligence-sdk  (Overview)
│   │   │       ├── quickstart/page.tsx
│   │   │       └── api-reference/page.tsx
│   │   ├── vision-sdk/
│   │   │   └── (docs)/         # same structure as data-intelligence-sdk
│   │   ├── tokenization-sdk/   # comingSoon — same structure, placeholder content
│   │   │   └── (docs)/
│   │   └── genai-sdk/          # comingSoon — same structure, placeholder content
│   │       └── (docs)/
│   │   # NOTE: PROJECTS also lists `voice-sdk` but no route folder exists yet — pending
│   ├── use-cases/
│   │   ├── data-intelligence/  # /use-cases/data-intelligence
│   │   └── voice-agent/        # /use-cases/voice-agent
│   ├── (blogs)/                # placeholder
│   ├── architecture/           # placeholder
│   ├── benchmarks/             # placeholder
│   ├── enterprise/             # placeholder
│   ├── home/                   # placeholder
│   └── roadmap/                # placeholder
│
├── components/
│   ├── navbar.tsx              # Global floating pill navbar (client component)
│   ├── footer.tsx              # Global footer
│   ├── home-comps/             # Homepage-specific sections
│   │   ├── herosection.tsx
│   │   ├── about-bento.tsx
│   │   ├── product-preview-sec.tsx
│   │   └── mobilitycontextsection.tsx
│   ├── about-comps/            # /about page sections
│   │   ├── aboutTabbedSection.tsx
│   │   ├── pillarsSection.tsx     # NOTE: orphan — not imported on /about (homepage WhyTrouve owns pillars)
│   │   ├── statsSection.tsx
│   │   └── teams.tsx
│   ├── docs/                   # Docs-page primitives (used by /projects/[slug]/(docs)/)
│   │   ├── docs-nav.tsx              # Left rail — Overview / Quickstart / API Reference
│   │   ├── docs-page.tsx             # Inner shell: prose article + sticky right-rail TOC
│   │   └── table-of-contents.tsx     # Scroll-spy TOC (IntersectionObserver)
│   └── ui/                     # Reusable primitive components
│       ├── breadcrumb.tsx       # <Breadcrumb items={[...]} />
│       ├── aurora-text.tsx
│       ├── focus-cards.tsx
│       ├── gradient-flow.tsx
│       ├── horizontal-scroll.tsx
│       ├── lazy-motion-provider.tsx
│       └── motion-wrapper.tsx
│
├── lib/
│   ├── projects.ts             # PROJECTS array — single source of truth for all SDKs
│   ├── use-cases.ts            # USE_CASES array — single source of truth for use cases
│   └── utils.ts                # cn() helper
│
├── public/                     # Static assets (images, logos)
├── docs/                       # Internal planning docs (not served)
│   └── redesign.md

```

---

## Data Sources (Single Source of Truth)

### `lib/projects.ts` — PROJECTS

Each SDK entry:
```ts
{
  title: string;       // display name
  slug: string;        // used in URL: /projects/[slug]
  description: string;
  icon: LucideIcon;
  comingSoon?: boolean; // hides link, shows "Soon" badge in navbar/hub
}
```

**Current SDKs:**
| Title | Slug | Status |
|---|---|---|
| Vision SDK | `vision-sdk` | Live (placeholder content) |
| Data Intelligence SDK | `data-intelligence-sdk` | Live (market copy) |
| Voice SDK | `voice-sdk` | Listed in `PROJECTS` but no route folder yet — link 404s |
| Tokenization SDK | `tokenization-sdk` | Coming Soon |
| GenAI SDK | `genai-sdk` | Coming Soon |

The `PROJECTS` array drives:
- `/projects` hub page (SDK grid — desktop is a 6-col grid showing 3+2 centered; mobile is a 2-row horizontal-scroll grid)
- Navbar "Documentation" dropdown
- Mobile nav Documentation accordion
- Footer "Products" link list

### `lib/use-cases.ts` — USE_CASES

Drives:
- Navbar "Use Cases" dropdown
- Mobile nav Use Cases accordion

---

## Navbar Architecture (`components/navbar.tsx`)

- **Floating pill** fixed to top of viewport, centered, `max-w-7xl`
- Desktop nav items: Home, About, Documentation ▾, Use Cases ▾
- **Dropdown component** (internal):
  - `dropdownType?: "docs" | "use-cases"` prop controls panel alignment via `cn()`
  - Panel uses `w-max` (content-width, no fixed min-width)
  - Use Cases: `dropdownType="use-cases"` → `left-1/3 -translate-x-1/2`
  - Default (Documentation): `left-1/2 -translate-x-1/2`
  - The `"docs"` branch (`-right-5`) is currently unused — kept on the type union for future panels
- Mobile nav: collapsible accordion for Documentation and Use Cases — driven by `PROJECTS` and `USE_CASES`
- Logo uses `priority` (`loading="eager"`) for LCP

---

## Routing Conventions

- **SDK overview:** `/projects/[slug]` → `app/projects/[slug]/(docs)/page.tsx`
- **SDK docs pages:** `/projects/[slug]/quickstart` → `app/projects/[slug]/(docs)/quickstart/page.tsx`
- **SDK docs layout (sidebar):** `app/projects/[slug]/(docs)/layout.tsx` renders `<DocsNav />` on the left and the page content on the right (5-col grid: 1 + 4). Live for `data-intelligence-sdk`; other SDK layouts are still transparent shells.
- The `(docs)` route group does **not** affect URLs — it only applies the layout
- `/projects` → hub page listing all SDKs
- Each docs page wraps content in `<DocsPage toc={[...]}>` from `components/docs/docs-page.tsx` — this provides the inner content + sticky right-rail TOC. Heading IDs must match the `TocItem.id`s for the scroll-spy to highlight them.

---

## Reusable UI Components

### `<Breadcrumb>`
```tsx
import { Breadcrumb } from "@/components/ui/breadcrumb";

<Breadcrumb
  className="mb-8"
  items={[
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Data Intelligence SDK" },   // no href = current page (plain text)
  ]}
/>
```

---

## Design Tokens (Tailwind)

Custom tokens defined in `app/globals.css`:
- `bg-trouve-teal` — primary accent colour
- `border-trouve-border` — subtle card borders
- `bg-trouve-surface` — dark card background
- `text-muted-foreground` — secondary text

---

## Known TODOs / Pending Tasks

- [ ] **Docs Sidebar (other SDKs)** — only `data-intelligence-sdk` has the `<DocsNav />` layout wired up. `vision-sdk`, `tokenization-sdk`, `genai-sdk` layouts are still transparent shells. Note: `DocsNav` currently hardcodes `data-intelligence-sdk` URLs — if reused, parameterise by slug.
- [ ] **Voice SDK route** — `voice-sdk` is in `PROJECTS` but `app/projects/voice-sdk/` does not exist; navbar/footer/hub links 404
- [ ] **SDK content** — `data-intelligence-sdk/page.tsx` has real market copy; quickstart and api-reference are still lorem-ipsum scaffolding. `vision-sdk` overview is a plain placeholder.
- [ ] **Placeholder package names** — `data-intelligence-sdk/(docs)/quickstart/page.tsx` code samples reference a fictional `@trouve/graph-rag-sdk` package; replace when real SDK ships
- [ ] **External URLs** — replace `href="#"` placeholders in use-case pages and coming-soon SDK pages
- [ ] **Request a Demo** — hero CTA `href=""` is empty; wire up once the form/link is ready

---

## Coding Style

- 2-space indentation, semicolons enabled
- Components: PascalCase (`HeroSection`, `Navbar`)
- Files: kebab-case (`herosection.tsx`, `about-bento.tsx`)
- Utilities: camelCase; constants: `UPPER_SNAKE_CASE`
- Use `cn()` from `@/lib/utils` for conditional class composition — never raw template literals for multi-condition classes
- All internal links use `<Link prefetch={false}>` unless explicitly needed
- `// TODO:` comments mark placeholder content that needs to be filled

---

## What NOT to Do

- Do not add a new SDK page without adding the corresponding entry to `lib/projects.ts` — the navbar and hub page derive from that array
- Do not use `min-h-screen` on section components (causes layout issues with natural-height sections)
- Do not add `loading="eager"` or `priority` to images that are not above the fold
- `test.jsx` at root is scratch/diff content — do not treat it as production code
- Do not create route groups that conflict with existing URL patterns
