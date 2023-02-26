<script>
	import AdditionalFeaturesCard from "./AdditionalFeaturesCard.svelte";

	const additionalFeaturesData_Editors = [
		{
			title: "Automated guideline checking",
			description: "No more novella submissions when you clearly publish poetry, or pieces that are 5k words over the word count."
		},
		{
			title: "Reminders",
			description: "Life is always getting in the way. Send gentle, no-stress reminders to your team after a while in case they’ve forgotten to get to the latest batch of submissions."
		},
		{
			title: "Templates",
			description: "Ready-made submission call templates for all genres that you’ll actually use. We’ll lay the foundation while still giving you complete customizability."
		}
	];

	const additionalFeaturesData_Writers = [
		{
			title: "Mass withdrawal",
			description: "Got a piece accepted? Withdraw it from every mag with one click instead of slowly messaging 20+ places individually."
		},
		{
			title: "Stay in touch",
			description: "Follow your favorite magazines. We’ll notify you when they open up for submissions."
		},
		{
			title: "What’s changed?",
			description: "Each time you log in, you’ll get a quick breakdown of  submission status changes (like if a previously ‘received’ submission is now ‘in-progress’)."
		}
	];
</script>

<section id="additional-features">
	<h1>Additional Features</h1>
	<h2>Quality of life improvements designed to make editing & submitting a little easier.</h2>
	<div class="cards">
		<div class="column">
			<h3>FOR EDITORS</h3>
			<div class="row">
				{#each additionalFeaturesData_Editors as card}
				<AdditionalFeaturesCard title={card.title} description={card.description}/>
				{/each}
			</div>
		</div>
		<div class="column">
			<h3>FOR WRITERS</h3>
			<div class="row">
				{#each additionalFeaturesData_Writers as card}
					<AdditionalFeaturesCard title={card.title} description={card.description}/>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	#additional-features {
		background-color: var(--accent);
		color: white;
		text-align: center;
		padding-top: 32px;
		padding-bottom: 80px;
		padding-left: 32px;
		padding-right: 32px;
	}
	h1 {
		font-size: 30px;
		font-weight: normal;
	}
	h2 {
		font-size: 18px;
		padding-bottom: 16px;
		font-weight: normal;
	}
	h3 {
		font-size: 16px;
		line-height: 32px;
		font-weight: 700;
		text-align: left;
		padding-top: 16px;
		font-weight: normal;
	}
	.row {
		display: flex;
		flex-direction: row;
		margin-bottom: 32px;
		gap: 32px;
	}
	.column {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.cards {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	@media screen and (max-width:420px) {
		.row {
			display: flex;
			flex-direction: column;
			gap: 32px;
		}
	}
</style>