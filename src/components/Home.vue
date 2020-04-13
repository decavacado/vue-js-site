<template>
  <div class="page">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <Nav/>
    <h1>Welcome to the Home Page</h1>
    <div class="content">
        <card content="Hello there bum this is my single page website which uses vueJS to give you a nice user experience so enjoy"/>
    </div>
    <Made Name="Declan"/>
    <i class="fa fa-github tea" aria-hidden="true" @:click="name"></i>
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
  methods: {
      name: function(){
        console.log("Hello boomer")
      }
    }
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
 .tea {
    position: fixed;
    color:  #ffffff;
    margin-left: 14px;
    top: 90px;
    left: 1820px;
    font-size: 46px;
}
</style>
