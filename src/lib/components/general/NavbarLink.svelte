<script>
	export let imagePath;
	export let text;
	export let navPath;
	export let currentTab;

	let currentImagePath = "";

	let linkColor = "var(--black)";
	let textWeight = "400";

	$: {
		// Change current tab to purple
		if (currentTab === `${text}-tab`) {
			linkColor = "var(--accent)";
			textWeight = "700";
			console.log(imagePath);
			currentImagePath = `${imagePath}-active.svg`; 
		} else {
			linkColor = "var(--black)";
			textWeight = "400";
			currentImagePath = `${imagePath}.svg`; 
		}
	}
</script>

<div id="{text}-tab" class="navbar-link">
	<a href={navPath}>
		<img src="{currentImagePath}" alt="An icon">
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
		white-space: nowrap;
		margin: 0;
	}
	img {
		color: currentColor;
	}
</style>