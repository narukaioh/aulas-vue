<template lang="pug">
	
	section
		form(method='post', action='#')
			div(class="row uniform")
				div(class='12u$')
					input(type="text", v-model='user.name', placeholder='Login')
				div(class='12u$')
					input(type="password", v-model='user.password', placeholder='Password')
				div(class='2u 12u$(xsmall)')
					router-link(to='/register') Cadastre-se	
				div(class='4u 12u$(xsmall)')
					router-link(to='/register/password') Esqueci minha senha			
				div(class='12u$')
					ul.actions
						li: button(class='button fit special', type='button', v-on:click="signin(user)") Login

</template>

<script>
import { login } from '../../../services/components'
import { mapActions } from 'vuex'
export default {
	data () {
		return {
			user: {
				name: '',
				password: ''
			}
		}
	},
	methods: {
		...mapActions(['login','logout']),
		signin (user) {
			login(user).then( res => {
				if (res.status) {
					const payload = {
						user: {
							name: res.user.name,
							email: res.user.email						
						},
						token: res.token
					}
					this.login(payload)
				}else{
					alert("deu ruim")
				}
				//this.login(payload)*/
			})

		}
	}
}

</script>