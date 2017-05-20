import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/login/account', component: Account }
]

const router = new VueRouter({routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
