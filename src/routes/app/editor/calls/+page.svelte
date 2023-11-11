<script>
	import Search from "$lib/components/general/Search.svelte";
	import CallsTable from "./CallsTable.svelte";
	import CallDetailView from "./CallDetailView.svelte";
	import DetailView from "$lib/components/general/DetailView.svelte";
	import Alert from "$lib/components/general/Alert.svelte";

	let searchText = "";

	// Table constants
	let currentTabIndex = 0;
	const tabs = ["Active Calls", "Inactive Calls", "Unlisted Calls", "Drafts"];
	const columnTitles = ["Title", "Ends On", "Capacity"];

	// Table dynamic
	let copyActive = false;
	let trashActive = false;
	let activeCall = {};
	let fetchDataAgain = false;
	let showDetailView = false;

	// Modal alert constants
	let copyAlertData = {
		title: "Are you sure you want to duplicate this call?",
		desc: "You can always delete the new one if you change your mind."
	};
	let trashAlertData = {
		title: "Are you sure you want to delete this call?",
		desc: "This action is NOT reversible! PLEASE BE WARNED!"
	};
	
	const duplicateCall = async () => {
		await fetch('/api/calls/duplicateCall', { 
			method: 'POST', 
			body: JSON.stringify({ activeCall }),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		fetchDataAgain = true; 
	};

	const deleteCall = async () => {
		const callID = activeCall._id;
		await fetch(`/api/calls/deleteCall?` + new URLSearchParams({ docID: callID }) , { 
			method: 'DELETE'
		});
		fetchDataAgain = true;
	};

	const handleAddCall = () => {
		// Generate a new call object with default properties
		activeCall = {
			_id: null,
			title: 'New Call', // Default title
			endsOn: {
				type: 'Date', // Default endsOn type
				date: new Date().toISOString() // Default to current date and time
			},
			form: {
				// Assuming default structure for 'form' based on your application needs
				description: '', // Default description
				// Add other necessary default properties for the form
			},
		};
		showDetailView = true; // Show the detail view with the new call
	};

</script>

<div id="calls-tab">
	<Search type="full" bind:searchText={searchText}/>
	<button on:click={handleAddCall}>Add Call</button>
	<CallsTable bind:searchText={searchText} bind:selectedTabIndex={currentTabIndex} bind:copyActive={copyActive} bind:trashActive={trashActive} bind:activeCall={activeCall} bind:fetchDataAgain={fetchDataAgain} bind:showDetailView={showDetailView} {tabs} {columnTitles} />
	<Alert bind:active={copyActive} title={copyAlertData.title} desc={copyAlertData.desc} action={duplicateCall} />
	<Alert bind:active={trashActive} title={trashAlertData.title} desc={trashAlertData.desc} action={deleteCall} />
	<DetailView bind:showDetailView={showDetailView}>
		<CallDetailView bind:call={activeCall} />
	</DetailView>
</div>

<style>

</style>