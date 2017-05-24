<template lang="pug">
	
	section
		
		p(v-bind:class="classe") {{message}}

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
import { addUser } from '../../../modules/service'

export default {
	data () {
		return {
			user: {
				name: '',
				email: '',
				password: '',
				cpassword: '',
				login: ''
			},
			message: '',
			classe: ''
		}
	},
	mounted () {

	},
	methods: {
		login (user) {
			addUser(user).then(res => {
				if (res.status) { this.classe = 'sucesso' }
				else { this.classe = 'problema' }
				this.message = res.message
			})
		}
	}
}

</script>

<style>
	
	.sucesso, .problema {
		border: 1px solid;
		border-radius: 3px;
		padding: 3px 0px;
		text-align: center; 
	}
	.sucesso {
		color: #3c763d;
		background-color: #dff0d8;
		border-color: #d6e9c6;
		font-weight: bold;
	}
	.problema {
		color: #a94442;
		background-color: #f2dede;
		border-color:#ebccd1;
		font-weight: bold;
	}

</style>