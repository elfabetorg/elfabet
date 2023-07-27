<script>
	import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
  import { firebaseAuth, googleProvider } from "$lib/firebase";
	import { onMount } from 'svelte';
  import { user } from "$lib/authStore";
  import { goto } from '$app/navigation';


	onMount(async() => {});

	var email;
	var password;

	const redirectToApp = async (user) => {
		const userID = user.uid;
		const url = `/api/getUserInfo?userid=${userID}`;
		const userData = await fetch(url).then((res) => res.json());
		if (userData.type === 'writer') {
			goto('/app/writer');
		} else if (userData.type === 'editor') {
			goto('/app/editor');
		}
	}

	const serverSignIn = async (idToken) => {
		const serverSignInRes = await fetch('/api/auth/signin', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ idToken })
		})
	}

	const handleSignInWithGoogle = () => {
		signInWithPopup(firebaseAuth, googleProvider)
			.then(async (userCredential) => {
				// Signed in 
				const user = userCredential.user;
				const idToken = await user.getIdToken();
				serverSignIn(idToken).then(() => redirectToApp(user));
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
	<!-- FIXME forgot password / reset UI -->
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