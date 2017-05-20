<template lang="pug">
	
div.inner
	top
	login

</template>

<script>

import Header from './elements/common/Header.vue'
import Login from './elements/login/Login.vue'

export default {
	name: 'app',
	data () {
		return {
			title: 'Welcome to Your Vue.js App'
		}
	},
	components: {
		'top': Header,
		'login': Login
	}
}

</script>