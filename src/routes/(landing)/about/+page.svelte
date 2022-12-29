<script>
	import BioSection from "./BioSection.svelte";
	import Blobs from "../Blobs.svelte";
</script>

<div id="about">
	<Blobs />
	<div class="content">
		<h1>About</h1>
		<BioSection />
	</div>
</div>

<style>
	#about {
		text-align: center;
	}
	h1 {
		position: relative;
		padding: 36px;
	}
</style>