import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    brief: z.string(),
    order: z.number().int().positive(),
    tags: z.array(z.string()).min(1),
    image: image().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      href: z.url(),
    })).min(1),
  }).refine((data) => !data.image || Boolean(data.imageAlt?.trim()), {
    message: 'An imageAlt description is required when image is set.',
    path: ['imageAlt'],
  }),
});

export const collections = { writing, projects };
