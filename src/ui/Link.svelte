<script lang="ts">
	import type { Snippet } from 'svelte'

	let {
		link,
		children,
	}: {
		link: Sanity.Link
		children?: Snippet
	} = $props()
</script>

{#if link.external}
	<a href={link.external}>{children || link.label || 'Untitled'}</a>
{:else if link.internal}
	{@const slug = link.internal?.metadata?.slug?.current}

	<a href="/{slug === 'index' ? '' : slug}{link.params}">
		{children || link.label || link.internal?.title}
	</a>
{:else}
	<span>{children || link.label}</span>
{/if}
