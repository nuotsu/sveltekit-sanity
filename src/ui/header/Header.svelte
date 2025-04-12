<script lang="ts">
	import { page } from '$app/state'
	import Link from '@/ui/Link.svelte'

	let site = $derived(page.data.site)
</script>

<header>
	<a href="/">{site?.title}</a>

	<nav>
		{#each site?.headerMenu?.items ?? [] as item}
			{#if item._type === 'link'}
				<Link link={item as any} />
			{/if}
		{/each}
	</nav>
</header>
