import { defineConfig } from 'sanity'
import { structure } from './structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
	name: 'default',
	title: 'SvelteKit + Sanity',
	basePath: '/admin',
	projectId: 'rg72zbc3',
	dataset: 'production',

	plugins: [structure, visionTool()],

	schema: {
		types: schemaTypes,
	},
})
