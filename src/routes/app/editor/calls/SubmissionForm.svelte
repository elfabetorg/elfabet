<svelte:head>
	<!-- Quill theme -->
	<link rel="preconnect" href="https://cdn.quilljs.com" crossorigin>
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css">
</svelte:head>

<script>
	import RichTextEditor from '$lib/components/general/RichTextEditor.svelte';

	function handleContentChange(event) {
			console.log(event.detail); // updated HTML content from the editor
	}
	export let form;
	$: console.log(form);

	// Visual State Variables
	let editMode = false;

</script>

<div id="submission-form-content">
	<h3>Submission Form</h3>
	<RichTextEditor on:change={handleContentChange} />
</div>

<style>
	/*  */
</style>