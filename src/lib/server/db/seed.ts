import { db } from './client'
import { beers, type InsertBeerParams } from './schema'

const beer: InsertBeerParams = {
  name: "Kasteel Rouge",
  brewery: "Brouwerij Vanhonsebrouck",
  abv: "8.0"
}

await db.insert(beers).values(beer)