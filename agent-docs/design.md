# TROUVE LABS — DESIGN SYSTEM
> Agent reference for all UI/visual decisions on the Trouve Labs website (v1).

---

## 1. CORE VISUAL IDENTITY

**Theme:** Dark, sleek AI infrastructure platform.

| ✅ IS | ❌ IS NOT |
|---|---|
| Clean & minimal | Loud or flashy |
| Technical & structured | Cartoonish or playful |
| Calm & engineered | Presentation-slide style |
| Developer-first | Brand showcase / marketing deck |

> Think: a well-documented SDK portal — not a startup landing page.

---

## 2. COLOR SYSTEM

### Base
| Role | Value |
|---|---|
| Primary background | Deep navy `#1C2233` (approx) |
| Secondary surface | Slightly lighter dark (cards, sections) |
| Primary text | White |
| Secondary text | Light grey |

### Accent Colors
Extracted from brand palette (Image 2):

| Color | Hex (approx) | Allowed Uses |
|---|---|---|
| **Teal** | `#4EC9D4` | Links, hover states, secondary interactive elements |
| **Yellow** | `#F5E642` | Primary buttons, active nav state, thin underlines, small highlights |
| **Red** | `#EF4444` | Error states **only** |
| **Off-white** | `#F2F2F2` | Alternate light surface (rare) |

> ⚠️ **Critical Rule:** Yellow is **never** used as a large background block or section fill. It is a UI accent — nothing more.

> ⚠️ Red is **exclusively** for error states. Not decorative.

---

## 3. TYPOGRAPHY

**Font family: Poppins only. No exceptions.**

| Level | Style | Size | Case | Punctuation |
|---|---|---|---|---|
| Main Title | Poppins Bold | 128pt | ALL CAPS | Ends with `.` |
| Large Main Title | Poppins Bold | 90pt | ALL CAPS | Ends with `.` |
| Secondary Title | Poppins Medium | 48pt | Sentence case (first word caps) | Ends with `.` |
| Body / Paragraph | Poppins Regular | 32pt | Normal | Standard |

**Rules:**
- Bold headings always end with a period `.`
- No decorative or display fonts
- No font mixing
- Strong vertical spacing between levels
- Body text capped at a comfortable readable max-width

---

## 4. LAYOUT RULES

- Centered max-width container
- Generous vertical section spacing
- Clean 2 or 3-column grids
- Strong alignment throughout — no asymmetrical chaos

**Cards:**
- Dark surface
- Subtle border
- Rounded corners
- Soft hover lift (scale) allowed
- No background patterns inside cards

**Forms:**
- Minimal and clean
- Clear focus states: yellow or teal outline

---

## 5. BUTTONS

| Type | Style |
|---|---|
| Primary | Yellow background, dark text |
| Secondary | Outline or subtle dark fill |
| Hover | Slight brightness shift — no glow, no explosion |

---

## 6. BACKGROUND & PATTERN RULES

Topography SVGs, grid overlays, and texture patterns are sourced from `/public/` only.

**Allowed in:**
- Hero sections
- Large divider sections
- Occasional full-width highlight blocks

**Rules:**
- Always low opacity — blend with dark base
- Must never reduce text readability
- Never inside cards or small components
- Never on docs pages

> Patterns are background atmosphere. Content always wins.

---

## 7. BRAND ASSET USAGE

All graphics must come from `/public/`. This includes:
- Topography SVGs
- Grid overlays
- Logo files
- Background textures
- Pattern elements

Do not invent new graphic styles or create new pattern variants unless asked.

---

## 8. MOTION (Framer Motion Only)

**Allowed:**
- Fade-in on scroll
- Subtle upward reveal
- Light card hover scale
- Small interaction feedback

**Forbidden:**
- Bounce effects
- Large animated transitions
- Looping animations
- Dramatic entrance/exit motion

> Motion should feel **smooth and engineered** — like the SDK it represents.

---

## 9. SPLINE

Spline is allowed **only in the homepage hero**, and must be:
- Dark-toned
- Minimal and non-distracting
- Positioned behind all text content

No Spline on docs pages. No Spline on product pages.

---

## 10. DOCS PAGES

Docs are a separate visual context. They prioritize readability over brand expression.

| Element | Rule |
|---|---|
| Overall tone | Monochrome, calm, functional |
| Layout | Sidebar nav + clean content area |
| Background patterns | ❌ Never |
| Active nav item | Yellow accent |
| Links | Teal |
| Code blocks | Neutral dark surface, clear padding, copy button |
| Color usage | Minimal — structure through spacing, not color |

---

## 11. VISUAL HIERARCHY (Priority Order)

1. Typography
2. Layout spacing
3. Accent highlights
4. Background patterns
5. Motion

> If patterns or motion are competing with text — they lose. Always.

---

## 12. AI GUARDRAILS

When generating UI, the agent must **never**:
- Use large yellow background sections
- Add gradients liberally or decoratively
- Over-layer background patterns
- Add decorative shapes without purpose
- Invent new color variants outside the defined palette
- Break the typography hierarchy
- Add heavy or looping animations

---

## 13. IDENTITY SUMMARY

```
Trouve Website =
  Dark
  Sleek
  Minimal
  SDK-first
  Structured
  Accent-driven
  Docs-ready

Refined. Controlled. Intelligent.
```