# Repository Guidelines

## Project Structure & Module Organization
Runtime code lives in `src`. `src/app` holds the App Router layout, route entries, and shared styles (`globals.css`). Reusable UI primitives are in `src/components/ui`; cross-cutting helpers stay in `src/lib/utils.ts` to keep components focused. Static assets sit in `public/` and are consumed via `/asset.svg`. Root configs (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`) drive routing, typing, linting, and Tailwind—edit them deliberately and summarize the impact in your PR.

## Build, Test, and Development Commands
Install dependencies with `npm install`. `npm run dev` starts the local server at `http://localhost:3000`. `npm run build` compiles the production bundle and enforces type checks. `npm run start` serves that bundle, so run it after `npm run build`. `npm run lint` applies the `next/core-web-vitals` ruleset; treat a clean lint run as required before committing.

## Coding Style & Naming Conventions
Use TypeScript throughout (`.ts`/`.tsx`). Name React files and exports in PascalCase (`Button.tsx`), keep utilities camelCased (`utils.ts`), and prefer default exports for single components. Compose styling with Tailwind utilities authored in `globals.css`, augment variants with `clsx` or `class-variance-authority`, and rely on the existing CSS tokens. Add `"use client"` only when interaction demands it.

## Testing Guidelines
Automated suites are not yet configured; add new tests alongside the feature (e.g., `src/components/ui/button.test.tsx`) when introducing critical flows. React Testing Library is preferred for component behavior, and Playwright fits end-to-end checks. Meanwhile, exercise new work manually in both light and dark themes and keep `npm run lint` green. Document any new test scripts in `package.json` when you add them.

## Commit & Pull Request Guidelines
Recent commits use short imperatives (`Update README.md`); continue writing concise, action-focused subjects under 72 characters and add optional context in the body. Before raising a PR, confirm `npm run lint` and relevant smoke tests pass, then describe the change, link issues, and share screenshots or recordings for UI tweaks. Flag configuration or dependency shifts so reviewers can gauge deployment risk.

## Environment & Tooling
Use Node 18.18+ with npm. Reinstall dependencies after switching Node versions to avoid native module drift. Do not commit artifacts like `out/`; regenerate them with `npm run build` in CI or previews. Tailwind 4 runs through PostCSS, so adjust themes in `src/app/globals.css` instead of editing compiled CSS.
