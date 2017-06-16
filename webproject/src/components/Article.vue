<template lang="pug">
div.inner
	top
	section
		header.main
			h1 {{article.title}}
		span.image.main
			img(v-bind:src='article.image', v-bind:alt='article.title')
		p {{article.body}}

</template>

<script>

import Header from './elements/common/Header.vue'
import { getArticle } from '../modules/service'

export default {
	name: 'app',
	data () {
		return {
			article: {
				title: '',
				body: '',
				image: ''
			}
		}
	},
	mounted (){
		this.getArticle()
	},
	methods:{
		getArticle (){
			getArticle(this.$route.params.id).then(article => {
				this.article = article
			})
		}
	},
	components: {
		'top': Header
	}
}
</script>