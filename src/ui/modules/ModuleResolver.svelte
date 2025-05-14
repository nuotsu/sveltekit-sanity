<script lang="ts">
	import AccordionList from './AccordionList.svelte'
	import HeroSplit from './HeroSplit.svelte'
	import Prose from './prose/Prose.svelte'
	import type { Page } from '@/sanity/types'

	let { modules = [] }: { modules: Page['modules'] } = $props()
</script>

{#each modules as module}
	{#if module._type === 'accordion-list'}
		<AccordionList {...module} />
	{:else if module._type === 'prose'}
		<Prose {...module} />
	{:else if module._type === 'hero.split'}
		<HeroSplit {...module} />
	{/if}
{/each}
