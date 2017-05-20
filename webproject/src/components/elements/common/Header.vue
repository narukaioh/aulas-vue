<template lang="pug">
header#header
	a.logo(href='index.html')
		strong {{title}}
		|  by HTML5 UP
	ul.icons
		li
			a.icon.fa-twitter(href='#')
				span.label Twitter
		li
			a.icon.fa-facebook(href='#')
				span.label Facebook
		li
			a.icon.fa-snapchat-ghost(href='#')
				span.label Snapchat
		li
			a.icon.fa-instagram(href='#')
				span.label Instagram
		li
			a.icon.fa-medium(href='#')
				span.label Medium
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			title: 'teste'
		}
	}

}
</script>