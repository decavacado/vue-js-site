<template>
	<div>
		<Nav/>
		<h1>Welcome to the Projects</h1>
	</div>
</template>

<script>
import Nav from "./Navbar.vue"

export default {
name: "Proj",
components: { Nav, },
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
</style>