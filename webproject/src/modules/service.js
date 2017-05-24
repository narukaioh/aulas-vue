import Http from './client' 

const addUser = user => {
	return Http.post('/users', user).then(res => res.data)
}

const listUsers = () => {
	return Http.get('/users').then(res => res.data)
}

const listCategories = () => {
	return Http.get('/categories').then(res => res.data)
}

const removeUser = id => {
	return Http.delete('/users/'+id).then(res => res.data )
}

export { addUser, listUsers, listCategories, removeUser }