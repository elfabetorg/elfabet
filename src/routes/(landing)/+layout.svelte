<script>
	import Nav from "./Nav.svelte";
	import Footer from "./Footer.svelte";
</script>

<div id="landing-page">
	<Nav />
	<slot></slot>
	<Footer />
</div>

<style>
	#landing-page {
		height: 100%;
	}
</style>