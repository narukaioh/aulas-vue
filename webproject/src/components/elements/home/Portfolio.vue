<template lang="pug">
section
	header.major
		h2 
			i(class="fa fa-github-alt", aria-hidden="true") 
			|  Portfólio
			
	.posts
		article(v-for="job in jobs")
			h3: a(v-bind:href="job.url" target="_blank") 
					i(class="fa fa-github", aria-hidden="true")
					|  {{job.title}}
			p {{ job.description }}
			ul.actions
				//li: routerlink(v-bind:to="'/portfolio/'+job.slug") Leia mais

</template>

<script>

import {getRepositories, getFileInRepository} from '../../../services/github'

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
						description: item.description,
						url: item.html_url
					}
				})
				getImages()
			})
		},
		getImages(){
			this.jobs.map(item => {
				console.log(item)
			})
		}

	}
}

</script>