
// Paginas restritas
import Article from '../../components/elements/account/Article.vue'
import Articles from '../../components/elements/account/Articles.vue'
import Category from '../../components/elements/account/Category.vue'
import Categories from '../../components/elements/account/Categories.vue'
import User from '../../components/elements/account/User.vue'
import Users from '../../components/elements/account/Users.vue'

const meta = {
    requireAuth: false
}

export default {
    name: 'dashboard.index',
    path: '/account',
    meta,
    children: [
        {
            name: 'dashboard.articles',
            path: '/articles',
            meta,
            component: Articles
        },
        {
            name: 'dashboard.article.new',
            path: '/article',
            meta,
            component: Article
        },
        {
            name: 'dashboard.categories',
            path: '/categories',
            meta,
            component: Categories
        },
        {
            name: 'dashboard.category.new',
            path: '/category',
            meta,
            component: Category           
        },
        {
            name: 'dashboard.users',
            path: '/users',
            meta,
            component: Users,
        },
        {
            name: 'dashboard.user.new',
            path: '/user',
            meta,
            component: Categories,
        }        
    ]
}