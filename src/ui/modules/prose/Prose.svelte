<script lang="ts">
	import { moduleProps } from '$lib/moduleProps'
	import { PortableText } from '@portabletext/svelte'
	import { slug } from '$lib/utils'
	import AnchoredH2 from './AnchoredH2.svelte'
	import AnchoredH3 from './AnchoredH3.svelte'
	import AnchoredH4 from './AnchoredH4.svelte'
	import AnchoredH5 from './AnchoredH5.svelte'
	import AnchoredH6 from './AnchoredH6.svelte'
	import type { Prose } from '@/sanity/types'

	let {
		content,
		tableOfContents,
		tocPosition = 'left',
		headings = [],
		...props
	}: Prose &
		Partial<{
			headings: {
				style: string
				text: string
			}[]
		}> = $props()
</script>

<section
	class="grid {tableOfContents && tocPosition === 'left'
		? 'lg:grid-cols-[auto_1fr]'
		: 'lg:grid-cols-[1fr_auto]'}"
	{...moduleProps(props)}
>
	{#if tableOfContents}
		<nav
			class="top-(--header-height) self-start lg:sticky"
			class:md:order-last={tocPosition === 'right'}
		>
			<div>Table of contents</div>
			<ul>
				{#each headings as heading}
					<li>
						<a href={`#${slug(heading.text)}`}>{heading.text}</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}

	<div class="prose">
		<PortableText
			value={content}
			components={{
				block: {
					h2: AnchoredH2,
					h3: AnchoredH3,
					h4: AnchoredH4,
					h5: AnchoredH5,
					h6: AnchoredH6,
				},
			}}
		/>
	</div>
</section>
