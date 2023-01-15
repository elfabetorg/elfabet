<script>
	import VanillaTilt from "vanilla-tilt";

	export let title;
	export let description;

	function tilt (node, options) {
		VanillaTilt.init(node, options)
	}
</script>

<div class="additional-features-card" use:tilt>
	<h2>{title}</h2>
	<p>{description}</p>
</div>

<style>
	.additional-features-card {
		text-align: left;
		padding: 20px;
		padding-bottom: 4px;
		background-color: white;
		color: black;
		max-width: 360px;
		border-radius: 16px;
	}
	h2 {
		font-size: 22px;
		margin: 0;
	}
	p {
		font-size: 16px;
		line-height: 24px;
	}
</style>