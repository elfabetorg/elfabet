<svelte:head>
	<!-- Quill theme -->
	<link rel="preconnect" href="https://cdn.quilljs.com" crossorigin>
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css">
</svelte:head>

<script>
	import RichTextEditor from '$lib/components/general/RichTextEditor.svelte';

	export let form;
	export let call;

	// Local state
	let editedTitle = call.title; // a local state

	// Visual state variables
	let editMode = false;

	function handleContentChange(event) {
	}

	const editCall = async () => {
		const changedProperties = { title: editedTitle, form: { description: form.description } }; // Adjust as needed
		const response = await fetch('/api/calls/editCall', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ call, changedProperties })
		});
		const result = await response.json();
		call = result.body.modifiedCall;
	};

</script>

<div id="call-details-tab">
	<div class="row">
		<h3>Call Details</h3>
		<div class="spacer"></div>
		<button on:click={editCall}>Update Call</button>
	</div>
	<form action="">
		<div class="field">
			<label for="title">Title</label>
			<input name="title" id="title" type="text" placeholder="Enter title..." bind:value={editedTitle}>
		</div>
		<div class="field">
			<label for="description">Description</label>
			<div id="description" class="rich-text-container">
				<RichTextEditor placeholderText="Type your description here..." on:change={handleContentChange} bind:currentDelta={form.description} deltaContent={form.description}/>
			</div>
		</div>
	</form>
</div>

<style>
	#call-details-tab {
		width: 1100px;
		margin-left: 32px;
		margin-top: 16px;
	}
	.field {
		margin-top: 16px;
		margin-bottom: 16px;
	}
	label {
		font-weight: 600;
	}
	label, textarea, input {
		display: block;
		font-size: 14px;
		margin-bottom: 6px;
	}
	textarea, input {
		width: 98.5%;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		white-space: nowrap;
	}
	.spacer {
		width: 100%;
	}
	/* p {
		font-size: 14px;
		font-style: italic;
		font-weight: 400;
		margin-top: 2px;
		margin-bottom: 4px;
		color: var(--neutral-dark-gray, #868687);
	} */
	
</style>

<!-- 		<textarea name="description" id="description" placeholder="Type something here..." cols="30" rows="10"></textarea> -->