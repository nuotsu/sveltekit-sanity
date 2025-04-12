import { defineType, defineField } from 'sanity'

export default defineType({
	name: 'site',
	title: 'Site',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'string',
		}),
		defineField({
			name: 'headerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
		}),
		defineField({
			name: 'footerMenu',
			type: 'reference',
			to: [{ type: 'navigation' }],
		}),
	],
})
