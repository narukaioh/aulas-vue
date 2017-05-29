<template lang="pug">
section#banner
	.content
		header
			h1 {{article.title}}
			p A free and fully responsive site template
		p {{article.description}}
		ul.actions
			li
				a.button.big(href='#') Learn More
	span.image.object
		img(src='images/pic10.jpg', alt='')
</template>

<script>

export default {
	data (){
		return {
			article: {
				title: '',
				description: ''
			}
		}
	},
	mounted (){}
}

</script>