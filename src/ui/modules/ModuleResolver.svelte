<script lang="ts">
	import Prose from './prose/Prose.svelte'
	import type { Page } from '@/sanity/types'

	let { modules = [] }: { modules: Page['modules'] } = $props()
</script>

{#each modules as module}
	{#if module._type === 'prose'}
		<Prose {...module} />
	{:else}
		<div data-module={module._type}></div>
	{/if}
{/each}
