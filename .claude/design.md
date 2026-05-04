# Trouve Labs — Design Token & Opacity Reference

**Purpose:** answer two questions every time:
1. Which **token** do I use? (`bg-card` vs `bg-secondary` vs `bg-primary`…)
2. At what **opacity**? (`/10` vs `/30` vs `/60`…)

The codebase has been drifting on the opacity question — sections use `/15`, `/20`, `/40`, `/70`, `/80`, `/90` interchangeably. This doc locks the scale down to **5 tiers**. Anything outside this list is wrong.

---

## 1. Use the semantic token, not the brand token

Every `trouve-*` color has a semantic alias in `app/globals.css`. **Always reach for the semantic.** The brand token is the implementation; the semantic is the role.

| Need | Semantic token | Aliases to |
|---|---|---|
| Page background | `bg-background` | `#0e1024` (dark) |
| Body text | `text-foreground` | `--color-trouve-offwhite` |
| Secondary text (paragraphs, captions) | `text-muted-foreground` | grey |
| Card surface (the lifted thing) | `bg-card` | `--color-trouve-card` |
| Section / recessed surface | `bg-secondary` or `bg-muted` | `--color-trouve-navy` |
| Brand accent (primary/teal) | `bg-primary` / `text-primary` | `--color-trouve-teal` |
| Brand accent (alt name, same colour) | `bg-accent` / `text-accent` | `--color-trouve-teal` |
| Hairline border | `border-border` | `rgba(255,255,255,0.06)` |
| Focus ring | `ring-ring` | `--color-trouve-teal` |
| Destructive | `bg-destructive` | red |

**No semantic alias exists for:** `trouve-yellow` (stats / step numbers only) and `trouve-grey` (rare). Use the brand token for those — and only those.

---

## 2. The Opacity Scale — 5 tiers, that's it

Pick from this list. **No `/15`, `/20`, `/40`, `/50`, `/70`, `/80`, `/90`.** If a value feels in between, round to the nearest tier and adjust the *colour* instead.

| Tier | Class | Where it goes |
|---|---|---|
| **WHISPER** | `/10` | Icon chip backgrounds, ambient glow blobs, "tinted" surface hints. The viewer should barely register the colour. |
| **SOFT** | `/30` | Hover states (border, surface). The element clearly reacts to the pointer but isn't loud. Also: secondary chip backgrounds, subdued tag fills. |
| **MEDIUM** | `/60` | Active borders, strong dividers, "in-use" emphasis. The element is clearly on. |
| **STRONG** | `/80` | Cards layered over a backdrop with blur (frosted feel). Use for `bg-card/80 backdrop-blur-sm` — never for borders. |
| **SOLID** | (no `/X`) | Brand colours at full strength: button fills, primary headings, focused active surfaces, eyebrow accents. |

If you find yourself wanting `/40`, ask: is this a hover (use `/30`) or an active (use `/60`)? It's almost always one of those.

---

## 3. Role × Opacity — the decision table

This is the canonical answer to "which class do I use here?"

### Surfaces (backgrounds)

| Role | Token + opacity |
|---|---|
| Page / section root | `bg-background` |
| Big card on a section | `bg-card` |
| Card with frosted blur over busy backdrop | `bg-card/80 backdrop-blur-sm` |
| Inner panel inside a card (recessed) | `bg-secondary/60` |
| Section that wants a slight navy tint | `bg-secondary` (full strength) |

### Borders

| Role | Token + opacity |
|---|---|
| Default hairline | `border-border` (no `/X`) |
| Subtle accent / hover | `hover:border-primary/30` |
| Active or selected | `border-primary/60` |
| Strong feature outline | `border-primary` (solid) |

### Text

| Role | Token + opacity |
|---|---|
| Body | `text-muted-foreground` |
| Headings, strong | `text-foreground` |
| Brand eyebrow / link | `text-primary` (solid) |
| Faded brand emphasis (e.g. encrypted glyph state) | `text-primary/60` |

### Text sizes

Default to native Tailwind tiers (`text-xs` 12px, `text-sm` 14px, `text-base` 16px, `text-lg`+). Avoid arbitrary `text-[Npx]` values — round to the nearest preset.

| Role | Class |
|---|---|
| Code blocks (`<pre>`) and inline `<code>` chips in docs | `text-sm` |
| Tiny "SOON" / "NEW" pill badges (uppercase, tracked) | `text-[9px]` *(only sanctioned arbitrary size — to be tokenised later)* |

> **Note on `text-[9px]`:** The "Coming Soon" / "Soon" pill badges in the navbar dropdown, homepage SDK cards, and `/projects` hub use `text-[9px]` because `text-xs` (12px) is too large for the tight pill geometry. This is the only place an arbitrary `text-[Npx]` is allowed in production code. Will be replaced with a `text-badge` (or similar) preset/utility once we add it to `globals.css`.

### Icon chips (the colored square holding a Lucide icon)

| Role | Token + opacity |
|---|---|
| Chip background | `bg-primary/10` |
| Chip icon colour | `text-primary` (solid) |

### Hover / interactive states

| Role | Token + opacity |
|---|---|
| Card hover (border lift) | `hover:border-primary/30` |
| Surface hover (subtle bg lift) | `hover:bg-card/30` |
| Tab / button active fill | `bg-card` (solid — flat surface, no opacity) |

### Decorative glows & blurs

| Role | Token + opacity |
|---|---|
| Big radial glow blob behind a card | `bg-primary/10 blur-3xl` |
| Yellow accent glow (rare, for stats / academy) | `bg-trouve-yellow/10 blur-3xl` (brand token because no semantic alias) |

---

## 4. Examples from the codebase (all conformant)

```tsx
// Card with hover affordance — why-trouve.tsx
<li className="group rounded-2xl border border-border bg-card p-6 backdrop-blur-sm transition-all hover:border-primary/30">
  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
    <Icon className="h-5 w-5 text-primary" />
  </div>
  <h3 className="text-base font-semibold text-foreground">Title</h3>
  <p className="text-sm text-muted-foreground">Description.</p>
</li>

// Inner content panel inside a big card — bentoProtusion.tsx
<div className="bg-secondary/60 rounded-3xl p-8">…</div>

// Active button vs inactive — bentoProtusion.tsx tab
<button className={isActive ? "bg-card" : "bg-transparent hover:bg-card/30"}>…</button>

// Icon chip — about-mission-vision.tsx
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
  <Target className="h-5 w-5 text-primary" />
</div>

// Glow blob — about-lead.tsx
<div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
```

---

## 5. What NOT to do

<<<<<<< HEAD
- ❌ `/15`, `/20`, `/40`, `/50`, `/70`, `/90` — pick `/10`, `/30`, `/60`, `/80`, or solid. **No exceptions.**
- ❌ `bg-trouve-surface` when `bg-card` says the same thing.
=======
- ❌ `/15`, `/20`, `/40` (except the documented `bg-secondary/40` inner panel), `/50`, `/70`, `/90` — pick `/10`, `/30`, `/60`, `/80`, or solid.
- ❌ `bg-trouve-card` when `bg-card` says the same thing.
>>>>>>> ui/update-color-tokens
- ❌ `text-trouve-teal` when `text-primary` says the same thing.
- ❌ `border-trouve-border` when `border-border` says the same thing.
- ❌ Mixing `/10` and `/15` in the same component (or codebase). One scale.
- ❌ Inventing a new role like "subtle-accent-extra-soft" — if you need a new role, update **this file first**, then implement.

---

## 6. Quick decision flow

1. **What does this element represent?** → Look up the role in §3.
2. **Is it a hover, active, or default state?** → `/30`, `/60`, or solid.
3. **Did you use a `trouve-*` token?** → Replace with the semantic if §1 lists one.
4. **Did you reach for `/40` or `/70` or `/90`?** → Round to the nearest tier in §2. No exceptions.

If you can't find your case in this doc, **add a row to §3 in this file** before you ship the change. Document, then build.