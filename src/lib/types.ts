export type landType = 'mountain' | 'swamp' | 'plains' | 'island' | 'forest'

export type fetchLand = {
	name: string
	fetches?: landType[]
}

export type fetchableLand = {
	name: string
	types?: landType[]
}

export type domainPairs = {
	dual: fetchableLand
	triome: fetchableLand
}

export type fetchability = {
	fetchName: string
	canFetch: fetchableLand[]
	rating: number
}
