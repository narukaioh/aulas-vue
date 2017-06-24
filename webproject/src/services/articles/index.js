import Http from '../client'
// articles

export const getArticle = slug => {
	return Http.get('/articles/'+slug).then(res => res.data.article[0] )
}
export const addArticle = article => {
	return Http.post('/articles', article).then(res => res.data)
}
export const listArticles = () => {
	return Http.get('/articles').then(res => res.data)
}
export const removeArticle = slug => {
	return Http.delete('/articles/'+slug).then(res => res.data )
}

export const editArticle = slug => {
	return Http.put('/articles/'+slug).then(res => res.data )	
}
