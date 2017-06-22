<template lang="pug">
div.inner
	top
	h1 Usuários
	p {{message}}	
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
				tr(v-for="user in users" v-bind:index="index")
					td: router-link(v-bind:to="'/account/user/'+user._id") {{user.name}}
					td {{user.login}}
					td {{user.email}}
					td: button(class="icon fa-edit")
					td: button(v-bind:id="user._id", v-on:click="removeUser(user._id, index)", class="icon fa-remove")

</template>

<script>

import Header from '../common/Header.vue'
import { listUsers, removeUser } from '../../../modules/service'

export default {
	data () {
		return {
			users: [],
			index: '',
			message: ''
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
		removeUser(id, index) {
			removeUser(id).then(res => {
				if (res.status) {
					this.users.splice(index, 1)
				}
				this.message = res.message
			} )
		}
	}
}

</script>