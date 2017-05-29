<template lang="pug">

div.inner
	top
	section
		//h1 {{category.name}}
		//p {{category.description}}
	section
		div(v-for="article in articles" class="article-block")
			h2 router-link(v-bind:to="'/article/'+article.slug") {{article.title}}
			router-link(v-bind:to="'/article/'+article.slug") Leia mais

</template>

<script>

import Header from './elements/common/Header.vue'
//import { getAllArticlesByCategory } from '../modules/service'

export default {
	data () {
		articles: []
	},
	mouted () {
		this.getCategory()
		//this.getAllArticlesByCategory()
	},
	components: {
		'top': Header
	},
	methods: {
		getCategory() {
			//getCategory(this.$router.params.slug)
		},
		getAllArticlesByCategory() {
			//getAllArticlesByCategory(this.$router.params.id).then(res => this.articles = res.articles )
		}
	}
}


</script>

<style lang="css">
	.article-block {
		border-bottom: 1px solid;
		padding-bottom: 3%;
		margin-bottom: 3%;
	}
</style>