<script>
	import DeviceDetector from "svelte-device-detector";
	import Blobs from "../Blobs.svelte";
</script>

<div id="contact">
	<h1>Contact</h1>
	<p>
		We’re still in very early development and would love any and all of your comments, feedback, thoughts, ramblings, a laundry list of everything you hate about managing submissions. Seriously — we want to hear anything you have to tell us.
		
TO CONTACT, EITHER:
⭐ ️Email us at <a href="mailto:elfabet.contact@gmail.com">elfabet.contact@gmail.com</a>
⭐ ️Shoot us a DM at @elfabetorg on <a href="https://twitter.com/elfabetorg" target=”_blank”>Twitter</a> or <a href="https://www.instagram.com/elfabetorg/" target=”_blank”>Instagram</a>
⭐️ Drop a message in our Discord

Also feel free to send a message through an alligator friend. Arnold (our alligator mascot) loves to socialize, so we’ll probably receive your feedback very quickly.
	</p>
	<!-- TODO make blobs work for mobile -->
	<DeviceDetector showInDevice="desktop">
	<Blobs />
	</DeviceDetector>
</div>

<style>
	#contact {
		text-align: center;
		display: flex;
		padding-top: 36px;
		flex-direction: column;
		align-items: center;
		height: calc(100vh - var(--nav-height));
		padding-left: 48px;
		padding-right: 48px;
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