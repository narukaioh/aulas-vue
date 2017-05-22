<template lang="pug">
	
	section
		form(method='post', action='#')
			div(class="row uniform")
				div(class='6u 12u$(xsmall)')
					input(type="text", v-model='user.name', placeholder='Name')
				div(class='6u 12u$(xsmall)')
					input(type="text", v-model='user.login', placeholder='Login')
				div(class='12u$')
					input(type="text", v-model='user.email', placeholder='Email')
				div(class='6u 12u$(xsmall)')
					input(type="password", v-model='user.password', placeholder='Password')
				div(class='6u 12u$(xsmall)')
					input(type="password", v-model='user.cpassword', placeholder='Confirm Password')
				div(class='12u$')
					ul.actions
						li: button(class='special', type='button', v-on:click="login(user)") Cadastrar

</template>

<script>
import service from '../../../modules/service'

export default {
	data () {
		return {
			user: {
				name: '',
				email: '',
				password: '',
				cpassword: '',
				login: ''
			}
		}
	},
	methods: {
		login: user => {
			service(user)
		}
	}
}

</script>