<script lang="ts">
	import RichtextModule from './RichtextModule.svelte'
	import type { Page } from '@/sanity/types'

	let { modules }: { modules: Page['modules'] } = $props()
</script>

{#each modules ?? [] as module}
	{#if module._type === 'richtext-module'}
		<RichtextModule {...module} />
	{:else}
		<div data-module={module._type}></div>
	{/if}
{/each}
