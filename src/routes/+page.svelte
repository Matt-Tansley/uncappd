<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
	// export let form;
</script>

<main class="container">
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
	</p>

	<h1>Add a new beer</h1>

	{#if form?.error}
		<p>{form.error}</p>
	{/if}

	<form action="?/addNewBeer" method="post" use:enhance>
		<div>
			<label for="name">Name</label>
			<input type="text" name="name" id="name" required />
		</div>

		<div>
			<label for="brewery">Brewery</label>
			<input type="text" name="brewery" id="brewery" required />
		</div>

		<div>
			<label for="abv">ABV</label>
			<input type="number" name="abv" id="abv" />
		</div>

		<div>
			<button type="submit">Add beer</button>
		</div>
	</form>
</main>
