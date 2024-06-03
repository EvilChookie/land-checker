import { fetches, shocks, triomes, surveils, basics } from './data'
import type { fetchLand, fetchableLand, domainPairs, landType, fetchability } from './types'

// A map of colors - so we can fetch a color, based on the land name.
const colors = new Map<string, string>()
colors.set('plains', 'yellow-100/15')
colors.set('island', 'blue-400/15')
colors.set('swamp', 'neutral-600/15')
colors.set('mountain', 'red-700/15')
colors.set('forest', 'green-700/15')

// Hat tip: https://stackoverflow.com/a/55835813
function compareArrays(arr1: landType[] | undefined, arr2: landType[]) {
	if (arr1 === undefined) return false
	if (arr1.length !== arr2.length) return false

	arr1.sort()
	arr2.sort()

	// use normal for loop so we can return immediately if not equal
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false
	}

	return true
}

// Based on color names, generate a gradient name
function generateGradientName(landName: string) {
	let thisLand: fetchLand & fetchableLand = { name: '', types: undefined, fetches: undefined }
	const allLands = [fetches, shocks, triomes, surveils, basics]

	// Find this particular land:
	allLands.forEach(land => {
		const foundLand = land.find(entry => entry.name === landName)
		if (foundLand) {
			thisLand = foundLand
		}
	})

	if (thisLand.name) {
		if (thisLand.fetches) {
			// This is a fetchLand:
			return `bg-gradient-to-r from-${colors.get(thisLand.fetches[0])} to-${colors.get(thisLand.fetches[1])}`
		}

		if (thisLand.types) {
			// Otherwise, we have a fetchable land (and the length of land types tells us what type of fetchable:)
			if (thisLand.types.length === 1) {
				// Basics!
				return `bg-${colors.get(thisLand.types[0])}`
			}

			if (thisLand.types.length === 2) {
				// Shocks and Surveils
				return `bg-gradient-to-r from-${colors.get(thisLand.types[0])} to-${colors.get(thisLand.types[1])}`
			}

			if (thisLand.types.length === 3) {
				// Triomes
				return `bg-gradient-to-r from-${colors.get(thisLand.types[0])} via-${colors.get(thisLand.types[1])} to-${colors.get(thisLand.types[2])}`
			}
		}
	} else {
		return `bg-gray-500`
	}
}

function generateDomainPairs(deckList: Map<string, number>) {
	// A place to store our pairs:
	const domainPairs: Set<domainPairs> = new Set()

	// Let's fetch out the types of cards in the deck:
	const triomesInDeck = triomes.filter(triome => deckList.get(triome.name))
	const dualsInDeck = shocks
		.filter(shock => deckList.get(shock.name))
		.concat(surveils.filter(surveil => deckList.get(surveil.name)))

	if (triomesInDeck.length > 0 && dualsInDeck.length > 0) {
		// We have _some_ triomes and duals - proceed:
		triomesInDeck.forEach(triome => {
			// A list of land types:
			let domainTypesForThisPair: landType[] = ['plains', 'island', 'swamp', 'mountain', 'forest']

			// Unset the keys that correspond to this triome:
			triome.types?.forEach(type =>
				domainTypesForThisPair.splice(domainTypesForThisPair.indexOf(type), 1)
			)

			// This leaves us with the remaining two land types that our dual needs to be:
			const matchingDual = dualsInDeck.find(dual =>
				compareArrays(dual.types, domainTypesForThisPair)
			)

			if (matchingDual !== undefined) {
				const pair: domainPairs = {
					dual: matchingDual,
					triome: triome
				}
				domainPairs.add(pair)
			}
		})
	}
	return domainPairs
}

function generateFetchabilityReport(deckList: Map<string, number>) {
	const fetchabilityReport: Set<fetchability> = new Set()

	// Generate a list of fetches and fetchables in the deck:
	const fetchesInDeck = fetches.filter(fetch => deckList.get(fetch.name))
	const fetchablesInDeck = shocks
		.filter(shock => deckList.get(shock.name))
		.concat(surveils.filter(surveil => deckList.get(surveil.name)))
		.concat(triomes.filter(triome => deckList.get(triome.name)))
		.concat(basics.filter(basic => deckList.get(basic.name)))

	fetchesInDeck.forEach(fetch => {
		// How many fetchables are in the deck?
		const totalFetchables = fetchablesInDeck.length

		// Now, how many fetches can this fetchland fetch (if a fetchland could fetch land?)
		const totalFetchablesForThisFetch = fetchablesInDeck.filter(fetchable =>
			fetchable.types?.some(type => fetch.fetches?.includes(type))
		)

		// Construct a report for this fetchland:
		const report: fetchability = {
			fetchName: fetch.name,
			canFetch: totalFetchablesForThisFetch,
			rating: (totalFetchablesForThisFetch.length / totalFetchables) * 100
		}

		fetchabilityReport.add(report)
	})

	return fetchabilityReport
}

export { colors, generateGradientName, generateDomainPairs, generateFetchabilityReport }
