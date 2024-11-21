import { db } from '$lib/server/db/client'
import { beers, type InsertBeerParams } from '$lib/server/db/schema'

async function createNewBeer(beer: InsertBeerParams) {
  await db.insert(beers).values(beer)
}

export { createNewBeer }