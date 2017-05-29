<template lang="pug">
div.inner
	top
	h1 Cadastrar artigo
	p {{message}}
	p: input(type="text" placeholder="Titulo" v-model="article.title")
	p: input(type="text" placeholder="Subtitulo" v-model="article.subtitle")
	p
		select(v-model="article.category",)
			option Selecione uma categoria
			option(v-for="category in categories" v-bind:value="category._id") {{ category.name }}
	p: textarea(placeholder="Digite seu artigo" v-model="article.body")
	button(v-on:click="addArticle(article)") Enviar
</template>

<script>

import Header from '../common/Header.vue'
import { addArticle, listCategories } from '../../../modules/service'

export default {
	data () {
		return {
			article: {
				title: '',
				body: '',
				category: '',
				subtitle: '',
			},
			categories: [],
			message: ''
		}
	},
	mounted () {
		this.getCategories()
	},
	methods: {
		getCategories () {
			listCategories().then(res => {
				this.categories = res.categories} )
		},
		addArticle (article) {
			console.log(article)
			addArticle(article).then(res => {
				console.log(res)
				this.message = res.message
				this.article = []
			})
		}
	},
	components: {
		'top': Header
	}
}
</script>
