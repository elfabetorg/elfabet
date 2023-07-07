<script>
	import { onMount } from 'svelte';
	import { user } from "$lib/authStore";
	import { page } from '$app/stores';

	export let data;

	onMount(() => {
	});

	$: {
		console.log('weee')
		console.log(data.stuff);
	};
</script>

<div id="user-home">
	<!-- TODO extract logic to AuthCheck component -->
	{#if $user !== null}
		<p>This is {$user.displayName}'s Elfabet page.</p>
		<p>Submissions Tab!</p>
		{#await data}
			<p>Loading data...</p>
		{:then}
			{data.stuff[0].sample}
		{/await}
	{/if}
</div>

<style>

</style>