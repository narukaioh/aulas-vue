<template lang="pug">
section
	header.major
		h2 Portfólio
	.posts
		article(v-for="job in jobs")
			routerlink(v-bind:to="'/portfolio/'+job.slug")
				//img(v-bind:src='job.image', alt='job.title')
			h3 {{job.title}}
			p {{ job.description }}
			ul.actions
				//li: routerlink(v-bind:to="'/portfolio/'+job.slug") Leia mais

</template>

<script>

import {getRepositories} from '../../../services/github'

export default {
	data () {
		return {
			jobs: []
		}
	},
	mounted () {
		this.getPortfolio()
	},
	methods: {
		getPortfolio(){
			getRepositories().then(res => {
				console.log(res)
				this.jobs = res.map( item => {
					return {
						title: item.name,
						description: item.description
					}
				})
			})
		}
	}
}

</script>