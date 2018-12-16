import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/views/index/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
      { path: '/', name: 'root', redirect: '/index'},
      { path: '/index', name: 'index', component: Index }
  ]
})
