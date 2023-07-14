<script>
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { goto } from '$app/navigation'

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
	Writer acc home page. This doesn't work yet :(
	<button on:click={handleSignOut}>Sign out</button>
</div>

<style>

</style>