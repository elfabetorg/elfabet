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

	const redirectToApp = async (user) => {
		const userID = user.uid;
		console.log(userID)
		const url = `/api/getUserInfo?userid=${userID}`;
		const userData = await fetch(url).then((res) => res.json());
		console.log(userData);
		if (userData.type === 'writer') {
			goto('/app/writer');
		} else if (userData.type === 'editor') {
			goto('/app/editor');
		}
	}

	const handleSignInWithGoogle = () => {
		signInWithPopup(firebaseAuth, googleProvider)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				console.log('Signed in!');
				redirectToApp(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// TODO display this error to user & extract this to a function
			});
	}

	const handleSignInWithEmail = () => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log('Signed in!');
				redirectToApp(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// TODO display this error to user & extract this to a function
			});
	}

	const handleSignIn = (method) => {
		if (method === 'google') {
			handleSignInWithGoogle();
		} else if (method === 'email') { 
			handleSignInWithEmail();
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