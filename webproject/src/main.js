'use strict'

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './router'
import App from './App.vue'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
