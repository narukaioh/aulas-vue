<template lang="pug">
	
	section
		form(method='post', action='#')
			div(class="row uniform")
				div(class='12u$')
					input(type="text", v-model='name', placeholder='Login')
				div(class='12u$')
					input(type="password", v-model='password', placeholder='Password')
				div(class='2u 12u$(xsmall)')
					router-link(to='/login/account') Cadastre-se	
				div(class='2u 12u$(xsmall)')
					router-link(to='/login/forgotpassword') Esqueci minha senha			
				div(class='12u$')
					ul.actions
						li: button(class='button fit special', type='button', v-on:click="login") Login

</template>

<script>
	
export default {
	name: 'app',
	data () {
		return {
			name: '',
			password: ''
		}
	},
	methods: {
		login () {
			console.log(this.name);
			console.log(this.password);
		}
	}
}

</script>