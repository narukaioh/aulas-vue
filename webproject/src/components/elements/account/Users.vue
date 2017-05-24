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
					td: button(v-bind:id="user._id", v-on:click="removeUser(user._id)", class="icon fa-remove")

</template>

<script>

import Header from '../common/Header.vue'
import { listUsers, removeUser } from '../../../modules/service'

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
			listUsers().then(res => this.users = res.users)
		},
		removeUser(id) {
			console.log(id)
			console.log(removeUser)
			removeUser(id).then(res => this.message = res.message )
		}
	}
}

</script>