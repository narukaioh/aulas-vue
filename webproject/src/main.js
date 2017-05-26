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
	{ path: '/article/:id', component: Article }, 
	{ path: '/articles', component: Articles },

	{ path: '/category/:id', component: Category }, 
	{ path: '/categories', component: Categories },

	{ path: '/account/article', component: AccArticle }, //formulario para adicionar artigo
	{ path: '/account/article/:id', component: AccArticle }, //tela para editar artigo
	{ path: '/account/articles', component: AccArticles },

	{ path: '/account/category', component: AccCategory }, //formulario para adicionar categoria
	{ path: '/account/category/:id', component: AccCategory }, //tela para editar categoria
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
