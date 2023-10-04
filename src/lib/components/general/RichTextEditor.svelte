<script>
	import { onMount, onDestroy } from 'svelte';

	let quillInstance;
	let content = '';
	let editorContainer;

	$: console.log(content)

	onMount(async () => {
			// Ensure we're in a browser environment before importing and initializing Quill
			if (typeof window !== 'undefined') {
					const Quill = (await import('quill')).default;

					quillInstance = new Quill(editorContainer, {
							theme: 'snow',
							modules: {
									toolbar: true
							}
					});

					quillInstance.on('text-change', () => {
							content = quillInstance.root.innerHTML;
							dispatchEvent('change', content);
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
	<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>

<div bind:this={editorContainer} class="quill-editor"></div>

<style>
	.quill-editor {
			height: 400px; /* or any desired default height */
	}
</style>
