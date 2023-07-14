<script>
	import { onMount } from 'svelte';
	import { user } from "$lib/authStore";
	import { page } from '$app/stores';

	let data = null;

	onMount(async () => {
		const userID = $user.uid;
		const url = `/api/getUserInfo?userid=${userID}`;
		data = await fetch(url).then((res) => res.json());
	});

</script>

<div id="user-home">
	<!-- TODO extract logic to AuthCheck component -->
	<p>This is {$user.displayName}'s Elfabet page.</p>
	<p>Submissions Tab!</p>
</div>

<style>

</style>