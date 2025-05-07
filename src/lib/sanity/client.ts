import { createClient } from '@sanity/client'
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public'

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2025-05-05',
	useCdn: true,
	perspective: 'published',
	stega: {
		studioUrl: '/admin',
	},
})
