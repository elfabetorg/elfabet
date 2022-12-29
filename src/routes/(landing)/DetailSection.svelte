<script>
	export let title;
	export let sections;
	export let imagePath;
	export let reverse;
	// TODO hide illustrations if on mobile
</script>

<section class="detail-section">
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
</section>

<style>
	.detail-section {
		white-space: pre-wrap;
		color: black;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 24px;
		margin-bottom: 36px;
	}
	h2 {
		font-size: 24px;
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
</style>