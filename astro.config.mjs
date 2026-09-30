// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: replace with the real production domain before deploying.
  // Required for correct RSS feed and sitemap URLs.
  site: 'https://tam-nguyen.com',
  integrations: [mdx(), sitemap()],
});
