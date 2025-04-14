<script lang="ts">
	import { slug } from '$lib/utils'
	import type { BlockComponentProps } from '@portabletext/svelte'
	import type { Snippet } from 'svelte'

	let {
		portableText,
		children,
	}: {
		portableText: BlockComponentProps
		children: Snippet
	} = $props()

	$inspect(portableText)

	const id = slug(portableText.value.children.reduce((acc, { text }) => acc + text, ''))
</script>

<h3 {id}>{@render children()}</h3>
