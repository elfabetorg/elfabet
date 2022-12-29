<script>
	export let waitlistURL;
</script>

<a href={waitlistURL}>
	<button class="outline">
		<img src="landing/discord.svg" alt="Discord logo" class="button-image">
		<p>Join Discord</p>
	</button>
</a>

<style>
	button.outline {
		border: 1px solid var(--accent);
		background-color: rgb(0, 0, 0, 0);
		color: var(--accent);
	}
	img.button-image {
		height: 16px;
		width: auto;
		padding-right: 2px;
	}
</style>