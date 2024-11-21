import { fail } from '@sveltejs/kit';
import { createNewBeer } from '$lib/server/db/beers'

export const actions = {
  addNewBeer: async ({ request }: { request: Request }) => {
    const formData = Object.fromEntries(await request.formData())

    const { name, brewery, abv } = formData as {
      name: string,
      brewery: string,
      abv: string
    }

    // Dummy error
    if (name === "wine") {
      return fail(400, {
        error: 'not a beer!'
      })
    }

    const beer = {
      name,
      brewery,
      abv: Number(abv)
    }

    try {
      await createNewBeer(beer)

      return {
        success: true,
        beer: beer
      }
    } catch (error) {

    }
  }
}