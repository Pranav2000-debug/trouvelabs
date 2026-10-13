# Trouve Labs - Architecture Reference

Descriptive reference for the codebase. Read the section you need; `CLAUDE.md` holds the
always-on rules and points here.

---

## Directory Structure

```
trouvelabs/
├── app/                        # App Router entry points
│   ├── layout.tsx              # Root layout - Navbar, Footer, LazyMotionProvider; wires the 3 fonts
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Global CSS + Tailwind tokens
│   ├── about/page.tsx          # /about - vertical journey of cards + JourneyConnectors
│   ├── projects/               # SDK docs hub (URL stays `/projects`; navbar label is "Documentation")
│   │   ├── page.tsx            # /projects - SDK picker/hub page
│   │   ├── <slug>/(docs)/      # Per-SDK docs: layout.tsx + page.tsx + content.mdx (see mdx.md)
│   │   │   ├── quickstart/
│   │   │   └── api-reference/
│   │   └── ...                 # vision-sdk, data-intelligence-sdk, voice-sdk (live);
│   │                           # tokenization-sdk, genai-sdk (coming soon, transparent shells)
│   ├── sandboxes/              # Internal pages exist; nav links here. Homepage cards open external platforms.
│   │   ├── data-intelligence/
│   │   └── voice-agent/
│   └── blog,architecture,benchmarks,enterprise,home,roadmap/  # placeholders
│
├── components/
│   ├── navbar.tsx              # Floating pill navbar (client). Items: Home, About, Documentation, Sandboxes
│   ├── footer.tsx              # Footer; Products column auto-renders from PROJECTS
│   ├── home/                   # Homepage sections (rendered top-to-bottom from app/page.tsx)
│   │   ├── herosection.tsx, directors-note.tsx, capability-showcase.tsx,
│   │   ├── product-preview-sec.tsx  # Core SDKs + Sandboxes sticky-stack (LOCKED - do not modify)
│   │   ├── research-focus.tsx, approach-steps.tsx, directors-note.tsx
│   ├── about/                  # /about page sections (about-lead, mission-vision, core-values,
│   │                           # differentiators, academy, statsSection, teams, ...)
│   ├── docs/                   # Docs-page primitives
│   │   ├── docs-nav.tsx              # Left rail (slug prop)
│   │   ├── docs-fab-nav.tsx          # Mobile radial FAB nav
│   │   ├── docs-page.tsx             # Inner shell - article + sticky right-rail TOC
│   │   ├── table-of-contents.tsx     # Scroll-spy TOC (IntersectionObserver)
│   │   ├── code-block-skeleton.tsx   # Suspense fallback for async CodeBlock
│   │   └── link-card.tsx             # LinkCard / LinkCardList (external link cards)
│   ├── code-block.tsx, code-block-client.tsx  # Shiki code block (server) + copy/collapse (client)
│   ├── icons/                  # Hand-rolled SVG icon components (Iconify-naming convention)
│   └── ui/                     # Reusable primitives (breadcrumb, journey-connector, timeline,
│                               # focus-cards, aurora-text, badge, motion-wrapper, ...)
│
├── hooks/                      # use-isomorphic-layout-effect, use-lazy-ref
├── lib/
│   ├── constants/              # projects.ts, sandboxes.ts, teams.ts, compose-refs.ts,
│   │                           # highlight-code.ts (Shiki), utils.ts (cn())
│   └── mail/                   # sendEmail.ts (nodemailer)
├── mdx-components.tsx          # Root MDX element map (see mdx.md)
├── public/                     # Static assets (images, logos, /team/<member>.png photos)
└── docs/                       # Internal planning docs (not served)
```

---

## Data Sources (Single Source of Truth)

### `lib/constants/projects.ts` - PROJECTS

```ts
{
  title: string;
  slug: string;
  description: string;
  icon: ComponentType<{ className?: string }>; // accepts both Lucide and custom icons
  comingSoon?: boolean;
}
```

| Title | Slug | Status |
|---|---|---|
| Vision SDK | `vision-sdk` | Live - overview links to live platform |
| Data Intelligence SDK | `data-intelligence-sdk` | Live - real market copy, full DocsNav |
| Voice SDK | `voice-sdk` | Live - overview links to 3 voiceai surfaces |
| Tokenization SDK | `tokenization-sdk` | Coming Soon (transparent-shell layout) |
| GenAI SDK | `genai-sdk` | Coming Soon (transparent-shell layout) |

`PROJECTS` drives: `/projects` hub grid, navbar "Documentation" dropdown/accordion, footer
"Projects" column, and the homepage `product-preview-sec.tsx` SDK grid. **Adding an SDK page
without a PROJECTS entry breaks all of these** (see CLAUDE.md hard rules).

### `lib/constants/sandboxes.ts` - SANDBOXES

```ts
{
  name: string;
  slug: string;
  builtWith: string;
  description: string;
  href: string;          // internal route or full external URL
  external?: boolean;    // true -> opens in new tab
}
```

Both entries (`Data Intelligence`, `Voice Agent`) point at external platforms
(`https://dataintelligence.trouvelabs.works`, `https://voiceai.trouve.works`). The internal
`/sandboxes/*` routes still exist and the navbar Sandboxes dropdown still routes to them, but
the **homepage** "Built with our SDKs" cards open the external URLs.

---

## Navbar (`components/navbar.tsx`)

- Floating pill fixed to top, centered, `max-w-7xl`. Desktop items: Home, About, Documentation, Sandboxes.
- Internal `Dropdown` component: `dropdownType?: "docs" | "sandboxes"` controls panel alignment.
  Sandboxes -> `left-1/3 -translate-x-1/2`; default (Documentation) -> `left-1/2 -translate-x-1/2`.
  The `"docs"` branch (`-right-5`) is unused - kept on the type union for future panels.
- Mobile nav: collapsible accordion for Documentation and Sandboxes, driven by `PROJECTS` and the
  navbar's local `SANDBOXES` (separate list, not yet consolidated with `lib/constants/sandboxes.ts`).
- Logo uses `priority` (`loading="eager"`) for LCP.

---

## Routing Conventions

- **SDK overview:** `/projects/[slug]` -> `app/projects/[slug]/(docs)/page.tsx`
- **SDK docs pages:** `/projects/[slug]/quickstart` -> `app/projects/[slug]/(docs)/quickstart/page.tsx`
- **SDK docs layout:** `app/projects/[slug]/(docs)/layout.tsx`. Live with `<DocsNav />` for
  `data-intelligence-sdk`, `vision-sdk`, `voice-sdk`. `tokenization-sdk` / `genai-sdk` are transparent shells.
- The `(docs)` route group does **not** affect URLs - it only applies the layout.
- `/projects` -> hub page listing all SDKs.
- Each docs page is a thin `page.tsx` wrapper (breadcrumb + `<DocsPage toc={[...]}>`) that imports
  its prose from a colocated `content.mdx`. See `.claude/mdx.md`.

---

## Reusable UI Components

### `<Breadcrumb>` (`components/ui/breadcrumb.tsx`)
```tsx
<Breadcrumb className="mb-8" items={[
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Data Intelligence SDK" }, // no href = current page (plain text)
]} />
```

### `<JourneyConnector>` (`components/ui/journey-connector.tsx`)
SVG S-curve between vertically stacked sections; `pathLength` bound to scroll via `useScroll` -
the line draws as the viewer scrolls past it.
```tsx
<JourneyConnector from="center" to="left" height={120} showStartDot showEndDot />
```

### `<Timeline>` (`components/ui/timeline.tsx`)
Compound primitive: `<Timeline orientation="horizontal" activeIndex={N}>` with `<TimelineItem>` /
`<TimelineDot>` / `<TimelineConnector>` / `<TimelineContent>` / `<TimelineHeader>` /
`<TimelineTitle>` / `<TimelineDescription>` slots. Used by `approach-steps.tsx`.

### `<DocsPage>` (`components/docs/docs-page.tsx`)
Wraps the article body and the sticky right-rail `<TableOfContents>`. Styling comes from the MDX
element map (`mdx-components.tsx`); no `prose` plugin. See `.claude/typography.md`.

---

## Animation Patterns

- **`LazyMotionProvider`** wraps the app in `app/layout.tsx`. Import animated components as `m`
  from `motion/react-m` (not `motion`) so the lazy-loaded feature set applies.
- **`useInView`** to gate looping animations - see `about/about-lead-motif.tsx` (sonar-pulse that
  pauses offscreen).
- **`useScroll` + `useTransform`** for scroll-driven effects - see `journey-connector.tsx`.
- **`AnimatePresence`** for tab/state crossfades.

---

## Known TODOs / Pending Tasks

- [ ] **DocsNav parameterisation** - `components/docs/docs-nav.tsx` hardcodes `data-intelligence-sdk`
  URLs and title. Parameterise by `slug` prop so `vision-sdk` / `voice-sdk` point correctly.
- [ ] **Tokenization + GenAI layouts** - both ship transparent-shell `(docs)/layout.tsx`. Wire to
  `<DocsNav />` once parameterised.
- [ ] **SDK content** - real quickstart/api-reference content for vision/voice/data-intelligence
  (most are `content.mdx` "coming soon" stubs).
- [ ] **Placeholder package names** - code samples reference fictional `@trouve/graph-rag-sdk`.
- [ ] **Team photos** - several members in `teams.tsx` use the `<UserRound>` fallback. Drop a photo
  at `/public/team/<slug>.png` and update the entry's `src`.
- [ ] **Hood Khizer.png filename** - has a space + mixed case (`/team/Hood%20Khizer.png`). Optional rename.
- [ ] **Navbar Sandboxes dropdown** - uses local `SANDBOXES` with internal hrefs; doesn't honor the
  external URLs in `lib/constants/sandboxes.ts`.
- [ ] **Homepage Designed For + Final CTA** - reserved sections, not yet built.
- [ ] **Hero "Work With Us" CTA** - `href="#contact"` (no anchor exists yet).
- [ ] **External URLs** - replace `href="#"` placeholders in coming-soon SDK pages.
