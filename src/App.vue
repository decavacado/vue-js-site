<template>
  <div id="app">
	<vue-page-transition name="fade-in-left">
		<router-view></router-view>
	</vue-page-transition>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css";

body {
  background-color: #49524f;
  margin: 0;
}
p {
	color: #2cf5b2;
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 37px;
}
h1 {
	color: #2cf5b2;
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 37px;
	margin-right: 37px;
}
label {
	color: #2cf5b2;
	font-family: Arial, Helvetica, sans-serif;
	margin-left: 16px;
	font-size: 26px;
}
</style>
