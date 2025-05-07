import { defineField, defineType } from 'sanity'
import { VscSymbolKeyword } from 'react-icons/vsc'
import { getBlockText } from 'sanitypress-utils'

export default defineType({
	name: 'prose',
	title: 'Prose',
	icon: VscSymbolKeyword,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
	],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{ type: 'block' },
				defineField({
					type: 'image',
					name: 'image',
					fields: [
						defineField({
							name: 'alt',
							type: 'string',
						}),
						defineField({
							name: 'caption',
							type: 'string',
						}),
					],
				}),
			],
			group: 'content',
		}),
		defineField({
			name: 'tableOfContents',
			type: 'boolean',
			initialValue: false,
			group: 'options',
		}),
		defineField({
			name: 'tocPosition',
			type: 'string',
			options: {
				list: ['left', 'right'],
				layout: 'radio',
			},
			hidden: ({ parent }) => !parent.tableOfContents,
			initialValue: 'left',
			group: 'options',
		}),
		defineField({
			name: 'moduleOptions',
			type: 'module-options',
			group: 'options',
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: getBlockText(content),
			subtitle: 'Prose',
		}),
	},
})
