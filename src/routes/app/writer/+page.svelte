<script>
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { goto } from '$app/navigation'
	import { user } from "$lib/authStore"

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

<div id="app">
	{#if user !== null}
		Writer acc home page. This doesn't work yet :(
		<button on:click={handleSignOut}>Sign out</button>
	{:else}
		<div class="container">
			<h1>YOU CAN'T ACCESS THIS PAGE MUAHAHAHAHAHAHA.</h1>
			<p>Go sign in. Or sign up.</p>
			<button on:click={() => { goto('/auth/signin') }}>Sign in</button>
			<button on:click={() => { goto('/auth/signin') }}>Sign up</button>
		</div>
	{/if}
</div>

<style>

</style>