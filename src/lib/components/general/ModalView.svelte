<script>
  export let showModalView = false;
</script>

<div>
{#if showModalView}
	<div class="modal-overlay">
		<div class="modal-view">
			<div class="content">
				<img src="/app/calls/x.svg" alt="Close" class="close-button" on:click={() => showModalView = false} />
				<div class="slot-content">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
{/if}
</div>

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1); /* 5% opacity black background */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2; /* Ensure it's above other elements */
	}

	.modal-view {
		width: 70%;
		height: 60%;
		border-radius: 10px;
	}

	.slot-content {
		display: flex;
		align-items: center;
    justify-content: center;
		height: 100%;
	}
  
  .content {
    background-color: #eee;
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  
  .close-button {
    position: absolute;
    cursor: pointer;
		padding-top: 24px;
		right: 24px;
  }
</style>
