import { dev } from '$app/environment'
import type { ModuleOptions } from '@/sanity/types'

export function moduleProps({
	_key,
	_type,
	moduleOptions,
}: Partial<{
	_key: string
	_type: string
	moduleOptions: ModuleOptions
}>) {
	return {
		id: moduleOptions?.uid || `module-${_key}`,
		'data-module': _type,
		hidden: !dev && moduleOptions?.hidden,
	}
}
