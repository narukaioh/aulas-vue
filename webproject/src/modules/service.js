import axios from 'axios'

const service = () => {
	const service = (url, method, data, callback) => {
		axios({
			method: method,
			data: data,
			url: url,
			responseType: 'json'
		})
		.then(callback)
	}
} 

export const funfa = () => { console.log("funfa sim!") }

export const addUser = data => {
		console.log("uhum!")
		funfa()
		service('/api/users','post', data, res => {
			console.log("foi enviado com sucesso!")
		})
}

