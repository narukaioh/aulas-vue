import Http from '../client'
// categories
// implementar rota no backend - link example: https://gist.github.com/JedWatson/8519978
export const getAllArticlesByCategory = slug => {
	return Http.get('/categories/'+slug+'/articles').then(res => res.data)
}

export const getCategory = slug => {
	return Http.get('/categories/'+slug).then(res => res.data )
}

export const addCategory = category => {
	return Http.post('/categories', category).then(res => res.data )
}
export const listCategories = () => {
	return Http.get('/categories').then(res => res.data)
}
export const removeCategory = slug => {
	return Http.delete('/categories/'+slug).then(res => res.data )
}

export const editCategory = slug => {
	return Http.put('/categories/'+slug).then(res => res.data )	
}