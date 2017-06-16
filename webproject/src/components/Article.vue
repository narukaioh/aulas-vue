<template lang="pug">
div.inner
	top
	section
		header.main
			h1 {{article.title}}
		span.image.main
			img(v-bind:src='article.image', v-bind:alt='article.title')
		p {{article.body}}
// =======
// 			h1 {{data.title}}
// 			h2 {{data.subtitle}}
// 		span.image.main
// 			img(v-bind:src='data.image', v-bind:alt='data.title')
// 		p: router-link(v-bind:to="'/category/'+data.category+'/articles'") {{data.category}}
// 		p {{data.body}}
// >>>>>>> 5ecbb34ac13acd03f5c946f5f0e7b17f744bdac2

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
			getArticle(this.$route.params.slug).then(article => {
				this.article = article
			})
		}
	},
	components: {
		'top': Header
	}
}
</script>