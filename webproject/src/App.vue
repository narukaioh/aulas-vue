<template lang="pug">
div#wrapper
	div#main
		router-view
	side-bar
</template>

<script>

import SideBar from './components/elements/SideBar.vue'

export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	components: {
		'side-bar': SideBar
	}
}
</script>