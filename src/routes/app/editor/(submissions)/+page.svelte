<script>
	import { onMount } from 'svelte';
	import { user } from "$lib/authStore";

	onMount(() => {
		console.log($user);
	});

</script>

<div id="user-home">
	{#if $user !== null}
		<p>This is {$user.displayName}'s Elfabet page.</p>
		<p>Submissions Tab!</p>
		{#each [...Array(30)] as n}
			<p>Yarg Farg Marg. (This is to test whether the nav bar is sticky. YAY IT IS!!!)</p>
		{/each}
	{/if}
</div>

<style>
	
</style>