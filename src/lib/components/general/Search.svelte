<script>

	export let type;

	// Logic state
	let text;
	let filterActive = false;
	let recycleActive = false;

	// Visual state
	let borderColor = "var(--gray)";
	let filterColor = "var(--dark-gray)";
	let filterBgColor = "none";

	const handleFocus = () => { borderColor = "var(--accent)" };
	const handleBlur = () => { borderColor = "var(--dark-gray)" };

	const handleFilterState = () => { if (filterActive) { filterColor = "var(--accent)"; filterBgColor = "var(--accent-05)"; } else { filterColor = "var(--dark-gray)"; filterBgColor = "var(--primary-white)" } };
	const toggleFilterState = () => { filterActive = !filterActive; };

	$: filterActive, handleFilterState();

</script>

<div class="search">
	{#if type === 'full'}
		<div class="row">
			<div>
				<svg id="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33301 2.66536C4.75568 2.66536 2.66634 4.7547 2.66634 7.33203C2.66634 9.90936 4.75568 11.9987 7.33301 11.9987C9.91034 11.9987 11.9997 9.90936 11.9997 7.33203C11.9997 4.7547 9.91034 2.66536 7.33301 2.66536ZM1.33301 7.33203C1.33301 4.01832 4.0193 1.33203 7.33301 1.33203C10.6467 1.33203 13.333 4.01832 13.333 7.33203C13.333 10.6457 10.6467 13.332 7.33301 13.332C4.0193 13.332 1.33301 10.6457 1.33301 7.33203Z" fill="{borderColor}"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6289 10.6289C10.8892 10.3685 11.3113 10.3685 11.5717 10.6289L14.4717 13.5289C14.732 13.7892 14.732 14.2113 14.4717 14.4717C14.2113 14.732 13.7892 14.732 13.5289 14.4717L10.6289 11.5717C10.3685 11.3113 10.3685 10.8892 10.6289 10.6289Z" fill="{borderColor}"/>
				</svg>
			</div>		
			<input on:focus={handleFocus} on:blur={handleBlur} class="full-search" type="text" bind:value={text} placeholder="Find a submission...">
			<svg id="filter-icon" on:click={toggleFilterState} style="background-color: {filterBgColor}" fill="{filterColor}" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path d="M21 20H14M10 20H3M21 12L12 12M8 12H3M21 4H16M12 4H3M14 23V17M8 15V9M16 7V1" stroke="{filterColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<svg id="recycle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13 19.0005H17.2942C19.1594 19.0005 20.092 19.0005 20.6215 18.6097C21.0832 18.2689 21.3763 17.7464 21.4263 17.1748C21.4836 16.5191 20.9973 15.7234 20.0247 14.1318L19.0278 12.5005M6.13014 10.6057L3.97528 14.1318C3.00267 15.7234 2.51637 16.5191 2.57372 17.1748C2.62372 17.7464 2.91681 18.2689 3.37846 18.6097C3.90799 19.0005 4.84059 19.0005 6.70578 19.0005H8.5M16.8889 9.00048L14.7305 5.46857C13.8277 3.99128 13.3763 3.25263 12.7952 3.00082C12.2879 2.78098 11.7121 2.78098 11.2048 3.00082C10.6237 3.25263 10.1723 3.99128 9.2695 5.46857L8.24967 7.13738M18 5.00055L16.9019 9.09862L12.8038 8.00055M2 11.5986L6.09808 10.5005L7.19615 14.5986M15.5 22.0005L12.5 19.0005L15.5 16.0005" stroke="var(--dark-gray)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
		<div class="border" style="border-color: {borderColor}"></div>
	{:else}
		<p>yarg => (this is a simple search bar)</p>
	{/if}
</div>

<style>
	.full-search {
		font-family: 'Lato';
		font-size: 16px;
		width: calc(100% - 8px);
		border: none;
		padding: 24px 40px 24px 0px;
	}
	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 28px;
		padding-left: 32px;
		padding-right: 32px;
	}
	.border {
		width: 100%;
		border: 0.5px solid black;
	}
	input.full-search:focus {
		outline: none;
	}
	#abcd {
		background: gray;
		width: 100%;
	}
	svg#search-icon {
		padding-top: 4px;
	}
	svg#filter-icon {
		padding: 8px 10px 8px 10px;
		border-radius: 8px;
	}

</style>