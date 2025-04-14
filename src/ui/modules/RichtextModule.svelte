<script lang="ts">
	import { PortableText } from '@portabletext/svelte'
	import type { RichtextModule } from '@/sanity/types'

	let { content, tableOfContents }: RichtextModule = $props()
</script>

<section>
	<div class="prose">
		<PortableText value={content} />
	</div>
</section>
