
export default {
    'LOGIN' (state, payload) {
        state.user = payload.user
        state.token = payload.token
    },
    'LOGOUT' (state) {
        state.user = { name: '', email: '', level: ''}
        state.token = ''
    },
    'SET_TOKEN' (state, token) {
        state.token = token
    }
}