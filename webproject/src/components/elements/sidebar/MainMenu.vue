<template lang="pug">
nav#menu
	header.major
		h2 Menu
	ul
		li: router-link(to='/') Homepage
		li: router-link(to='/login') Login
		li: router-link(to='/register') Cadastre-se
		li: router-link(to='/articles') Artigos
		li: router-link(to='/article/foo') Artigo
		li: router-link(to='/categories') Categorias
		li: router-link(to='/category/foo') Categoria
		li
			span.opener Opções restritas por login
			ul
				li: router-link(to='/account/users') Usuários
				li: router-link(to='/account/user/foo') Meu cadastro
				li: router-link(to='/account/articles') Artigos
				li: router-link(to='/account/article/foo') Artigo
				li: router-link(to='/account/categories') Categorias
				li: router-link(to='/account/category/foo') Categoria

</template>