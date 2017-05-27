<template lang="pug">

div.inner
	top
	section(id="banner", v-for='article in articles')
		.content
			header
				h1: router-link(v-bind:to="'/article/'+article.slug") {{article.title}}
				p {{ article.subtitle }}
			p {{article.body}}
		span.image.object
			img(v-bind:src='article.image', v-bind:alt='title')

</template>

<script>

import Header from './elements/common/Header.vue'
import { listArticles } from '../modules/service'

export default {
	data () {
		return {
			articles: []
		}
	},
	mounted () {
		this.getAllArticles()
	},
	components: {
		'top': Header
	},
	methods: {
		getAllArticles () {
			listArticles().then(res => this.articles = res.articles )
		}
	}
}

</script>