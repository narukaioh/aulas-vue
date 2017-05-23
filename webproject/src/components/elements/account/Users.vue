<template lang="pug">
div.inner
	top
	h1 Usuários 123
	
	div.table-wrapper
		table
			thead
				tr
					th Name
					th Login
					th Email
					th Edit
					th Remove
			tbody
				tr
					td Jucieny Dantas
					td narukaioh
					td jucienyds@gmail.com
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
				tr
					td Jucieny Dantas
					td narukaioh
					td jucienyds@gmail.com
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
				tr
					td Jucieny Dantas
					td narukaioh
					td jucienyds@gmail.com
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
				tr
					td Jucieny Dantas
					td narukaioh
					td jucienyds@gmail.com
					td: button(class="icon fa-edit")
					td: button(class="icon fa-remove")
</template>

<script>

import Header from '../common/Header.vue'
import { listUsers } from '../../../modules/service'

export default {
	name: 'app',
	data () {
		return {
			name: 'Ju Dantas',
			email: 'jucienyds@gmail.com',
			login: 'narukaioh'
		}
	},
	mounted () {
		this.list()
	},
	components: {
		'top': Header
	},
	methods: {
		list: () => {
			//const self = this
			var data = listUsers()
			console.log(data)
		}
	}
}

</script>