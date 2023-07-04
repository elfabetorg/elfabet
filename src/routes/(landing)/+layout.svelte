<script>
	import Nav from "./Nav.svelte";
	import Footer from "./Footer.svelte";
</script>

<head>
	<meta charset="utf-8" />
		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
		<link href='https://fonts.googleapis.com/css?family=DM Sans' rel='stylesheet'>
		<meta name="viewport" content="width=device-width" />
		<title>Elfabet</title>
</head>

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