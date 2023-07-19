<script lang="ts">

	import { calls } from "$lib/interfaces/utils.ts";

	// TODO: remove dummy data later

	export let tabs;
	export let rowData = [
		["Poetry - August 2023", "Quota", "100"],
		["Schrodinger Contest", "Sept 1, 2023", "30"]
	];
	export let columnTitles = ["Title", "Ends On", "Capacity"]
	
	let selectedTabIndex = 0;

	const handleSelectTab = (tab) => { const index = tabs.indexOf(tab); selectedTabIndex = index };


</script>

<div class="table">
	<div class="tabs">
		{#each tabs as tab}
			<button class={selectedTabIndex === tabs.indexOf(tab) ? 'tab selected' : 'tab'} on:click={() => selectedTabIndex = tabs.indexOf(tab) }>{tab}</button>
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
		width: 100%;
		line-height: 40px;
	}
	td {
		padding-left: 12px;
	}
</style>