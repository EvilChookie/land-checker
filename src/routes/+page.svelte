<script lang="ts">
	import Lands from '$lib/lands.svelte'
	import Results from '$lib/results.svelte'
</script>

<div class="container mx-auto md:mt-4">
	<article class="prose max-w-none dark:prose-invert">
		<h1>Domain Lands Checker</h1>
		<p>
			This tool will help you check that you're running the best combination of fetch lands and
			fetchable lands that you can to run a domain based deck. Choose which lands you have in your
			deck, and we'll show you how fetchable they are. Yes, Leyline of the Guildpact is a thing, but
			you need to ensure that your mana base is solid anyways!
		</p>
		<hr class="my-4" />
	</article>

	<div class="flex w-full flex-col md:flex-row">
		<div class="w-full flex-col md:mr-1 md:w-1/2 md:flex-row">
			<Lands />
		</div>
		<div class="w-full flex-col md:ml-1 md:w-1/2 md:flex-row">
			<Results />
		</div>
	</div>
</div>
