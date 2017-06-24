<template lang="pug">
div.inner
	top
	section
		header.main
			h1 Categorias
			
		div(v-for="category in categories")
			h2: router-link(v-bind:to="'/category/'+category.slug") {{category.name}}
			p {{category.description}}
			
</template>

<script>

import Header from './elements/common/Header.vue'
import { listCategories } from '../services/categories'

export default {

	data(){
		return {
			categories: []
		}
	},
	mounted () {
		this.getAllCategories()
	},
	components: {
		'top': Header
	},
	methods: {
		getAllCategories () {
			listCategories().then(res => {
				this.categories = res.categories
			})
		}
	}

}

</script>