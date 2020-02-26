<template>
  <div class="">
    <Nav/>
    <h1>Welcome To the Home Page</h1>
  </div>
</template>

<script>
import Nav from "./Navbar.vue"


export default {
  name: 'Home',
  components: {
    Nav
  },
  data() {
    return {
        
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
