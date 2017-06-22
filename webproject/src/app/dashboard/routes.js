
// Paginas restritas
import Article from '../../components/Teste.vue'
import Articles from '../../components/elements/account/Articles.vue'
import Category from '../../components/elements/account/Category.vue'
import Categories from '../../components/elements/account/Categories.vue'
import User from '../../components/elements/account/User.vue'
import Users from '../../components/elements/account/Users.vue'

const meta = {
    requireAuth: true
}

export default [
    {
        path: '/account',
        meta
    },
    {
        path: '/account/article',
        component: Article,
        meta
    },
    {
        path: '/account/articles',
        component: Articles,
        meta
    },
    {
        path: '/account/category',
        component: Category,
        meta
    },
    {
        path: '/account/categories',
        component: Categories,
        meta
    },
    {
        path: '/account/user',
        component: User,
        meta
    },
    {
        path: '/account/users',
        component: Users,
        meta
    }  
]