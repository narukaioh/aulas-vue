<template lang="pug">
nav#menu
	header.major
		h2 Menu
	ul
		li: router-link(to='/') Homepage
		li: router-link(to='/login') Login
		li: router-link(to='/register') Cadastre-se
		li: router-link(to='/article/foo') Ver artigo
		li: router-link(to='/category/foo') Ver categoria
		li: router-link(to='/articles') Todos os artigos
		li: router-link(to='/categories') Todas as categorias
		li
			span.opener Opções restritas por login
			ul
				li: router-link(to='/account/users') Usuários
				li: router-link(to='/account/user/foo') Meu cadastro
				li: router-link(to='/account/articles') Artigos
				li: router-link(to='/account/article/foo') Artigo
				li: router-link(to='/account/categories') Categorias
				li: router-link(to='/account/category/foo') Categoria

				li: router-link(to='/account/article') Adicionar artigos
				li: router-link(to='/account/user') Adicionar usuário
				li: router-link(to='/account/category') Adicionar categoria

</template>