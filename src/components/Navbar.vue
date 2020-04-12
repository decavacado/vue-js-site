<template>
  <div class="line">
    <li>
      <img class="image" src="../assets/logo.png">
      <ul><a href="http://localhost:8080/#/">Home</a></ul>
      <ul><a href="http://localhost:8080/#/about">About</a></ul>
      <ul><a href="http://localhost:8080/#/contact">Contact</a></ul>
      <ul><a href="http://localhost:8080/#/project">Projects</a></ul>
    </li>
  </div>
</template>

<script>

export default {
name: "Nav",
data() {
		return {
			link: "http://localhost:8080/#/project",
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
  display: inline-block;
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
}
li {
  list-style-type: none;
  position: relative;
  left: 1264px;
}
a:hover {
  color: #ffffff;
}
.line {
  background-color: #000000;
}
.image {
  position: relative;
  right: 1194px;
  top: 10px;
  width: 35px;
}
</style>