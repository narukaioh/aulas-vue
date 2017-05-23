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
import axios from 'axios'

export default {
	name: 'app',
	data () {
		return {
			name: 'Ju Dantas',
			email: 'jucienyds@gmail.com',
			login: 'narukaioh',
			users: []
		}
	},
	ready: {
		this.listUsers()
	},
	components: {
		'top': Header
	},
	methods: {
		listUsers: () => {
			console.log("aquiwhiuaewhiuheiuhiuhfiue");
			axios.get('http://localhost:3000/api/users')
			.then(data => {
				this.users = data.users
			})
		}
	}
}

</script>