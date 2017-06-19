<template lang="pug">
	
div.inner
	top
	h1 Login
	login

</template>

<script>

import Header from './elements/common/Header.vue'
import Login from './elements/login/Login.vue'

export default {
	components: {
		'top': Header,
		'login': Login
	}
}

</script>