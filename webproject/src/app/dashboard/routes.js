
// Paginas restritas
import aArticle from '../../components/elements/account/Article.vue'
import aArticles from '../../components/elements/account/Articles.vue'
import aCategory from '../../components/elements/account/Category.vue'
import aCategories from '../../components/elements/account/Categories.vue'
import aUser from '../../components/elements/account/User.vue'
import aUsers from '../../components/elements/account/Users.vue'

const meta = {
    requireAuth: false
}

export default [
    {
        path: '/account',
        children: [
            { 
                component: aArticles, 
                path: '/articles' }
        ]
    }
]