import { sqliteTable, int, text, numeric } from "drizzle-orm/sqlite-core";

const beers = sqliteTable('beers', {
  beer_id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  brewery: text().notNull(),
  abv: numeric().notNull()
})

type InsertBeerParams = typeof beers.$inferInsert

export { beers, type InsertBeerParams }