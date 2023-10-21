<script>
	import TabView from '$lib/components/general/TabView.svelte';
	import CallDetailsTab from "./CallDetailsTab.svelte";
	import { mongoDateToReadableFormat } from '$lib/utils/mongoDButils.js';

  export let call;

	// Constants
	const tabs = [
    { label: 'Call Details' },
		{ label: 'Submission Form'},
    { label: 'Settings' },
    { label: 'Analytics' },
  ];
</script>

<div id="call-detail-view">
	<h1>{call.title}</h1>
	<div id="ends-on">
		{#if call.endsOn.type === 'Date'}
			<h3>Ends on {mongoDateToReadableFormat(call.endsOn.date)}</h3>
		{:else if call.endsOn.type === 'Quota'}
			<h3>Ends on Quota</h3>
		{/if}
	</div>
	
	<div id="tab-view">
		<TabView {tabs}>
			<div slot="tab-content" let:selectedTabIndex>
				{#if selectedTabIndex === 0}
					<CallDetailsTab bind:form={call.form} bind:call={call}/>
				{:else if selectedTabIndex === 1}
					<p>Content for Tab 2</p>
				{:else if selectedTabIndex === 2}
					<p>Content for Tab 3</p>
				{:else}
					<p>Content for Tab 4</p>
				{/if}
			</div>
		</TabView>
	</div>
</div>

<style>
	h1 {
		font-size: 24px;
		font-weight: 500;
	}
  h3 {
		font-size: 16px;
		font-weight: 500;
		color: var(--dark-gray);
	}
	#tab-view {
		background-color: #ffffff;
		border: 1px var(--gray) solid;
		border-radius: 8px;
		margin-top: 30px;
	}
</style>
