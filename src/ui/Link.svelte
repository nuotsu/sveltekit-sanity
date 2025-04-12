<script lang="ts">
	import type { Link, Page } from '@/sanity/types'
	import type { Snippet } from 'svelte'

	let {
		link,
		children,
	}: {
		link: Omit<Link, 'internal'> & { internal?: Page }
		children?: Snippet
	} = $props()
</script>

{#if link.external}
	<a href={link.external}>{children || link.label || link.external}</a>
{:else if link.internal}
	{@const slug = link.internal?.metadata?.slug?.current}

	<a href="/{slug === 'index' ? '' : slug}{link.params}">
		{children || link.label || link.internal?.title}
	</a>
{:else}
	<span>{children || link.label}</span>
{/if}
