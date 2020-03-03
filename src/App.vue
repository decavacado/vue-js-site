<template>
  <div id="app">
	<transition name="anim" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
		<router-view></router-view>
	</transition>
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
}
</style>
