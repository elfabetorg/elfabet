<script>
	import DeviceDetector from "svelte-device-detector";

	export let title;
	export let sections;
	export let imagePath;
	export let reverse;
	// TODO hide illustrations if on mobile
</script>

<section class="detail-section">
	<DeviceDetector showInDevice="mobile">
		<div class="illustration-container">
			<img src={imagePath} />
		</div>
		<div class="text-content">
			<h2>{title}</h2>
			<div class="sections">
				{#each sections as section}
					<p><b>{section[0]}</b> {section[1]}</p>
				{/each}
			</div>
		</div>
	</DeviceDetector>
	<DeviceDetector showInDevice="desktop">
	{#if !reverse}
		<div class="text-content">
			<h2>{title}</h2>
			<div class="sections">
				{#each sections as section}
					<p><b>{section[0]}</b> {section[1]}</p>
				{/each}
			</div>
		</div>
		<div class="illustration-container">
			<img src={imagePath} />
		</div>
	{:else}
		<div class="illustration-container">
			<img src={imagePath} />
		</div>
		<div class="text-content">
			<h2>{title}</h2>
			<div class="sections">
				{#each sections as section}
					<p><b>{section[0]}</b> {section[1]}</p>
				{/each}
			</div>
		</div>
	{/if}
</DeviceDetector>
</section>

<style>
	.detail-section {
		white-space: pre-wrap;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
		margin-bottom: 64px;
		gap: 80px;
	}
	img {
		max-width: 400px;
	}
	h2 {
		font-size: 24px;
		font-weight: normal;
		color: var(--accent);
		margin: 0;
	}
	b {
		font-weight: 700;
		color: var(--accent);
	}
	.sections {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.text-content {
		text-align: left;
		max-width: 500px;
	}
	@media screen and (max-width:420px) {
		.detail-section {
			flex-direction: column;
			gap: 24px;
		}
		img {
			max-width: 320px;
		}
	}
</style>