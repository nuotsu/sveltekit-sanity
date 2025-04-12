import { createClient } from '@sanity/client'
import { SANITY_PROJECT_ID, SANITY_DATASET } from '$env/static/private'
import { dev } from '$app/environment'

export const client = createClient({
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: '2025-04-11',
	useCdn: !dev,
	stega: {
		studioUrl: '/admin',
	},
})
