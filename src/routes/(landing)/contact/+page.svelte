<script>
	import Blobs from "../Blobs.svelte";
</script>

<div id="contact">
	<h1>Contact</h1>
	<p>
		We’re still in very early development and would love any and all of your comments, feedback, thoughts, ramblings, a laundry list of everything you hate about managing submissions. Seriously — we want to hear anything you have to tell us.
		
TO CONTACT, EITHER:
⭐ ️Email us at elfabet.contact@gmail.com
⭐ ️Shoot us a DM at @elfabetorg on Twitter
⭐️ Drop a message in our Discord

Also feel free to send a message through an alligator friend. Arnold (our alligator mascot) loves to socialize, so we’ll probably receive your feedback very quickly.
	</p>
	<Blobs />
</div>

<style>
	#contact {
		text-align: center;
		display: flex;
		padding-top: 72px;
		flex-direction: column;
		align-items: center;
		height: calc(100vh - var(--nav-height));
	}
	p {
		white-space: pre-wrap;
		max-width: 720px;
		text-align: left;
		line-height: 24px;
	}
	h1, p {
		z-index: 2;
	}
</style>