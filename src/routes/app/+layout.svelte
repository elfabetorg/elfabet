<script>
	import Navbar from "$lib/components/Navbar.svelte";
</script>

<div id="app">
	<Navbar />
	<slot></slot>
</div>

<style>
	#app {
		display: flex;
		flex-direction: row;
		gap: 32px;
	}
</style>