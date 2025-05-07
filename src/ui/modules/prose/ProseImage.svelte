<script lang="ts">
	import { urlFor } from '$lib/sanity/image'
	import type { SanityImageAsset } from '@@/src/sanity/types'
	import type { BlockComponentProps } from '@portabletext/svelte'

	let {
		portableText,
	}: {
		portableText: BlockComponentProps
	} = $props()

	const { asset, alt, caption } = portableText.value as unknown as Partial<{
		asset: SanityImageAsset
		alt: string
		caption: string
	}>
</script>

{#if asset}
	<figure class="text-center">
		<img src={urlFor(asset).auto('format').url()} {alt} loading="lazy" />

		{#if caption}
			<figcaption>{caption}</figcaption>
		{/if}
	</figure>
{/if}
