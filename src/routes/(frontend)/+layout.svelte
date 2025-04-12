<script lang="ts">
	import Header from '@/ui/header/Header.svelte'
	import '@/styles/app.css'

	let { children } = $props()
</script>

<Header />

{@render children()}
