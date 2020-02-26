<template>
	<div class="card">
		<p>{{ content }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	props: {
		content: String,
	}
}	
</script>

<style scoped>
	.card {
		background-color: #ffffff;
		border-radius: 5px;
		margin-left: 16px;
		min-height: 150px;
		height: auto;
	}
	p {
		font-size: 40px;
		color: #000000;
		margin-left: 14px;
	}
</style>