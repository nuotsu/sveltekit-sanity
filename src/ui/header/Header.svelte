<script lang="ts">
	import { page } from '$app/state'
	import Link from '@/ui/Link.svelte'

	let site = $derived(page.data.site)

	let header: HTMLHeadElement | undefined = $state()

	$effect(() => {
		if (!header) return

		function setHeaderHeight() {
			console.log(header?.offsetHeight)
			document.documentElement.style.setProperty(
				'--header-height',
				`${header?.offsetHeight ?? 0}px`,
			)
		}

		setHeaderHeight()
		window.addEventListener('resize', setHeaderHeight)
		return () => window.removeEventListener('resize', setHeaderHeight)
	})
</script>

<header class="bg-bg sticky top-0 border-b" bind:this={header}>
	<a href="/">{site?.title}</a>

	<nav>
		{#each site?.headerMenu?.items ?? [] as item}
			{#if item._type === 'link'}
				<Link link={item as any} />
			{/if}
		{/each}
	</nav>
</header>
