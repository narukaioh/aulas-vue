<template lang="pug">
div.inner
	top
	h1 Perfil
	section(class='row')
		div(class='3u')
			figure(class="image fit")
				img(src="https://pbs.twimg.com/profile_images/378800000112143013/d62ade0363e7a639c5117c1eeb6225fd_400x400.jpeg", alt="Foto")
		div(class='9u')
			h3 Nome: {{user.name}}
			h3 Login: {{user.login}}
			h3 Email: {{user.email}}
	section(class='row')
		form.row.uniform
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="user.name", placeholder='Nome')
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="user.login", placeholder='Login')
			div(class="12u$")
				input(type="email", v-model="user.email", placeholder='Email')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="user.password", placeholder='Password')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="user.cpassword", placeholder='Confir Password')
			div(class="6u")
				button(class="special", v-on:click="editUser(user)") Salvar
</template>

<script>

import Header from '../common/Header.vue'
import { getUser, editUser } from '../../../modules/service'

export default {
	data () {
		return {
			user : {
				_id: '',
				name: '',
				email: '',
				login: '',
				password: '',
				cpassword: ''
			}
		}
	},
	mounted () {
		this.getUser()
	},
	components: {
		'top': Header
	},
	methods: {
		getUser () {
			getUser(this.$route.params.id).then(res => {
				console.log(res)
				//this.user = res.user
			})
		},
		editUser (user) {
			editUser(this.$route.params.id, user).then(res => {

			})
		}
	}
}

</script>