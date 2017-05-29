<template lang="pug">
div.inner
	top
	h1 Categorias
	
	p {{ message }}

	div.table-wrapper
		table
			thead
				tr
					th Categoria
					th Descrição
					th Slug
					th Editar
					th Remover
			tbody
				tr(v-for="category in categories" v-bind:index="index") 
					td {{ category.name }}
					td {{ category.description }}
					td {{ category.slug }}
					td: router-link(v-bind:to="'/category/'+category.slug" class="icon fa-edit")
					td: button(v-on:click="removeCategory(category._id, index)" class="icon fa-remove")
</template>

<script>

import Header from '../common/Header.vue'
import { listCategories, removeCategory } from '../../../modules/service'

export default {
	name: 'app',
	data () {
		return {
			categories: [],
			message: ''
		}
	},
	mounted () {
		this.getCategories()
	},
	components: {
		'top': Header
	},
	methods: {
		getCategories () {
			listCategories().then(res => {
				this.categories = res.categories} )
		},
		removeCategory (id, index) {
			removeCategory(id).then(res=> {
				if (res.status) {
					this.categories.splice(index, 1)
				}
				this.message = res.message} )
		}
	}
}

</script>