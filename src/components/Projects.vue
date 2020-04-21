<template>
	<div>
		<Nav/>
		<h1>Welcome to the Projects</h1>
		<Made Name="Declan"/>
		<i class="fa fa-github tea" aria-hidden="true" v-on:click="Redirect"></i>
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
  },
  methods: {
	Redirect: function(){
		window.open("https://github.com/decavacado")
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
.tea:hover {
	cursor: pointer;
}
</style>