<script>
	import NavbarLink from "./NavbarLink.svelte";

	const navbarData = [
		{
			imagePath: "/app/navbar/submissions.svg",
			text: "Submissions",
			navPath: "/app/editor/"
		},
		{
			imagePath: "/app/navbar/calls.svg",
			text: "Calls",
			navPath: "/app/editor/calls"
		},
		{
			imagePath: "/app/navbar/messages.svg",
			text: "Messages",
			navPath: "/app/editor/messages"
		},
		{
			imagePath: "/app/navbar/controlcenter.svg",
			text: "Control Center",
			navPath: "/app/editor/controlcenter"
		},
		{
			imagePath: "/app/navbar/settings.svg",
			text: "Settings",
			navPath: "/app/editor/settings"
		},
	];

	var currentTab = "Submissions-tab";

	const setCurrentTabOnClick = (navlinkName) => {
		currentTab = `${navlinkName}-tab`;
	};

</script>

<div id="navbar">
	<div id="logo-header">
		<h1>Elfabet</h1>
		<img src="/landing/logo.svg" alt="Elfabet logo" class="button-image">
	</div>
	<!-- TODO Search component -->
	{#each navbarData as data} 
		<div class="navbarlink-container" on:click={() => setCurrentTabOnClick(data.text)}>
			<NavbarLink imagePath={data.imagePath} text={data.text} navPath={data.navPath} {currentTab}/>
		</div>
	{/each}
</div>

<!-- TODO: import semibold version of Lato -->
<!-- TODO: make icons change color -->

<style>
	h1 {
		color: var(--accent);
		font-size: 24px;
		font-weight: 600;
		line-height: 38px;
		letter-spacing: 0.24px;
	}
	#logo-header {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
</style>