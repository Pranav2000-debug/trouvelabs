# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js 16 App Router project with TypeScript.
- `app/`: route entrypoints, layouts, and global styles (`app/globals.css`).
- `components/`: reusable UI and page sections, grouped by domain (for example `components/home-comps/` and `components/ui/`).
- `lib/`: shared utilities (for example `lib/utils.ts`).
- `public/`: static assets and images.
- `agent-docs/`: internal notes and design references for contributors.

Use the `@/*` import alias defined in `tsconfig.json` for cross-folder imports.

## Build, Test, and Development Commands
- `npm run dev`: start local development server.
- `npm run build`: build production assets.
- `npm run start`: run the production server from the last build.
- `npm run lint`: run ESLint with Next.js Core Web Vitals + TypeScript rules.

Run `npm run lint` before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`) with `strict` mode enabled.
- Indentation: 2 spaces; keep imports grouped and sorted logically.
- Components: `PascalCase` file and export names for React components (example: `HeroSection`).
- Helpers/utilities: `camelCase` function names and lower-case file names where appropriate.
- Styling: keep Tailwind utility usage consistent with existing component patterns.

## Testing Guidelines
There is currently no dedicated automated test suite configured (`jest`, `vitest`, and `playwright` are not present).
- Minimum requirement: lint clean (`npm run lint`) and manual verification in `npm run dev`.
- If adding tests, place them alongside source files as `*.test.ts` or `*.test.tsx` and document the command in `package.json`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries (examples: `fix mobile card stacks`, `add grad behind stacks`).
- Keep commit subjects concise, present tense, and scoped to one change.
- PRs should include: purpose, key UI/behavior changes, affected paths, and screenshots/GIFs for visual updates.
- Link related issues/tasks when applicable and note any follow-up work.

## Security & Configuration Tips
- Do not commit secrets; use environment variables via local `.env*` files.
- Treat `.next/` as build output only; do not edit generated artifacts.
