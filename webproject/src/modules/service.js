import Http from './client' 
import axios from 'axios'

const addUser = user => {
	Http.post('/users', user)
	.then(data =>{
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
}

const listUsers = () => {
	var array = []
	Http.get('/users')
	.then(res => {
		array = res.data.users
		console.log(array)
		console.log(res.data.users)
	})
	console.log(array)
	return array
}

export { addUser, listUsers }