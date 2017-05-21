<template lang="pug">
div.inner
	top
	h1 Perfil
	section(class='row')
		div(class='3u')
			figure(class="image fit")
				img(src="https://pbs.twimg.com/profile_images/378800000112143013/d62ade0363e7a639c5117c1eeb6225fd_400x400.jpeg", alt="Foto")
		div(class='9u')
			h3 Nome: {{name}}
			h3 Login: {{login}}
			h3 Email: {{email}}
	section(class='row')
		form.row.uniform
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="name", placeholder='Nome')
			div(class="6u 12u$(xsmall)")
				input(type="text", v-model="login", placeholder='Login')
			div(class="12u$")
				input(type="email", v-model="email", placeholder='Email')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="password", placeholder='Password')
			div(class="6u 12u$(xsmall)")
				input(type="password", v-model="cpassword", placeholder='Confir Password')
			div(class="6u")
				button(class="special") Salvar
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