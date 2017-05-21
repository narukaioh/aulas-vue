<template lang="pug">
nav#menu
	header.major
		h2 Menu
	ul
		li: router-link(to='/') Homepage
		li: router-link(to='/login') Login
		li: router-link(to='/login/account') Cadastre-se
		li
			span.opener Submenu
			ul
				li: router-link(to='/users') Usuários
				li: router-link(to='/user/foo') Meu cadastro
				li: router-link(to='/articles') Artigos
				li: router-link(to='/article/foo') Artigo
				li: router-link(to='/categories') Categorias
				li: router-link(to='/category/foo') Categoria

</template>