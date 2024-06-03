import type { fetchLand, fetchableLand } from '$lib/types'

export const fetches: fetchLand[] = [
	{ name: 'Arid Mesa', fetches: ['mountain', 'plains'] },
	{ name: 'Bloodstained Mire', fetches: ['swamp', 'mountain'] },
	{ name: 'Flooded Strand', fetches: ['plains', 'island'] },
	{ name: 'Marsh Flats', fetches: ['plains', 'swamp'] },
	{ name: 'Misty Rainforest', fetches: ['forest', 'island'] },
	{ name: 'Polluted Delta', fetches: ['island', 'swamp'] },
	{ name: 'Scalding Tarn', fetches: ['island', 'mountain'] },
	{ name: 'Verdant Catacombs', fetches: ['swamp', 'forest'] },
	{ name: 'Windswept Heath', fetches: ['forest', 'plains'] },
	{ name: 'Wooded Foothills', fetches: ['mountain', 'forest'] }
]

export const shocks: fetchableLand[] = [
	{ name: 'Blood Crypt', types: ['swamp', 'mountain'] },
	{ name: 'Breeding pool', types: ['forest', 'island'] },
	{ name: 'Godless Shrine', types: ['plains', 'swamp'] },
	{ name: 'Hallowed Fountain', types: ['plains', 'island'] },
	{ name: 'Overgrown Tomb', types: ['swamp', 'forest'] },
	{ name: 'Sacred Foundry', types: ['mountain', 'plains'] },
	{ name: 'Steam Vents', types: ['island', 'mountain'] },
	{ name: 'Stomping Ground', types: ['mountain', 'forest'] },
	{ name: 'Temple Garden', types: ['forest', 'plains'] },
	{ name: 'Watery Grave', types: ['island', 'swamp'] }
]

export const surveils: fetchableLand[] = [
	{ name: 'Commercial District', types: ['mountain', 'forest'] },
	{ name: 'Elegant Parlour', types: ['mountain', 'plains'] },
	{ name: 'Hedge Maze', types: ['forest', 'island'] },
	{ name: 'Lush Portico', types: ['forest', 'plains'] },
	{ name: 'Meticulous Archive', types: ['plains', 'island'] },
	{ name: 'Raucous Theater', types: ['swamp', 'mountain'] },
	{ name: 'Shadowy Backstreet', types: ['plains', 'swamp'] },
	{ name: 'Thundering Falls', types: ['island', 'mountain'] },
	{ name: 'Undercity Sewers', types: ['island', 'swamp'] },
	{ name: 'Underground Mortuary', types: ['swamp', 'forest'] }
]

export const triomes: fetchableLand[] = [
	{ name: 'Indatha Triome', types: ['plains', 'swamp', 'forest'] },
	{ name: "Jetmir's Garden", types: ['mountain', 'forest', 'plains'] },
	{ name: 'Ketria Triome', types: ['forest', 'island', 'mountain'] },
	{ name: "Raffine's Tower", types: ['plains', 'island', 'swamp'] },
	{ name: 'Raugrin Triome', types: ['island', 'mountain', 'plains'] },
	{ name: 'Savai Triome', types: ['mountain', 'plains', 'swamp'] },
	{ name: "Spara's Headquarters", types: ['forest', 'island', 'plains'] },
	{ name: "Xander's Lounge", types: ['island', 'swamp', 'mountain'] },
	{ name: 'Zagoth Triome', types: ['swamp', 'forest', 'island'] },
	{ name: "Ziatora's Proving Ground", types: ['swamp', 'mountain', 'forest'] }
]

export const basics: fetchableLand[] = [
	{ name: 'Plains', types: ['plains'] },
	{ name: 'Island', types: ['island'] },
	{ name: 'Swamp', types: ['swamp'] },
	{ name: 'Mountain', types: ['mountain'] },
	{ name: 'Forest', types: ['forest'] }
]
