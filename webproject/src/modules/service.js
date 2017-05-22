import Http from './client' 
import axios from 'axios'

export const create = user => {
	Http.post('/users', user)
	.then(data =>{
		console.log(data)
	})
	.catch(err => {
		console.log(err)
	})
}

export default create;