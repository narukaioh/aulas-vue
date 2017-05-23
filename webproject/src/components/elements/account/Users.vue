<template lang="pug">
div.inner
	top
	h1 Usuários
	
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
				tr(v-for="user in users")
					td {{user.name}}
					td {{user.login}}
					td {{user.email}}
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
			users: []
		}
	},
	mounted () {
		this.listUsers()
	},
	components: {
		'top': Header
	},
	methods: {
		listUsers () {
			listUsers(this)
		}
	}
}

</script>