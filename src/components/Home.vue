<template>
  <div class="page">
    <Nav/>
    <h1>Welcome to the Home Page</h1>
    <div class="content">
        <p>This is my single page website which uses <bold>vueJS</bold></p>
    </div>
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
