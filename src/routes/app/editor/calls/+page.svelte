<script>
	import Search from "$lib/components/general/Search.svelte";
	import CallsTable from "./CallsTable.svelte";
	import CallDetailView from "./CallDetailView.svelte";
	import DetailView from "$lib/components/general/DetailView.svelte";
	import Alert from "$lib/components/general/Alert.svelte";
	import ModalView from "$lib/components/general/ModalView.svelte";
	import JSZip from 'jszip';

	let searchText = "";

	// Table constants
	let currentTabIndex = 0;
	const tabs = ["Active Calls", "Inactive Calls", "Unlisted Calls", "Drafts"];
	const columnTitles = ["Title", "Ends On", "Capacity"];

	// Table dynamic
	let copyActive = false;
	let trashActive = false;
	let recycleActive = false;
	let activeCall = {};
	let fetchDataAgain = false;
	let showDetailView = false;
	let showModalView = false;

	// Modal alert constants
	let copyAlertData = {
		title: "Are you sure you want to duplicate this call?",
		desc: "You can always delete the new one if you change your mind."
	};
	let trashAlertData = {
		title: "Are you sure you want to delete this call?",
		desc: "This action is NOT reversible! PLEASE BE WARNED!"
	};
	let recycleAlertData = {
		title: "Are you sure you want to recycle all of your unlisted and inactive calls?",
		desc: "This action is NOT reversible! PLEASE BE WARNED!",
		alertCopy: "Are you sure you want to recycle your files? This will download your inactive and unlisted calls as a ZIP file."
	}
	
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

	const promptDownloadFile = (json) => {
		const zip = new JSZip();
		zip.file("callsToRecycle.json", json); // Add the JSON file to the zip

		// Generate the zip file as a Blob
		zip.generateAsync({type:"blob"})
		.then(function(content) {
			// Create a URL for the Blob
			const fileUrl = URL.createObjectURL(content);

			// Create a temporary anchor element and trigger a download
			const anchor = document.createElement('a');
			anchor.href = fileUrl;
			anchor.download = 'callsToRecycle.zip'; // Name of the downloaded zip file
			document.body.appendChild(anchor); // Required for Firefox
			anchor.click();

			// Cleanup
			document.body.removeChild(anchor);
			URL.revokeObjectURL(fileUrl);
		});
	}

	const recycleCalls = async () => {
		const unlistedCalls = await fetch(`/api/calls/fetchCalls?` + new URLSearchParams({
			status: ['unlisted'],
			getRaw: true
		})).then((res) => res.json());
		const inactiveCalls = await fetch(`/api/calls/fetchCalls?` + new URLSearchParams({
			status: ['inactive'],
			getRaw: true
		})).then((res) => res.json());
		const callsToRecycle = [...unlistedCalls, ...inactiveCalls];
		let json = JSON.stringify(callsToRecycle);
		if (confirm(recycleAlertData.alertCopy)) {
			promptDownloadFile(json);
			await fetch(`/api/calls/deleteCall?` + new URLSearchParams({ status: ['unlisted'] }) , { 
				method: 'DELETE'
			});
			await fetch(`/api/calls/deleteCall?` + new URLSearchParams({ status: ['inactive'] }) , { 
				method: 'DELETE'
			});
		};
		console.log(json);
	}

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

	const handleImportCalls = () => {
		showModalView = true;
	};

</script>

<div id="calls-tab">
	<Search type="full" bind:searchText={searchText} bind:recycleActive={recycleActive}/>
	<div class="row">
		<button on:click={handleAddCall}>Add Call</button>
		<button on:click={handleImportCalls}>Import Calls</button>
	</div>
	<CallsTable bind:searchText={searchText} bind:selectedTabIndex={currentTabIndex} bind:copyActive={copyActive} bind:trashActive={trashActive} bind:activeCall={activeCall} bind:fetchDataAgain={fetchDataAgain} bind:showDetailView={showDetailView} {tabs} {columnTitles} />
	<Alert bind:active={copyActive} title={copyAlertData.title} desc={copyAlertData.desc} action={duplicateCall} />
	<Alert bind:active={trashActive} title={trashAlertData.title} desc={trashAlertData.desc} action={deleteCall} />
	<Alert bind:active={recycleActive} title={recycleAlertData.title} desc={recycleAlertData.desc} action={recycleCalls} />
	<DetailView bind:showDetailView={showDetailView}>
		<CallDetailView bind:call={activeCall} />
	</DetailView>
	<ModalView bind:showModalView={showModalView}>
		<h1>I'm a modal view!</h1>
		<!-- TODO: make file modal view component -->
	</ModalView>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		gap: 16px;
	}
</style>