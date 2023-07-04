<script>
	import Navbar from "$lib/components/general/Navbar.svelte";
	import { user } from "$lib/authStore.js";
	import { goto } from '$app/navigation';

	let innerHeight;
	let innerWidth;
	let navbarWidth;
</script>

<svelte:window bind:innerHeight bind:innerWidth/>

<div id="app">
	{#if $user !== null}
		<div id="navbar-container" bind:clientWidth={navbarWidth}>
			<Navbar />
		</div>
		<div class="slot" style="height: {innerHeight}px; width: calc({innerWidth}px - {navbarWidth}px); overflow: scroll;">
			<slot></slot>
		</div>
	{:else}
		<div class="container">
			<h1>YOU CAN'T ACCESS THIS PAGE MUAHAHAHAHAHAHA.</h1>
			<p>Go sign in. Or sign up.</p>
			<button on:click={() => { goto('/app/auth/signin') }}>Sign in</button>
			<button on:click={() => { goto('/app/auth/signin') }}>Sign up</button>
		</div>
	{/if}
</div>

<style>
	#app {
		display: flex;
		flex-direction: row;
		gap: 32px;
		height: 100vh;
		overflow: hidden;
	}
	.container {
		display: inline;
	}
</style>