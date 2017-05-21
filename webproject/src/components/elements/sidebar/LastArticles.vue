<template lang="pug">
section
	header.major
		h2 Últimos artigos
	div.mini-posts
		article(v-for="article in articles")
			router-link(v-bind:to="article.url"): img(v-bind:src='article.img')
			p {{ article.title }}
	ul.actions
		li: a(href='#', class='button') More
</template>

<script>
export default {
	data () {
		return {
			articles: [
				{ img: '/img/pic09.jpg', title: 'Titulo de artigo 1', url: '/article/foo' },
				{ img: '/img/pic07.jpg', title: 'Titulo de artigo 2', url: '/article/foo' },
				{ img: '/img/pic07.jpg', title: 'Titulo de artigo 3', url: '/article/foo' },
				{ img: '/img/pic07.jpg', title: 'Titulo de artigo 4', url: '/article/foo' }
			]
		}
	}
}
</script>