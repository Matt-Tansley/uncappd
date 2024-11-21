import { fail } from '@sveltejs/kit';
// import { createNewBeer } from '$lib/server/database.ts'

export const actions = {
  addNewBeer: async ({ request }: { request: Request }) => {
    const formData = Object.fromEntries(await request.formData())

    const name = formData.name
    const brewery = formData.brewery
    const abv = formData.abv

    // Dummy error
    if (name === "wine") {
      return fail(400, {
        error: 'not a beer!'
      })
    }

    const beer = {
      name,
      brewery,
      abv
    }

    // try {
    //   await createNewBeer(beer)

    //   return {
    //     success: true,
    //     beer: beer
    //   }
    // } catch (error) {

    // }

    console.log(formData)
  }
}