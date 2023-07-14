<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
	import { firebaseAuth, googleProvider } from "$lib/firebase";
	import { user } from "$lib/authStore";

	onMount(async() => {});

	let email;
	let password;
	let firstName;
	let lastName;
	let accountType;

	const signUp = (method) => {
		if (method === 'google') {
			signInWithPopup(firebaseAuth, googleProvider)
			.then((userCredential) => {
				// Signed in 
				const user = userCredential.user;
				console.log(user);
				console.log('Signed in (after signup)!');
				if (accountType === 'writer') {
					goto('/app/writer/');
				} else if (accountType === 'editor') {
					goto('/app/editor/');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// TODO display this error to user
			});
		} else if (method === 'email') {
			createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				console.log('User signed up!');
				addNameToProfile(() => {
					if (accountType === "editor") {
					goto('/app/editor/');
					} else if (accountType === "writer") {
						goto('/app/writer/');
					}
				});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorMessage);
				// TODO display this error to user
			});
		}
	};

	const addAccountTypeToProfile = () => {
		// TODO add a users table in mongoDB (also put each user's settings & permissions there)
		// TODO merge this function with addNameToProfile & change name
		console.log('called addAccountTypeToProfile()');
		console.log(`user selected ${accountType}`);
	};	

	const addNameToProfile = (callback) => {
		updateProfile($user, {
			displayName: `${firstName} ${lastName}`
		}).then(() => {
			console.log(`Changed display name to ${firstName} ${lastName}`);
			callback();
		}).catch((error) => {
			console.log(error)
		});
	};
</script>

<div id="signup-form">
	<h3>Sign up</h3>
	<input id="firstname" type="text" placeholder="First name" bind:value={firstName}>
	<input id="lastname" type="text" placeholder="Last name" bind:value={lastName}>
	<input id="email" type="text" placeholder="Email" bind:value={email}>
	<input id="password" type="password" placeholder="Password" bind:value={password}>
	<select id="accounttype" placeholder="Account type" bind:value={accountType}>
		<option value="editor">Editor account</option>
		<option value="writer">Writer account</option>
	</select>
	<button on:click={() => signUp('email')}>Sign up</button>
	<div class="divider"></div>
	<button on:click={() => signUp('google')}>Sign up with google</button>
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