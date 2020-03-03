<template>
	<div>
		<Nav/>
		<h1>Welcome to the Contact</h1>
		<Card content="This is the Contact Page fill out the form to contact me"/>
		<form method="POST" action="http://localhost:8080/#/contact" v-on:submit.prevent>
			<label for="name"></label><br>
			<input v-model="Name" type="text" name="name" id="name"><br><br>
			<button id="button" v-on:click="Submit">Submit</button>
		</form>
		<Made Name="Declan"/>
	</div>
</template>

<script>
import Nav from "./Navbar.vue"
import Made from "./made.vue"
import Card from "./card.vue"


export default {
name: "Cot",
components: { Nav,Made,Card, },
data() {
	return {
		Name: "",
		Message: "",
	}
  },
  methods: {
	Submit: function() {
		this.axios.post("/", {name: this.Name}).then(function(res) {
			console.log(res.data);
		}).catch(function(err) {
			console.log(err);
		})
		this.Name = "";
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
 }
 input {
	margin-left: 16px;
 }
 #name {
	border-radius: 5px;	
 }
</style>