<script lang="ts">
	let { data } = $props()
</script>

<svelte:head>
	<title>{data.page.metadata?.title}</title>
	<meta name="description" content={data.page.metadata?.description} />
</svelte:head>

<h1>{data.page.title}</h1>
