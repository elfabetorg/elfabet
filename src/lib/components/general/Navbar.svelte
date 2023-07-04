<script>
	import NavbarLink from "./NavbarLink.svelte";
	import Profile from "./Profile.svelte";
  import { onMount } from 'svelte';
	import { page } from '$app/stores';

	const navbarData = [
		{
			imagePath: "/app/navbar/submissions",
			text: "Submissions",
			navPath: "/app/editor/"
		},
		{
			imagePath: "/app/navbar/calls",
			text: "Calls",
			navPath: "/app/editor/calls"
		},
		{
			imagePath: "/app/navbar/messages",
			text: "Messages",
			navPath: "/app/editor/messages"
		},
		{
			imagePath: "/app/navbar/controlcenter",
			text: "Control Center",
			navPath: "/app/editor/controlcenter"
		},
		{
			imagePath: "/app/navbar/settings",
			text: "Settings",
			navPath: "/app/editor/settings"
		},
	];

	let innerHeight = 0
	var currentTab = "Submissions-tab";

	onMount(async () => {
		// Set current tab according to URL path name
		const path = $page.url.pathname;
		const navPaths = navbarData.map((data) => { return data.navPath });
		const tabIndex = navPaths.indexOf(path);
		currentTab = `${navbarData[tabIndex].text}-tab`;
	});

	const setCurrentTabOnClick = (navlinkName) => {
		currentTab = `${navlinkName}-tab`;
	};
</script>

<svelte:window bind:innerHeight/>

<div id="navbar">
	<div class="container">
		<div id="logo-header">
			<img src="/landing/logo.svg" alt="Elfabet logo" class="button-image">
			<h1>Elfabet</h1>
		</div>
		<!-- TODO Search component -->
		<div id="tabs">
			{#each navbarData as data} 
			<div class="tab" on:click={() => setCurrentTabOnClick(data.text)}>
				<NavbarLink imagePath={data.imagePath} text={data.text} navPath={data.navPath} {currentTab}/>
			</div>
			{/each}
		</div>
	</div>
	<div class="spacer"></div>
	<Profile />
</div>

<style>
	#navbar {
		position: -webkit-sticky;
  	position: sticky;
		padding: 56px 24px 24px 24px;
		height: calc(100% - 56px - 24px);
		display: flex;
		flex-direction: column;
		align-items: left;
		border: 1px solid var(--light-gray);
		background: var(--primary-white);
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: left;
		gap: 24px;
	}
	.spacer {
		height: 100%;
	}
	#tabs {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	h1 {
		color: var(--accent);
		font-size: 24px;
		font-weight: 500;
		line-height: 36px;
	}
	#logo-header {
		display: flex;
		flex-direction: row;
		align-items: left;
		gap: 16px;
	}
</style>