<script lang="ts">
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { dev } from '$app/environment'
	import Header from '@/ui/header/Header.svelte'
	import Footer from '@/ui/footer/Footer.svelte'
	import '@/styles/app.css'

	let { children } = $props()

	injectAnalytics({ mode: dev ? 'development' : 'production' })
</script>

<Header />
<main>
	{@render children()}
</main>
<Footer />
