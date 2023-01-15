<script>
	import DiscordButton from "./DiscordButton.svelte";
	import WaitlistButton from "./WaitlistButton.svelte";

	const discordInviteURL = "https://discord.gg/AGvQqFAj";
	const waitlistURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
</script>

<section id="hero">
	<div class="container">
		<img src="landing/arnold.svg" />
		<h1> Manage your submissions 
without losing your sanity
(& your life savings)
		</h1>
		<p>Elfabet is an intuitive, pay-what-you-want submission manager optimized for the literary community. Made for editors, by editors. Launching Fall 2023.</p>
	</div>
	<div class="buttons-row">
		<WaitlistButton />
		<DiscordButton />
	</div>
</section>

<style>
	#hero {
		display: flex;
		flex-direction: column;
		gap: 32px;
		justify-content: center;
		align-content: center;
		align-items: center;
		height: calc(100vh - var(--nav-height));
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-content: center;
		align-items: center;
	}
	img {
		height: 141px;
		width: auto;
		margin-bottom: 26px;
	}
	h1 {
		font-family: 'DM Sans';
		font-style: normal;
		font-weight: 500;
		font-size: 30px;
		line-height: 140%;
		text-align: center;
		color: var(--accent);
		white-space: pre-wrap;
		margin: 0px;
	}
	p {
		text-align: center;
		max-width: 629px;
		line-height: 160%;
		margin-top: 24px;
	}
	.buttons-row {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
</style>
