import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Account from './components/Register.vue'
import Articles from './components/elements/account/Articles.vue'
import Article from './components/Article.vue'
import Category from './components/elements/account/Category.vue'
import Categories from './components/elements/account/Categories.vue'
import User from './components/elements/account/User.vue'
import Users from './components/elements/account/Users.vue'

const routes = [
	{ path: '/', component: Home }, // Pagina inicial
	{ path: '/login', component: Login }, // Pagina para login
	{ path: '/login/account', component: Account }, // Pagina para registro
	{ path: '/account/article', component: Account }, // Pagina para cadastro de artigo
	{ path: '/account/category', component: Account }, // Pagina para cadastro de categoria
	{ path: '/articles', component: Articles }, // Pagina com listagem de artigos
	{ path: '/article/:id', component: Article }, // Pagina para artigo selecionado
	{ path: '/category/:id', component: Category }, // Pagina para visualizar a categoria e sua descricao
	{ path: '/categories', component: Categories }, // Pagina para listar todas as categorias
	{ path: '/user/:id', component: User }, // Visualiza perfil do usuario 
	{ path: '/users', component: Users }, // Listagem de usuarios
	{ path: '/*', component: Home }

]*/

import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Article from './components/Article.vue'
import Articles from './components/Articles.vue'
import Category from './components/Category.vue'
import Categories from './components/Categories.vue'

// Paginas restritas
import AccArticle from './components/elements/account/Article.vue'
import AccArticles from './components/elements/account/Articles.vue'
import AccCategory from './components/elements/account/Category.vue'
import AccCategories from './components/elements/account/Categories.vue'

const routes = [
	{ path: '/', component: Home }, 
	{ path: '/login', component: Login }, 
	{ path: '/register', component: Register }, 
	{ path: '/article/:id', component: Article }, 
	{ path: '/articles', component: Articles },
	{ path: '/category/:id', component: Category }, 
	{ path: '/categories', component: Categories } 
]

const router = new VueRouter({ history: true, routes})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
