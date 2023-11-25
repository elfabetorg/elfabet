<script>
	import RichTextEditor from '$lib/components/general/RichTextEditor.svelte';
	import { getUTCDateForMongoDB } from '$lib/utils/mongoDButils.js';

	export let form;
	export let call;

	// Local state
	let editedTitle = call.title; 
	let editedEndsOnType = call.endsOn.type;
	let initialDate = call.endsOn.type === 'Date' ? new Date(call.endsOn.date).toISOString().slice(0, 16) : null;
	let editedEndsOnDate = initialDate;

	// Visual state variables
	let editMode = false;
	
	function handleContentChange(event) {
	}

	const handleSaveChanges = () => {
		if (call._id === null) {
			// User is adding a new call
			addCall(call);
		} else {
			editCall();
		}
	}

	const getEditedCall = () => {
		const editedCall = { 
			title: editedTitle,
			form: { description: form.description }, 
			endsOn: { 
				type: editedEndsOnType, 
				date: editedEndsOnType === 'Date' ? getUTCDateForMongoDB(editedEndsOnDate) : null
			},
		};
		if (editedCall.endsOn.date === null) {
			delete editedCall.endsOn.date;
		}
		return editedCall;
	}

	const editCall = async () => {
		const changedProperties = getEditedCall();
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

	const addCall = async (call) => {
		const activeCall = getEditedCall();
		activeCall.submissionIDs = [];
		activeCall.status = "draft";
		const response = await fetch('/api/calls/addCall', { 
			method: 'POST', 
			body: JSON.stringify({ activeCall }),
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const result = await response.json();
		call = result.body.call;
	};

</script>

<svelte:head>
	<link rel="preconnect" href="https://cdn.quilljs.com" crossorigin>
	<link rel="stylesheet" href="https://cdn.quilljs.com/1.3.7/quill.snow.css">
</svelte:head>

<div id="call-details-tab">
	<div class="row">
		<h3>Call Details</h3>
		<div class="spacer"></div>
		<button on:click={handleSaveChanges}>Save changes</button>
	</div>
	<form action="">
		<div class="field">
			<label for="title">Title</label>
			<input name="title" id="title" type="text" placeholder="Enter title..." bind:value={editedTitle}>
		</div>
		<div class="field">
			<label for="endson-type">Ends On</label>
			<select name="endson-type" id="endson-type" bind:value={editedEndsOnType}>
				<option value="Date">Date</option>
				<option value="Quota">Quota</option>
				<option value="Never">Never</option>
			</select>
		</div>
		{#if editedEndsOnType === 'Date'}
			<div class="field">
				<label for="endson-date">End Date (UTC Time)</label>
				<input type="datetime-local" name="endson-date" id="endson-date" bind:value={editedEndsOnDate} />
			</div>
		{/if}
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