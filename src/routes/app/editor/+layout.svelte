<script>
	import Navbar from "$lib/components/general/Navbar.svelte";

	let innerHeight;
	let innerWidth;
	let navbarWidth;
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<div id="app">
	<div id="navbar-container" bind:clientWidth={navbarWidth}>
		<Navbar />
	</div>
	<div class="slot" style="height: {innerHeight}px; width: calc({innerWidth}px - {navbarWidth}px); overflow: scroll;">
		<slot></slot>
	</div>
</div>

<style>
	#app {
		display: flex;
		flex-direction: row;
		gap: 32px;
		height: 100vh;
		overflow: hidden;
	}
</style>