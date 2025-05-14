<script lang="ts">
	import ResponsiveImg from './ResponsiveImg.svelte'
	import type { Img as ImgType } from '@/sanity/types'
	import type { HTMLAttributes } from 'svelte/elements'

	let { asset, ...props }: { asset: ImgType } & HTMLAttributes<HTMLElement> = $props()
</script>

{#if asset._type === 'img'}
	<ResponsiveImg img={asset} {...props} />
{/if}
