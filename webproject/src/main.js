import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Password from './components/elements/login/ForgotPassword.vue'
import Article from './components/Article.vue'
import Articles from './components/Articles.vue'
import Category from './components/Category.vue'
import Categories from './components/Categories.vue'

// Paginas restritas
import AccArticle from './components/elements/account/Article.vue'
import AccArticles from './components/elements/account/Articles.vue'
import AccCategory from './components/elements/account/Category.vue'
import AccCategories from './components/elements/account/Categories.vue'
import AccUser from './components/elements/account/User.vue'
import AccUsers from './components/elements/account/Users.vue'

const routes = [
	{ path: '/', component: Home }, 
	{ path: '/login', component: Login }, 
	{ path: '/register', component: Register },	
	{ path: '/register/password', component: Password },	
	{ path: '/article/:slug', component: Article }, 
	{ path: '/articles', component: Articles },
	{ path: '/category/:slug', component: Category }, 
	{ path: '/categories', component: Categories },
	{ path: '/account/article', component: AccArticle }, //formulario para adicionar artigo
	{ path: '/account/article/:slug', component: AccArticle }, //tela para editar artigo
	{ path: '/account/articles', component: AccArticles },
	{ path: '/account/category', component: AccCategory }, //formulario para adicionar categoria
	{ path: '/account/category/:slug', component: AccCategory }, //tela para editar categoria
	{ path: '/account/categories', component: AccCategories },
	{ path: '/account/user', component: AccUser }, //formulario para adicionar usuario
	{ path: '/account/user/:id', component: AccUser }, //tela para editar usuario
	{ path: '/account/users', component: AccUsers }
]

const router = new VueRouter({ history: true, routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
