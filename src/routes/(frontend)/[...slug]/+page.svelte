<script lang="ts">
	import ModuleResolver from '@/ui/modules/ModuleResolver.svelte'

	let { data } = $props()
</script>

<svelte:head>
	<title>{data.page.metadata?.title}</title>
	<meta name="description" content={data.page.metadata?.description} />
	{#if data.page.metadata?.noIndex}
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

<ModuleResolver modules={data.page.modules} />
