import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    price: z.number(),
    comparePrice: z.number().optional(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    sku: z.string(),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    designer: z.string().optional(),
    canvasSize: z.string().optional(),
    meshCount: z.string().optional(),
  }),
});

export const collections = { products };
