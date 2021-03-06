'use strict'

new Vue({
	el: '#events',
	data: {
		event: {
			name: '',
			description: '',
			date: '',
		},
		events: []
	},
	
	ready: function(){
		this.fetchEvents()
	},

	methods: {
		fetchEvents: function(){
			let events = [
				{
					id: 1,
					name: 'Pokemon Little Cup',
					description: 'Campeonato de pokemon little cup',
					date: '2016-06-15'
				},
				{
					id: 2,
					name: 'ComicCon Experience 2017',
					description: 'Evento nerd para quem gosta de comics',
					date: '2017-12-09'
				}
			]

			this.$set('events', events)
		},
		addEvent: function(){
			/*if (this.event.name) {
				this.events.push(this.event)
				this.event = { name: '', description: '', date: '' }
			} */
			this.$http.get('api/events').then( response => {
				console.log(response.body.title);
			});
			/*this.$http.get('api/events').success(function(events) {
				//this.$set('events', events);
				console.log(events)
			}).error(function(error) {
				console.log(error);
			});*/

		},
		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				this.events.splice(index, 1)
			}
		}
	}
})