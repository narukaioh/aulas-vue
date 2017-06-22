import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from './beforeEach'
import { routes  as app } from '../app'

Vue.use(Router)

const routes = [...app]

const router = new Router({
    routes,
    linkActiveClass: 'active',
    mode: 'history'
})
//    mode: 'history'

router.beforeEach(beforeEach)

export default router