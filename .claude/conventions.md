# Trouve Labs - Conventions & Rules

Full rule set. `CLAUDE.md` carries a short "non-negotiables" summary and points here. Read this
before writing or reviewing code. Token/opacity details live in `.claude/design.md`; type roles
in `.claude/typography.md`; the MDX docs system in `.claude/mdx.md`.

---

## Coding Style

- 2-space indentation, semicolons enabled.
- Components: PascalCase (`HeroSection`, `Navbar`). Files: kebab-case (`herosection.tsx`,
  `journey-connector.tsx`). Utilities: camelCase; constants: `UPPER_SNAKE_CASE`.
- Use `cn()` from `@/lib/constants/utils` for conditional class composition - never raw template
  literals for multi-condition classes.
- Internal links: `<Link prefetch={false}>` unless prefetch is explicitly needed. External links:
  `<a target="_blank" rel="noopener noreferrer">`.
- `// TODO:` comments mark placeholder content that needs filling.
- **No em/en dashes** (`-` `–`) in copy or code - use plain hyphens (`-`).
- **No emoji-presentation Unicode** in UI text (`↗ ✓ ⚠️` etc.) - use plain ASCII arrows or Lucide
  icons. `↗` (U+2197) renders as a colored emoji on Windows.
- **Prefer native Tailwind grid utilities** - `grid-cols-N` + `col-span-N`, not arbitrary tracks
  like `grid-cols-[220px_minmax(0,1fr)]`.
- For typography, follow `.claude/typography.md` (canonical Tailwind class string per text role)
  and the responsive sizing rule (mobile-first; never scale text up as the screen shrinks).
- **Token rule (hard requirement):** always use semantic tokens from `globals.css`, never raw
  `trouve-*` Tailwind tokens. See the full mapping and 5-tier opacity scale in `.claude/design.md`.
  Only allowed exceptions: `trouve-yellow` (stats/step-number highlights) and `trouve-grey` (rare).
  Every other `trouve-*` use is a bug.

---

## What NOT to Do

- Do not add a new SDK page without adding the corresponding entry to `lib/constants/projects.ts` -
  the navbar, footer, hub page, and homepage Core SDKs grid all derive from that array.
- Do not use `min-h-screen` on section components (breaks natural-height section layout).
- Do not add `loading="eager"` / `priority` to images that are not above the fold.
- Do not modify `components/home/product-preview-sec.tsx` - the Core SDKs + Sandboxes sticky-stack
  section is LOCKED.
- `test.jsx` / `test.css` at root are scratch/reference - do not treat them as production.
- Do not create route groups that conflict with existing URL patterns.
- Do not import `motion` directly from `motion/react` for animation components - use `m` from
  `motion/react-m` so the LazyMotion provider applies.
- **Never write `bg-trouve-teal`, `text-trouve-teal`, `border-trouve-border`, `bg-trouve-card`,
  `bg-trouve-shell`, `bg-trouve-navy`, `text-trouve-offwhite`** - all have semantic aliases
  (`bg-primary`, `text-primary`, `border-border`, `bg-card`, `bg-background`, `bg-secondary`/
  `bg-muted`, `text-foreground`). Use the semantic. Violations are caught in review.

---

## Design tokens (quick note)

Brand colors are defined as CSS variables in `app/globals.css` and exposed through semantic
aliases. Font tokens: `font-sans` -> Roboto, `font-condensed` -> Roboto Condensed, `font-mono` ->
JetBrains Mono. Editing a `--color-trouve-*` variable re-themes the whole site **only** because
components reference the semantic layer - that's why direct `trouve-*` usage is banned. Full token
table and opacity scale: `.claude/design.md`.
