import { writable, derived } from 'svelte/store'

function createDeckListStore() {
	const { subscribe, set, update } = writable<Map<string, number>>(new Map<string, number>())

	return {
		subscribe,
		add: (name: string) =>
			update(entries => {
				if (entries.has(name)) {
					return entries.set(name, (entries.get(name) ?? 0) + 1)
				} else {
					return entries.set(name, 1)
				}
			}),
		remove: (name: string) =>
			update(entries => {
				if (entries.has(name)) {
					const qty = entries.get(name) ?? 0

					if (qty === 1) {
						entries.delete(name)
						return entries
					}

					return entries.set(name, (entries.get(name) ?? 0) - 1)
				} else {
					return entries
				}
			}),
		clear: () => set(new Map<string, number>())
	}
}

export const deckList = createDeckListStore()
export const deckTotal = derived(deckList, $deckList => {
	let sum = 0
	$deckList.forEach(v => {
		sum += v
	})
	return sum
})
