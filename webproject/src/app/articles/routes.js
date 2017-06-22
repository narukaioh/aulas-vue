
import Article from '../../components/Article.vue'
import Articles from '../../components/Articles.vue'

const meta = {
    requireAuth: false
}

export default [
    {    name: 'articles.index',
        path: '/articles',
        component: Articles,
        meta,
    },
    {
        name: 'article',
        path: '/article',
        component: Articles,
        meta,
        children: [
            {
                name: 'article.index',
                path: ':slug',
                component: Article,
                meta
            }            
        ]
    }
]