import { defineField, defineType } from 'sanity'
import { getBlockText } from 'sanitypress-utils'
import { TfiLayoutMediaLeft } from 'react-icons/tfi'

export default defineType({
	name: 'hero.split',
	title: 'Hero (split)',
	type: 'object',
	icon: TfiLayoutMediaLeft,
	groups: [{ name: 'content', default: true }, { name: 'asset' }],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'assets',
			type: 'array',
			of: [{ type: 'img' }],
			validation: (Rule) => Rule.max(1),
			group: 'asset',
		}),
		defineField({
			name: 'assetOnRight',
			type: 'boolean',
			description: 'Display the asset to the right of the content on desktop',
			initialValue: false,
			group: 'asset',
		}),
		defineField({
			name: 'assetBelowContent',
			type: 'boolean',
			description: 'Display the asset below the content on mobile',
			initialValue: false,
			group: 'asset',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'assets.0.image',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (split)',
			media,
		}),
	},
})
