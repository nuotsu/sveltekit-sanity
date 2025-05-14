import { defineType, defineField } from 'sanity'
import { VscEyeClosed, VscHome, VscQuestion } from 'react-icons/vsc'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [{ name: 'content', default: true }, { name: 'metadata' }],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'modules',
			type: 'array',
			of: [{ type: 'accordion-list' }, { type: 'hero.split' }, { type: 'prose' }],
			group: 'content',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'metadata',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
			media: 'metadata.image',
			noindex: 'metadata.noIndex',
		},
		prepare: ({ title, slug, media, noindex }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
			media:
				media ||
				(slug === 'index' && VscHome) ||
				(slug === '404' && VscQuestion) ||
				(noindex && VscEyeClosed),
		}),
	},
})
