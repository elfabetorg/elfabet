<script>
	import DeviceDetector from "svelte-device-detector";
	import VanillaTilt from 'vanilla-tilt';

	export let category;
	export let content;
	export let imagePath;

	function tilt(node, options) {
		VanillaTilt.init(node, options)
	}
</script>

<div class="nutshell-card-component">
	<DeviceDetector showInDevice="desktop">
		<div class="card" use:tilt>
			<img src={imagePath} alt="" />
			<div class="text-container">
				<h3>{category.toUpperCase()}</h3>
				<h4>{content}</h4>
			</div>
		</div>
	</DeviceDetector>

	<DeviceDetector showInDevice="mobile">
		<div class="card">
			<img src={imagePath} alt="" />
			<div class="text-container">
				<h3>{category.toUpperCase()}</h3>
				<h4>{content}</h4>
			</div>
		</div>
	</DeviceDetector>
</div>


<style>
	.card {
		max-width: 340px;
		display: flex;
		flex-direction: row;
		padding: 24px 0px;
		border-radius: 8px;
		gap: 16px;
		background-color: white;
	}
	.text-container {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	h3 {
		font-size: 12px;
		line-height: 20px;
		letter-spacing: 0.04em;
		color: var(--accent);
		margin: 0;
	}
	h4 {
		font-size: 22px;
		font-weight: normal;
		margin: 0;
	}
	img {
		width: 64px;
	}
	/* Mobile */
	@media screen and (max-width:420px) {
		.card {
			max-width: 280px;
		}
	}
</style>