'use strict'

import store from '../store'

const needAuth = auth => auth === true

const requireAuth = (to, from, next) => {
	const auth = to.meta.requireAuth
	// Verifica se é uma rota que necessita de autenticacao
	if (!needAuth(auth)) {
		next()
		return
	}
	// caso a rota necessite de autenticacao, verificar o token do usuario
	store.dispatch('checkUserToken')
	.then(() => {
		next()
	})
	.catch(()=>{
		next({ name: 'home' })
	})
}

export default requireAuth