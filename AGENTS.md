## Essential commands

Use `pnpm` (Node.js 22.12.0 or newer):

| Command | Purpose |
| --- | --- |
| `pnpm install` | Install dependencies. |
| `pnpm astro dev --background` | Start the dev server in background mode. |
| `pnpm astro dev status` | Check the background server. |
| `pnpm astro dev logs` | Read the background server logs. |
| `pnpm astro dev stop` | Stop the background server. |
| `pnpm astro check` | Check Astro, TypeScript, and content types. |
| `pnpm build` | Build the static site into `dist/`. |
| `pnpm preview` | Preview the production build locally. |

Run `pnpm astro check` and `pnpm build` after code changes.

## New features and styling

- Match the existing page's editorial, typography-focused design. Inspect nearby pages and components before adding a new pattern; reuse existing layouts and components where they fit.
- Use the colors, fonts, type scale, widths, and spacing tokens in `src/styles/global.css` rather than hardcoding new values. Keep new UI consistent in both light and dark themes.
- Follow the site's compact spacing and restrained pink accent. Reuse shared styles such as `.container`, `.section-title`, `.meta`, `.pill`, `.link`, and `.action` when appropriate.
- Check the feature at narrow and wide viewport sizes, including hover and keyboard focus states.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
