<script lang="ts">
	import { fetches, shocks, surveils, triomes, basics } from '$lib/data'
	import LandDisplay from './landDisplay.svelte'
	import { deckList } from '$lib/store'
</script>

<div class="py-4">
	<article class="prose dark:prose-invert">
		<h3>Land Selector Tool</h3>
		<button
			class="btn btn-primary w-full"
			on:click={deckList.clear}>Reset the Deck</button>
		<fieldset class="mt-4">
			<legend>Fetch Lands</legend>
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each fetches as land}
					<LandDisplay
						name={land.name}
						showControls />
				{/each}
			</div>
		</fieldset>

		<fieldset class="mt-4">
			<legend>Shock Lands</legend>
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each shocks as land}
					<LandDisplay
						name={land.name}
						showControls />
				{/each}
			</div>
		</fieldset>

		<fieldset class="mt-4">
			<legend>Triomes</legend>
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each triomes as land}
					<LandDisplay
						name={land.name}
						showControls />
				{/each}
			</div>
		</fieldset>

		<fieldset class="mt-4">
			<legend>Surveil Lands</legend>
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each surveils as land}
					<LandDisplay
						name={land.name}
						showControls />
				{/each}
			</div>
		</fieldset>

		<fieldset class="mt-4">
			<legend>Basic Lands</legend>
			<div class="grid grid-cols-1 md:grid-cols-2">
				{#each basics as land}
					<LandDisplay
						name={land.name}
						showControls />
				{/each}
			</div>
		</fieldset>
	</article>
</div>
