import Http from '../github-client'

export const getRepositories = () => {
    return Http.get('users/narukaioh/repos').then( res => res.data )
}