<template lang="pug">
nav#menu
	header.major
		h2 Menu
	ul
		li: router-link(to='/') Homepage
		li: router-link(to='/login') Login
		li: router-link(to='/login/users') Users
		li: router-link(to='/login/account') Cadastro
		li
			span.opener Submenu
			ul
				li: a(href='/login/account') Meu cadastro
				li: a(href='#') Lorem Dolor
				li: a(href='#') Lorem Dolor
				li: a(href='#') Lorem Dolor
		li: a(href="#") Homepage
		li: a(href="#") Generic
		li
			span.opener Submenu
			ul
				li: a(href='#') Lorem Dolor
				li: a(href='#') Lorem Dolor
				li: a(href='#') Lorem Dolor
				li: a(href='#') Lorem Dolor
</template>