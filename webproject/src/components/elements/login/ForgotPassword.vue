<template lang="pug">
div.inner
	top
	h1 Esqueci minha senha
	section
		form(method="post", action="#")
			div.row.uniform
				div(class="8u 12u$(xsmall)")
					input(type="text", v-model="user.email", placeholder='Email')
				div(class="4u")
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
			alert("enviado solicitacao")
		}
	},
	components: {
		'top': Header
	}
}
</script>