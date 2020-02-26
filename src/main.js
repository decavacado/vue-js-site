import Vue from 'vue'
import App from './App.vue'
import Vuerouter from "vue-router"
import Home from "./components/Home.vue"
import About from "./components/About.vue"

Vue.use(Vuerouter);

const routes = [
	{path: "/", component: Home},
	{path: "/about", component: About },
]
const router = new Vuerouter({
	routes: routes,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
