<template lang="pug">
section
	header.major
		h2 
			i(class="fa fa-github-alt", aria-hidden="true") 
			|  Portfólio
			
	.posts
		article(v-for="job in jobs")
			img(v-bind:src="job.img")
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
		//this.getPortfolio()
	},
	methods: {
		getPortfolio(){
			getRepositories().then(res => {
				this.jobs = res.map( item => {
					return {
						title: item.name,
						description: item.description,
						url: item.html_url,
						img: ''
					}
				})
				this.getImages()
			})
		},
		getImages(){
			this.jobs.map(item => {
				if (item.title == 'aulas-vue') {
					getFileInRepository(item.title, 'logo.png').then(res => {
							this.setImages(item.title, res.download_url)
					})
				}
			})
		},
		setImages(repos, url){
			const repo = []
			repo.push({name: repos, img: url})
			console.log(repo)
			repo.map((item,i) => {
				console.log(i)
				if (item.name == this.jobs[i].title) {
					this.jobs[i].img = item.img
				}
			})
			console.log(this.jobs)
		}

	}
}

</script>