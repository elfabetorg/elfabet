<script>
	export let imagePath;
	export let text;
	export let navPath;
	export let currentTab;

	let linkColor = "var(--black)";
	let textWeight = "400";

	$: {
		// Change current tab to purple
		if (currentTab === `${text}-tab`) {
			linkColor = "var(--accent)";
			textWeight = "700";
		} else {
			linkColor = "var(--black)";
			textWeight = "400";
		}
	}
</script>

<div id="{text}-tab" class="navbar-link">
	<a href={navPath}>
		<img style="color:{linkColor}" src={imagePath} alt="An icon">
		<p style="color:{linkColor}; font-weight:{textWeight}">{text}</p>
	</a>
</div>

<style>
	a {
		display: flex;
		flex-direction: row;
		gap: 20px;
		text-decoration: none;
	}
	p {
		color: var(--black);
		font-size: 18px;
		font-family: Lato;
		font-style: normal;
		font-weight: 400;
		line-height: 20px;
	}
</style>