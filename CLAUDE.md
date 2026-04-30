# CLAUDE.md - Trouve Labs Frontend

## Project Overview

Trouve Labs is a Next.js 16 (App Router) marketing + documentation site for an AI SDK platform targeting intelligent mobility systems. The stack is TypeScript, React 19, Tailwind CSS v4, and Framer Motion (via `motion/react`).

---

## Tech Stack

| Tool | Version / Notes |
|---|---|
| Framework | Next.js 16, App Router |
| Language | TypeScript + TSX |
| Styling | Tailwind CSS v4 |
| Fonts | Roboto + Roboto Condensed + JetBrains Mono (Google Fonts via `next/font`) |
| Animation | Framer Motion (`motion/react`), lazy-loaded via `LazyMotionProvider` |
| Icons | Lucide React + custom SVG components in `components/icons/` |
| Smooth scroll | `lenis/react` (`<ReactLenis root>`) |
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
import { JourneyConnector } from "@/components/ui/journey-connector";
```

---

## Directory Structure

```
trouvelabs/
├── app/                        # App Router entry points
│   ├── layout.tsx              # Root layout - Navbar, Footer, LazyMotionProvider; wires Roboto / Roboto Condensed / JetBrains Mono
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Global CSS + Tailwind tokens
│   ├── about/
│   │   └── page.tsx            # /about - Trouve-style vertical journey of cards + JourneyConnectors
│   ├── projects/               # SDK docs hub (URL stays `/projects`; navbar label is "Documentation")
│   │   ├── page.tsx            # /projects - SDK picker/hub page
│   │   ├── data-intelligence-sdk/
│   │   │   └── (docs)/
│   │   │       ├── layout.tsx          # DocsNav left rail + main slot
│   │   │       ├── page.tsx            # Overview - real market copy
│   │   │       ├── quickstart/page.tsx # Lorem-ipsum scaffold
│   │   │       └── api-reference/page.tsx # Lorem-ipsum scaffold
│   │   ├── vision-sdk/(docs)/         # Live route - overview links to https://visionsdk.trouvelabs.io
│   │   ├── voice-sdk/(docs)/          # Live route - overview links to 3 voiceai.trouve.works surfaces
│   │   ├── tokenization-sdk/(docs)/   # comingSoon - transparent shell layout
│   │   └── genai-sdk/(docs)/          # comingSoon - transparent shell layout
│   ├── use-cases/                     # Internal pages still exist; nav still links here. Cards on homepage now open external platforms (see lib/use-cases.ts).
│   │   ├── data-intelligence/
│   │   └── voice-agent/
│   ├── (blogs)/                # placeholder
│   ├── architecture/           # placeholder
│   ├── benchmarks/             # placeholder
│   ├── enterprise/             # placeholder
│   ├── home/                   # placeholder
│   └── roadmap/                # placeholder
│
├── components/
│   ├── navbar.tsx              # Floating pill navbar (client). Items: Home, About, Documentation ▾, Use Cases ▾
│   ├── footer.tsx              # Footer; Products column auto-renders from PROJECTS
│   ├── home-comps/             # Homepage sections (rendered top-to-bottom from app/page.tsx)
│   │   ├── herosection.tsx              # Hero with AuroraText + Work With Us / Explore Our Research CTAs
│   │   ├── opening-positioning.tsx      # Asymmetric split - 4 movement cards (Goods/People/Data/Decisions)
│   │   ├── capability-showcase.tsx      # Trouve-style 6-tab capability picker
│   │   ├── capability-showcase-card.tsx # Reusable detail card primitive (only for the showcase)
│   │   ├── product-preview-sec.tsx      # Sticky-stack: Core SDKs grid + Use Cases grid (LOCKED)
│   │   ├── why-trouve.tsx               # 12-col split - sticky H2 + 5 pillar list
│   │   ├── approach-steps.tsx           # 5-step Timeline (horizontal md+, vertical mobile). Step numbers in trouve-yellow.
│   │   └── philosophy-band.tsx          # 8/4 split text band over BG PATTERN MASK.png
│   ├── about-comps/            # /about page sections
│   │   ├── about-trouve-card.tsx        # Reusable rounded-3xl card shell + AboutTrouveEyebrow pill primitive
│   │   ├── about-lead.tsx               # Lead card - h1 + 3 paragraphs + animated motif (right column)
│   │   ├── about-lead-motif.tsx         # Client component - sonar-pulse rings, useInView gates animation
│   │   ├── about-mission-vision.tsx     # Paired Mission + Vision cards
│   │   ├── about-core-values.tsx        # Privacy/data-sovereignty card + 3 value chips
│   │   ├── about-differentiators.tsx    # 2 sub-cards (Talent / Algorithms) with tag chips
│   │   ├── about-academy.tsx            # Trouve Labs Academy section
│   │   ├── statsSection.tsx             # 20+ / 10+ / 5 (numbers in trouve-yellow)
│   │   ├── teams.tsx                    # Paginated 6-per-page team grid
│   │   ├── aboutTabbedSection.tsx       # ORPHAN - no longer imported
│   │   └── pillarsSection.tsx           # ORPHAN - no longer imported
│   ├── docs/                   # Docs-page primitives
│   │   ├── docs-nav.tsx              # Left rail. Currently hardcodes data-intelligence-sdk URLs
│   │   ├── docs-page.tsx             # Inner shell - article + sticky right-rail TOC
│   │   └── table-of-contents.tsx     # Scroll-spy TOC (IntersectionObserver)
│   ├── icons/                  # Hand-rolled SVG icon components (Iconify-naming convention)
│   │   ├── carbon-datastore.tsx
│   │   ├── ph-path-thin.tsx
│   │   ├── icon-park-solid-personal-privacy.tsx
│   │   ├── arcticons-breeno-memory.tsx
│   │   └── ri-voice-ai-line.tsx
│   └── ui/                     # Reusable primitives
│       ├── breadcrumb.tsx              # <Breadcrumb items={[...]} />
│       ├── journey-connector.tsx       # SVG S-curve, draws on scroll via useScroll/pathLength
│       ├── timeline.tsx                # Compound timeline primitives (Timeline / Item / Dot / etc.)
│       ├── focus-cards.tsx             # Card used by teams.tsx; renders <UserRound> fallback when src is empty
│       ├── aurora-text.tsx
│       ├── gradient-flow.tsx
│       ├── horizontal-scroll.tsx
│       ├── lazy-motion-provider.tsx
│       └── motion-wrapper.tsx          # FadeIn, FadeInStagger, FadeInStaggerItem
│
├── hooks/
│   ├── use-isomorphic-layout-effect.ts
│   └── use-lazy-ref.ts
│
├── lib/
│   ├── projects.ts             # PROJECTS array - single source of truth for SDKs
│   ├── use-cases.ts            # USE_CASES array - drives Use Cases dropdown + homepage cards (now external URLs)
│   ├── compose-refs.ts         # used by timeline.tsx
│   └── utils.ts                # cn() helper
│
├── public/                     # Static assets (images, logos, /team/<member>.png photos)
├── docs/                       # Internal planning docs (not served)
│   ├── typography.md           # Authoritative type-system reference
│   ├── redesign.md
│   └── ...
```

---

## Data Sources (Single Source of Truth)

### `lib/projects.ts` - PROJECTS

Each SDK entry:
```ts
{
  title: string;
  slug: string;
  description: string;
  icon: ComponentType<{ className?: string }>; // accepts both Lucide and custom icons
  comingSoon?: boolean;
}
```

**Current SDKs:**
| Title | Slug | Status |
|---|---|---|
| Vision SDK | `vision-sdk` | Live - overview links to live platform |
| Data Intelligence SDK | `data-intelligence-sdk` | Live - real market copy, full DocsNav |
| Voice SDK | `voice-sdk` | Live - overview links to 3 voiceai surfaces |
| Tokenization SDK | `tokenization-sdk` | Coming Soon (transparent-shell layout) |
| GenAI SDK | `genai-sdk` | Coming Soon (transparent-shell layout) |

The `PROJECTS` array drives:
- `/projects` hub page (SDK grid - 6-col grid showing 3+2 centered on desktop; 2-row horizontal-scroll on mobile)
- Navbar "Documentation" dropdown (desktop) and accordion (mobile)
- Footer "Projects" column (auto-renders from PROJECTS)
- Homepage `product-preview-sec.tsx` Section 1 SDK grid

### `lib/use-cases.ts` - USE_CASES

```ts
{
  name: string;
  slug: string;
  builtWith: string;
  description: string;
  href: string;          // internal route or full external URL
  external?: boolean;    // true → opens in new tab
}
```

Both current entries (`Data Intelligence`, `Voice Agent`) point at external platforms (`https://dataintelligence.trouvelabs.works`, `https://voiceai.trouve.works`). The internal `/use-cases/*` routes still exist and the navbar Use Cases dropdown still routes to them, but the **homepage** "Built with our SDKs" cards open the external URLs.

---

## Navbar Architecture (`components/navbar.tsx`)

- **Floating pill** fixed to top of viewport, centered, `max-w-7xl`
- Desktop nav items: Home, About, Documentation ▾, Use Cases ▾
- **Dropdown component** (internal):
  - `dropdownType?: "docs" | "use-cases"` controls panel alignment via `cn()`
  - Use Cases: `dropdownType="use-cases"` → `left-1/3 -translate-x-1/2`
  - Default (Documentation): `left-1/2 -translate-x-1/2`
  - The `"docs"` branch (`-right-5`) is currently unused - kept on the type union for future panels
- Mobile nav: collapsible accordion for Documentation and Use Cases - both driven by `PROJECTS` and the navbar's local `USE_CASES` (separate list, not yet consolidated with `lib/use-cases.ts`)
- Logo uses `priority` (`loading="eager"`) for LCP

---

## Routing Conventions

- **SDK overview:** `/projects/[slug]` → `app/projects/[slug]/(docs)/page.tsx`
- **SDK docs pages:** `/projects/[slug]/quickstart` → `app/projects/[slug]/(docs)/quickstart/page.tsx`
- **SDK docs layout:** `app/projects/[slug]/(docs)/layout.tsx`. Live with `<DocsNav />` for `data-intelligence-sdk`, `vision-sdk`, `voice-sdk`. `tokenization-sdk` and `genai-sdk` are still transparent shells.
- The `(docs)` route group does **not** affect URLs - it only applies the layout
- `/projects` → hub page listing all SDKs
- Each docs page wraps content in `<DocsPage toc={[...]}>` from `components/docs/docs-page.tsx` - heading IDs must match the `TocItem.id`s for the scroll-spy to highlight them

---

## Reusable UI Components

### `<Breadcrumb>` (`components/ui/breadcrumb.tsx`)
```tsx
<Breadcrumb
  className="mb-8"
  items={[
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Data Intelligence SDK" }, // no href = current page (plain text)
  ]}
/>
```

### `<JourneyConnector>` (`components/ui/journey-connector.tsx`)
SVG S-curve between vertically stacked sections. The path's `pathLength` is bound to scroll progress via `useScroll` - the line draws as the viewer scrolls past it.
```tsx
<JourneyConnector from="center" to="left" height={120} showStartDot showEndDot />
```

### `<Timeline>` (`components/ui/timeline.tsx`)
Compound primitive: `<Timeline orientation="horizontal" activeIndex={N}>` with `<TimelineItem>` / `<TimelineDot>` / `<TimelineConnector>` / `<TimelineContent>` / `<TimelineHeader>` / `<TimelineTitle>` / `<TimelineDescription>` slots. Used by `approach-steps.tsx` (renders both horizontal and vertical for responsive).

### `<DocsPage>` (`components/docs/docs-page.tsx`)
Wraps the article body and the sticky right-rail `<TableOfContents>`. Pages style each element with inline Tailwind (no `prose` plugin). See `docs/typography.md` for the canonical class strings.

---

## Design Tokens (Tailwind)

Custom tokens defined in `app/globals.css`:
- `bg-trouve-teal` / `text-trouve-teal` - primary accent
- `bg-trouve-yellow` / `text-trouve-yellow` - reserved for numbers / stats / step indices
- `border-trouve-border` - subtle card borders (`rgba(255,255,255,0.06)`)
- `bg-trouve-surface` - card surface
- `bg-trouve-navy` - subtle dark surface for sections
- `text-muted-foreground` - secondary text

Typography tokens (`@theme inline`):
- `font-sans` → Roboto
- `font-condensed` → Roboto Condensed
- `font-mono` → JetBrains Mono

See `docs/typography.md` for the full role table (eyebrow, badge, lead, body, code, etc.).

---

## Animation Patterns

- **`LazyMotionProvider`** wraps the app in `app/layout.tsx`. Always import animated components as `m` from `motion/react-m` (not `motion`) so the lazy-loaded feature set is used.
- **`useInView`** to gate looping animations - see `about-lead-motif.tsx` for the sonar-pulse pattern that pauses offscreen.
- **`useScroll` + `useTransform`** for scroll-driven effects - see `journey-connector.tsx` (path draws as you scroll past).
- **`AnimatePresence`** for tab/state crossfades - see `aboutTabbedSection.tsx` (orphan now, but the pattern is the reference).

---

## Known TODOs / Pending Tasks

- [ ] **DocsNav parameterisation** - `components/docs/docs-nav.tsx` still hardcodes `/projects/data-intelligence-sdk/...` URLs and the title "Data Intelligence SDK". `vision-sdk` and `voice-sdk` use the same component but it points to the wrong slug. Parameterise by `slug` prop.
- [ ] **Tokenization + GenAI layouts** - both still ship transparent-shell `(docs)/layout.tsx`. Wire them to `<DocsNav />` once parameterised.
- [ ] **SDK content** - `data-intelligence-sdk` quickstart and api-reference are lorem-ipsum scaffolding. `vision-sdk` and `voice-sdk` only have overview content (live links); quickstart/api-reference are placeholder shells.
- [ ] **Placeholder package names** - `data-intelligence-sdk/(docs)/quickstart/page.tsx` code samples reference fictional `@trouve/graph-rag-sdk` package; replace when real SDK ships
- [ ] **Team photos** - 14 of 31 members in `teams.tsx` use the `<UserRound>` silhouette fallback. Drop a photo at `/public/team/<slug>.png` and update the entry's `src`.
- [ ] **Hood Khizer.png filename** - the only photo with a space + mixed case (URL-encoded as `/team/Hood%20Khizer.png`). Optional rename to `hood-khizer.png` for consistency.
- [ ] **Navbar Use Cases dropdown** - still uses local `USE_CASES` with internal `/use-cases/*` hrefs; doesn't honor the external URLs in `lib/use-cases.ts`. Consolidate when ready.
- [ ] **Homepage Designed For + Final CTA** - reserved sections per the plan; not yet built. User will supply components.
- [ ] **Hero "Work With Us" CTA** - currently `href="#contact"` (no anchor exists yet)
- [ ] **External URLs** - replace `href="#"` placeholders in coming-soon SDK pages

---

## Coding Style

- 2-space indentation, semicolons enabled
- Components: PascalCase (`HeroSection`, `Navbar`)
- Files: kebab-case (`herosection.tsx`, `journey-connector.tsx`)
- Utilities: camelCase; constants: `UPPER_SNAKE_CASE`
- Use `cn()` from `@/lib/utils` for conditional class composition - never raw template literals for multi-condition classes
- All internal links use `<Link prefetch={false}>` unless explicitly needed; external links use plain `<a target="_blank" rel="noopener noreferrer">`
- `// TODO:` comments mark placeholder content that needs to be filled
- **No em dashes / en dashes in copy or code** (`—` `–`) - use plain hyphens (`-`)
- **No emoji-presentation Unicode in UI text** (`↗ ✓ ⚠️` etc.) - use plain ASCII arrows or Lucide icons. The `↗` U+2197 character renders as a colored emoji on Windows.
- **Prefer native Tailwind grid utilities** - `grid-cols-N` + `col-span-N`, not arbitrary tracks like `grid-cols-[220px_minmax(0,1fr)]`
- For typography, follow `docs/typography.md` - it lists the canonical Tailwind class string for every text role

---

## What NOT to Do

- Do not add a new SDK page without adding the corresponding entry to `lib/projects.ts` - the navbar, footer, hub page, and homepage Core SDKs grid all derive from that array
- Do not use `min-h-screen` on section components (causes layout issues with natural-height sections)
- Do not add `loading="eager"` or `priority` to images that are not above the fold
- Do not modify `components/home-comps/product-preview-sec.tsx` - the Core SDKs + Use Cases sticky-stack section is locked
- `test.jsx` and `test.css` at root are scratch/reference content - do not treat them as production
- Do not create route groups that conflict with existing URL patterns
- Do not import `motion` directly from `motion/react` for animation components - use `m` from `motion/react-m` so the LazyMotion provider applies
