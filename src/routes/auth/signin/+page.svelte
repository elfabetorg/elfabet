<script>
	import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
	import { initializeApp } from 'firebase/app';
  import { firebaseAuth, googleProvider } from "$lib/firebase";
	import { onMount } from 'svelte';
  import { user } from "$lib/authStore";
  import { goto } from '$app/navigation';


	onMount(async() => {});

	var email;
	var password;

	const handleSignIn = (method) => {
		if (method === 'google') {
			signInWithPopup(firebaseAuth, googleProvider)
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
				// TODO display this error to user
			});
		} else if (method === 'email') { 
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
				// TODO display this error to user
			});
		}
	};

</script>

<div id="signup-form">
	<h3>Sign in</h3>
	<input id="email" type="text" bind:value={email}>
	<input id="password" type="text" bind:value={password}>
	<button on:click={() => handleSignIn('email')}>Sign in</button>
	<div class="divider"></div>
	<button on:click={() => handleSignIn('google')}>Sign in with google</button>
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