<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
	import { firebaseAuth } from "$lib/firebase";
	import { user } from "$lib/authStore";

	onMount(async() => {});

	let email;
	let password;
	let firstName;
	let lastName;
	let accountType;

	const signUp = () => {
		console.log('sign up')
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