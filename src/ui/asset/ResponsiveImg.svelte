<script lang="ts">
	import Img from './Img.svelte'
	import { getImageDimensions, type SanityImageSource } from '@sanity/asset-utils'
	import { urlFor } from '$lib/sanity/image'
	import type { Img as ImgType } from '@/sanity/types'
	import type { HTMLAttributes } from 'svelte/elements'

	let { img, ...props }: { img: ImgType } & HTMLAttributes<HTMLPictureElement> = $props()
</script>

<picture {...props}>
	{#each img.responsive ?? [] as { image, media }}
		{#if image}
			{@const { width, height } = getImageDimensions(image as SanityImageSource)}
			<source srcset={urlFor(image).auto('format').url()} {media} {width} {height} />
		{/if}
	{/each}

	<Img {...img} loading="lazy" />
</picture>
