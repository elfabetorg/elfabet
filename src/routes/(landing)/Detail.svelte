<script>

	import DetailSection from "./DetailSection.svelte";

	const detailSectionData = [
		{
			reverse: false,
			title: 'Pay what you want.',
			sections: [
				[
					'We’re not a big corporation.', 'We don’t want to drain your bank account. Elfabet is custom-made for the literary community and we know everyone’s always strapped for cash, which is why we’ll always be free (up to a point— server space is expensive, and we know just how many submissions some of you get!)'
				],
				[
					'Support us through Patreon to gain extra perks, like additional storage.', 'Or, instead of paying us, spend that money on paying contributors and staff. The Patreon will be available upon Elfabet’s official launch and all money earned through it will go directly back into Elfabet. To support us, (Abigail and Ariel) directly — not Elfabet — feel free to donate to us through our Ko-Fi.'
				],
				[
					'Oh, and we don’t take a cut out of submission fees and submitter donations.', 'None of that 5% + 99 cents stuff, wink wink. Except we’re forced to take a tiny little cut (just 2.7% of the total—don’t worry!), because we want to handle your payment information safely with Stripe.'
				]
			],
			imagePath: "landing/pricing_i.svg"
		},
		{
			reverse: true,
			title: 'Focus on what matters.',
			sections: [
				[
					'Spending too much time clicking buttons, moving pieces around?', 'Tired of manually assigning submissions to team members, of manually mass sending rejections? Set up your workflow once — select who submissions go to first, then choose between a ranking or upvote system to decide what actions a submission has to go through to get passed up. We’ll auto-reject all other submissions according to your template and save you the effort, letting you get back to submitters sooner.'
				],
				[
					'Help us make this better.', 'If you’re an editor seeing this, it would mean the world to us if you could take a few minutes out of your day and fill out this form detailing your process for sorting through submissions, so we can ensure we have specific features that allow everyone to more or less stick to their current processes— just vastly improved versions.'
				]
			],
			imagePath: "landing/automation_i.svg"
		},
		{
			reverse: false,
			title: 'See everything in one place.',
			sections: [
				[
					'Finally, an actual Message tab.', 'Contact editors and submitters separately either through informal, DM-esque messages or more formalized, email-like ones, both situated right here in Elfabet’s Message tab, with all your messages in one place. Raving to your fellow editors about a fantastic new submission has never been easier— directly select it from your submission docket, paste in your editor group chat, sit back, and enjoy everyone’s excited cries of “This is the one,” all without leaving Elfabet. Similarly, instead of juggling fifteen different contributor submission tabs, look through everyone’s excited replies to your acceptance message in a neat, compact list.'
				],
				[
					'Wider file support.', 'We have Google Drive and Google Docs integration, just in case you’re tired of sorting through all those docx. files. Using Docs also helps us free up server space, letting us keep Elfabet free for as many people as possible.'
				]
			],
			imagePath: "landing/centralization_i.svg"
		}
	];
</script>

<div id="detail">
	<h1>Elfabet lets you...</h1>
	{#each detailSectionData as section}
		<DetailSection title={section.title} sections={section.sections} imagePath={section.imagePath} reverse={section.reverse}/>
	{/each}
</div>

<style>
	#detail {
		color: var(--accent);
		text-align: center;
		padding-top: 72px;
	}
	p {
		color: black;
	}
	h1 {
		font-size: 30px;
		font-weight: normal;
	}
</style>