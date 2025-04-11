import { structureTool } from 'sanity/structure'
import { VscFiles } from 'react-icons/vsc'

export const structure = structureTool({
	structure: (S) =>
		S.list()
			.title('Structure')
			.items([S.documentTypeListItem('page').title('Pages').icon(VscFiles)]),
})
