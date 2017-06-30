'use strict'

require('froala-editor/js/froala_editor.pkgd.min')

import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'
import router from './router'
import App from './App.vue'
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueRouter)
Vue.use(VueFroala)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
