import Http from '../client' 

// components home

export const getMainArticle = () => {
	return Http.get('/components/mainarticle').then(res => res.data )
}

export const getPortfolio = () => {
	return Http.get('/components/portfolio').then(res => res.data )
}

export const getLastArticles = () => {
	return Http.get('/components/lastarticles').then(res => res.data )
}

// component login

export const login = user => {
	return Http.post('/account/authenticate', user).then(res => res.data )
}

export const setTokenHeader = token => {
	Http.defaults.headers.common['x-access-token'] = token
}

export const removeTokenHeader = token => {
	Http.defaults.headers.common['x-access-token'] = ''
}

export const loadUserData = user => {
	return Http.get('/users/me').then( res => res.data )
}