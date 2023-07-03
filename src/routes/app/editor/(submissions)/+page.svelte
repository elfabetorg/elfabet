<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { signOut } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { firebaseAuth } from '$lib/firebase';
	import { user } from "$lib/authStore";
	import { redirect } from '@sveltejs/kit';

	onMount(() => {
		console.log($user);
	})

	const handleSignOut = () => {
		console.log('sign out');
		signOut(firebaseAuth)
      .then(() => {
				goto('/auth/signin');
      })
      .catch((error) => {
        console.log(error);
      });
	};

</script>

<div id="user-home">
	{#if $user !== null}
		<p>This is {$user.displayName}'s Elfabet page.</p>
		<p>Submissions Tab!</p>
		<button on:click={handleSignOut}>Sign out</button>
	{:else}
		You're not signed in. You CANNOT ACCESS THIS PAGE MUAHAHAHAAHAH.
	{/if}
</div>

<style>
	
</style>