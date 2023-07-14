<script>
	import { user } from "$lib/authStore";
	import { goto } from '$app/navigation'
</script>

<div class="authcheck">
	{#if $user !== null}
		<slot name="protected-content"/>
	{:else}
		<div class="container">
			<h1>YOU CAN'T ACCESS THIS PAGE MUAHAHAHAHAHAHA.</h1>
			<p>Go sign in. Or sign up.</p>
			<button on:click={() => { goto('/auth/signin') }}>Sign in</button>
			<button on:click={() => { goto('/auth/signin') }}>Sign up</button>
		</div>
	{/if}
</div>