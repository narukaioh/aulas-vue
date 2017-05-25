<template lang="pug">

div.inner
	top

</template>

<script>

import Header from './elements/common/Header.vue'
import Article from './elements/home/MainArticle'

export default {
	data () {
		return {
			articles: [
				{ title: 'Olaaaaaaaaaaar', description: 'HIEAUHEAIUHAEI HAEIUH AEIUH EIAUHIUAEH' },
				{ title: 'Olaaaaaaaaaaar', description: 'HIEAUHEAIUHAEI HAEIUH AEIUH EIAUHIUAEH' },
				{ title: 'Olaaaaaaaaaaar', description: 'HIEAUHEAIUHAEI HAEIUH AEIUH EIAUHIUAEH' }
			]
		}
	},
	components: {
		'top': Header,
		'article': Article
	}
}

</script>