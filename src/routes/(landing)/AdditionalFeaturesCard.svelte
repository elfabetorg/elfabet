<script>
	import VanillaTilt from "vanilla-tilt";
	import DeviceDetector from "svelte-device-detector";

	export let title;
	export let description;

	function tilt (node, options) {
		VanillaTilt.init(node, options)
	}
</script>

<div class="additional-features-card-component">
	<DeviceDetector showInDevice="desktop">
		<div class="additional-features-card" use:tilt>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</DeviceDetector>
	<DeviceDetector showInDevice="mobile">
		<div class="additional-features-card">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</DeviceDetector>
</div>

<style>
	.additional-features-card {
		text-align: left;
		padding: 20px;
		padding-bottom: 4px;
		background-color: white;
		color: black;
		max-width: 320px;
		border-radius: 16px;
		height: 100%;
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