<script>
	import { onMount, onDestroy } from 'svelte';

	let quillInstance;
	let editorContainer;

	export let deltaContent = null; // Default to null if no delta is passed
	export let placeholderText;
	export let currentDelta = {}; // This will store the typed content in Delta format

	onMount(async () => {
		// Ensure we're in a browser environment before importing and initializing Quill
		if (typeof window !== 'undefined') {
			const Quill = (await import('quill')).default;
			quillInstance = new Quill(editorContainer, {
				theme: 'bubble', 
				placeholder: placeholderText
			});
			if (deltaContent) {
				quillInstance.setContents(deltaContent); // Set initial content with the Delta
			}
			quillInstance.on('text-change', () => {
				currentDelta = quillInstance.getContents(); // Get content as Delta
				dispatchEvent('change', currentDelta);
			});
		}
	});

	onDestroy(() => {
		if (quillInstance) {
			quillInstance.off('text-change');
			quillInstance = null;
		}
	});

	function dispatchEvent(eventName, detail) {
		const event = new CustomEvent(eventName, {
			detail,
			bubbles: true,
			cancelable: true
		});
		editorContainer.dispatchEvent(event);
	}
</script>

<svelte:head>
	<link href="https://cdn.quilljs.com/1.3.6/quill.bubble.css" rel="stylesheet">
</svelte:head>

<div bind:this={editorContainer} class="quill-editor"></div>

<style>
	.quill-editor {
		height: 200px; 
		width: 1100px;
		border: 1px solid var(--gray);
		font-family: 'Lato';
		padding: 0px;
		border-radius: 8px;
	}

</style>
