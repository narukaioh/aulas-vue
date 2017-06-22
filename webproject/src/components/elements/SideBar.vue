<template lang="pug">

div#sidebar
	div.inner
		
		search
		main-menu
		lastarticles
		contact
		
		footer#footer
			p.copyright &copy; {{allrights}} - 
				a(href="#") {{author}}


</template>

<script>

import Search from './sidebar/Search.vue'
import MainMenu from './sidebar/MainMenu.vue'
import LastArticles from './sidebar/LastArticles.vue'
import Contact from './sidebar/Contact.vue'

export default {
	data () {
		return {
			allrights: 'Untitled. All rights',
			author: 'narukaioh',
			url: 'http://facebook.com/narukaioh'
		}
	},
	components: {
		'search': Search,
		'main-menu': MainMenu,
		'lastarticles': LastArticles,
		'contact': Contact
	}
}

</script>