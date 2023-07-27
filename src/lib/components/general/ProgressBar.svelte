<script>
	export let value;
	export let maxValue;
</script>

<div class="progress-bar">
	<progress value={value} max={maxValue}></progress>
	<p>{value}/{maxValue}</p>
</div>

<style>
	.progress-bar {
		display: flex;
		flex-direction: row;
		gap: 8px;
		align-items: center;
		height: 40px;
	}
	p {
		font-size: 12px;
	}
</style>