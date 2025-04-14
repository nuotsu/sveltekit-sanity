<script lang="ts">
	import Header from '@/ui/header/Header.svelte'
	import Footer from '@/ui/footer/Footer.svelte'
	import '@/styles/app.css'

	let { children } = $props()
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
