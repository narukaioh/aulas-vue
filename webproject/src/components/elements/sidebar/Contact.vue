<template lang="pug">
//Contact
section
	header.major
		h2 Contato
	p Para me encontrar fácil!
	ul.contact
		li.fa-envelope-o: a(href="#") {{ info.email }}
		li.fa-phone {{ info.phone }}
		li.fa-home {{ info.address }}
			br 
			| {{ info.city }} - {{ info.state }}, CEP {{ info.zipcode }}
</template>

<script>
	
export default {
	data () {
		return {
			info: {
				email: 'jucienyds@gmail.com',
				phone: '(51) 9 9247.2228',
				address: 'R. Flores da Cunha, 781',
				city: 'São Leopoldo',
				state: 'RS',
				zipcode: '93.010-160'
			}
		}
	}
}

</script>