<script>
	import { onMount } from 'svelte';
	import { user } from "$lib/authStore";
	import { page } from '$app/stores';

	let showAlert = true;
	let userData = null;

	onMount(async () => {
		const userID = $user.uid;
		const url = `/api/getUserInfo?userid=${userID}`;
		userData = await fetch(url).then((res) => res.json());
	});
</script>

<!-- FIXME fix svelte page flashes https://www.reddit.com/r/sveltejs/comments/su8mx7/how_do_you_manage_your_loading_state/, https://www.connorcallahan.info/posts/sveltekit-flickering -->

<div id="user-home">
	<p>This is {$user.displayName}'s submissions tab.</p>
	{#if userData !== null}
		{#if userData.org !== null}
			<p>{$user.displayName} is part of the {userData.org.name} organization.</p>
		{:else}
			<p>You're not part of an organization yet. Request to join one:</p>
			<input type="text">
			<button>Join (this doesn't work yet!)</button>
		{/if}
	{/if}
	<p>Submissions Tab!</p>
</div>

<style>
	#user-home {
		margin-left: 32px;
	}
</style>