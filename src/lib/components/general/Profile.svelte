<script>
	import { user } from "$lib/authStore";
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { goto } from '$app/navigation'

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
</script> 

<div id="profile">
	<!-- TODO: replace this dummy image w actual profile image -->
	<img id="profile-image" src="https://c1.wallpaperflare.com/preview/826/148/972/brown-head-wool-alpaca.jpg" alt="Profile image"/>
	<div class="text-container">
		<h3>{$user.displayName}</h3>
		<button on:click={handleSignOut}>Sign out</button>
	</div>
	<div class="tooltip">
		<img id="ellipses-icon" src="/app/navbar/ellipses.svg" alt="Ellipses symbol">
	</div>
</div>

<style>
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
	button {
		all: unset;
		color: var(--dark-gray);
		font-size: 12px;
		font-style: normal;
		font-weight: 400;
		line-height: 16px;
		text-decoration-line: underline;
		margin: 0px;
	}
</style>