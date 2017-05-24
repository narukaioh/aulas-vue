import Http from './client' 

// users

const addUser = user => {
	return Http.post('/users', user).then(res => res.data)
}

const listUsers = () => {
	return Http.get('/users').then(res => res.data)
}

const removeUser = id => {
	return Http.delete('/users/'+id).then(res => res.data )
}

const editUser = id => {
	return Http.put('/users/'+id).then(res => res.data )	
}

// categories
const addCategory = category => {
	return Http.post('/categories', category).then(res => res.data)
}
const listCategories = () => {
	return Http.get('/categories').then(res => res.data)
}
const removeCategory = id => {
	return Http.delete('/categories/'+id).then(res => res.data )
}

const editCategory = id => {
	return Http.put('/categories/'+id).then(res => res.data )	
}

// articles
const addArticle = article => {
	return Http.post('/articles', article).then(res => res.data)
}
const listArticles = () => {
	return Http.get('/articles').then(res => res.data)
}
const removeArticle = id => {
	return Http.delete('/articles/'+id).then(res => res.data )
}

const editArticle = id => {
	return Http.put('/articles/'+id).then(res => res.data )	
}

export { addUser, listUsers, removeUser, editUser, addCategory, listCategories, removeCategory, editCategory, addArticle, listArticles, removeArticle, editArticle }