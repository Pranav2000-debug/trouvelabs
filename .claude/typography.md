# Trouve Labs — Typography System

Authoritative reference for every text role on the site. Pair with `app/globals.css` (font-family wiring) and `app/layout.tsx` (font loading via `next/font/google`).

> For colour and opacity rules see `.claude/design.md` — this doc covers sizes, weights, families, and leading. Where this doc shows colour tokens in code examples, they reflect the canonical semantic tokens; if `design.md` ever conflicts, `design.md` wins.

---

## Font Stacks

| Tailwind utility | CSS var | Resolved family | Use for |
|---|---|---|---|
| `font-sans` (default) | `--font-roboto` | **Roboto** | All body, headings, UI labels — the default everywhere. |
| `font-condensed` | `--font-roboto-condensed` | **Roboto Condensed** | Tabular UI, narrow sidebars, dense KPI tiles, eyebrow runs where horizontal space is tight. |
| `font-mono` | `--font-jetbrains-mono` | **JetBrains Mono** | Inline `code`, `pre` blocks, API signatures, terminal-style content. |

> **Loaded weights:** Roboto 300 / 400 / 500 / 700 / 900 (+ italics for each). Roboto Condensed 400 / 500 / 700. JetBrains Mono 400 / 500 / 700. If you reach for a weight outside this list, add it to `app/layout.tsx` first.

---

## Weight Ladder

| Tailwind | Numeric | Role |
|---|---|---|
| `font-light` | 300 | Soft body emphasis (rare) |
| `font-normal` | 400 | Default body, captions, list items |
| `font-medium` | 500 | Eyebrows, badges, navbar links, mid-emphasis labels |
| `font-semibold` | 600 | *(not loaded — falls back to 500/700)* |
| `font-bold` | 700 | Headings (H1–H4), card titles, CTA labels |
| `font-black` | 900 | Display headlines (hero only) |

---

## Type Scale (Roles)

Each role lists the **canonical Tailwind class string** to use. Copy verbatim. If a role pulls in a non-default font (mono / condensed), it's noted in the Font column.

### Display (hero)
> Largest text on the site. Reserved for hero H1 (`HeroSection`) and equivalent landing headers.

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-2xl sm:text-4xl lg:text-6xl font-bold uppercase leading-tight tracking-tight` |
| Notes | `AuroraText` adds the gradient animation. Brand pattern: `font-black tracking-tighter` for true display weight when not animated. |

```tsx
<h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold uppercase leading-tight tracking-tight">
  Finding Efficiencies at Every Curve
</h1>
```

### H1 — page title
> One per page. Used on docs pages, About, About sections, and inside `DocsPage`.

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4` |
| Marketing variant | `text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl` |

```tsx
<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-4">
  Data Intelligence SDK
</h1>
```

### H2 — section heading
| Property | Value |
|---|---|
| Font | Roboto |
| Docs class | `text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28` |
| Marketing class | `text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl` |
| Notes | `scroll-mt-28` keeps anchor jumps clear of the floating navbar. |

### H3 — subsection
| Property | Value |
|---|---|
| Font | Roboto |
| Docs class | `text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28` |
| Marketing class | `text-xl font-semibold leading-tight text-foreground sm:text-2xl` |

### H4 — minor heading / card title
| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-base font-semibold text-foreground` |

---

### Lead paragraph
> The first paragraph after a page H1. Larger and softer than body to introduce the topic.

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-lg text-muted-foreground leading-relaxed mb-10` |
| Marketing variant | `text-base text-muted-foreground sm:text-lg` |

### Body
> Default paragraph copy.

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-base text-muted-foreground leading-relaxed mb-4` |
| Marketing variant | `text-base leading-relaxed text-muted-foreground sm:text-lg` |

### Caption / fine print
> Image attribution, footer fine text, "Swipe to explore" hints.

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `text-xs text-muted-foreground` (or `text-muted-foreground/60` for extra-soft) |

---

### Eyebrow
> Small uppercase label that sits above an H1/H2 to categorize the section ("SDK Overview", "Why Trouve Labs", etc.). The most distinctive type motif on the site.

| Property | Value |
|---|---|
| Font | Roboto (medium 500) |
| Class | `text-xs font-medium uppercase tracking-wider text-primary` |
| Variants | Use `tracking-wider` (=0.05em) for short eyebrows. For dense runs, swap to `font-condensed` and bump to `tracking-[0.18em]` per the brand spec. |

```tsx
<p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
  SDK Overview
</p>
```

### Badge / pill
> Inline status tags ("Coming Soon", "New", "Beta") and chip-style metadata.

| Property | Value |
|---|---|
| Font | Roboto (semibold 700 — uses 700 since 600 isn't loaded) |
| Class | `rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/60` |
| Brand-accent variant | `inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-muted-foreground` |

> **Note on `text-[9px]`:** the only sanctioned arbitrary text size in the system. See `.claude/design.md §3 Text sizes` for the rationale and tokenisation TODO. The neutral `bg-white/10 ... text-white/60` palette is documented as-is pending a separate alignment pass on white-opacity drift.

### Tag chip (with icon)
> Small icon-prefixed labels inside cards (capability bullets, value chips, academy tracks).

| Property | Value |
|---|---|
| Font | Roboto |
| Class | `inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground` |

---

### Inline code
> Mono text inside a flowing paragraph.

| Property | Value |
|---|---|
| Font | JetBrains Mono |
| Class | `rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border` |

```tsx
<p>Set <code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">TROUVE_API_KEY</code> in your env.</p>
```

### Code block (`<pre>`)
> Multi-line code samples in docs.

| Property | Value |
|---|---|
| Font | JetBrains Mono |
| `<pre>` class | `rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6` |
| `<code>` inside | `text-foreground font-mono` |

```tsx
<pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
  <code className="text-foreground font-mono">{`npm install @trouve/sdk`}</code>
</pre>
```

### Comments inside code blocks
> Use the natural language of the code block — JavaScript, shell, etc. Don't visually styling-comment them differently in the JSX. If syntax highlighting is added later, comments will be themed by the highlighter.

---

### Lists
> Bulleted and numbered lists in body content.

| Property | Value |
|---|---|
| Font | Roboto |
| `<ul>` class | `list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed` |
| `<ol>` class | swap `list-disc` → `list-decimal` |
| `<li>` | inherits — no extra class needed |

For icon-led lists (no bullet), use a flex layout instead and prefix each item with a sized icon — see `AboutCoreValues` for the pattern.

---

### Links
> Inline anchors inside body copy.

| Property | Value |
|---|---|
| Font | inherits |
| Class | `text-primary underline-offset-4 hover:underline` |

### Strong / emphasis
| Property | Value |
|---|---|
| `<strong>` | `text-foreground font-semibold` (used for in-line emphasis where the surrounding text is `text-muted-foreground`) |
| `<em>` | inherits — italic weight should already render via the loaded italic Roboto faces |

---

### Navbar / footer / dropdown items
> Roboto medium, smaller sizes.

| Role | Class |
|---|---|
| Top-level nav link | `text-sm text-white/60 transition-colors hover:text-white` |
| Dropdown item title | `text-sm font-medium text-white` |
| Dropdown item description | `text-xs text-white/40` |
| Dropdown eyebrow (e.g. SDK group label in use cases) | `text-xs font-medium uppercase tracking-wider text-primary` |
| Mobile accordion section header | `text-xs font-semibold uppercase tracking-wider text-primary` |

> The `text-white/X` palette in nav links is documented as-is pending a separate alignment pass on white-opacity drift. Colour rules in `.claude/design.md` will eventually replace these with `text-muted-foreground` / `text-foreground`.

### Breadcrumbs
> Trail above page H1.

| Role | Class |
|---|---|
| Container | `mb-8` |
| Item link | `text-primary underline-offset-4 hover:underline` (same as inline links — implementation lives in `components/ui/breadcrumb.tsx`) |
| Current item (no href) | renders as plain `text-muted-foreground` |

### Stats / KPI numbers
| Property | Value |
|---|---|
| Font | Roboto (could swap to `font-condensed` per the brand spec) |
| Class | `text-5xl font-bold text-trouve-yellow sm:text-6xl` |
| Label | `text-sm font-medium uppercase tracking-wider text-muted-foreground` |

---

## Color Tokens (typography only)

| Token | Tailwind | Use |
|---|---|---|
| Foreground | `text-foreground` | Headings, strong text, primary readable content |
| Muted | `text-muted-foreground` | Body paragraphs, captions, secondary content |
| Brand accent | `text-primary` | Eyebrows, links, in-card accents, inline `code` |
| Yellow accent | `text-trouve-yellow` | Stats numbers, sidebar highlight (no semantic alias — brand token is canonical) |
| Soft white | `text-white/60` / `text-white/40` | Navbar items, dropdown descriptions (pending a future alignment pass) |
| On-dark contrast | `text-primary-foreground` | Text on top of `bg-primary` (CTAs) |

---

## Letter-spacing & line-height defaults

| Class | When |
|---|---|
| `tracking-tight` (-0.025em) | Headings (h1–h3) |
| `tracking-tighter` (-0.05em) | Display headings (closer to brand spec's `-0.04em`) |
| `tracking-wider` (0.05em) | Eyebrows (default), badges |
| `tracking-[0.18em]` | Brand spec eyebrow when using Roboto Condensed |
| `leading-relaxed` (1.625) | Body, list items, lead paragraph, marketing intros |
| `leading-tight` (1.25) | Headings |
| `leading-6` (1.5) | Code blocks |

---

## Quick Reference (copy these)

```tsx
{/* Eyebrow */}
<p className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">SDK Overview</p>

{/* H1 */}
<h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">Page title</h1>

{/* Lead */}
<p className="text-lg text-muted-foreground leading-relaxed">Intro paragraph just under the H1.</p>

{/* H2 (docs) */}
<h2 className="text-2xl font-semibold tracking-tight text-foreground mt-14 mb-4 scroll-mt-28">Section</h2>

{/* H3 */}
<h3 className="text-lg font-semibold text-foreground mt-8 mb-3 scroll-mt-28">Subsection</h3>

{/* Body */}
<p className="text-base text-muted-foreground leading-relaxed mb-4">Body copy.</p>

{/* Inline code */}
<code className="rounded bg-card px-1.5 py-0.5 text-sm text-primary font-mono border border-border">x</code>

{/* Pre block */}
<pre className="rounded-xl border border-border bg-card p-4 overflow-x-auto mb-6 text-sm leading-6">
  <code className="text-foreground font-mono">{`npm install @trouve/sdk`}</code>
</pre>

{/* List */}
<ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2 text-base leading-relaxed">
  <li>Item</li>
</ul>

{/* Link */}
<a className="text-primary underline-offset-4 hover:underline">link</a>
```

---

## Conventions

1. **Default to `text-muted-foreground` for body copy.** Reserve `text-foreground` for headings, `<strong>`, and explicitly emphasized text.
2. **Eyebrows always come before the heading they label.** Don't bury them after a paragraph.
3. **One H1 per page.** Use H2 for sections, H3 for subsections inside a section. Don't skip levels (no H1 → H3).
4. **`scroll-mt-28` on every heading with an `id`** so anchor jumps clear the floating navbar.
5. **`font-mono` is for actual code only.** Don't reach for it for "techy" decoration — use `font-condensed` or `tracking-wider` instead.
6. **Lists inside body copy use `list-disc`/`list-decimal`** — don't fake them with `•` characters.
7. **All headings live in document order** — visual size adjustments come from Tailwind classes, not from substituting an H3 for an H2 because "it looks right."
8. **No arbitrary `text-[Npx]` sizes** except `text-[9px]` for SOON pill badges (see `.claude/design.md §3 Text sizes`). Round to native Tailwind tiers (`text-xs`, `text-sm`, `text-base`, `text-lg`, …).

---

## When to add a new role

If you find yourself reaching for a sixth distinct paragraph treatment, either:
- Stop — odds are one of the existing roles (lead / body / caption) covers it; or
- Update this file first, then implement.

This doc is the source of truth. If a component drifts from it, the component is wrong.
