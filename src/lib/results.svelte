<script lang="ts">
	import { deckList, deckTotal } from '$lib/store'
	import { Icon, QuestionMarkCircle } from 'svelte-hero-icons'
	import { generateDomainPairs, generateFetchabilityReport } from './util'
	import LandDisplay from './landDisplay.svelte'
	import type { domainPairs, fetchability } from './types'

	let domainPairs = new Set<domainPairs>()
	let fetchabilityReport = new Set<fetchability>()
	$: otherCards = 60 - $deckTotal
	$: $deckList,
		(() => {
			domainPairs = generateDomainPairs($deckList)
			fetchabilityReport = generateFetchabilityReport($deckList)
		})()
</script>

<div class="py-4">
	<article class="prose dark:prose-invert">
		{#if $deckTotal > 0}
			<h3>Land Selection</h3>
			<div class="grid grid-cols-2">
				{#each $deckList as [name]}
					<LandDisplay {name} />
				{/each}
			</div>
			<hr class="my-4" />
			<h3
				class="cursor-help"
				title="If you have one of these lands, fetch the other to bring Domain online!">
				Domain Pairs <Icon
					src={QuestionMarkCircle}
					mini
					class="mb-1 inline size-5 text-primary" />
			</h3>
			{#if domainPairs}
				<p>You have the following domain pairs in your deck:</p>
				<ul>
					{#each domainPairs as pair}
						<li>
							<strong>{pair.dual.name}</strong> and <strong>{pair.triome.name}</strong>
						</li>
					{/each}
				</ul>
			{:else}
				<p>
					There are no domain pairs in your deck. Either you need to adjust your land selection, or
					add more cards.
				</p>
			{/if}
			<hr class="my-4" />
			<h3>Fetchability Report</h3>
			{#if fetchabilityReport}
				{#each fetchabilityReport as item}
					<div class="mb-1 mt-4 grid w-full grid-cols-2">
						<div>
							<h3 class="m-0">{item.fetchName}</h3>
						</div>
						<div class="text-right">
							<h3 class="m-0">{!Number.isNaN(item.rating) ? Math.round(item.rating) : 0}%</h3>
						</div>
					</div>
					{#if item.canFetch.length > 0}
						<div class="collapse bg-base-200">
							<input type="checkbox" />
							<div class="collapse-title">
								See the list of lands that can be fetched by {item.fetchName}...
							</div>
							<div class="collapse-content">
								<div class="grid grid-cols-2">
									{#each item.canFetch as land}
										<LandDisplay name={land.name} />
									{/each}
								</div>
							</div>
						</div>
					{:else}
						<p>This fetch cannot fetch anything in your deck.</p>
					{/if}
				{/each}
			{:else}
				<p>You do not have any fetches or fetchable lands in your deck.</p>
			{/if}
			<hr class="my-4" />
		{/if}
		<h3>Stats</h3>
		<ul>
			<li><strong>{$deckTotal}</strong> total lands.</li>
			<li><strong>{otherCards}</strong> other cards.</li>
		</ul>
	</article>
</div>
