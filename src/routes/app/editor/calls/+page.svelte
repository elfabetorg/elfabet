<script>
	import Search from "$lib/components/general/Search.svelte";
	import CallsTable from "$lib/components/general/CallsTable.svelte";

	let searchText = "";

	// Table constants
	let currentTabIndex = 0;
	const tabs = ["Active Calls", "Inactive Calls", "Unlisted Calls"];
	const columnTitles = ["Title", "Ends On", "Capacity"];

	// Table dynamic
	let copyActive = false;
	let trashActive;

	$: console.log(copyActive)

</script>

<div id="calls-tab">
	<Search type="full" bind:searchText={searchText}/>
	<CallsTable bind:searchText={searchText} bind:selectedTabIndex={currentTabIndex} bind:copyActive={copyActive} bind:trashActive={trashActive} {tabs} {columnTitles} />
</div>

<style>

</style>