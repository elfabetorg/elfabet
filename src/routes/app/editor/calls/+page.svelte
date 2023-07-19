<script>
	import Search from "$lib/components/general/Search.svelte";
	import Table from "$lib/components/general/Table.svelte";

	export let callTabs = ["Active Calls", "Inactive Calls", "Unlisted Calls"];

</script>

<div id="calls-tab">
	<Search type="full" />
	<Table tabs={callTabs}/>
</div>

<style>
	p {
		margin-top: 32px;
		margin-left: 32px;
	}
</style>