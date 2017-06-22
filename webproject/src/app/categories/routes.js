import Category from '../../components/Category.vue'
import Categories from '../../components/Categories.vue'

const meta = {
    requireAuth: false
}

export default [
    {    name: 'categories.index',
        path: '/caregories',
        meta,
        component: Categories
    },
    {    name: 'category.index',
        path: '/caregory/:slug',
        meta,
        component: Category
    },    
]