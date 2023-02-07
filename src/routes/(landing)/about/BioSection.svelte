<script>

	import Bio from "./Bio.svelte";

	// TODO make gmail icon links work

	const bioData = [
		{
			name: "Abigail Chang",
			title: "Co-founder",
			bio: "Abigail Chang is a writer and editor based in Taipei, Taiwan. Her work appears or is forthcoming in Fractured Lit, Half-Mystic, the Cortland Review, the Citron Review, the Shore, Gone Lawn, Parentheses Journal and elsewhere. In her spare time, she listens to Frank Ocean and drinks too many iced lattes. Find her at twitter @honeybutterball",
			socials: [
				{
					link: "",
					imagePath: "about/gmail.svg"
				},
				{
					link: "https://www.linkedin.com/in/abigail-chang-80264b216/",
					imagePath: "about/linkedin.svg"
				},
				{
					link: "https://twitter.com/honeybutterball",
					imagePath: "about/twitter.svg"
				},
			],
			imagePath: "about/Abigail.png"
		},
		{
			name: "Ariel Cheng",
			title: "Co-founder",
			bio: "Ariel Cheng is a developer and aspiring researcher who splits her time between  Taipei, Taiwan and Southborough, Massachusetts. She is fond of llamas, Google Scholar, Jung’s theory of cognitive functions, the AI Alignment problem and 3Blue1Brown. If you have a half-impossible idea or a pedantic inaccuracy to complain about, email her at ariel.kerry@gmail.com",
			socials: [
				{
					link: "https://github.com/arielCheng218",
					imagePath: "about/github.svg"
				},
				{
					link: "",
					imagePath: "about/gmail.svg"
				},
				{
					link: "https://twitter.com/arielchengg",
					imagePath: "about/twitter.svg"
				}
			],
			imagePath: "about/Ariel.png"
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