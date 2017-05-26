<template lang="pug">
div.inner
	top
	h1 Perfil
	section(class='row')
		div(class='3u')
			figure(class="image fit")
				img(v-bind:src="user.image", alt="Foto")
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
				cpassword: '',
				image: ''
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
				this.user = res
			})
		},
		editUser (user) {
			editUser(this.$route.params.id, user).then(res => {

			})
		}
	}
}

</script>