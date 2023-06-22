<script>
	import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';

	var app;
	var auth;

	onMount(async() => {
		const firebaseConfig = {
			apiKey: "AIzaSyAI2CBPZSu5Y9AfJ2Bo9pObOPkTOjcQHm0",
			authDomain: "elfabet-cb141.firebaseapp.com",
			projectId: "elfabet-cb141",
			storageBucket: "elfabet-cb141.appspot.com",
			messagingSenderId: "982185309892",
			appId: "1:982185309892:web:67fdaf4cbb5a5d39d3bb91",
			measurementId: "G-3QRT3JC2W9"
		};
		app = initializeApp(firebaseConfig);
		auth = getAuth(app);
	});

	var email;
	var password;

	const signUp = () => {
		console.log('sign up')
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
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