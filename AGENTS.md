# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 16 App Router project.
- `app/`: route entries (`app/page.tsx`, `app/about/page.tsx`) and global styles in `app/globals.css`.
- `components/`: reusable UI and page sections, grouped by feature (`home-comps/`, `about-comps/`, `ui/`).
- `lib/`: shared data and utilities (`products.ts`, `use-cases.ts`, `utils.ts`).
- `public/`: static images and brand assets.
- Root config: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `components.json`.

Use the `@/*` import alias from `tsconfig.json` (example: `@/components/navbar`).

## Build, Test, and Development Commands
- `npm run dev`: start local development server with hot reload.
- `npm run build`: create production build.
- `npm run start`: run the built app.
- `npm run prod`: convenience command for `build` then `start`.
- `npm run lint`: run ESLint (Next core-web-vitals + TypeScript rules).

Run `npm run lint` before opening a PR.

## Coding Style & Naming Conventions
- Language: TypeScript/TSX with React 19 and Next.js conventions.
- Indentation: 2 spaces; keep semicolons enabled.
- Components: PascalCase for exported component names (`HeroSection`, `Navbar`).
- Files: existing feature files use kebab-case or lowercase (for example `about-bento.tsx`, `herosection.tsx`); follow the local folder pattern when adding files.
- Utilities/constants: descriptive camelCase exports and UPPER_SNAKE_CASE for fixed constant maps.
- Styling: Tailwind utility classes; prefer composition over long inline duplication.

## Testing Guidelines
There is currently no wired test runner (`npm test` is not defined). For now:
- Treat linting as the minimum quality gate.
- Manually verify affected routes in `npm run dev` (at least `/` and `/about`).
- If you add tests, place them near the feature or under a dedicated `tests/` folder and document the command in `package.json`.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages (examples: `fix eslint and update about`, `extract types to lib`).
- Keep commits focused and scoped to one logical change.
- Use present-tense, concise subjects (`add`, `fix`, `refactor`).
- In PRs, include: purpose, impacted routes/components, validation steps, and screenshots/GIFs for UI changes.
- Link related issues/tasks when available.

## Repository Notes
- `test.jsx` appears to be scratch/diff content, not production code.
- Keep large media additions in `public/` optimized to protect build and page performance.
