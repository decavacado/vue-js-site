<template>
  <div class="line">
    <li>
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
}
li {
  list-style-type: none;
}
a:hover {
  color: #ffffff;
}
</style>