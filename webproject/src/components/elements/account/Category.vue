<template lang="pug">
div.inner
	section
		header
			h1 Cadastrar categoria
		p {{message}}
		div.inner
			form(method='post', action='#')
				div(class="row uniform")
					div(class="12u$")
						input(type="text", placeholder="Nome da Categoria" v-model="category.name")
					div(class="12u$")
						textarea(placeholder="Descrição da categoria" v-model="category.description")
					div(class="6u")
						button(v-on:click="saveCategory(category)", type="button") Salvar
				
</template>

<script>

import { addCategory } from '../../../modules/service'

export default {

	data () {
		return {
			category: {
				name: '',
				description: ''
			},
			message: ''
		}
	},
	methods: {
		saveCategory (category) {
			if(category.name == ''){
				this.message = 'É necessário digitar o nome para a categoria.'
			}else{
				addCategory(category).then(res => {
					this.message = res.message
				})
			}
		}
	},
	components: {}

}
</script>