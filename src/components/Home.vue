<template>
  <div class="page">
    <Nav/>
    <h1>Welcome to the Home Page</h1>
    <div class="content">
        <card content="Hello there bum this is my single page website which uses vueJS to give you a nice user experience so enjoy"/>
    </div>
    <Made Name="Declan"/>
  </div>
</template>

<script>
import Nav from "./Navbar.vue"
import Card from "./card.vue"
import Made from "./made.vue"


export default {
  name: 'Home',
  components: {
    Nav,
    Card,
    Made,
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
