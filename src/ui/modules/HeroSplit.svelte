<script lang="ts">
	import AssetResolver from '@@/src/ui/asset/AssetResolver.svelte'
	import { PortableText } from '@portabletext/svelte'
	import { cn } from '$lib/utils'
	import type { HeroSplit } from '@/sanity/types'

	let { content, assets = [], assetOnRight, assetBelowContent }: HeroSplit = $props()

	const asset = assets[0]
</script>

<section class="section grid items-center md:grid-cols-2">
	{#if asset}
		<AssetResolver
			class={cn({
				'md:order-last': assetOnRight,
				'max-md:order-last': assetBelowContent,
			})}
			{asset}
		/>
	{/if}

	<div class="prose">
		<PortableText value={content} />
	</div>
</section>
