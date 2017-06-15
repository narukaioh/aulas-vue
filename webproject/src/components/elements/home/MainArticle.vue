<template lang="pug">
section#banner
	.content
		header
			h1 {{article.title}}
			p {{article.subtitle}}
		p {{article.description}}
		ul.actions
			li
				router-link(v-bind:to="'/article/'+article.slug", class="button big") Leia mais
	span.image.object
		img(v-bind:src='article.image', v-bind:alt='article.title')

</template>

<script>
import { getMainArticle } from '../../../modules/service'
export default {
	data (){
		return {
			article: {
				title: '',
				description: '',
				image: '',
				slug: ''
			}
		}
	},
	mounted (){
		this.getMainArticle()
	},
	methods: {
		getMainArticle(){
			getMainArticle().then(res => {
				this.article = res.article
			})
		}
	}
}

</script>