<template lang="pug">
div.inner
	top
	h1 Categorias
	
	div.table-wrapper
		table
			thead
				tr
					th #
					th Categoria
					th Data
					th Editar
					th Remover
			tbody
				tr(v-for="category in categories") 
					td {{ category.id }}
					td {{ category.name }}
					td {{ category.date }}
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
</template>

<script>

import Header from '../common/Header.vue'

export default {
	name: 'app',
	data () {
		return {
			categories: [
				{ id: 1, name: 'Tecnologia', date: '25 may' },
				{ id: 2, name: 'Tecnologia', date: '26 may' },
				{ id: 3, name: 'Tecnologia', date: '27 may' }
			]
		}
	},
	components: {
		'top': Header
	}
}

</script>