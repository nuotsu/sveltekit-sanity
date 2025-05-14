<script lang="ts">
	import { getImageDimensions, type SanityImageSource } from '@sanity/asset-utils'
	import { urlFor } from '$lib/sanity/image'
	import type { Img } from '@/sanity/types'
	import type { HTMLImgAttributes } from 'svelte/elements'

	let {
		_key,
		_type,
		image,
		alt = '',
		loading = 'lazy',
		...props
	}: Omit<Img, '_type'> & Partial<{ _key: string; _type: string }> & HTMLImgAttributes = $props()
</script>

{#if image}
	{@const { width, height } = getImageDimensions(image as SanityImageSource)}

	<img src={urlFor(image).auto('format').url()} {alt} {width} {height} {loading} {...props} />
{/if}
