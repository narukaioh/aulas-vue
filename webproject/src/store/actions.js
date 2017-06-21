import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = ({commit}, payload) => {
    const token = (isEmpty(payload) ? null : payload.token || payload )
    commit('SET_TOKEN', token)
    return Promise.resolve(token)
}

export const checkUserToken = ({ dispatch, state }) => {
    //Verifica se o token não está vazio
    if (!isEmpty(state.token)) {
        return Promise.resolve(state.token)
    }

    /* Caso o token não exista
     recuperar ele do localstorage
    recuperar tambem o usuario e validação do token */

    return localforage.getItem('APP_USER_TOKEN')
        .then(token => {
            if (isEmpty(token)) {
                return Promise.reject('NO_TOKEN')    
            }
            return dispatch('setToken', token)
        })
        .then(() => dispatch('loadUser'))
}