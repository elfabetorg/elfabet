<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(async() => {});

	var email;
	var password;

	const signUp = () => {
		console.log('sign up')
		createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				console.log('Signed in!');
				goto('/app/editor/');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
			});
	};
</script>

<div id="signup-form">
	<h3>Sign up</h3>
	<!-- TODO Add fields for name and password, function for updating user info -->
	<input id="email" type="text" bind:value={email}>
	<input id="password" type="text" bind:value={password}>
	<button on:click={signUp}>Sign up</button>
</div>

<style>
	#signup-form {
		display: flex;
		flex-direction: column;
		width: 200px;
		gap: 8px;
		margin: 20px 20px 20px 20px;
	}
</style>