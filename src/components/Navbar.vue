<template>
  <div class="line">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <i class="fa fa-terminal ter" aria-hidden="true"></i>
    <i class="fa fa-bars bar" aria-hidden="true" v-on:click="show"></i>
    <ul class="nav">
      <li><a href="/#/">Home</a></li>
      <li><a href="/#/contact">Contact</a></li>
      <li><a href="/#/about">About</a></li>
      <li><a href="/#/project">Projects</a></li>
    </ul>
    </div>
</template>

<script>

export default {
name: "Nav",
data() {
		return {
			link: "http://localhost:8080/#/project",
		}
	},
  methods: { 
    show: function(){
      var block = document.querySelectorAll("li")
      if(block[0].style.display === "" || block[0].style.display === "none"){
        block.forEach(function(v){
          v.style.display = "block"
        })
      }else {
        block.forEach(function(v){
          v.style.display = "none"
        })
      }
    }
 }
}
</script>

<style scoped>
a {
  text-decoration: none;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
  color: #2cf5b2;
}
ul {
 color: #4a4c52;
 margin: 0px;
 position: relative;
 left: 1370px;
}

.nav {
  list-style-type: none;
}
.line {
  background-color: black;
  overflow-x: hidden;
  transition: height 3s;
}
li {
  display: inline-block;
  margin-left: 16px;
  margin-right: 16px;
  margin-bottom: 15px;
  margin-top: 15px;
  color: #4a4c52; 
}
a:hover {
  color: #45433f;
}
.ter {
   position: absolute;
   top: 10px;
   left: 40px;
   color: #ffffff;
   font-size: 40px;
}
.bar {
  position: absolute;
  top: 10px;
  left: 540px;
  color: #ffffff;
  font-size: 40px;
  display: none;
}
@media screen and (max-width: 370px){
  .bar {
    position: relative;
    top: 0px;
    left: 231px;
    color: #ffffff;
    font-size: 40px;
    display: inline-block;
  }
  .ter {
   position: relative;
   top: 0px;
   left: 40px;
   color: #ffffff;
   font-size: 50px
  }
  li {
    display: none;
  }
  ul {
    left: 0px;
  }
}
@media screen and (min-width: 375px){
  .bar {
    position: relative;
    top: 0px;
    left: 281px;
    color: #ffffff;
    font-size: 40px;
    display: inline-block;
  }
  .ter {
   position: relative;
   top: 0px;
   left: 40px;
   color: #ffffff;
   font-size: 50px
  }
  li {
    display: none;
  } 
  ul {
    left: 0px;
  }
}
@media screen and (min-width: 768px){
  .bar {
    position: relative;
    top: 0px;
    left: 681px;
    color: #ffffff;
    font-size: 40px;
    display: inline-block;
  }
  .ter {
   position: relative;
   top: 0px;
   left: 40px;
   color: #ffffff;
   font-size: 50px
  }
  li {
    display: none;
  }
  ul {
    left: 0px;
  }  
}
@media screen and (min-width: 1024px){
    .bar {
    position: relative;
    top: 0px;
    left: 681px;
    color: #ffffff;
    font-size: 40px;
    display: none;
  }
  .ter {
   position: absolute;
   top: -2px;
   left: 40px;
   color: #ffffff;
   font-size: 70px
  }
  li {
    display: inline-block;
  }
  ul {
   color: #4a4c52;
   margin: 0px;
   position: relative;
   left: 480px;
  } 
  a {
    font-size: 30px;
  }
}
@media screen and (min-width: 1025px){
  .bar {
    position: relative;
    top: 0px;
    left: 681px;
    color: #ffffff;
    font-size: 40px;
    display: none;
  }
  .ter {
   position: absolute;
   top: -5px;
   left: 40px;
   color: #ffffff;
   font-size: 70px
  }
  li {
    display: inline-block;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 15px;
    margin-top: 15px;
    color: #4a4c52; 
  }
  ul {
   color: #4a4c52;
   margin: 0px;
   position: relative;
   left: 1360px;
  } 
  a {
    font-size: 30px;
  }  
}

</style>