<template lang="pug">

header#header
	a.logo(href='#')
		strong {{title}}
		|  by {{author}}
	ul.icons
		li
			a.icon.fa-twitter(v-bind:href='social.twitter')
				span.label Twitter
		li
			a.icon.fa-facebook(v-bind:href='social.facebook')
				span.label Facebook
		li
			a.icon.fa-snapchat-ghost(v-bind:href='social.snapchat')
				span.label Snapchat
		li
			a.icon.fa-instagram(v-bind:href='social.instagram')
				span.label Instagram
		li
			a.icon.fa-medium(v-bind:href='social.medium')
				span.label Medium
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			title: 'Redes sociais',
			author: 'Ju Dantas',
			social: {
				facebook: 'https://facebook.com/narukaioh',
				twitter: 'https://twitter.com/narukaioh',
				snapchat: 'https://snapchat.com/narukaioh',
				intagram: 'https://instagram.com/jucienyds',
				medium: '#'
			}
		}
	}
}
</script>
