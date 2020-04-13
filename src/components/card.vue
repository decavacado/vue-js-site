<template>
	<div id="card" :class="{width: width_v}">
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
		width_v: Boolean,
	},
}	
</script>

<style scoped>
	#card {
		background-color: #ffffff;
		border-radius: 5px;
		margin-left: 16px;
		margin-right: 16px;
		min-height: 150px;
		height: auto;
	}
	p {
		font-size: 40px;
		color: #000000;
		margin-left: 14px;
	}
	.width {
		width: 50%;
	}
</style>