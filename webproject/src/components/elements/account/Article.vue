<template lang="pug">
div.inner
	top
	h1 Artigo
	p {{ titulo }}
	button(v-on:click="meuMetodo()") Enviar
</template>

<script>

import Header from '../common/Header.vue'
export default {
	data () {
		return {
			titulo: 'Exemplo componente vue'
		}
	},
	methods: {
		meuMetodo () {
			console.log("Meu metodo!")
		}
	},
	components: {
		'top': Header
	}
}
</script>
