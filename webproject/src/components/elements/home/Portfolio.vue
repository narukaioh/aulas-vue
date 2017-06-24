<template lang="pug">
section
	header.major
		h2 Portfólio
	.posts
		article(v-for="job in jobs")
			routerlink(v-bind:to="'/portfolio/'+job.slug")
				img(v-bind:src='job.image', alt='job.title')
			h3 {{job.title}}
			p {{ job.description }}
			ul.actions
				li: routerlink(v-bind:to="'/portfolio/'+job.slug") Leia mais

</template>

<script>

import {getPortfolio} from '../../../services/components'

export default {
	data () {
		return {
			jobs: []
		}
	},
	methods: {
		getPortfolio(){
			getPortfolio().then(res => {
				this.jobs = res.jobs
			})
		}
	}
}

</script>