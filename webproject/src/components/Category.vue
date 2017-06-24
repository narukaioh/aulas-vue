<template lang="pug">

div.inner
	top
	section
		h1 {{category.name}}
		p {{category.description}}

</template>

<script>

import Header from './elements/common/Header.vue'
import { getCategory } from '../services/categories'
//import { getAllArticlesByCategory } from '../services'

export default {
	data () {
		return { 
			category: []
		}
	},
	mounted () {
		this.getCategory()
	},
	components: {
		'top': Header
	},
	methods: {
		getCategory(){
			getCategory(this.$route.params.slug).then(res => {
				this.category = res.category
			})
		}
	}
}


</script>