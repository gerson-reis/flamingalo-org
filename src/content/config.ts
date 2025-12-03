import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string(),
    authorImage: z.string(),
    image: z.string().optional(),
    excerpt: z.string(),
    categories: z.array(z.string()),
  }),
});

export const collections = {
  'blog': blogCollection,
};

