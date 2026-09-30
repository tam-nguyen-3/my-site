# Tam Nguyen — personal site

A personal website and blog built with [Astro](https://astro.build). Editorial,
typography-forward, with a light/dark theme and a Markdown-based writing section.

- **Fonts:** Fraunces (display) + IBM Plex Sans (body), self-hosted via Fontsource
- **Content:** MDX essays and projects in `src/content/`, managed with Astro content collections
- **Data:** experience and site config live in typed files under `src/data/`
- **Deploy:** static build → Cloudflare Pages

## Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Install dependencies                         |
| `pnpm astro dev --background` | Start the background dev server |
| `pnpm astro dev stop` | Stop the background dev server |
| `pnpm build`   | Build the static site to `./dist/`           |
| `pnpm preview` | Preview the production build locally         |
| `pnpm astro check` | Type-check content + components          |

## Editing content

- **Bio, tagline, nav, social/footer links, education:** `src/data/site.ts`
- **Projects:** edit or add an `.mdx` file in `src/content/projects/`. The `order` field controls the Projects page; Home shows the first four in that order. Card text and dialog text come from the same entry.
- **Experience** (about page): `src/data/experience.ts`
- **Essays** (writing): add an `.mdx` file to `src/content/writing/` with frontmatter:

  ```mdx
  ---
  title: Post title
  description: One-line summary shown in listings and meta tags.
  pubDate: 2026-03-12
  tags: ['craft']
  draft: false
  ---

  Body in Markdown / MDX…
  ```

  Set `draft: true` to hide a post from the listing, RSS, and build.

  Project entries use `title`, `brief`, `order`, `tags`, and `links` in frontmatter. The body is shown in the project dialog. To add a real card image, place it under `src/assets/projects/` and add `image: ../../assets/projects/your-image.webp` and a descriptive `imageAlt:` to that project's frontmatter. Until then, the card displays a reserved image placeholder.

## Before deploying

1. Set the real domain in `astro.config.mjs` (`site:`) — it drives RSS and sitemap URLs.
2. Replace `public/resume.pdf` with your actual résumé (current file is a placeholder).
3. Update the social/footer URLs in `src/data/site.ts` (GitHub, LinkedIn, email).

## Deploy to Cloudflare Pages

Static output — no adapter needed. Cloudflare serves the built `dist/`.

- **Git integration:** connect the repo, set build command `pnpm build`, output directory `dist`.
- **Direct upload:** `pnpm build && pnpm dlx wrangler pages deploy dist`.

Generated routes include `/rss.xml` (feed) and `/sitemap-index.xml` (sitemap).
