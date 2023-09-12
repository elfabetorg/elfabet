<script>
	import Search from "$lib/components/general/Search.svelte";
	import CallsTable from "$lib/components/general/CallsTable.svelte";
	import Alert from "$lib/components/general/Alert.svelte";

	let searchText = "";

	// Table constants
	let currentTabIndex = 0;
	const tabs = ["Active Calls", "Inactive Calls", "Unlisted Calls"];
	const columnTitles = ["Title", "Ends On", "Capacity"];

	// Table dynamic
	let copyActive = false;
	let trashActive = false;
	let activeCall = {};
	let fetchDataAgain = false;

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

	const deleteCall = () => {
		// await fetch('/api/calls/deleteCall', { 
		// 	method: 'POST', 
		// 	body: JSON.stringify({ activeCall }),
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	}
		// });
		// fetchDataAgain = true;
	};

</script>

<div id="calls-tab">
	<Search type="full" bind:searchText={searchText}/>
	<CallsTable bind:searchText={searchText} bind:selectedTabIndex={currentTabIndex} bind:copyActive={copyActive} bind:trashActive={trashActive} bind:activeCall={activeCall} bind:fetchDataAgain={fetchDataAgain} {tabs} {columnTitles} />
	<Alert bind:active={copyActive} title={copyAlertData.title} desc={copyAlertData.desc} action={duplicateCall} />
	<Alert bind:active={trashActive} title={trashAlertData.title} desc={trashAlertData.desc} action={deleteCall} />
</div>

<style>

</style>