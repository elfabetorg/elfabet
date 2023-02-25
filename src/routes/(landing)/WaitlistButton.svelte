<script>
	let waitlistURL = "https://forms.gle/nVG2GDkaMKDTeaKq9";
</script>

<a href={waitlistURL} target=”_blank”>
	<button class="filled">
		<img src="landing/logo_pure.svg" alt="Elfabet logo" class="button-image">
		<p>Join waitlist</p>
	</button>
</a>

<style>
	a {
		text-decoration: none;
	}
	button.filled {
		border: 1px solid var(--accent);
		background-color: var(--accent);
		color: white;
	}
	img.button-image {
		height: 16px;
		width: auto;
		padding-right: 2px;
	}
	p {
		font-size: 13px;
		line-height: 120%;
		white-space: nowrap;
	}
	@media screen and (max-width:420px) {
		p {
			white-space: inherit;
		}
	}
</style>