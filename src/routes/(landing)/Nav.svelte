<script>
	import DeviceDetector from "svelte-device-detector";
	import { onMount } from "svelte";
	import DiscordButton from "./DiscordButton.svelte";
	import WaitlistButton from "./WaitlistButton.svelte";
	
	const discordInviteURL = "https://discord.gg/9tMFWwDHcV"
	const waitlistURL = "https://mailchimp.com/";

	let height;

	onMount(() => {
		document.querySelector(':root').style.setProperty('--nav-height', `${height}px`);
	});

</script>

<nav bind:clientHeight={height}>
	<div id="nav-links">
		<a href="/"><img src="landing/logo.svg" alt="Elfabet logo"/></a>
		<a href="/about">About</a>
		<a href="/contact">Contact</a>
		<a href="https://ko-fi.com/elfabet#paypalModal">Support us!</a>
	</div>
	<DeviceDetector showInDevice="desktop">
		<div class="buttons-row">
			<WaitlistButton {waitlistURL} />
				<DiscordButton {discordInviteURL} />
		</div>
	</DeviceDetector>
</nav>	

<style>
	nav {
		top: 0;
		position: sticky;
		position: -webkit-sticky;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 16px 36px;
		background: #FDFDFD;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
		z-index: 3;
	}
	#nav-links {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-items: center;
		justify-content: center;
		gap: 16px;
	}
	.buttons-row {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
	img {
		height: 38px;
		width: auto;
	}
	a {
		font-size: 14px;
		line-height: 20px;
		text-decoration: none;
		margin-right: 16px;
		color: var(--accent);
	}
</style>