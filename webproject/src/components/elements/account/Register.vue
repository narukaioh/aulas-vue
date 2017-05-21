<template lang="pug">
	
	section
		form(method='post', action='#')
			div(class="row uniform")
				div(class='6u 12u$(xsmall)')
					input(type="text", v-model='name', placeholder='Name')
				div(class='6u 12u$(xsmall)')
					input(type="text", v-model='login', placeholder='Login')
				div(class='12u$')
					input(type="text", v-model='email', placeholder='Email')
				div(class='6u 12u$(xsmall)')
					input(type="password", v-model='password', placeholder='Password')
				div(class='6u 12u$(xsmall)')
					input(type="password", v-model='cpassword', placeholder='Confirm Password')
				div(class='12u$')
					ul.actions
						li: button(class='special', type='button', v-on:click="login") Cadastrar

</template>

<script>

</script>