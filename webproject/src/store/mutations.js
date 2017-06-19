
export default {
    'LOGIN' (state, payload) {
        state.user = payload.user
        state.token = payload.token
    }
}