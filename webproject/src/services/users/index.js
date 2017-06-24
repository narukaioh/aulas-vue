import Http from '../client'
// users

export const addUser = user => {
	return Http.post('/users', user).then(res => res.data)
}

export const getUser = id => {
	return Http.get('/users/'+id).then(res => res.data.user)
}

export const listUsers = () => {
	return Http.get('/users').then(res => res.data)
}

export const removeUser = id => {
	return Http.delete('/users/'+id).then(res => res.data )
}

export const editUser = (id, user) => {
	return Http.put('/users/'+id, user).then(res => res.data )	
}