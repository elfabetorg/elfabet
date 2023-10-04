<script>
  export let showDetailView = false;
</script>

<div id="call-detail-view">
{#if showDetailView}
  <div class="detail-view">
    <div class="content">
      <img src="/app/calls/x.svg" alt="Close" class="close-button" on:click={() => showDetailView = false} />
			<div class="detail-view-content">
				<slot></slot>
			</div>
    </div>
  </div>
{/if}
</div>

<style>
  .detail-view {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

	.detail-view-content {
		margin-top: 72px;
		margin-left: 48px;
		margin-right: 48px;
	}
  
  .content {
    background-color: #fff;
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
