<script>
	import { user } from "$lib/authStore";
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { goto } from '$app/navigation'
	import { onMount } from 'svelte';

	let accountType = null;
	let expanded = false;

	let clientHeight;
	let clientWidth;

	onMount(async () => {
		fetchUserData();
	})

	const fetchUserData = async () => {
		// Fetch user data
		const userID = $user.uid;
		const url = `/api/getUserInfo?userid=${userID}`;
		const userData = await fetch(url).then((res) => res.json());
		setAccountType(userData.type);
	}

	const setAccountType = (dbAccountType) => {
		if (dbAccountType === 'editor') {
			accountType = "Editor Account"
		} else if (dbAccountType === 'writer') {
			accountType = "Writer Account"
		} else {
			accountType = "r u an alien"
		}
	}

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

	const handleExpandButton = () => {
		expanded = !expanded;
	};
	
</script> 

<div id="profile" bind:clientHeight>
	<!-- TODO: replace this dummy image w actual profile image -->
	<img id="profile-image" src="https://c1.wallpaperflare.com/preview/826/148/972/brown-head-wool-alpaca.jpg" alt="Profile image"/>
	<div class="text-container">
		<h3>{$user.displayName}</h3>
		<p>{accountType}</p>
	</div>
	{#if expanded}
	<!-- TODO maybe extract this to a component -->
		<div class="tooltip" style="bottom: calc({clientHeight}px)">
			<a href="" on:click={handleSignOut}>Sign out</a>
			<div class="sep"></div>
			<a href="/auth/signup">Add account</a>
			<div class="sep"></div>
			<a href="">Switch account</a> <!-- TODO make switch account -->
		</div>
	{/if}
	<img on:click={handleExpandButton} id="ellipses-icon" src="/app/navbar/ellipses.svg" alt="Ellipses symbol">
</div>

<style>
	.tooltip {
		background: var(--primary-white);
		border: 1px solid var(--gray);
		border-radius: 8px;
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
		white-space: nowrap;
		margin-left: 80px;
		layout: flex;
		flex-direction: column;
		position: absolute;
	}
	.sep {
		margin: 0px;
		width: 100%;
		border: 0.5px solid var(--gray);
	}
	a {
		background: var(--primary-white);
		padding: 10px 16px 10px 16px;
		border-radius: 8px;
		width: 100px;
		display: block;
		font-size: 14px;
		text-decoration: none;
		color: var(--black);
	}
	#profile {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 100%;
		gap: 16px;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 4px;
	}
	#profile-image {
		width: 50px;
		height: 50px;
		object-fit: cover;
		border-radius: 200px;
	}
	#ellipses-icon {
		width: 18px;
		height: 18px;
		padding-left: 20px;
	}
	h3 {
		font-size: 16px;
		font-weight: 400;
		line-height: 20px;
		margin: 0px;
		white-space: nowrap;
	}
	p {
		color: var(--dark-gray);
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		margin: 0px;
	}
</style>