import { setTokenHeader } from '../modules/service'

export default {
    'LOGIN' (state, payload) {
        state.user = payload.user
        state.token = payload.token
        setTokenHeader(payload.token)
    }
}