<script>
	import Nav from "./Nav.svelte";
	import Footer from "./Footer.svelte";
	import { user } from '$lib/authStore';
	import { goto } from '$app/navigation'

	$: {
		// Move this into onMount and run after user signed in 
		// Redirect to app if user is signed in
		if ($user !== null) {
			const userID = $user.uid;
			const url = `/api/getUserInfo?userid=${userID}`;
			fetch(url)
				.then((res) => {
					res.json().then((jsonData) => {
						const accountType = jsonData.type;
						console.log(accountType)
						if (accountType === 'writer') {
							goto('/app/writer');
						} else if (accountType === 'editor') {
							goto('/app/editor');
						}
					})
				});
		}
	}
</script>

<head>
	<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'>
		<meta name="viewport" content="width=device-width" />
		<title>Elfabet</title>
</head>

<div id="landing-page">
	{#if $user === null}
		Loading...
	{:else}
		<Nav />
		<slot></slot>
		<Footer />
	{/if}
</div>

<style>
	#landing-page {
		height: 100%;
	}
</style>