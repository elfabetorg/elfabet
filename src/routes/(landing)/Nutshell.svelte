<script>
	import NutshellCard from "./NutshellCard.svelte";

	const basePath = "landing/"

	const cardData = [
		{
			category: "pricing",
			content: "No need to sell your arm. Pay us whatever you want.",
			imagePath: `${basePath}pricing.svg`
		},
		{
			category: "automation",
			content: "Set up your workflow once. That's it.",
			imagePath: `${basePath}automation.svg`
		},
		{
			category: "centralization",
			content: "Edit. Message. Discuss. All in one place.",
			imagePath: `${basePath}centralization.svg`
		}
	];

</script>

<section id="nutshell">
	<div class="container">
		<h3>Elfabet in a nutshell</h3>
		<div class="cards-container">
			{#each cardData as card}
				<NutshellCard category={card.category} content={card.content} imagePath={card.imagePath}/>
			{/each}
		</div>
	</div>
</section>

<style>
	#nutshell {
		background-color: var(--accent);
		display: flex;
		flex-direction: column;
		align-content: center;
		align-items: center;
		justify-content: center;
	}
	.container {
		padding-top: 80px;
		padding-bottom: 120px;
	}
	.cards-container {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
	h3 {
		color: white;
		font-weight: 500;
		font-size: 20px;
		line-height: 36px;
		text-align: center;
	}
</style>