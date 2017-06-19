<template lang="pug">
	div.inner
		top
		h1 Registro
		register

</template>

<script>

import Header from './elements/common/Header.vue'
import Register from './elements/account/Register.vue'

export default {
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	components: {
		'top': Header,
		'register': Register
	}
}

</script>