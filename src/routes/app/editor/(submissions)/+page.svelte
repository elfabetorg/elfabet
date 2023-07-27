<script>
	import { onMount } from 'svelte';
	import { user } from "$lib/authStore";
	import { page } from '$app/stores';

	let userData = null;

	onMount(async () => {
		const userID = $user.uid;
		const url = `/api/getUserInfo?userid=${userID}`;
		userData = await fetch(url).then((res) => res.json());
	});

</script>

<div id="user-home">
	<p>This is {$user.displayName}'s submissions page.</p>
	{#if userData !== null}
		<p>{$user.displayName} is part of the {userData.org.name} organization.</p>
	{:else}
		<!-- FIXME make joining orgs work-->
		<p>There's nothing here yet, sorry. Request to join an organization:</p>
		<input type="text">
	{/if}
	<p>Submissions Tab!</p>
</div>

<style>
	#user-home {
		margin-left: 32px;
	}
</style>