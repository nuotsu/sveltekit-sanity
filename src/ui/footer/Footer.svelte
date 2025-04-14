<script lang="ts">
	import { page } from '$app/state'

	let site = $derived(page.data.site)
</script>

<footer class="border-t">
	<a href="/">{site?.title}</a>

	<p>&copy; {new Date().getFullYear()} All rights reserved.</p>
</footer>
