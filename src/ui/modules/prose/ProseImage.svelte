<script lang="ts">
	import Img from '@/ui/asset/Img.svelte'
	import type { SanityImageAsset } from '@/sanity/types'
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

	$inspect(asset)
</script>

{#if asset}
	<!-- TODO: crop/hotspot (https://dev.to/webby/crop-it-like-its-hot-cropping-images-in-sanity-v3-2i1e) -->

	<figure class="text-center">
		<Img image={asset as any} {alt} loading="lazy" />

		{#if caption}
			<figcaption>{caption}</figcaption>
		{/if}
	</figure>
{/if}
