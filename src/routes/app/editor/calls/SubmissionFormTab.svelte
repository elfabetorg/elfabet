<script>
	export let form;
	export let call;

	$: console.log(call.form)
</script>

<div id="submission-form-tab">
	<div class="header">
		<h3>Submission Form</h3>
		<button>Edit form</button>
	</div>
	<div class="call-description">
		<b>Call description</b>
		<p>{call.form.description}</p>
	</div>
	<form action="">
		{#each call.form.questions as q}
			<div class="question">
				<b>{q.title}</b>
				<input type="text">
			</div>
		{/each}
	</form>
</div>

<style>
	#submission-form-tab {
		margin-left: 32px;
		margin-right: 32px;
		margin-top: 16px;
	}
	p {
		line-height: 4px;
	}
	form {
		margin-top: 36px;
		gap: 24px;
		display: flex;
		flex-direction: column
	}
	.question {
		display: flex;
		flex-direction: column;
		width: 400px;
		gap: 8px;
	}
	.header {
		display: flex;
		flex-direction: row;
		gap: 16px;
		align-items: center;
		justify-content: space-between;
	}
</style>