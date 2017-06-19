<template lang="pug">
	section
		header.major
			h2 Últimos artigos
		div.mini-posts
			article(v-for="article in articles")
				router-link(v-bind:to="article.slug"): img(v-bind:src='article.slug')
				p {{ article.title }}
		ul.actions
			li: a(href='#', class='button') More
</template>

<script>

import { getLastArticles } from '../../../modules/service'

export default {
	data () {
		return {
			articles: []
		}
	},
	mounted(){
		this.getLastArticles()
	},
	methods: {
		getLastArticles () {
			getLastArticles().then(res => {
				this.articles = res.articles
			})
		}

	}
}
</script>