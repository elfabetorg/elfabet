<script>
	import WaitlistButton from "./WaitlistButton.svelte";
	import DiscordButton from "./DiscordButton.svelte";
</script>

<section id="join-waitlist">
	<img src="/landing/arnold_hungry.svg" />
	<h1>Want updates? Join the waitlist!</h1>
	<p>Or, loiter around on our Discord. Don’t worry, we won’t bite. (But our alligator, Arnold might).</p>
	<div class="buttons-row">
		<WaitlistButton />
		<DiscordButton />
	</div>
</section>

<style>
	#join-waitlist {
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
		align-items: center;
		margin-top: calc(2 * var(--nav-height) + 4px);
	}
	h1 {
		color: var(--accent);
		font-size: 30px;
		margin-top: 30px;
		margin-bottom: 4px;
		font-weight: normal;
	}
	p {
		max-width: 400px;
	}
	.buttons-row {
		margin-top: 32px;
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
	/* Mobile */
	@media screen and (max-width:420px) {
		img {
			width: 320px;
		}
	}
</style>