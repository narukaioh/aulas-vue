<template lang="pug">

div.inner
	top
	section
		h1 {{category.name}}
		p {{category.description}}

</template>

<script>

import Header from './elements/common/Header.vue'
import { getCategory } from '../modules/service'
//import { getAllArticlesByCategory } from '../modules/service'

export default {
	data () {
		return { 
			category: []
		}
	},
	mounted () {
		this.getCategory()
		//this.getAllArticlesByCategory()
	},
	components: {
		'top': Header
	},
	methods: {
		getCategory(){
			getCategory(this.$route.params.slug).then(res => {
				console.log(this.category)
				this.category = res.category
			})
		}
	}
}


</script>