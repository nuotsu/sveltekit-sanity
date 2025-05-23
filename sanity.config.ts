import { defineConfig } from 'sanity'
import { structure } from '@/sanity/structure'
// import { presentation } from '@/sanity/presentation'
import { dashboardTool, projectInfoWidget, projectUsersWidget } from '@sanity/dashboard'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '@/sanity/schemaTypes'

const singletonTypes = ['site']

export default defineConfig({
	name: 'default',
	title: 'SvelteKit + Sanity',
	basePath: '/admin',
	projectId: 'rg72zbc3',
	dataset: 'production',

	plugins: [
		structure,
		// presentation,
		dashboardTool({
			name: 'deployment',
			title: 'Deployment',
			widgets: [vercelWidget()],
		}),
		dashboardTool({
			name: 'info',
			title: 'Info',
			widgets: [projectInfoWidget(), projectUsersWidget()],
		}),
		visionTool(),
	],

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(({ schemaType }) => !singletonTypes.includes(schemaType)),
	},
})
