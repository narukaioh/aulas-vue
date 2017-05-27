<template lang="pug">

div.inner
	top
	section
		div(v-for="article in articles")
			h2 router-link(v-bind:to="'/article/'+article.slug") {{article.title}}
			p {{ article.body }}
			router-link(v-bind:to="'/article/'+article.slug") Leia mais

</template>

<script>

import Header from './elements/common/Header.vue'
import { getAllArticlesByCategory } from '../modules/service'

export default {
	data () {
		articles: []
	},
	mouted () {
		this.getAllArticlesByCategory()
	},
	components: {
		'top': Header
	},
	methods: {
		getAllArticlesByCategory() {
			getAllArticlesByCategory(this.$router.params.id).then(res => this.articles = res.articles )
		}
	}
}


</script>