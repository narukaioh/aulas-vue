import Login from '../../components/Login.vue'
import Home from '../../components/Home.vue'
import Register from '../../components/Register.vue'
import Password from '../../components/elements/login/ForgotPassword.vue'

const meta = {
    requireAuth: false
}

export default [
    {    name: 'home',
        path: '/',
        meta,
        component: Home
    },
    {    name: 'login',
        path: '/login',
        meta,
        component: Login,
        children: [
            {    name: 'password',
                path: '/password',
                meta,
                component: Password
            }
        ]        
    },
    {    name: 'register',
        path: '/register',
        meta,
        component: Register
    }
]