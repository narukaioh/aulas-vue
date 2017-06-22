'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './router'
import App from './App.vue'

/*const needAuth = auth => auth === true

const requireAuth = (to, from, next) => {
	const auth = to.meta.requireAuth
	if (!needAuth(auth)) {
		next()
		return
	}
	
	store.dispatch('checkUserToken')
	.then(() => {
		next()
	})
	.catch(()=>{
		next({ name: 'home' })
	})
}*/

Vue.use(VueRouter)


/*import Login from './components/Login.vue'
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
	{ name: 'home', path: '/', component: Home }, 
	{ path: '/login', component: Login }, 
	{ path: '/register', component: Register },	
	{ path: '/register/password', component: Password },	
	{ path: '/article/:slug', component: Article }, 
	{ path: '/articles', component: Articles },
	{ path: '/category/:slug', component: Category }, 
	{ path: '/categories', component: Categories },
	{ path: '/account/article', component: AccArticle, meta: { requireAuth: true } }, //formulario para adicionar artigo
	{ path: '/account/article/:slug', component: AccArticle,  meta: { requireAuth: true }  }, //tela para editar artigo
	{ path: '/account/articles', component: AccArticles,  meta: { requireAuth: true }  },
	{ path: '/account/category', component: AccCategory,  meta: { requireAuth: true }  }, //formulario para adicionar categoria
	{ path: '/account/category/:slug', component: AccCategory,  meta: { requireAuth: true }  }, //tela para editar categoria
	{ path: '/account/categories', component: AccCategories,  meta: { requireAuth: true }  },
	{ path: '/account/user', component: AccUser,  meta: { requireAuth: true }  }, //formulario para adicionar usuario
	{ path: '/account/user/:id', component: AccUser,  meta: { requireAuth: true }  }, //tela para editar usuario
	{ path: '/account/users', component: AccUsers,  meta: { requireAuth: true }  }
]

const router = new VueRouter({ 
	history: true, 
	routes
})

router.beforeEach(requireAuth)*/

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
