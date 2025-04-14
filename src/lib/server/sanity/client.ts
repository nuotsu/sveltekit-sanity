import { createClient } from '@sanity/client'
import { SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_READ_TOKEN } from '$env/static/private'
import { dev } from '$app/environment'

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2025-04-14',
	stega: {
		studioUrl: '/admin',
	},
	...(dev
		? {
				useCdn: false,
				token: SANITY_API_READ_TOKEN,
				perspective: 'drafts',
			}
		: {
				useCdn: true,
				perspective: 'published',
			}),
})
