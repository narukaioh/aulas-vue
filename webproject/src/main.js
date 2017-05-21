import Vue from 'vue'
import VueX from 'vuex'
import VueRouter from 'vue-router'

Vue.use(VueX)
Vue.use(VueRouter)

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Articles from './components/elements/account/Articles.vue'
import Article from './components/Article.vue'
import Category from './components/elements/account/Category.vue'
import Categories from './components/elements/account/Categories.vue'
import User from './components/elements/account/User.vue'
import Users from './components/elements/account/Users.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/login', component: Login },
	{ path: '/login/account', component: Account },
	{ path: '/account/article', component: Account },
	{ path: '/account/category', component: Account },
	{ path: '/articles', component: Articles },
	{ path: '/article/:id', component: Article },
	{ path: '/category/:id', component: Category },
	{ path: '/categories', component: Categories },
	{ path: '/user/:id', component: User },
	{ path: '/users', component: Users },
	{ path: '/*', component: Home }

]

const router = new VueRouter({ history: true, routes})

new Vue({
  el: '#app',
  router,
  store: new Vuex.Store({}),
  render: h => h(App)
})
