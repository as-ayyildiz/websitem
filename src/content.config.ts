import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tefekkur = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/tefekkur' }),
	schema: z.object({
		author: z.string().optional(),
		work: z.string().optional(),
		note: z.string().optional(),
		date: z.coerce.date().optional(),
		draft: z.boolean().default(false),
	}),
});

const siberGuvenlik = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/siber-guvenlik' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			date: z.coerce.date(),
			category: z.enum(['yazi', 'yolculuk']),
			draft: z.boolean().default(false),
			image: image().optional(),
			imageAlt: z.string().optional(),
		}),
});

export const collections = { tefekkur, siberGuvenlik };
