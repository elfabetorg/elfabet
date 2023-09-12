<script lang="ts">

	import ProgressBar from '$lib/components/general/ProgressBar.svelte';
	import { calls } from "$lib/interfaces/utils.ts";
	import { onMount } from "svelte";

	export let tabs;
	export let columnTitles;
	export let searchText;
	export let selectedTabIndex = 0;

	export let copyActive = false;
	export let trashActive = false;
	export let activeCall = {};
	export let fetchDataAgain = false;

	let rowData = [];
	let rawRowData = [];
	let rowLimit = '20';
	let tabStatuses = ['active', 'inactive', 'unlisted'];

	const handleSelectTab = (tab) => { selectedTabIndex = tabs.indexOf(tab) };

	const addCall = async (call) => {
		await fetch('/api/calls/addCall', { 
			method: 'POST', 
			body: JSON.stringify({ call }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
	};

	const fetchCalls = async (callsStatus, callsLimit, callsSearchText) => {
		rowData = await fetch(`/api/calls/fetchCalls?` + new URLSearchParams({
			status: callsStatus,
			limit: callsLimit,
			searchText: callsSearchText,
		})).then((res) => res.json());
		rawRowData = await fetch(`/api/calls/fetchCalls?` + new URLSearchParams({
			status: callsStatus,
			limit: callsLimit,
			searchText: callsSearchText,
			getRaw: true
		})).then((res) => res.json());
		fetchDataAgain = false;
	};

	// Dynamic statements
	$: fetchCalls(tabStatuses[selectedTabIndex], rowLimit, searchText); // re-fetch processed call data for table after search change
	$: fetchDataAgain, fetchCalls(tabStatuses[selectedTabIndex], rowLimit, searchText);

</script>

<div class="table">
	<div class="tabs">
		{#each tabs as tab}
			<button class={selectedTabIndex === tabs.indexOf(tab) ? 'tab selected' : 'tab'} on:click={() => handleSelectTab(tab)}>{tab}</button>
		{/each}
	</div>
	<table>
		<thead>
			<tr>
				{#each columnTitles as columnTitle, i}
					<td class={`${columnTitles[i]}-column column-title`}>
						{columnTitle}
					</td>
				{/each}
				<td class="button-column"></td>
				<td class="button-column"></td>
			</tr>
		</thead>
		{#if rowData.length > 0}
			{#each rowData as row, rowIndex}
				<tr class="call-row">
					{#each row as col, colIndex}
						<td class={`${columnTitles[colIndex]}-column`}>
							{#if colIndex === 2 && col.capacity === 'No maximum capacity'}
								{col.capacity}
							{:else if colIndex === 2}
								<!-- In the third column, if applicable, put a progress bar component in the table instead of text -->
								<ProgressBar value={col.value} maxValue={col.capacity}/>
							{:else}
								{col}
							{/if}
						</td>
					{/each}
					<td class="button-column">
						<img src="/app/calls/copy.svg" alt="Copy icon" on:click={() => { copyActive = true; activeCall = rawRowData[rowIndex]}}>
					</td>
					<td class="button-column">
						<img src="/app/calls/trash.svg" alt="Trash icon" on:click={() => { trashActive = true }}>
					</td>
				</tr>
			{/each}
		{/if}
	</table>
	{#if rowData.length === 0}
		<!-- TODO: replace this empty state -->
		<img src="/landing/arnold_hungry.svg" alt="A picture of hungry arnold">
		<h1>We couldn't find anything matching your request sorry :(((((</h1>
	{/if}
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
		line-height: 30px;
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
		font-weight: bold;
		width: 100px;
		padding-left: 12px;
	}
	td {
		padding-left: 12px;
		width: 80px;
		line-height: 40px;
	}
	.button-column {
		width: 4px;
		padding: 2px;
		padding-top: 4px;
	}
	img {
		cursor: pointer;
	}
	.Title-column {
		width: 140px;
		text-decoration: underline;
	}
	.column-title {
		text-decoration: none;
	}
</style>