<template lang="pug">
div.inner
	top
	h1 Artigos
	
	div.table-wrapper
		table
			thead
				tr
					th Titulo
					th Categoria
					th Data
					th Editar
					th Remover
			tbody
				tr(v-for="article in articles" v-bind:index="index")
					td {{article.title}}
					td {{article.category}}
					td {{article.date}}
					td: button(class="icon fa-edit")
					td: button(v-bind:id="article._id", v-on:click="removeArticle(article._id, index)", class="icon fa-remove")
</template>

<script>

import { listArticles, removeArticle } from '../../../services/articles'

import Header from '../common/Header.vue'

export default {
	name: 'app',
	data () {
		return {
			articles: [],
			message: '',
			index: ''
		}
	},
	components: {
		'top': Header
	},
	mounted (){
		this.getArticles()
	},
	methods: {
		getArticles(){
			listArticles().then( res => {
				this.articles = res.articles
			})
		},
		removeArticle(id, index){
			removeArticle(id).then( res => {
				if (res.status) {
					this.articles.splice(index, 1)
				}
				this.message = res.message
			})
		}
	}
}

</script>