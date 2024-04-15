import { defineCollection, z } from 'astro:content'

const projectsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		client: z.string(),
		duration: z.string(),
		date: z.date(),
		image: z.object({
			url: z.string(),
		}),
		previewUrl: z.string(),
		tags: z.array(z.string()),
	}),
})

export const collections = {
	projects: projectsCollection,
}
