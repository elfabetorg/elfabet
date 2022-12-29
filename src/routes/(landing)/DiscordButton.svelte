<script>
	export let discordInviteURL;
</script>

<a href={discordInviteURL}>
	<button class="filled">
		<img src="landing/logo_pure.svg" alt="Elfabet logo" class="button-image">
		<p>Join waitlist</p>
	</button>
</a>

<style>
	button.filled {
		border: 1px solid var(--accent);
		background-color: var(--accent);
		color: white;
	}
	img.button-image {
		height: 16px;
		width: auto;
		padding-right: 2px;
	}
</style>