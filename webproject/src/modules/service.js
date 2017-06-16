import Http from './client' 

// components home

const getMainArticle = () => {
	return Http.get('/components/mainarticle').then(res => res.data )
}

const getPortfolio = () => {
	return Http.get('/components/portfolio').then(res => res.data )
}

const getLastArticles = () => {
	return Http.get('/components/lastarticles').then(res => res.data )
}

// users

const addUser = user => {
	return Http.post('/users', user).then(res => res.data)
}

const getUser = id => {
	return Http.get('/users/'+id).then(res => res.data.user)
}

const listUsers = () => {
	return Http.get('/users').then(res => res.data)
}

const removeUser = id => {
	return Http.delete('/users/'+id).then(res => res.data )
}

const editUser = (id, user) => {
	return Http.put('/users/'+id, user).then(res => res.data )	
}

// categories
// implementar rota no backend - link example: https://gist.github.com/JedWatson/8519978
const getAllArticlesByCategory = slug => {
	return Http.get('/categories/'+slug+'/articles').then(res => res.data)
}

const getCategory = slug => {
	return Http.get('/categories/'+slug).then(res => res.data )
}

const addCategory = category => {
	return Http.post('/categories', category).then(res => res.data )
}
const listCategories = () => {
	return Http.get('/categories').then(res => res.data)
}
const removeCategory = slug => {
	return Http.delete('/categories/'+slug).then(res => res.data )
}

const editCategory = slug => {
	return Http.put('/categories/'+slug).then(res => res.data )	
}

// articles

const getArticle = slug => {
	return Http.get('/articles/'+slug).then(res => res.data.article[0] )
}
const addArticle = article => {
	return Http.post('/articles', article).then(res => res.data)
}
const listArticles = () => {
	return Http.get('/articles').then(res => res.data)
}
const removeArticle = slug => {
	return Http.delete('/articles/'+slug).then(res => res.data )
}

const editArticle = slug => {
	return Http.put('/articles/'+slug).then(res => res.data )	
}



export { 
	addUser, 
	getUser, 
	listUsers, 
	removeUser, 
	editUser, 
	getCategory, 
	getAllArticlesByCategory, 
	addCategory, 
	listCategories, 
	removeCategory, 
	editCategory, 
	getArticle, 
	addArticle, 
	listArticles, 
	removeArticle, 
	editArticle,

	getMainArticle,
	getPortfolio,
	getLastArticles
}