<script>
	let discordInviteURL = "https://discord.gg/9tMFWwDHcV";
</script>

<a href={discordInviteURL}>
	<button class="outline">
		<img src="landing/discord.svg" alt="Discord logo" class="button-image">
		<p>Join Discord</p>
	</button>
</a>

<style>
	a {
		text-decoration: none;
	}
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
	p {
		font-size: 14px;
	}
</style>