<script lang="ts">
	import { page } from '$app/state'
	import Link from '@/ui/Link.svelte'

	let site = $derived(page.data.site)
</script>

<footer class="border-t">
	<a href="/">{site?.title}</a>

	<nav>
		{#each site?.footerMenu?.items ?? [] as item}
			{#if item._type === 'link'}
				<Link link={item as unknown as Sanity.Link} />
			{/if}
		{/each}
	</nav>

	<p>&copy; {new Date().getFullYear()} All rights reserved.</p>
</footer>
