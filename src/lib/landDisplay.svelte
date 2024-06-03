<script lang="ts">
	import { deckList } from '$lib/store'
	import { generateGradientName } from '$lib/util'
	import { Icon, PlusCircle, MinusCircle } from 'svelte-hero-icons'
	export let name: string
	export let showControls: boolean = false

	$: className = generateGradientName(name)
	$: qty = $deckList.get(name) ?? 0

	function add() {
		deckList.add(name)
	}

	function subtract() {
		deckList.remove(name)
	}
</script>

<div class="mx-1 mt-1 flex">
	{#if showControls}
		<div class="flex-0 text-left">
			<button
				class="btn btn-ghost btn-xs mb-1 mr-1"
				disabled={qty === 0}
				on:click={subtract}
				><Icon
					src={MinusCircle}
					solid /></button>
		</div>
	{/if}
	<div
		class="flex-grow p-1 text-sm text-black dark:text-white {className}"
		class:text-center={showControls}>
		{#if qty > 0}
			{qty}
		{/if}
		{name}
	</div>
	{#if showControls}
		<div class="flex-0text-right">
			<button
				class="btn btn-ghost btn-xs mb-1 ml-1"
				disabled={qty >= 4}
				on:click={add}
				><Icon
					src={PlusCircle}
					solid /></button>
		</div>
	{/if}
</div>
