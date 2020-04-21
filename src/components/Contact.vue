<template>
	<div>
		<Nav/>
		<h1>Welcome to the Contact</h1>
		<Card content="Fill out the Form to contact me." :width_v="true"/>
		<form method="POST" action="http://localhost:8080/#/contact" v-on:submit.prevent id="moved">
			<div class="g-recaptcha" data-sitekey="your_site_key"></div>
			<label for="name">Name:</label><br><br>
			<input v-model="Name" type="text" name="name" id="name" placeholder="Name"><br><br>
			<textarea id="test" v-model="Message" name="message" placeholder="Comment Here..."></textarea><br><br>
			<button id="button" v-on:click="Submit">Submit</button>
		</form>
		<Made Name="Declan"/>
		<i class="fa fa-github tea" aria-hidden="true" v-on:click="Redirect"></i>
	</div>
</template>

<script>
import Nav from "./Navbar.vue"
import Made from "./made.vue"
import Card from "./card.vue"


export default {
name: "Cot",
components: { Nav,Made,Card,},
data() {
	return {
		Name: "",
		Message: "",
	}
  },
  methods: {
	Submit: function() {
		this.axios.post("/", {name: this.Name, message: this.Message}).then(function(res) {
			console.log(res.data);
			console.log("Worked")
		}).catch(function(err) {
			console.log(err);
		})
		console.log("Hello")
		this.Name = "";
		this.Message = "";
	},
	Redirect: function(){
		window.open("https://github.com/decavacado")
	}
  },
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
 #button {
	border-radius: 5px;
	margin-left: 16px;
	border-style: none;
 }
 input {
	margin-left: 16px;
	outline: none;
 }
 #name {
	border-radius: 5px;
	width: 50%;
	height: 26px;
	border-width: 2px;
	border-style: solid;
	border-color: #2cf5b2;
	font-size: 20px;

 }
 #test {
	border-radius: 5px;
	margin-left: 16px;
	width: 50%;
	height: 60px;
	border-color: #2cf5b2;
	font-size: 20px;
	outline: none;

 }
 #moved {
	position: relative;
	top: 150px;
 }
 #button {
	font-size: 20px;
	width: 120px;
	height: 50px;
	transition: background-color 0.5s;
 }
 #button:hover {
	background-color: #2cf5b2;
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
@media screen and (max-width: 768px){
	body {
		font-size: 30px;
	}
	#name{
		width: 90%;
	}
	#test {
		width: 90%;	
	}
}
</style>