<script>
	import { onMount } from 'svelte';

	onMount(async() => {});

	var email;
	var password;

	const signUp = () => {
		console.log('sign up')
		createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				// ...
				console.log(user);
				console.log('Signed in!');
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