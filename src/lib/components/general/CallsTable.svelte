<script lang="ts">

	import { calls } from "$lib/interfaces/utils.ts";
	import { onMount } from "svelte";

	export let tabs;
	export let columnTitles;
	export let rowData;
	export let searchText;

	let selectedTabIndex = 0;
	let rowLimit = '20';
	let tabStatuses = ['active', 'inactive', 'unlisted']

	const handleSelectTab = (tab) => { selectedTabIndex = tabs.indexOf(tab) };

	const addCall = async (call) => {
		const response = await fetch('/api/calls/addCall', { 
			method: 'POST', 
			body: JSON.stringify({ call }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	};

	const fetchCallsAfterTabOrLimitChange = async () => {
		rowData = await fetch(`/api/calls/fetchCalls?status=${tabStatuses[selectedTabIndex]}&limit=${rowLimit}`).then((res) => res.json());
	};

	const fetchCallsAfterSearch = async (searchText) => {
		const url = `/api/calls/searchCalls/?status=${tabStatuses[selectedTabIndex]}&limit=${rowLimit}&searchText=${escape(searchText)}`;
		const fetchedData = await fetch(url).then((res) => res.json());
		rowData = fetchedData;
	};

	onMount(async () => {
		// Fetch data as soon as component is created
		rowData = await fetch(`/api/calls/fetchCalls?status=${tabStatuses[selectedTabIndex]}&limit=${rowLimit}`).then((res) => res.json());
	});

	// Dynamic statements
	$: selectedTabIndex, fetchCallsAfterTabOrLimitChange();
	$: rowLimit, fetchCallsAfterTabOrLimitChange();
	$: searchText, fetchCallsAfterSearch(searchText);  // re-fetch calls every time user searches for something

</script>

<div class="table">
	<div class="tabs">
		{#each tabs as tab}
			<button class={selectedTabIndex === tabs.indexOf(tab) ? 'tab selected' : 'tab'} on:click={() => handleSelectTab(tab) }>{tab}</button>
		{/each}
	</div>
	<table>
		<thead>
			<tr>
				{#each columnTitles as columnTitle}
					<td>
						{columnTitle}
					</td>
				{/each}
			</tr>
		</thead>
		{#each rowData as row}
			<tr>
				{#each row as col}
					<td>
						{col}
					</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>

<style>
	.table {
		width: calc(100% - 96px);
		margin: 40px 32px 20px 32px;
		background: white;
		border: 1px solid var(--light-gray);
		border-radius: 8px;
		font-size: 15px;
	}
	.tabs {
		display: flex;
		flex-direction: row;
	}
	button {
		all: unset;
	}
	.tab {
		border-bottom: 2px solid rgba(0, 0, 0, 0);
		color: var(--dark-gray);
		padding: 2px 8px 0px 8px;
		font-size: 14px;
		line-height: 32px;
	}
	.selected {
		border-bottom: 2px solid var(--accent);
		color: var(--accent);
		font-weight: bold;
	}
	table {
		border-collapse: collapse;
		width: 100%
	}
	thead {
		background: var(--light-gray);
		font-weight: bold
	}
	tr {
		line-height: 40px;
	}
	td {
		padding-left: 12px;
		width: 100px;
	}
</style>