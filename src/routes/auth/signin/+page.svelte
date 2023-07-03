<script>
	import { signInWithEmailAndPassword } from "firebase/auth";
	import { initializeApp } from 'firebase/app';
  import { firebaseAuth } from "$lib/firebase";
	import { onMount } from 'svelte';
  import { user } from "$lib/authStore";
  import { goto } from '$app/navigation';


	onMount(async() => {});

	var email;
	var password;

	const signIn = () => {
		console.log('sign in')
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				console.log('Signed in!');
				// TODO: dynamically check if user is writer or editor
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
	<h3>Sign in</h3>
	<input id="email" type="text" bind:value={email}>
	<input id="password" type="text" bind:value={password}>
	<button on:click={signIn}>Sign in</button>
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