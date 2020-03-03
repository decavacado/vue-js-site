<template>
	<div class="com">
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
		<p class="po">Made with <i class="fa fa-heart io"></i> By {{ Name }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	props: {
		Name: String,
	}
}
</script>

<style scoped> 
.io {
	color: #ff4f4f;
	animation: anime .35s infinite alternate;
}
.po {
	position: fixed;
	bottom: 40px;
}
@keyframes anime {
	to {
		transform: scale(1.1);
	}
}
</style>