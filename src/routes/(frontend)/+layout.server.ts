import { defineQuery } from 'groq'
import { client } from '$lib/server/sanity/client'
import { NAVIGATION_QUERY } from '@@/src/sanity/queries'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async () => {
	const SITE_QUERY = defineQuery(`*[_type == 'site'][0]{
		...,
		headerMenu->{ ${NAVIGATION_QUERY} },
		footerMenu->{ ${NAVIGATION_QUERY} },
	}`)
	const site = await client.fetch(SITE_QUERY)

	return {
		site,
	}
}
