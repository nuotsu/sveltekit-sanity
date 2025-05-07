// See https://svelte.dev/docs/kit/types#app.d.ts

import type { SanityDocument, SanityAssetDocument } from '@sanity/client'
import type { SITE_QUERYResult } from './sanity/types'
import type { Link as LinkType, Page } from '@/sanity/types'

// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			page?: Sanity.Page
		}
		// interface Locals {}
		interface PageData {
			site: SITE_QUERYResult
		}
		// interface PageState {}
		// interface Platform {}
	}

	namespace Sanity {
		interface Link extends Omit<LinkType, 'internal'> {
			internal?: Page
		}
	}
}

export {}
