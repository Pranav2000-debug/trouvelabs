# Trouve Labs Website

Marketing + documentation site for the Trouve Labs AI SDK platform (intelligent mobility).

## Stack

- **Next.js 16** (App Router, Turbopack, React Compiler) + **React 19** + **TypeScript**
- **Tailwind CSS v4** + **shadcn/ui** (Radix-based components) for UI
- **Framer Motion** (`motion/react`, lazy-loaded) for animation
- **MDX** (`@next/mdx`) for docs content, **Shiki** for code highlighting

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Command | Does |
|---|---|
| `npm run dev` | dev server (hot reload) |
| `npm run build` | production build |
| `npm run start` | run built app |
| `npm run prod` | build + start |
| `npm run lint` | ESLint |

> Run `npm run lint` before committing. No test runner yet.
> Do **not** run `npm audit fix --force` - it downgrades `next` and breaks the build.

## Project layout

- `app/` - routes (homepage, `/about`, `/projects/<sdk>/(docs)`, sandboxes)
- `components/` - UI (shadcn), homepage, about, and docs primitives
- `lib/constants/` - data + helpers (PROJECTS, SANDBOXES, `cn()`, Shiki)
- `mdx-components.tsx` - Markdown -> styled component map for docs

Docs pages are thin `page.tsx` wrappers importing colocated `content.mdx`.

## Contributing

Conventions + architecture live in `CLAUDE.md` and `.claude/` (`conventions.md`,
`architecture.md`, `mdx.md`, `design.md`, `typography.md`). Read before adding pages/components.
