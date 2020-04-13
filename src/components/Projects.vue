<template>
	<div>
		<Nav/>
		<h1>Welcome to the Projects</h1>
		<Made Name="Declan"/>
		<i class="fa fa-github tea" aria-hidden="true" @:click="name"></i>
	</div>
</template>

<script>
import Nav from "./Navbar.vue"
import Made from "./made.vue"

export default {
name: "Proj",
components: { Nav,Made },
data() {
	return {

	}
  }
}	
</script>

<style scoped>
 h1 {
  animation-name: move;
  animation-duration: 1s;
  position: relative;
 }
 @keyframes move {
  from { right: 200px; }
  to { right: 0.5px; }
 }
.tea {
	position: fixed;
	color:  #ffffff;
	margin-left: 14px;
	top: 90px;
	left: 1820px;
	font-size: 46px;
}
</style>