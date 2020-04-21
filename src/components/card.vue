<template>
	<div id="card" :class="{width: width_v, square: square_v}">
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
		square_v: Boolean,
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
	@media screen and (max-width: 500px){
		p {
			font-size: 30px;
		}
		#card {
			width: 95%;
		}
	}
	.width {
		width: 50%;
	}
	.square {
		border-radius: 0px;
	}
</style>