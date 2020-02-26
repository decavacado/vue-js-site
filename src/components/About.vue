<template>
	<div class="grid">
		<Nav/>
		<p>Hello there Welcome to my vue JS website whihc happens to be single paged</p>
	</div>
</template>


<script>
import Nav from "./Navbar.vue"

export default {
  name: 'About',
  components: { Nav, },
  data() {
    return {
        
    }
  }
}
</script>

<style scoped>
p {
	font-size: 20px;
}
</style>