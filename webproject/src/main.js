import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import About from './Login.vue'


const router = new VueRouter({
	mode: 'history',
	base: '__dirname',
	routes: [
		{ path: '/about', component: About }
	]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
