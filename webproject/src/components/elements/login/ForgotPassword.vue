<template lang="pug">
div.inner
	top
	h1 Esqueci minha senha
	section(class='row')
		form.row.uniform
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="user.email", placeholder='Nome')
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="user.email", placeholder='Login')
			div(class="12u$")
				input(type="email", v-model="user.email", placeholder='Email')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="user.email", placeholder='Password')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="user.email", placeholder='Confir Password')
			div(class="6u")
				button(class="special", v-on:click="send()") Salvar	

</template>

<script>
import Header from '../common/Header.vue'
export default {
	data (){
		return {
			user: {
				email: ''
			}
		}
	},
	methods: {
		send() {
			console.log("enviado solicitacao")
		}
	},
	components: {
		'top': Header
	}
}
</script>