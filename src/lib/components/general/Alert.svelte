<script>
	export let active;
	export let title;
	export let desc;
	export let action;

	const handleAction = () => {
		action();
		active = false;
	};

	const handleDismiss = () => {
		active = false;
	};
</script>

<div class="alert">
	{#if active === true}
		<div class="overlay"></div>
		<div class="active">
			<h3>{title}</h3>
			<p>{desc}</p>
			<div class="row">
				<button on:click={handleAction}>Yes</button>
				<button on:click={handleDismiss}>No, take me back</button>
			</div>
		</div>
	{:else}
		<div class="inactive"></div>
	{/if}
</div>

<style>
	.active {
		position: fixed; /* Stay in place */
		z-index: 1; /* Sit on top */
		overflow: auto; /* Enable scroll if needed */
		background: white;
		top: 50%;
		left: 50%;
		padding: 24px;
		border-radius: 8px;
		border: 1px solid var(--gray);
		transform: translate(-50%, -50%);
	}
	.inactive {
		opacity: 0%;
		width: 0px;
		height: 0px;
	}
	.row {
		display: flex;
		flex-direction: row;
		gap: 8px;
	}
	.overlay {
		top: 0px;
		left: 0px;
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, 0.2);
	}
</style>