<template>
	<div class="grid">
		<Nav/>
		<h1>Welcome to the About page</h1>
    <Made Name="Declan"/>
	</div>
</template>


<script>
import Nav from "./Navbar.vue"
import Made from "./made.vue"

export default {
  name: 'About',
  components: { Nav,Made, },
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