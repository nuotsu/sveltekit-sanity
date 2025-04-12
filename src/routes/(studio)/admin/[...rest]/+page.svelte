<script lang="ts">
	import { onMount } from 'svelte'
	import { renderStudio } from 'sanity'
	import config from '@@/sanity.config'

	let studio: HTMLDivElement

	onMount(() => {
		if (studio) {
			renderStudio(studio, config)
		}
	})
</script>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<div id="studio" bind:this={studio}></div>

<style>
	:global(body) {
		margin: 0;
	}

	#studio {
		height: 100vh;

		& > :global(div) {
			height: 100%;
		}
	}
</style>
