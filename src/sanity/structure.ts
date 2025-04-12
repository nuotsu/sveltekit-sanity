import { structureTool, type ListItemBuilder, type StructureBuilder } from 'sanity/structure'
import { VscFiles, VscServerProcess } from 'react-icons/vsc'

export const structure = structureTool({
	structure: (S) =>
		S.list()
			.title('Structure')
			.items([
				singleton(S, 'site').title('Site').icon(VscServerProcess),
				S.divider(),

				S.documentTypeListItem('page').title('Pages').icon(VscFiles),
				S.divider(),

				S.documentTypeListItem('navigation').title('Navigation'),
			]),
})

const singleton = (S: StructureBuilder, id: string): ListItemBuilder =>
	S.listItem().id(id).child(S.editor().id(id).schemaType(id).documentId(id))
