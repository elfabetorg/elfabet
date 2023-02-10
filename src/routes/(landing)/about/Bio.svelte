<script>
	import { onMount } from "svelte";

	export let name;
	export let title;
	export let bio;
	export let imagePath;
	export let socials;

</script>

<div class="bio">
	<img class="profile-image" src={imagePath} alt="An image of {name}, one of Elfabet's co-founders.">
	<h2>{name}</h2>
	<h3>{title}</h3>
	<p>{bio}</p>
	<div class="social-icons">
		{#each socials as social}
			<a href={social.link} target=”_blank”> <img id={social.imagePath} class="icon" src={social.imagePath} alt="A link to {name}'s {social.name} account." /> </a>
		{/each}
	</div>
</div>

<style>
	.bio {
		display: flex;
		flex-direction: column;
		text-align: left;
		margin-left: 48px;
		margin-right: 48px;
	}
	.social-icons {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 16px;
		margin-top: 16px;
	}
	.profile-image {
		max-height: 240px;
		max-width: 240px;
		object-fit: cover;
	}
	.icon {
		width: 24px;
	}
	p {
		text-align: left;
		max-width: 320px;
		margin: 0px;
	}
	h2 {
		margin-top: 32px;
		margin-bottom: 16px;
	}
	h3 {
		margin-top: 0px;
		margin-bottom: 16px;
		color: var(--accent);
	}
</style>