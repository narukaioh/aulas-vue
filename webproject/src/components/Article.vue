<template lang="pug">
div.inner
	top
	section
		header.main
			h1 {{data.title}}
		span.image.main
			img(v-bind:src='data.image', v-bind:alt='data.title')
		p {{data.body}}

</template>

<script>

import Header from './elements/common/Header.vue'
import { getArticle } from '../modules/service'

export default {
	name: 'app',
	data () {
		return {
			data: {
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
			getArticle(this.$route.params.id).then(res => {
				this.data = res
			})
		}
	},
	components: {
		'top': Header
	}
}
</script>