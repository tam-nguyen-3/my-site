# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal website / blog for Tam Nguyen, built with **Astro** (static output). Editorial,
typography-forward design with a light/dark theme. Deploys to **Cloudflare Pages** — no SSR
adapter; Cloudflare just serves the built `dist/`.

## Commands

| Command              | Action                                                        |
| :------------------- | :------------------------------------------------------------ |
| `pnpm dev`           | Dev server at `localhost:4321`                                |
| `pnpm build`         | Static build → `dist/` (also emits `/rss.xml`, `sitemap-*`)   |
| `pnpm preview`       | Serve the production build locally                            |
| `pnpm astro check`   | Type-check `.astro`/content/TS (run this as the lint/CI gate) |

- Prefer background mode for the dev server: `astro dev --background`, then manage it with
  `astro dev stop | status | logs`.
- **`astro check` requires TypeScript 6.x**, which is pinned in devDependencies. Do not bump
  `typescript` to 7.x — TS 7's native compiler drops the programmatic API `astro check` needs,
  and the check will fail to run. (The runtime build via `pnpm build` is unaffected.)

## Architecture

Content comes from two distinct sources — know which one you're editing:

1. **Typed data files in `src/data/`** — structured, hand-maintained lists rendered directly
   by pages. This is the primary "CMS":
   - `site.ts` — name, taglines, bio blurb, nav, hero social icons, footer links, education.
     Exports the `site` object plus `LinkItem`/`NavItem`/`Education` types.
   - `projects.ts` — home-page project list (`Project[]`).
   - `experience.ts` — about-page work/research list (`ExperienceItem[]`).

   Pages import these arrays and `.map()` over them; there is no CMS or fetch. Editing content
   = editing these arrays.

2. **MDX content collection in `src/content/writing/`** — the blog. Defined in
   `src/content.config.ts` via the `glob()` loader + a Zod schema (`title`, `description`,
   `pubDate`, `draft`, `tags`). Import `z` from `astro:schema` (not `astro:content`). Posts are
   read with `getCollection('writing', ({ data }) => !data.draft)` and sorted by `pubDate` desc
   in three places that must stay consistent: `pages/writing/index.astro`,
   `pages/writing/[...slug].astro` (which also calls `render()`), and `pages/rss.xml.ts`.
   Post URLs are `/writing/<entry.id>` where `id` is the filename slug.

**Layouts** (`src/layouts/`): `BaseLayout.astro` owns `<head>` (meta/OG, font imports, canonical,
RSS link) and renders `Header`/`Footer` around a `<main class="container">` slot. `PostLayout.astro`
wraps a single essay and provides the `.prose` container. Every page/post routes through one of these.

**Theming** is CSS-variable driven, not class-toggled. `src/styles/global.css` defines all design
tokens under `:root` (light) and `:root[data-theme='dark']` (dark) — colors, the fluid type scale,
and the spacing scale. Components reference `var(--...)` only; they never hardcode colors. Theme is
set by an **inline `is:inline` script in `BaseLayout`'s `<head>`** (reads `localStorage.theme` →
`prefers-color-scheme`) so it applies before first paint (no flash); `ThemeToggle.astro` flips
`document.documentElement.dataset.theme` and persists it.

## Design conventions (keep these intact)

- **Fonts:** Fraunces (serif, all headings/wordmark via `--font-serif`) + Inter (sans body,
  `--font-sans`), self-hosted through `@fontsource-variable/*`, imported once in `BaseLayout`.
- **Accent (`--accent`, a soft pink) is used sparingly** — active-nav underline, link hover, small
  arrows, blockquote rule. Never as a background fill. Inline links stay ink-colored with a pink
  underline (`--accent-quiet`), going full pink only on hover (see `.prose a` / `.link` in
  `global.css`). Preserve this restraint when adding UI.
- **Spacing is deliberately compact** (`--section-gap`, `--stack`); avoid reintroducing large
  empty vertical stretches.
- Uppercase tracked labels (dates, tags) use the `.meta` class.

## Before deploying

1. Set the real domain in `astro.config.mjs` (`site:`) — drives RSS/sitemap absolute URLs.
2. Replace `public/resume.pdf` (currently a generated placeholder).
3. Update social/footer URLs and email in `src/data/site.ts`.
