'use strict'

import store from '../store'

const needAuth = auth => auth === true

const requireAuth = (to, from, next) => {
	const auth = to.meta.requireAuth
	
	if (!needAuth(auth)) {
		next()
		return
	}

	store.dispatch('checkUserToken')
	.then(() => {
		next()
	})
	.catch(()=>{
		next({ name: 'home' })
	})
}

export default requireAuth