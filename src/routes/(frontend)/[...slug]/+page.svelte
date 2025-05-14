<script lang="ts">
	import ModuleResolver from '@/ui/modules/ModuleResolver.svelte'
	import type { Page } from '@/sanity/types'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.page.metadata?.title}</title>
	<meta name="description" content={data.page.metadata?.description} />
	{#if data.page.metadata?.noIndex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

{#if data.page.modules}
	<ModuleResolver modules={data.page.modules as Page['modules']} />
{/if}
