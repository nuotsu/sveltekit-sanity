import { defineQuery } from 'groq'
import { client } from '$lib/server/sanity/client'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
	const PAGE_QUERY = defineQuery(`*[_type == 'page' && metadata.slug.current == $slug][0]{
		...,
		modules[]{
			...,
			_type == 'prose' => {
				'headings': select(tableOfContents => content[style in ['h2', 'h3', 'h4', 'h5', 'h6']]{
					style,
					'text': pt::text(@)
				}),
				content[]{
					...,
					_type == 'image' => { asset-> }
				}
			}
		}
	}`)
	const page = await client.fetch(PAGE_QUERY, { slug: params.slug === '' ? 'index' : params.slug })

	if (!page) {
		const PAGE_404_QUERY = defineQuery(`*[_type == 'page' && metadata.slug.current == '404'][0]`)
		const page_404 = await client.fetch(PAGE_404_QUERY)

		error(404, {
			message: 'Page not found',
			page: page_404,
		})
	}

	return {
		page,
	}
}
