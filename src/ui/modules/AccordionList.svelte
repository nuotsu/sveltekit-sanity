<script lang="ts">
	import { moduleProps } from '$lib/moduleProps'
	import { PortableText } from '@portabletext/svelte'
	import type { AccordionList } from '@@/src/sanity/types'

	let {
		intro,
		items = [],
		connect,
		generateSchema,
		...props
	}: AccordionList & { _key: string } = $props()
</script>

<section
	class="section"
	{...generateSchema && {
		itemScope: true,
		itemType: 'https://schema.org/FAQPage',
	}}
	{...moduleProps(props)}
>
	<header class="prose">
		<PortableText value={intro} />
	</header>

	<div>
		{#each items as item}
			<details
				open={item.open}
				name={connect ? props._key : undefined}
				{...generateSchema && {
					itemScope: true,
					itemProp: 'mainEntity',
					itemType: 'https://schema.org/Question',
				}}
			>
				<summary {...generateSchema && { itemProp: 'name' }}>{item.summary}</summary>

				<div class="prose" {...generateSchema && { itemProp: 'text' }}>
					<PortableText value={item.content} />
				</div>
			</details>
		{/each}
	</div>
</section>
