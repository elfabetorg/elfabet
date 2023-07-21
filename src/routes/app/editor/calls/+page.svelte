<script>
	import Search from "$lib/components/general/Search.svelte";
	import CallsTable from "$lib/components/general/CallsTable.svelte";

	let rowData = [];

	// Search
	let searchText = "";

	// Table
	let currentTabIndex = 0;
	let callTabs = ["Active Calls", "Inactive Calls", "Unlisted Calls"];
	let columnTitles = ["Title", "Ends On", "Capacity"];

</script>

<div id="calls-tab">
	<Search type="full" bind:searchText={searchText} />
	<CallsTable bind:selectedTabIndex={currentTabIndex} bind:searchText={searchText} tabs={callTabs} {columnTitles} bind:rowData={rowData} />
</div>

<style>

</style>