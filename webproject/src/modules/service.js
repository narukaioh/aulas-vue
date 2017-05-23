import Http from './client' 

const addUser = user => {
	Http.post('/users', user)
	.then(data =>{
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
}

const listUsers = obj => {
	Http.get('/users')
	.then(res => {
		//res.data.users.forEach( (item, index) => obj.push(item) )
		//Vue.set(ref, name, res.data.users)
		obj.$set('users', res.data.users)
	})
}

export { addUser, listUsers }