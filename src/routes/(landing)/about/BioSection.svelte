<script>

	import Bio from "./Bio.svelte";

	// TODO make gmail icon links work

	const bioData = [
		{
			name: "Abigail Chang",
			title: "Co-founder",
			bio: "Abigail Chang is a writer and editor based in Taipei, Taiwan. Her work appears or is forthcoming in Fractured, Salamander, Moon City Review, Cortland Review, Citron Review, the Shore, Gone Lawn, and elsewhere. In her spare time, she enjoys listening to Frank Ocean and drinking too many iced lattes. Find her at twitter @honeybutterball or at <a href='https://abigailchang.carrd.co'>https://abigailchang.carrd.co</a>",
			socials: [
				{
					name: "Gmail",
					link: "mailto:abigail.c.chang@gmail.com",
					imagePath: "about/gmail.svg"
				},
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/abigail-chang-80264b216/",
					imagePath: "about/linkedin.svg"
				},
				{
					name: "Twitter",
					link: "https://twitter.com/honeybutterball",
					imagePath: "about/twitter.svg"
				},
			],
		},
		{
			name: "Ariel Cheng",
			title: "Co-founder",
			bio: "Ariel Cheng is a developer and aspiring researcher who splits her time between Taipei, Taiwan and Southborough, Massachusetts. She is fond of llamas, Jung’s theory of cognitive functions, the AI Alignment problem and 3Blue1Brown. Her writing has been recognized by the Scholastic Awards. If you would like to discuss paperclip maximizers or free will, email her at ariel.kerry@gmail.com",
			socials: [
				{
					name: "Github",
					link: "https://github.com/arielCheng218",
					imagePath: "about/github.svg"
				},
				{
					name: "Gmail",
					link: "mailto:ariel.kerry@gmail.com",
					imagePath: "about/gmail.svg"
				},
				{
					name: "Twitter",
					link: "https://twitter.com/arielchengg",
					imagePath: "about/twitter.svg"
				}
			],
		},
	];
</script>

<section id="bio-section">
	{#each bioData as bio}
		<Bio name={bio.name} title={bio.title} bio={bio.bio} imagePath={bio.imagePath} socials={bio.socials}/>
	{/each}
</section>

<style>
	#bio-section {
		display: flex;
		justify-content: center;
		gap: 32px;
		z-index: 2;
		position: relative;
	}
	/* Mobile */
	@media screen and (max-width:420px) {
		#bio-section {
			flex-direction: column;
			gap: 64px;
		}
	}
</style>