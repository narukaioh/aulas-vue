'use strict'

import Http from '../github-client'

export const getRepositories = () => {
    return Http.get('users/narukaioh/repos').then( res => res.data )
}

export const getFileInRepository = (repo, dir) => {
    return Http.get(`repos/narukaioh/${repo}/contents/${dir}`).then( res => res.data )
}