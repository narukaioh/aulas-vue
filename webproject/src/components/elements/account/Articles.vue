<template lang="pug">
div.inner
	top
	h1 Artigos
	
	div.table-wrapper
		table
			thead
				tr
					th Titulo
					th Categoria
					th Data
					th Editar
					th Remover
			tbody
				tr
					td Titulo de algum artigo qualquer
					td Tecnologia
					td 25 may
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
				tr
					td Titulo de algum artigo qualquer
					td Moda
					td 27 may
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
</template>

<script>

import Header from '../common/Header.vue'

export default {
	name: 'app',
	data () {
		return {
			name: 'Ju Dantas',
			email: 'jucienyds@gmail.com',
			login: 'narukaioh'
		}
	},
	components: {
		'top': Header
	}
}

</script>