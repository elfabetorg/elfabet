<script>
  export let tabs = [];
  let selectedTabIndex = 0;
</script>

<div class="tab-view">
  <div class="tabs-container">
    {#each tabs as { label }, index}
      <div
        class="tab {index === selectedTabIndex ? 'selected' : ''}"
        on:click={() => (selectedTabIndex = index)}
      >
        {label}
      </div>
    {/each}
  </div>
  {#if tabs.length > 0}
    <div class="tab-content">
      <slot name="tab-content" {selectedTabIndex}></slot>
    </div>
  {/if}
</div>

<style>
  .tabs-container {
    display: flex;
  }
  .tab {
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    color: var(--dark-gray);
    padding: 2px 8px 0px 8px;
    font-size: 14px;
    line-height: 30px;
    cursor: pointer;
    margin-right: 10px; /* Optional: for some space between tabs */
  }
  .selected {
    border-bottom: 2px solid var(--accent);
    color: var(--accent);
    font-weight: bold;
  }
  .tab-content {
    padding: 10px;
  }
</style>
